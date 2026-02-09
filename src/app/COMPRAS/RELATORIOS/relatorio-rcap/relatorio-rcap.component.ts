import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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
    PoModule,
    PoAccordionModule
  ],
  providers: [RelatorioRecapService, PoDialogService],
  standalone: true
})
export class RelatorioRcapComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable!: PoTableComponent;
  @ViewChild('form') form!: NgForm;

  constructor(
    private http: HttpClient,
    private sampleAirfare: RelatorioRecapService,
    private poNotification: PoNotificationService
  ) { }

  readonly API_URL = 'http://vhwin1065:9023/rest/protheus/v1/poui';

  columns!: Array<PoTableColumn>;
  items: Array<any> = [];
  itemsAll: Array<any> = [];
  page = 1;
  pageSize = 50;
  total = 0;
  loading = false;

  totalLiquido = 0;
  totalBruto = 0;
  totalImpostos = 0;
  totalNotas = 0;
  totalHorasSLA = 0;
  mediaHorasSLA = 0;
  mediaDiasSLA = 0;
  slaHoras = 48;
  totalDentroSLA = 0;
  percentDentroSLA = 0;

  empresa: string = '02';
  filial: string = '01';
  tipo: string = '3';
  papeleta: string = '2';
  liquidado: string = '3';
  imprimir: string = 'N';
  notaFiscal: string = '';
  fornecedor: string = '';
  path: string = 'C:\\temp';

  startDate: Date = new Date(new Date().setDate(new Date().getDate() - 1));
  endDate: Date = new Date(new Date().setDate(new Date().getDate() - 1));

  pizzaItens: Array<PoChartSerie> = [];
  colunaItens: Array<PoChartSerie> = [];
  categoriasUsuarios: string[] = [];

  filialOptions: PoSelectOption[] = [];

  private endDateAlteradaManual = false;

  private feriadosCache = new Map<number, Set<string>>();

  chartOptions: PoChartOptions = {
    tooltip: true,
    legend: true,
    axis: {
      labels: false
    } as any,
    dataLabel: {
      enabled: true,
      format: '{label}: {value}'
    }
  };

  empresaOptions: PoSelectOption[] = [
    { label: 'TCP', value: '02' },
    { label: 'TCP LOG SA', value: '03' },
    { label: 'TCP PARTICIP SA', value: '04' }
  ];

  private filiaisPorEmpresa: Record<string, PoSelectOption[]> = {
    '02': [{ label: 'TCP TERMINAL', value: '01' }],
    '03': [
      { label: 'TCP LOG SA', value: '01' },
      { label: 'TCP LOG - ORTIGUEIRA', value: '04' }
    ],
    '04': [{ label: 'TCP PARTICIP SA', value: '01' }]
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
    this.atualizarFiliaisPorEmpresa(this.empresa);
    this.columns = this.sampleAirfare.getColumns();
    this.carregarDados();
  }

  onChangeTipo(v: any) { this.tipo = v; }
  onChangePapeleta(v: any) { this.papeleta = v; }
  onChangeEmpresa(value: any): void {
    this.empresa = value;
    this.atualizarFiliaisPorEmpresa(this.empresa);
  }
  onChangeFilial(value: any): void {
    this.filial = value;
  }
  onChangeLiquidado(v: any) { this.liquidado = v; }
  onChangeImprimir(v: any) { this.imprimir = v; }
  onChangeFornecedor(v: any) { this.fornecedor = v; }
  onChangeNotaFiscal(v: any) { this.notaFiscal = v; }

  onStartChanged(value: any): void {
    const date = this.toDateSafe(value);
    this.startDate = date;

    if (!this.endDateAlteradaManual) {
      this.endDate = date;
    }
  }

  onEndChanged(value: any): void {
    this.endDate = this.toDateSafe(value);
    this.endDateAlteradaManual = true;
  }

  private toDateSafe(value: any): Date {
    if (value instanceof Date) return value;

    if (typeof value === 'string') {
      if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
        const [y, m, d] = value.slice(0, 10).split('-').map(Number);
        return new Date(y, m - 1, d);
      }
      if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
        const [d, m, y] = value.split('/').map(Number);
        return new Date(y, m - 1, d);
      }
    }

    const dt = new Date(value);
    return isNaN(dt.getTime()) ? new Date() : dt;
  }

  private parseDate(data: string): Date {
    if (!data) return new Date(NaN);

    if (/^\d{4}\/\d{2}\/\d{2}$/.test(data)) {
      const [y, m, d] = data.split('/').map(Number);
      return new Date(y, m - 1, d);
    }

    // YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}/.test(data)) {
      const [y, m, d] = data.slice(0, 10).split('-').map(Number);
      return new Date(y, m - 1, d);
    }

    // dd/mm/yyyy
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(data)) {
      const [d, m, y] = data.split('/').map(Number);
      return new Date(y, m - 1, d);
    }

    return new Date(data);
  }

  getHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: 'Basic ' + btoa('admin:tcp_tcp'),
      'Content-Type': 'application/json',
      tenantid: `${this.empresa},${this.filial}`,
      'x-erp-module': 'COM'
    });
  }

  filtrar(): void {
    this.carregarDados();
  }

  updatePageItems(): void {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.items = this.itemsAll.slice(start, end);
  }

  nextPage(): void {
    if (this.page * this.pageSize >= this.total) return;
    this.page++;
    this.updatePageItems();
  }

  prevPage(): void {
    if (this.page <= 1) return;
    this.page--;
    this.updatePageItems();
  }

  setPageSize(size: number): void {
    this.pageSize = size;
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

    this.http.post<any>(
      `${this.API_URL}/listar-relatorio-rcap`,
      body,
      { headers: this.getHeader() }
    ).subscribe({
      next: async (response) => {

        this.itemsAll = response?.dados ?? [];

        if (!this.itemsAll.length) {
          this.total = 0;
          this.page = 1;
          this.items = [];
          this.zerarTotais();
          this.loading = false;
          return;
        }

        try {
          await this.garantirFeriados(
            this.itemsAll
              .flatMap(i => [
                Number(i?.Dt3Way?.slice(0, 4)),
                Number(i?.digitacao?.slice(0, 4))
              ])
              .filter(a => !!a && !isNaN(a))
          );

          // calcula horas SLA para TODOS (itemsAll) - 1 loop só
          for (let i = 0; i < this.itemsAll.length; i++) {
            const item = this.itemsAll[i];
            const horas = this.calcularHorasUteisFast(item.Dt3Way, item.digitacao);

            item.horasSLA = horas;
            item.dentroSLA = horas <= this.slaHoras;
            item.slaStatus = item.dentroSLA ? 'Dentro' : 'Fora';

            if (i % 500 === 0) await new Promise(r => setTimeout(r, 0));
          }
          // totalNotas precisa ser do ALL
          this.totalNotas = this.itemsAll.length;

          // SLA (48h) — <= inclui 48 dentro
          this.totalDentroSLA = this.itemsAll.filter(i => !!i.dentroSLA).length;

          this.percentDentroSLA = this.totalNotas
            ? Math.round((this.totalDentroSLA / this.totalNotas) * 10000) / 100
            : 0;

          // totals / medias também no ALL
          this.totalHorasSLA = this.itemsAll.reduce((sum, item) => sum + (item.horasSLA || 0), 0);
          this.mediaHorasSLA = this.totalNotas ? Math.round(this.totalHorasSLA / this.totalNotas) : 0;
          this.mediaDiasSLA = this.totalNotas
            ? Math.round((this.totalHorasSLA / 24 / this.totalNotas) * 100) / 100
            : 0;

          // pedido/contrato no ALL
          const totalPedido = this.itemsAll.filter(i => !i.contrato || i.contrato.trim() === '').length;
          const totalContrato = this.itemsAll.filter(i => i.contrato && i.contrato.trim() !== '').length;

          // mapa usuarios no ALL
          const mapaUsuarios: Record<string, number> = {};
          for (const i of this.itemsAll) {
            const usuario = i.codUsr;
            if (!usuario) continue;
            mapaUsuarios[usuario] = (mapaUsuarios[usuario] ?? 0) + 1;
          }

          const usuarios = Object.keys(mapaUsuarios);
          this.categoriasUsuarios = usuarios;

          this.colunaItens = [{
            label: 'Notas',
            data: usuarios.map(u => Number(mapaUsuarios[u]) || 0)
          }];

          if (usuarios.length > 30) this.setChartDataLabelEnabled(false);
          else this.setChartDataLabelEnabled(true);

          this.pizzaItens = [
            { label: 'Pedido', data: totalPedido, color: 'po-color-08' },
            { label: 'Contrato', data: totalContrato, color: 'po-color-07' }
          ];

          const round2 = (v: number) => Math.round(v * 100) / 100;
          this.totalLiquido = round2(this.itemsAll.reduce((sum, item) => sum + (item.liquido || 0), 0));
          this.totalBruto = round2(this.itemsAll.reduce((sum, item) => sum + (item.bruto || 0), 0));
          this.totalImpostos = round2(this.itemsAll.reduce((sum, item) =>
            sum +
            (item.inss || 0) +
            (item.pis || 0) +
            (item.cofins || 0) +
            (item.csll || 0) +
            (item.ipi || 0), 0)
          );

          // só depois atualiza a página (pega do ALL)
          this.total = this.itemsAll.length;
          this.page = 1;
          this.updatePageItems();

          // download ZIP se imprimir
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
        } catch (e) {
          console.error('Erro no processamento', e);
          this.loading = false;
        }
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  private atualizarFiliaisPorEmpresa(empresa: string): void {
    this.filialOptions = this.filiaisPorEmpresa[empresa] ?? [];

    // Se a filial atual não existe nessa empresa, seta a primeira disponível
    const existe = this.filialOptions.some(f => String(f.value) === String(this.filial));
    if (!existe) {
      this.filial = this.filialOptions[0]?.value as string ?? '';
    }
  }

  private setChartDataLabelEnabled(enabled: boolean): void {
    const opt: any = this.chartOptions ?? {};
    const dl: any = opt['dataLabel'] ?? {};

    this.chartOptions = {
      ...opt,
      ['dataLabel']: { ...dl, enabled }
    } as any;
  }

  private zerarTotais(): void {
    this.totalLiquido = 0;
    this.totalBruto = 0;
    this.totalImpostos = 0;
    this.totalNotas = 0;
    this.totalHorasSLA = 0;
    this.mediaHorasSLA = 0;
    this.mediaDiasSLA = 0;
    this.pizzaItens = [];
    this.colunaItens = [];
    this.categoriasUsuarios = [];
  }

  ToAAAMMDD(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) return '';
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}${m}${d}`;
  }

  // -------------------- SLA FAST (sem loop por dia) --------------------
  private async garantirFeriados(anos: number[]): Promise<void> {
    const unicos = Array.from(new Set(anos.filter(a => a && !isNaN(a))));
    await Promise.all(unicos.map(ano => this.carregarFeriadosAno(ano)));
  }

  private carregarFeriadosAno(ano: number): Promise<void> {
    if (this.feriadosCache.has(ano)) return Promise.resolve();

    return new Promise<void>((resolve) => {
      this.http.get<Array<{ date: string }>>(
        `https://brasilapi.com.br/api/feriados/v1/${ano}`
      ).subscribe({
        next: (feriados) => {
          this.feriadosCache.set(ano, new Set((feriados ?? []).map(f => f.date))); // yyyy-mm-dd
          resolve();
        },
        error: () => {
          this.feriadosCache.set(ano, new Set());
          resolve();
        }
      });
    });
  }

  private diasUteisBaseSemFeriado(inicio: Date, fim: Date): number {
    const start = new Date(inicio.getFullYear(), inicio.getMonth(), inicio.getDate());
    const end = new Date(fim.getFullYear(), fim.getMonth(), fim.getDate());
    const msDay = 86400000;

    const totalDias = Math.floor((end.getTime() - start.getTime()) / msDay) + 1;
    const fullWeeks = Math.floor(totalDias / 7);

    let diasUteis = totalDias - fullWeeks * 2;

    const rest = totalDias % 7;
    const startDay = start.getDay();
    for (let i = 0; i < rest; i++) {
      const dow = (startDay + i) % 7;
      if (dow === 0 || dow === 6) diasUteis--;
    }
    return diasUteis;
  }

  private contarFeriadosUteisNoIntervalo(inicio: Date, fim: Date): number {
    let count = 0;
    const y1 = inicio.getFullYear();
    const y2 = fim.getFullYear();

    const start = new Date(inicio.getFullYear(), inicio.getMonth(), inicio.getDate());
    const end = new Date(fim.getFullYear(), fim.getMonth(), fim.getDate());

    for (let y = y1; y <= y2; y++) {
      const set = this.feriadosCache.get(y);
      if (!set) continue;

      for (const iso of set) {
        const d = new Date(iso + 'T00:00:00'); // iso = yyyy-mm-dd
        if (d < start || d > end) continue;
        const dow = d.getDay();
        if (dow !== 0 && dow !== 6) count++;
      }
    }

    return count;
  }

  private calcularHorasUteisFast(dataInicio?: string, dataFim?: string): number {
    if (!dataInicio || !dataFim) return 0;

    const inicio = this.parseDateSafe(dataInicio);
    const fim = this.parseDateSafe(dataFim);

    if (!inicio || !fim || inicio > fim) return 0;

    const diasUteisBase = this.diasUteisBaseSemFeriado(inicio, fim);
    const feriadosUteis = this.contarFeriadosUteisNoIntervalo(inicio, fim);

    // Calcula horas úteis (24h por dia útil), descontando feriados
    let horas = (diasUteisBase - feriadosUteis) * 24;

    // Ajuste para não contar o primeiro dia inteiro
    horas = Math.max(0, horas - 24);

    // Se não houver horas, retorna 24 (mínimo)
    return horas > 0 ? horas : 24;
  }


  private parseDateSafe(data?: string): Date | null {
    if (!data) return null;

    // yyyy/mm/dd
    if (/^\d{4}\/\d{2}\/\d{2}$/.test(data)) {
      const [y, m, d] = data.split('/').map(Number);
      return new Date(y, m - 1, d);
    }

    // yyyy-mm-dd
    if (/^\d{4}-\d{2}-\d{2}$/.test(data)) {
      const [y, m, d] = data.split('-').map(Number);
      return new Date(y, m - 1, d);
    }

    const dt = new Date(data);
    return isNaN(dt.getTime()) ? null : dt;
  }

  // -------------------- Export Excel (igual ao seu, só ajustei tipos) --------------------
  async exportToExcel(): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Relatório RCAP');

    worksheet.columns = [
      { header: 'Item', key: 'item', width: 10 },
      { header: 'Filial', key: 'filial', width: 10 },
      { header: 'Nota', key: 'nota', width: 15 },
      { header: 'Série', key: 'serie', width: 10 },
      { header: 'Fornecedor', key: 'fornecedor', width: 15 },
      { header: 'Loja', key: 'loja', width: 10 },
      { header: 'Razão Social', key: 'razao', width: 60 },
      { header: 'CNPJ', key: 'cnpj', width: 20 },
      { header: 'Natureza', key: 'natureza', width: 15 },
      { header: 'Emissão', key: 'emissao', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Digitação', key: 'digitacao', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Venc Real', key: 'vencimento', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Venc PreNota', key: 'DtPreNota', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
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
      { header: 'Usuário', key: 'user', width: 35 },
      { header: 'Horas SLA', key: 'horasSLA', width: 12 },
      { header: `Dentro SLA (${this.slaHoras}h)`, key: 'slaStatus', width: 16 },
    ];

    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4e73df' } };
    worksheet.getRow(1).alignment = { horizontal: 'center' };

    const rows = this.itemsAll.map(item => ({
      ...item,
      emissao: new Date(item.emissao),
      digitacao: new Date(item.digitacao),
      vencimento: new Date(item.vencimento),
      DtPreNota: new Date(item.DtPreNota),
      Dt3Way: new Date(item.Dt3Way)
    }));

    worksheet.addRows(rows);

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
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    saveAs(new Blob([buffer]), `RecapImpostos_${stamp}.xlsx`);
  }

  pageSizeOptions: PoSelectOption[] = [
    { label: '50', value: 50 },
    { label: '100', value: 100 },
    { label: '200', value: 200 },
    { label: '500', value: 500 },
  ];

  get totalPages(): number {
    return Math.max(1, Math.ceil((this.total || 0) / (this.pageSize || 1)));
  }

  // -------------------- ZIP download helpers (iguais) --------------------
  private normalizarNomeArquivo(nome?: string): string {
    return (nome || 'Papeletas.zip').trim();
  }

  private montarUrlDownload(resp: any): string | null {
    const folder = resp?.folder;
    const fileName = this.normalizarNomeArquivo(resp?.zipName);
    if (!folder || !fileName) return null;

    return `${this.API_URL}/listar-relatorio-rcap/download/${encodeURIComponent(folder)}/${encodeURIComponent(fileName)}`;
  }

  private deletarArquivos(folder: string, fileName: string): void {
    if (!folder || !fileName) return;

    const url = `${this.API_URL}/listar-relatorio-rcap/excluir/${encodeURIComponent(folder)}/${encodeURIComponent(fileName)}`;
    this.http.get(url, { headers: this.getHeader() }).subscribe({
      next: () => this.poNotification.success('Arquivos excluídos com sucesso.'),
      error: (err) => {
        console.error('Erro ao excluir arquivos:', err);
        this.poNotification.error('Falha ao excluir arquivos.');
      }
    });
  }

  private baixarArquivoPorUrl(url: string, fileName: string, folder: string): void {
    this.http.get(url, { headers: this.getHeader(), responseType: 'blob' }).subscribe({
      next: (blob) => {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setTimeout(() => {
          URL.revokeObjectURL(objectUrl);
          this.deletarArquivos(folder, fileName);
        }, 1000);
      },
      error: (err) => console.error('Erro ao baixar ZIP:', err)
    });
  }
}
