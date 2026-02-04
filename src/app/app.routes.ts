import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'relatorio-rcap' },

    {
        path: 'relatorio-rcap',
        loadComponent: () =>
            import('./COMPRAS/RELATORIOS/relatorio-rcap/relatorio-rcap.component')
                .then(m => m.RelatorioRcapComponent)
    }
];
