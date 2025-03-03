import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' }) // ✅ Se registra automáticamente
export class ApiService {
  private baseUrl = 'https://eland-dk.humaneland.net/Examen/AngularApi';

  constructor(private http: HttpClient) {}

  lista_categorias(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Categorias`);
  }

  lista_marcas(idMenu: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/Categorias?idMenu=${idMenu}`);
  }
}
