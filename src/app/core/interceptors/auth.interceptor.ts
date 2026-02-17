import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RuntimeConfigService } from '../services/runtime-config.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private runtimeConfigService: RuntimeConfigService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const runtimeEnvironment = this.runtimeConfigService.getRuntimeEnvironment();

        if (!req.url.startsWith(runtimeEnvironment.apiUrl)) {
            return next.handle(req);
        }

        const basicAuth = btoa(
            `${runtimeEnvironment.auth.user}:${runtimeEnvironment.auth.password}`
        );

        const authReq = req.clone({
            setHeaders: {
                Authorization: `Basic ${basicAuth}`,
                'Content-Type': 'application/json',
                'x-erp-module': runtimeEnvironment.erpModule
            }
        });

        return next.handle(authReq);
    }
}
