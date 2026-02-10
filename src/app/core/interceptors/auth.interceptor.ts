import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        if (!req.url.startsWith(environment.apiUrl)) {
            return next.handle(req);
        }

        const basicAuth = btoa(
            `${environment.auth.user}:${environment.auth.password}`
        );

        const authReq = req.clone({
            setHeaders: {
                Authorization: `Basic ${basicAuth}`,
                'Content-Type': 'application/json',
                'x-erp-module': environment.erpModule
            }
        });

        return next.handle(authReq);
    }
}
