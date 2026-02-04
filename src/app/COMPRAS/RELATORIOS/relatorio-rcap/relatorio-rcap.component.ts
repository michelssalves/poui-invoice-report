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
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
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
  tipo: string = '3'
  papeleta: string = '2'
  liquidado: string = '3'
  imprimir: string = 'N'
  notaFiscal: string = ''
  fornecedor: string = ''
  path: string = 'C:\\temp';
  startDate: Date = new Date(new Date().setDate(new Date().getDate() - 1));
  endDate: Date = new Date(new Date().setDate(new Date().getDate() - 1));
  folderGerada: string = '';
  pizzaItens: Array<PoChartSerie> = []
  colunaItens: Array<PoChartSerie> = []
  tipoCol = 'column'; // Tipo de gráfico (coluna)
  tipoPizza = 'line'; // Tipo de gráfico (pizza)
  totalNotas = 0;

  chartOptions: PoChartOptions = {
    tooltip: true,
    legend: true,
  };

  tipoOptions: PoSelectOption[] = [
    { label: 'Pedido', value: '1' },
    { label: 'Contrato', value: '2' },
    { label: 'Ambos', value: '3' }

  ];

  papeletaOptions: PoSelectOption[] = [
    { label: 'Pedido', value: '1' },
    { label: 'Nota Fiscal', value: '2' }

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

  onChangePapeleta(value: any): void {
    this.papeleta = value
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
      'Authorization': 'Basic ' + btoa('admin:123456'),
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
      workflow: this.papeleta,
      liquidado: this.liquidado,
      notaFiscal: this.notaFiscal,
      fornecedor: this.fornecedor,
      print: this.imprimir,
      path: this.path
    };

    this.http.get<any>(
      `assets/dados.json`,
      { params: body }

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
              (item.csll || 0) +
              (item.ipi || 0),
            0
          )
        );

        // 2️⃣ Se imprimir = 'S', baixa o ZIP
        if (this.imprimir === 'S') {
          const fileName = this.normalizarNomeArquivo(response?.zipName);
          const downloadUrl = this.montarUrlDownload(response);
          const folder = response?.folder;

          if (!downloadUrl) {
            this.poNotification.warning('Não foi possível montar a URL do ZIP.');
          } else {
            this.baixarArquivoPorUrl(downloadUrl, fileName, folder);
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

  async exportToExcel(): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Relatório RCAP');

    // Definição das colunas
    worksheet.columns = [
      { header: 'Item', key: 'item', width: 10 },
      { header: 'Filial', key: 'filial', width: 10 },
      { header: 'Nota', key: 'nota', width: 15 },
      { header: 'Série', key: 'serie', width: 10 },
      { header: 'Fornecedor', key: 'fornecedor', width: 15 },
      { header: 'Loja', key: 'loja', width: 10 },
      { header: 'Razão Social', key: 'razao', width: 60 },
      { header: 'CNPJ', key: 'cnpj', width: 20 },
      { header: 'Emissão', key: 'emissao', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Digitação', key: 'digitacao', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Dt PreNota', key: 'DtPreNota', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Dt 3Way', key: 'Dt3Way', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Tipo', key: 'tipo', width: 10 },
      { header: 'Estado', key: 'estado', width: 10 },
      { header: 'Líquido', key: 'liquido', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'Bruto', key: 'bruto', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'INSS', key: 'inss', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'PIS', key: 'pis', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'COFINS', key: 'cofins', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'CSLL', key: 'csll', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'IPI', key: 'ipi', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'Frete', key: 'frete', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'Desconto', key: 'desconto', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'Despesa', key: 'despesa', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'Pedido', key: 'pedido', width: 15 },
      { header: 'R$ Pedido', key: 'TTPedido', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'R$ Saldo', key: 'diferenca', width: 15, style: { numFmt: 'R$ #,##0.00' } },
      { header: 'Usuário', key: 'user', width: 35 }
    ];

    // Cabeçalho estilizado
    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '4e73df' }
    };
    worksheet.getRow(1).alignment = { horizontal: 'center' };

    // Converter datas para objetos Date
    const rows = this.items.map(item => ({
      ...item,
      emissao: new Date(item.emissao),
      digitacao: new Date(item.digitacao),
      vencimento: new Date(item.vencimento),
      DtPreNota: new Date(item.DtPreNota),
      Dt3Way: new Date(item.Dt3Way)
    }));

    worksheet.addRows(rows);

    // 3. Aplicar bordas, alinhamento e cores condicionais 
    worksheet.eachRow((row: ExcelJS.Row, rowNumber: number) => {
      row.eachCell((cell: ExcelJS.Cell) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' }
        };
        if (rowNumber > 1) {
          cell.alignment = { vertical: 'middle', horizontal: 'left' };
        }
      });

    });

    worksheet.views = [{ state: 'frozen', ySplit: 1 }];

    const buffer = await workbook.xlsx.writeBuffer();
    const now = new Date();
    const stamp = now.toISOString().replace(/[:.]/g, '-');
    saveAs(new Blob([buffer]), `RecapImpostos_${stamp}.xlsx`);
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

    return `${this.API_URL}/listar-relatorio-rcap/download/${encodeURIComponent(folder)}/${encodeURIComponent(fileName)}`;
  }

  private deletarArquivos(folder: string, fileName: string): void {
    if (!folder || !fileName) {
      return;
    }

    const url = `${this.API_URL}/listar-relatorio-rcap/excluir/${encodeURIComponent(folder)}/${encodeURIComponent(fileName)}`;

    this.http.get(url, { headers: this.getHeader() }).subscribe({
      next: () => {
        this.poNotification.success('Arquivos excluídos com sucesso.');
      },
      error: (err) => {
        console.error('Erro ao excluir arquivos:', err);
        this.poNotification.error('Falha ao excluir arquivos.');
      }
    });
  }

  private baixarArquivoPorUrl(url: string, fileName: string, folder: string): void {
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

        // ✅ só depois que o navegador disparou o download
        setTimeout(() => {
          URL.revokeObjectURL(objectUrl);
          this.deletarArquivos(folder, fileName);
        }, 1000); // pequeno delay para garantir que o download foi iniciado
      },
      error: (err) => {
        console.error('Erro ao baixar ZIP:', err);
      }
    });
  }


}
