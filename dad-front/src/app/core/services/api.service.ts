import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {resources} from '../resources/resources';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getCategory(): Observable<any[]> {
    return this.http.get<any[]>(resources.catalogo.categories); // Se agregará la baseUrl por el interceptor
  }

  crearUsuario(data: any): Observable<any> {
    return this.http.post('usuarios', data);
  }
}
