import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  PoAccordionModule,
  PoButtonModule,
  PoChartOptions,
  PoChartSerie,
  PoFieldModule,
  PoLoadingModule,
  PoModule,
  PoNotificationService,
  PoSelectOption,
  PoTableColumn,
  PoTableModule,
  PoToolbarModule
} from '@po-ui/ng-components';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { resolveRuntimeEnvironment } from '../../../../environments/runtime-environment';
import { RelatorioRecapService } from './relatorio-rcap.component.service';

@Component({
  selector: 'app-relatorio-rcap',
  templateUrl: './relatorio-rcap.component.html',
  styleUrl: './relatorio-rcap.component.css',
  imports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoAccordionModule,
    PoButtonModule,
    PoLoadingModule,
    PoFieldModule,
    PoTableModule,
    PoToolbarModule
  ],
  providers: [RelatorioRecapService],
  standalone: true
})
export class RelatorioRcapComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private sampleAirfare: RelatorioRecapService,
    private poNotification: PoNotificationService
  ) { }

  private readonly runtimeEnvironment = resolveRuntimeEnvironment();
  readonly API_URL = this.runtimeEnvironment.apiUrl;

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
  agruparNaturezaTes: string = 'S';
  notaFiscal: string = '';
  fornecedor: string = '';
  path: string = 'C:\\temp';

  startDate: Date = new Date(new Date().setDate(new Date().getDate() - 1));
  endDate: Date = new Date(new Date().setDate(new Date().getDate() - 1));

  pizzaItens: Array<PoChartSerie> = [];
  colunaItens: Array<PoChartSerie> = [];
  categoriasUsuarios: string[] = [];

  filialOptions: PoSelectOption[] = [];
  pageSizeOptions: PoSelectOption[] = [
    { label: '50', value: 50 },
    { label: '100', value: 100 },
    { label: '200', value: 200 },
    { label: '500', value: 500 }
  ];

  private endDateAlteradaManual = false;
  private requestIdAtual = 0;
  private feriadosCache = new Map<number, Set<string>>();
  private feriadosJsonCache: Record<string, Array<{ date: string; name: string; type: string }>> | null = null;

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

  agruparNaturezaTesOptions: PoSelectOption[] = [
    { label: 'Sim', value: 'S' },
    { label: 'Não', value: 'N' }
  ];

  private getTenantHeaders(): HttpHeaders {
    return new HttpHeaders({
      tenantid: `${this.empresa},${this.filial}`
    });
  }

  ngOnInit(): void {
    const queryEnv = typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('env')
      : null;

    console.log('[RCAP] Ambiente em runtime', {
      envQuery: queryEnv || '(padrao do build)',
      apiUrl: this.runtimeEnvironment.apiUrl,
      production: this.runtimeEnvironment.production
    });

    this.atualizarFiliaisPorEmpresa(this.empresa);
    this.columns = this.sampleAirfare.getColumns();
    this.carregarDados();
  }

  onChangeEmpresa(value: any): void {
    this.empresa = value;
    this.atualizarFiliaisPorEmpresa(this.empresa);
  }

  onChangeFilial(value: any): void {
    this.filial = value;
  }

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
    this.pageSize = Number(size) || 50;
    this.page = 1;
    this.updatePageItems();
  }

  private isRequestAtiva(requestId: number): boolean {
    return requestId === this.requestIdAtual;
  }

  private async processarResposta(response: any, requestId: number): Promise<void> {
    if (!this.isRequestAtiva(requestId)) return;

    this.itemsAll = response?.dados ?? [];

    if (!this.itemsAll.length) {
      if (!this.isRequestAtiva(requestId)) return;
      this.total = 0;
      this.page = 1;
      this.items = [];
      this.zerarTotais();
      this.loading = false;
      return;
    }

    try {
      // garante feriados com parse robusto (não depende de slice(0,4))
      const anos = this.itemsAll
        .flatMap(i => {
          const a = this.parseDateOnly(i?.Dt3Way)?.getFullYear();
          const b = this.parseDateOnly(i?.digitacao)?.getFullYear();
          return [a, b];
        })
        .filter((y): y is number => typeof y === 'number' && !isNaN(y));

      await this.garantirFeriados(anos);

      // SLA (Date + Time) com exceção acordada: mesmo dia e sem horas -> 24h
      for (let i = 0; i < this.itemsAll.length; i++) {
        if (!this.isRequestAtiva(requestId)) return;
        const item = this.itemsAll[i];

        const dtFim = this.parseDateOnly(item.digitacao);
        if (!dtFim) {
          item.horasSLA = 0;
          item.dentroSLA = true;
          item.slaStatus = 'Dentro';
          item.horasSLALabel = this.formatHorasSLA(item.horasSLA);
          continue;
        }

        const dtIni = this.isDataNula(item.Dt3Way)
          ? this.parseDateOnly(item.digitacao)
          : this.parseDateOnly(item.Dt3Way);

        if (!dtIni) {
          item.horasSLA = 0;
          item.dentroSLA = true;
          item.slaStatus = 'Dentro';
          item.horasSLALabel = this.formatHorasSLA(item.horasSLA);
          continue;
        }

        const data3WayNula = this.isDataNula(item.Dt3Way);
        const hora3WayNula = this.isHoraNula(item.Hr3Way);
        const horaDigitNula = this.isHoraNula(item.HrDigitacao);

        const hrIniNula = hora3WayNula || data3WayNula;
        const hrFimNula = horaDigitNula;

        let horas = 0;

        // ✅ REGRA HISTÓRICA / DADOS LEGADOS
        // Mesmo dia sem horas em ambos os lados mantém 24h.
        if (hrIniNula && hrFimNula && this.sameDay(dtIni, dtFim)) {
          horas = 24;
        } else {
          // Quando não existir hora no 3Way mas houver Dt3Way, usa início 00:00:00
          // para não colapsar o cálculo em 0h.
          let dataInicio = data3WayNula ? item.digitacao : item.Dt3Way;
          let horaInicio = data3WayNula
            ? (horaDigitNula ? '00:00:00' : item.HrDigitacao)
            : (hora3WayNula ? '00:00:00' : item.Hr3Way);

          // Legado: horas zeradas em dias diferentes -> não conta o dia da aprovação 3Way.
          if (!data3WayNula && hora3WayNula && horaDigitNula && !this.sameDay(dtIni, dtFim)) {
            const proximoDia = new Date(dtIni.getFullYear(), dtIni.getMonth(), dtIni.getDate() + 1);
            dataInicio = this.toISODate(proximoDia);
            horaInicio = '00:00:00';
          }

          const horaFim = horaDigitNula ? '23:59:59' : item.HrDigitacao;

          const ini = this.buildDateTime(dataInicio, horaInicio);
          const fim = this.buildDateTime(item.digitacao, horaFim);

          horas = (ini && fim)
            ? this.calcularHorasUteisDateTime(ini, fim)
            : 24; // fallback defensivo
        }

        item.horasSLA = horas;
        item.horasSLALabel = this.formatHorasSLA(horas);
        item.dentroSLA = horas <= this.slaHoras;
        item.slaStatus = item.dentroSLA ? 'Dentro' : 'Fora';

        if (i % 500 === 0) await new Promise(r => setTimeout(r, 0));
      }

      // Nota pode se repetir por múltiplos pedidos; mantém SLA só na 1a ocorrência.
      const notasComSla = new Set<string>();
      for (const item of this.itemsAll) {
        const chaveNota = this.gerarChaveNota(item);
        if (!chaveNota) continue;

        if (notasComSla.has(chaveNota)) {
          item.horasSLA = 0;
          item.horasSLALabel = this.formatHorasSLA(0);
          item.dentroSLA = true;
          item.slaStatus = '';
          continue;
        }

        notasComSla.add(chaveNota);
      }

      // Métricas de SLA por nota única (não por linha/pedido).
      const metricasSla: Array<any> = [];
      const notasMetricas = new Set<string>();
      for (const item of this.itemsAll) {
        const chaveNota = this.gerarChaveNota(item);
        if (!chaveNota) {
          metricasSla.push(item);
          continue;
        }
        if (notasMetricas.has(chaveNota)) continue;
        notasMetricas.add(chaveNota);
        metricasSla.push(item);
      }

      // totais
      if (!this.isRequestAtiva(requestId)) return;
      this.totalNotas = metricasSla.length;
      this.totalDentroSLA = metricasSla.filter(i => !!i.dentroSLA).length;
      this.percentDentroSLA = this.totalNotas
        ? Math.round((this.totalDentroSLA / this.totalNotas) * 10000) / 100
        : 0;

      this.totalHorasSLA = metricasSla.reduce((sum, item) => sum + (item.horasSLA || 0), 0);
      this.mediaHorasSLA = this.totalNotas ? Math.round(this.totalHorasSLA / this.totalNotas) : 0;
      this.mediaDiasSLA = this.totalNotas
        ? Math.round((this.totalHorasSLA / 24 / this.totalNotas) * 100) / 100
        : 0;

      const totalPedido = this.itemsAll.filter(i => !i.contrato || i.contrato.trim() === '').length;
      const totalContrato = this.itemsAll.filter(i => i.contrato && i.contrato.trim() !== '').length;

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

      this.setChartDataLabelEnabled(usuarios.length <= 30);

      // OBS: se sua versão do PO não suportar "color" em PoChartSerie, remova as propriedades color abaixo.
      this.pizzaItens = [
        { label: 'Pedido', data: totalPedido, color: 'po-color-08' as any },
        { label: 'Contrato', data: totalContrato, color: 'po-color-07' as any }
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

      this.total = this.itemsAll.length;
      this.page = 1;
      this.updatePageItems();

      // download ZIP se imprimir
      if (this.runtimeEnvironment.useMocks) {
        // não baixa arquivo em dev
      } else if (this.imprimir === 'S') {
        const fileName = this.normalizarNomeArquivo(response?.zipName);
        const downloadUrl = this.montarUrlDownload(response);
        const folder = response?.folder;

        if (!downloadUrl) {
          this.poNotification.warning('Não foi possível montar a URL do ZIP.');
        } else {
          this.baixarArquivoPorUrl(downloadUrl, fileName, folder);
        }
      }

      if (!this.isRequestAtiva(requestId)) return;

      this.loading = false;
      this.imprimir = 'N'

    } catch (e) {
      if (!this.isRequestAtiva(requestId)) return;
      console.error('Erro no processamento', e);
      this.loading = false;
      this.imprimir = 'N';
    }
  }
  private getMockResponse(): any {
    const users = [
      { codUsr: 'michel', user: 'Michel Alves' },
      { codUsr: 'ana', user: 'Ana Souza' },
      { codUsr: 'carlos', user: 'Carlos Lima' },
      { codUsr: 'bianca', user: 'Bianca Rocha' },
      { codUsr: 'joao', user: 'João Santos' }
    ];

    const pad = (n: number, size = 6) => String(n).padStart(size, '0');

    // Gera uma data YYYY/MM/DD a partir de um "offset" em dias
    const dateYMD = (base: Date, addDays: number) => {
      const d = new Date(base);
      d.setDate(d.getDate() + addDays);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}/${m}/${day}`;
    };

    // Hora HH:MM:SS
    const timeHMS = (h: number, m: number) =>
      `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:00`;

    const base = new Date(2026, 1, 9); // 09/02/2026 (mês 1 = fevereiro)

    const dados = Array.from({ length: 50 }, (_, idx) => {
      const i = idx + 1;

      const u = users[idx % 5]; // ✅ só 5 users
      const hasContrato = idx % 2 === 0; // ✅ alterna contrato/sem contrato

      // datas
      const emissao = dateYMD(base, -(idx % 10));      // varia últimos 10 dias
      const digitacao = dateYMD(base, 0);              // fixa no dia base (igual seu filtro)
      const vencimento = dateYMD(base, 2 + (idx % 7)); // vence em 2..8 dias
      const dtPreNota = dateYMD(base, 1 + (idx % 4));  // 1..4 dias

      // alguns legados (Dt3Way/Hr3Way zerados) pra testar regra SLA 24h
      const legado = idx % 9 === 0; // a cada 9 registros
      const Dt3Way = legado ? '0000-00-00' : dateYMD(base, -(idx % 3));
      const Hr3Way = legado ? '00:00:00' : timeHMS(9 + (idx % 6), (idx * 7) % 60);

      // hora digitacao sempre presente (mas você pode zerar alguns se quiser)
      const HrDigitacao = timeHMS(10 + (idx % 7), (idx * 11) % 60);

      // valores
      const liquido = Math.round((500 + idx * 37.55) * 100) / 100;
      const bruto = Math.round((liquido * 1.02) * 100) / 100;

      const inss = idx % 5 === 0 ? 0 : Math.round(liquido * 0.01 * 100) / 100;
      const pis = Math.round(liquido * 0.0065 * 100) / 100;
      const cofins = Math.round(liquido * 0.03 * 100) / 100;
      const csll = Math.round(liquido * 0.01 * 100) / 100;

      const ipi = idx % 4 === 0 ? Math.round(liquido * 0.02 * 100) / 100 : 0;
      const frete = idx % 3 === 0 ? Math.round(25.5 * 100) / 100 : 0;
      const desconto = idx % 6 === 0 ? Math.round(10 * 100) / 100 : 0;
      const despesa = idx % 7 === 0 ? Math.round(3.25 * 100) / 100 : 0;

      const TTPedido = Math.round((bruto * (hasContrato ? 1.15 : 1.05)) * 100) / 100;
      const diferenca = Math.round((TTPedido - bruto) * 100) / 100;

      return {
        item: i,
        filial: '01',
        nota: pad(370 + i, 9),       // "000000371" etc
        serie: 'E22',
        fornecedor: pad(4166 + (idx % 20), 6),
        loja: String((idx % 3) + 1).padStart(2, '0'),
        razao: `FORNECEDOR MOCK ${String(idx % 20 + 1).padStart(2, '0')} LTDA`,
        cnpj: '10802919000152',
        emissao,
        digitacao,
        HrDigitacao,
        vencimento,
        natureza: hasContrato ? 'COMP' : 'SERV',
        DtPreNota: dtPreNota,
        Dt3Way,
        Hr3Way,
        tipo: idx % 2 === 0 ? 'NFSE' : 'NFS',
        estado: idx % 2 === 0 ? 'PR' : 'SP',
        inss,
        pis,
        cofins,
        csll,
        ipi,
        frete,
        desconto,
        despesa,
        liquido,
        bruto,
        TTPedido,
        diferenca,
        pedido: String(215200 + i),
        codUsr: u.codUsr,     // ✅ 5 usuários
        user: u.user,
        contrato: hasContrato ? `CTR-${String(100 + (idx % 15))}` : '' // ✅ com e sem
      };
    });

    return {
      ok: true,
      folder: 'RCAP_DEV_000001',
      zipName: 'Papeletas_20260209.zip',
      dados
    };
  }

  async carregarDados(): Promise<void> {
    const requestId = ++this.requestIdAtual;
    this.loading = true;

    if (this.runtimeEnvironment.useMocks) {
      await this.processarResposta(this.getMockResponse(), requestId);
      return;
    }

    const url = `${this.API_URL}/listar-relatorio-rcap`;

    const body = {
      dataInicial: this.ToAAAMMDD(this.startDate),
      dataFinal: this.ToAAAMMDD(this.endDate),
      tipo: this.tipo,
      workflow: this.papeleta,
      liquidado: this.liquidado,
      agruparNaturezaTes: this.agruparNaturezaTes,
      notaFiscal: this.notaFiscal,
      fornecedor: this.fornecedor,
      print: this.imprimir,
      path: this.path
    };

    this.http.post<any>(url, body, { headers: this.getTenantHeaders() }).subscribe({
      next: (response) => void this.processarResposta(response, requestId),
      error: (err) => {
        if (!this.isRequestAtiva(requestId)) return;
        console.error(err);
        this.loading = false;
        this.imprimir = 'N';
      }
    });
  }

  private atualizarFiliaisPorEmpresa(empresa: string): void {
    this.filialOptions = this.filiaisPorEmpresa[empresa] ?? [];
    const existe = this.filialOptions.some(f => String(f.value) === String(this.filial));
    if (!existe) {
      this.filial = (this.filialOptions[0]?.value as string) ?? '';
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

  // -------------------- Feriados --------------------
  private async garantirFeriados(anos: number[]): Promise<void> {
    const unicos = Array.from(new Set(anos.filter(a => a && !isNaN(a))));
    await Promise.all(unicos.map(ano => this.carregarFeriadosAno(ano)));
  }

  private async carregarFeriadosAno(ano: number): Promise<void> {
    if (this.feriadosCache.has(ano)) return;

    // carrega o JSON 1x
    if (!this.feriadosJsonCache) {
      this.feriadosJsonCache = await new Promise((resolve) => {
        this.http.get<Record<string, Array<{ date: string; name: string; type: string }>>>(
          'assets/feriados-br.json'
        ).subscribe({
          next: resolve,
          error: () => resolve({})
        });
      });
    }

    const lista = this.feriadosJsonCache?.[String(ano)] ?? [];

    console.log(`Feriados carregados para ${ano}:`, lista);

    this.feriadosCache.set(ano, new Set(lista.map(f => f.date)));
  }

  // -------------------- SLA (DateTime) --------------------
  private isHoraNula(h?: string): boolean {
    if (!h) return true;
    const v = h.trim();
    return v === '00:00:00' || v === '00:00' || v === '0';
  }

  private sameDay(a: Date, b: Date): boolean {
    return a.getFullYear() === b.getFullYear()
      && a.getMonth() === b.getMonth()
      && a.getDate() === b.getDate();
  }

  private isDataNula(data?: string): boolean {
    if (!data) return true;
    const v = data.trim();
    return v === '00/00/00' || v === '0000/00/00' || v === '0000-00-00';
  }

  private parseDateOnly(data?: string): Date | null {
    if (!data || this.isDataNula(data)) return null;
    const v = data.trim();

    if (/^\d{4}\/\d{2}\/\d{2}$/.test(v)) {
      const [y, m, d] = v.split('/').map(Number);
      return new Date(y, m - 1, d);
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(v)) {
      const [y, m, d] = v.split('-').map(Number);
      return new Date(y, m - 1, d);
    }

    if (/^\d{2}\/\d{2}\/\d{4}$/.test(v)) {
      const [d, m, y] = v.split('/').map(Number);
      return new Date(y, m - 1, d);
    }

    const dt = new Date(v);
    return isNaN(dt.getTime()) ? null : dt;
  }

  private parseTimeToSeconds(hhmmss?: string): number {
    if (!hhmmss) return 0;
    const v = hhmmss.trim();
    if (!/^\d{2}:\d{2}:\d{2}$/.test(v)) return 0;

    const [hh, mm, ss] = v.split(':').map(Number);
    return (hh * 3600) + (mm * 60) + ss;
  }

  private parseExcelTime(hhmmss?: string): number | null {
    if (!hhmmss) return null;
    const v = hhmmss.trim();
    if (!/^\d{2}:\d{2}:\d{2}$/.test(v)) return null;

    const [hh, mm, ss] = v.split(':').map(Number);
    // Hora no Excel como fração do dia (evita distorção de timezone histórico).
    return ((hh * 3600) + (mm * 60) + ss) / 86400;
  }

  private parseExcelDate(dateStr?: string): number | null {
    const d = this.parseDateOnly(dateStr);
    if (!d) return null;

    const y = d.getFullYear();
    const m = d.getMonth();
    const day = d.getDate();

    // Excel (1900 date system) usa 1899-12-30 como base.
    const excelEpochUtc = Date.UTC(1899, 11, 30);
    const valueUtc = Date.UTC(y, m, day);
    return Math.round((valueUtc - excelEpochUtc) / 86400000);
  }

  private buildDateTime(dateStr?: string, timeStr?: string): Date | null {
    const d = this.parseDateOnly(dateStr);
    if (!d) return null;

    const sec = this.parseTimeToSeconds(timeStr);
    const hh = Math.floor(sec / 3600);
    const mm = Math.floor((sec % 3600) / 60);
    const ss = sec % 60;

    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hh, mm, ss, 0);
  }

  private toISODate(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  private isDiaUtil(d: Date): boolean {
    const dow = d.getDay();
    if (dow === 0 || dow === 6) return false;

    const set = this.feriadosCache.get(d.getFullYear());
    if (!set) return true;

    return !set.has(this.toISODate(d));
  }

  private calcularHorasUteisDateTime(inicio: Date, fim: Date): number {
    if (!inicio || !fim || inicio >= fim) return 0;

    const msHour = 3600000;
    let totalMs = 0;

    let cur = new Date(inicio);

    while (cur < fim) {
      const dayStart = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate(), 0, 0, 0, 0);
      const dayEnd = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate(), 23, 59, 59, 999);

      const segIni = inicio > dayStart ? inicio : dayStart;
      const segFim = fim < dayEnd ? fim : dayEnd;

      if (segIni < segFim && this.isDiaUtil(dayStart)) {
        totalMs += (segFim.getTime() - segIni.getTime());
      }

      cur = new Date(dayStart.getTime() + 86400000);
    }

    return Math.round((totalMs / msHour) * 100) / 100;
  }

  private formatHorasSLA(horas: number | null | undefined): string {
    const h = Number(horas);
    if (!isFinite(h) || h < 0) return '';

    if (h === 0) return '0 h';

    if (h < 1) {
      const min = Math.max(1, Math.round(h * 60));
      return `${min} min`;
    }

    return `${h.toFixed(2)} h`;
  }

  private gerarChaveNota(item: any): string {
    const filial = String(item?.filial ?? '').trim();
    const nota = String(item?.nota ?? '').trim();
    const serie = String(item?.serie ?? '').trim();
    const fornecedor = String(item?.fornecedor ?? '').trim();
    const loja = String(item?.loja ?? '').trim();

    if (!filial || !nota) return '';
    return `${filial}|${nota}|${serie}|${fornecedor}|${loja}`;
  }

  formatDecimalPtBr(value: number | null | undefined, min = 2, max = 2): string {
    const n = Number(value ?? 0);
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: min,
      maximumFractionDigits: max
    }).format(isFinite(n) ? n : 0);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil((this.total || 0) / (this.pageSize || 1)));
  }

  // -------------------- Excel --------------------
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
      { header: 'TES', key: 'tes', width: 10 },
      { header: 'Emissão', key: 'emissao', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Digitação', key: 'digitacao', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Hr Digt', key: 'HrDigitacao', width: 15, style: { numFmt: 'hh:mm:ss' } },
      { header: 'Venc Real', key: 'vencimento', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Venc PreNota', key: 'DtPreNota', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Dt 3Way', key: 'Dt3Way', width: 15, style: { numFmt: 'dd/mm/yyyy' } },
      { header: 'Hr 3Way', key: 'Hr3Way', width: 15, style: { numFmt: 'hh:mm:ss' } },
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
      { header: `Dentro SLA (${this.slaHoras}h)`, key: 'slaStatus', width: 16 }
    ];

    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '4e73df' } };
    worksheet.getRow(1).alignment = { horizontal: 'center' };

    const rows = this.itemsAll.map(item => ({
      ...item,
      emissao: this.parseExcelDate(item.emissao) ?? null,
      digitacao: this.parseExcelDate(item.digitacao) ?? null,
      HrDigitacao: this.parseExcelTime(item.HrDigitacao) ?? null,
      vencimento: this.parseExcelDate(item.vencimento) ?? null,
      DtPreNota: this.parseExcelDate(item.DtPreNota) ?? null,
      Dt3Way: this.parseExcelDate(item.Dt3Way) ?? null,
      Hr3Way: this.parseExcelTime(item.Hr3Way) ?? null
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

  // -------------------- ZIP download helpers --------------------
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

    this.http.get(url, { headers: this.getTenantHeaders() }).subscribe({
      next: () => this.poNotification.success('Arquivos excluídos com sucesso.'),
      error: (err) => {
        console.error('Erro ao excluir arquivos:', err);
        this.poNotification.error('Falha ao excluir arquivos.');
      }
    });
  }

  private baixarArquivoPorUrl(url: string, fileName: string, folder: string): void {
    this.http.get(url, { headers: this.getTenantHeaders(), responseType: 'blob' }).subscribe({
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

