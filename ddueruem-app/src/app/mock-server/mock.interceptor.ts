import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

let currentMockEndpoint;

@Injectable()
export class HttpMockApiInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.method === 'GET'){
            if(request.url === 'https://jsonplaceholder.typicode.com/users'){
                return this.getAllMockedUsers();
            }
        }
        return next.handle(request);
    }

    getAllMockedUsers() {
        return of(new HttpResponse({ status: 200, body:  [
            {
                id:1,
                name: "Viktor"
            },
            {
                id: 2,
                name: "John"
            }
        ]}))
    }
}