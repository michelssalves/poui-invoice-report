import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  PoAccordionModule,
  PoButtonModule,
  PoChartOptions,
  PoChartSerie,
  PoDialogService,
  PoDividerModule,
  PoFieldModule,
  PoInfoModule,
  PoLoadingModule,
  PoModalComponent,
  PoModalModule,
  PoModule,
  PoNotificationService,
  PoSelectOption,
  PoTableColumn,
  PoTableComponent,
  PoTableModule,
  PoToolbarModule
} from '@po-ui/ng-components';
import { ProAppConfigService, ProThreadInfoService } from '@totvs/protheus-lib-core';
import * as XLSX from 'xlsx'; // Importa a biblioteca xlsx
import { RelatorioRecapService } from './relatorio-rcap.component.service';

@Component({
  selector: 'app-relatorio-rcap',
  templateUrl: './relatorio-rcap.component.html',
  styleUrl: './relatorio-rcap.component.css',
  imports: [
    CommonModule,
    PoTableModule,
    PoInfoModule,
    PoDividerModule,
    PoButtonModule,
    PoModalModule,
    PoLoadingModule,
    PoFieldModule,
    FormsModule,
    PoToolbarModule,
    PoModule, PoAccordionModule
  ],
  providers: [RelatorioRecapService, PoDialogService],
  standalone: true
})
export class RelatorioRcapComponent implements AfterViewInit, OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable!: PoTableComponent;
  @ViewChild('form') form!: NgForm;

  constructor(
    private http: HttpClient,
    private sampleAirfare: RelatorioRecapService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService,
    private proAppConfigService: ProAppConfigService,
    private proThreadInfoService: ProThreadInfoService,

  ) { }

  readonly API_URL = 'http://vhwin1065:9023/rest/protheus/v1/poui';

  columns!: Array<PoTableColumn>;
  columnsDefault!: Array<PoTableColumn>;
  items!: Array<any>;
  paginaAtual = 1;
  totalLiquido = 0;
  totalBruto = 0;
  totalImpostos = 0;
  moreregistros = 0;
  loading = false;
  totalRegistros = 0;
  totalPaginas = 0;
  tipo: string = '1'
  workflow: string = '2'
  liquidado: string = '3'
  imprimir: string = 'N'
  notaFiscal: string = ''
  fornecedor: string = ''
  path: string = 'C:\\temp';
  private pendingFilter = false;
  startDate: Date = new Date(new Date().setDate(new Date().getDate() - 1));
  endDate: Date = new Date(new Date().setDate(new Date().getDate() - 1));
  folderGerada: string = '';


  pizzaItens: Array<PoChartSerie> = []
  colunaItens: Array<PoChartSerie> = []
  tipoCol = 'column'; // Tipo de gráfico (coluna)
  tipoPizza = 'line'; // Tipo de gráfico (pizza)
  totalNotas = 0;

  chartOptions: PoChartOptions = {
    legend: true,
  };

  tipoOptions: PoSelectOption[] = [
    { label: 'Pedido', value: '1' },
    { label: 'Contrato', value: '2' },
    { label: 'Ambos', value: '3' }

  ];

  workflowOptions: PoSelectOption[] = [
    { label: 'Pedido', value: '1' },
    { label: 'Nota Fiscal', value: '2' },
    { label: 'Ambos', value: '3' }

  ];

  liquidadoOptions: PoSelectOption[] = [
    { label: 'Sim', value: '1' },
    { label: 'Não', value: '2' },
    { label: 'Ambos', value: '3' }

  ];

  imprimirOptions: PoSelectOption[] = [
    { label: 'Sim', value: 'S' },
    { label: 'Não', value: 'N' }
  ];

  ngOnInit(): void {

    this.columns = this.sampleAirfare.getColumns();
    this.carregarDados();

  }

  ngAfterViewInit(): void {
    this.columnsDefault = this.sampleAirfare.getColumns();
  }

  onChangeTipo(value: any): void {
    this.tipo = value
  }

  onChangeWorkflow(value: any): void {
    this.workflow = value
  }

  onChangeLiquidado(value: any): void {
    this.liquidado = value
  }

  onChangeImprimir(value: any): void {
    this.imprimir = value
  }

  onChangeFornecedor(value: any): void {
    this.fornecedor = value
  }
  onChangeNotaFiscal(value: any): void {
    this.notaFiscal = value
  }

  onChangeStarDate(value: any): void {
    if (typeof value === 'string' && value.includes('-')) {
      const [year, month, day] = value.split('-').map(Number)
      this.startDate = new Date(year, month - 1, day)
      this.endDate = new Date(year, month - 1, day)
    } else if (typeof value === 'string' && value.includes('/')) {
      const [day, month, year] = value.split('/').map(Number)
      this.startDate = new Date(year, month - 1, day)
      this.endDate = new Date(year, month - 1, day)
    } else {
      this.startDate = new Date(value)
      this.endDate = new Date(value)
    }
  }

  onChangeEndDate(value: any): void {
    if (typeof value === 'string' && value.includes('-')) {
      const [year, month, day] = value.split('-').map(Number);
      this.endDate = new Date(year, month - 1, day);
    } else if (typeof value === 'string' && value.includes('/')) {
      const [day, month, year] = value.split('/').map(Number);
      this.endDate = new Date(year, month - 1, day);
    } else {
      this.endDate = new Date(value);
    }
  }

  getHeader(): HttpHeaders {

    return new HttpHeaders({
      'Authorization': 'Basic ' + btoa('admin:tcp_tcp'),
      'Content-Type': 'application/json',
      'tenantid': '02,01',
      'x-erp-module': 'EST'
    });

  }

  filtrar(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.loading = true;

    const body = {
      dataInicial: this.ToAAAMMDD(this.startDate),
      dataFinal: this.ToAAAMMDD(this.endDate),
      tipo: this.tipo,
      workflow: this.workflow,
      liquidado: this.liquidado,
      notaFiscal: this.notaFiscal,
      fornecedor: this.fornecedor,
      print: this.imprimir,
      path: this.path
    };

    this.http.post<any>(
      `${this.API_URL}/listar-relatorio-rcap`,
      body,
      { headers: this.getHeader() }
    ).subscribe({
      next: (response) => {

        this.items = response?.dados ?? [];

        const totalPedido = this.items.filter(i => i.contrato.trim() === '').length;
        const totalContrato = this.items.filter(i => i.contrato.trim() !== '').length;

        const mapaUsuarios: Record<string, number> = {};

        this.items.forEach(i => {
          const usuario = i.codUsr;
          if (!usuario) return;

          mapaUsuarios[usuario] = (mapaUsuarios[usuario] ?? 0) + 1;
        });

        this.colunaItens = Object.keys(mapaUsuarios).map(usuario => ({
          label: usuario,
          data: [mapaUsuarios[usuario]]
        }));

        this.pizzaItens = [
          { label: 'Pedido', data: totalPedido, color: 'po-color-08' },
          { label: 'Contrato', data: totalContrato, color: 'po-color-07' },
        ];

        this.totalNotas = this.items.length;
        const round2 = (value: number) => Math.round(value * 100) / 100;

        this.totalLiquido = round2(
          this.items.reduce((sum, item) => sum + (item.liquido || 0), 0)
        );

        this.totalBruto = round2(
          this.items.reduce((sum, item) => sum + (item.bruto || 0), 0)
        );

        this.totalImpostos = round2(
          this.items.reduce(
            (sum, item) =>
              sum +
              (item.inss || 0) +
              (item.pis || 0) +
              (item.cofins || 0) +
              (item.csll || 0),
            0
          )
        );

        // 2️⃣ Se imprimir = 'S', baixa o ZIP
        if (this.imprimir === 'S') {
          const fileName = this.normalizarNomeArquivo(response?.zipName);
          const downloadUrl = this.montarUrlDownload(response);

          if (!downloadUrl) {
            this.poNotification.warning('Não foi possível montar a URL do ZIP.');
          } else {
            this.baixarArquivoPorUrl(downloadUrl, fileName);
          }
        }

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  ToAAAMMDD(date: string | Date): string {
    const realDate = typeof date === 'string' ? new Date(date) : date;
    if (!(realDate instanceof Date) || isNaN(realDate.getTime())) {
      console.warn('Data inválida recebida:', date);
      return '';
    }

    const y = realDate.getFullYear();
    const m = String(realDate.getMonth() + 1).padStart(2, '0');
    const d = String(realDate.getDate()).padStart(2, '0');

    return `${y}${m}${d}`;
  }

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.items); // Converte os dados para a planilha
    const wb: XLSX.WorkBook = XLSX.utils.book_new(); // Cria um novo arquivo Excel
    XLSX.utils.book_append_sheet(wb, ws, 'Erros'); // Adiciona a planilha com o nome "Erros"

    const now = new Date();
    const stamp = now.toLocaleString('pt-BR').replace(/[/: ]/g, '_');
    const name = `RecapImpostos_${stamp}.xls`;
    XLSX.writeFile(wb, name);
  }

  private normalizarNomeArquivo(nome?: string): string {
    return (nome || 'Papeletas.zip').trim();
  }

  private montarUrlDownload(resp: any): string | null {
    const folder = resp?.folder;
    const fileName = this.normalizarNomeArquivo(resp?.zipName);

    if (!folder || !fileName) {
      return null;
    }

    return `${this.API_URL}/listar-relatorio-rcap/${encodeURIComponent(folder)}/${encodeURIComponent(fileName)}`;
  }

  private baixarArquivoPorUrl(url: string, fileName: string): void {
    this.http.get(url, {
      headers: this.getHeader(),
      responseType: 'blob'
    }).subscribe({
      next: (blob) => {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(objectUrl);
      },
      error: (err) => {
        console.error('Erro ao baixar ZIP:', err);
      }
    });
  }

}
