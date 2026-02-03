import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'relatorio-rcap',
        pathMatch: 'full',
    },
    {
        path: 'relatorio-rcap',
        loadComponent: () =>
            import('./COMPRAS/RELATORIOS/relatorio-rcap/relatorio-rcap.component')
                .then(m => m.RelatorioRcapComponent)
    }
];
