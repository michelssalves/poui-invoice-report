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
            { property: 'emissao', label: 'Dt Emis', visible: true, type: 'date' },
            { property: 'digitacao', label: 'Dt Digt', visible: true, type: 'date' },
            { property: 'vencimento', label: 'Dt Venc', visible: true, type: 'date' },
            { property: 'DtPreNota', label: 'Dt PreNota', visible: true, type: 'date' },
            { property: 'Dt3Way', label: 'Dt 3Way', visible: true, type: 'date' },
            { property: 'tipo', label: 'Tipo', visible: true },
            { property: 'estado', label: 'Estado', visible: false },
            { property: 'inss', label: 'INSS', visible: false, type: 'currency', format: 'BRL' },
            { property: 'pis', label: 'PIS', visible: false, type: 'currency', format: 'BRL' },
            { property: 'cofins', label: 'COFINS', visible: false, type: 'currency', format: 'BRL' },
            { property: 'csll', label: 'CSLL', visible: false, type: 'currency', format: 'BRL' },
            { property: 'desconto', label: 'Desconto', visible: false, type: 'currency', format: 'BRL' },
            { property: 'despesa', label: 'Despesa', visible: false, type: 'currency', format: 'BRL' },
            { property: 'pedido', label: 'Pedido', visible: true },
            { property: 'TTPedido', label: 'R$ Pedido', visible: true, type: 'currency', format: 'BRL' },
            { property: 'liquido', label: 'R$ Líquido', visible: true, type: 'currency', format: 'BRL' },
            { property: 'bruto', label: 'R$ Bruto', visible: true, type: 'currency', format: 'BRL' },
            { property: 'diferenca', label: 'R$ Saldo', visible: true, type: 'currency', format: 'BRL' },
            { property: 'user', label: 'Usuário', visible: true }
        ];
    }

}