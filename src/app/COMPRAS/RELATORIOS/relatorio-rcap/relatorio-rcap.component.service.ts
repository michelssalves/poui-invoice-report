import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
    providedIn: 'root'
})
export class RelatorioRecapService {
    getColumns(): PoTableColumn[] {
        return [
            { property: 'item', label: 'Item', visible: false },
            { property: 'filial', label: 'Filial', visible: false },
            { property: 'nota', label: 'Nota', visible: true },
            { property: 'serie', label: 'Série', visible: false },
            { property: 'fornecedor', label: 'Fornecedor', visible: true },
            { property: 'loja', label: 'Loja', visible: false },
            { property: 'razao', label: 'Razão Social', visible: true },
            { property: 'cnpj', label: 'CNPJ', visible: false },
            { property: 'emissao', label: 'Dt Emis', visible: false, type: 'date' },
            { property: 'vencimento', label: 'Venc Real', visible: false, type: 'date' },
            { property: 'DtPreNota', label: 'Venc PreNota', visible: false, type: 'date' },
            { property: 'Dt3Way', label: 'Dt 3Way', visible: true, type: 'date' },
            { property: 'digitacao', label: 'Dt Digt', visible: true, type: 'date' },
            { property: 'Hr3Way', label: 'Hr 3Way', visible: true, type: 'time' },
            { property: 'HrDigitacao', label: 'Hr Digt', visible: true, type: 'time' },
            { property: 'horasSLALabel', label: 'SLA', type: 'number', width: '100px', visible: true },
            { property: 'slaStatus', label: 'Dentro SLA', width: '110px', visible: true },
            { property: 'natureza', label: 'Natureza', visible: true },
            { property: 'tipo', label: 'Tipo', visible: true },
            { property: 'estado', label: 'Estado', visible: false },
            { property: 'inss', label: 'INSS', visible: false, type: 'currency', format: 'BRL' },
            { property: 'pis', label: 'PIS', visible: false, type: 'currency', format: 'BRL' },
            { property: 'cofins', label: 'COFINS', visible: false, type: 'currency', format: 'BRL' },
            { property: 'csll', label: 'CSLL', visible: false, type: 'currency', format: 'BRL' },
            { property: 'ipi', label: 'IPI', visible: false, type: 'currency', format: 'BRL' },
            { property: 'frete', label: 'Frete', visible: false, type: 'currency', format: 'BRL' },
            { property: 'desconto', label: 'Desconto', visible: false, type: 'currency', format: 'BRL' },
            { property: 'despesa', label: 'Despesa', visible: false, type: 'currency', format: 'BRL' },
            { property: 'pedido', label: 'Pedido', visible: true },
            { property: 'TTPedido', label: 'R$ Pedido', visible: false, type: 'currency', format: 'BRL' },
            { property: 'liquido', label: 'R$ Líquido', visible: false, type: 'currency', format: 'BRL' },
            { property: 'bruto', label: 'R$ Bruto', visible: true, type: 'currency', format: 'BRL' },
            { property: 'diferenca', label: 'R$ Saldo', visible: false, type: 'currency', format: 'BRL' },
            { property: 'user', label: 'Usuário', visible: true }
        ];
    }

}