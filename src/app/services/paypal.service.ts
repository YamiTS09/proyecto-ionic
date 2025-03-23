import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {
  private apiUrl = 'http://localhost:3000'; // Cambia esto si tu backend está en un servidor en línea

  constructor(private http: HttpClient) {}

  crearPago() {
    return this.http.post(`${this.apiUrl}/crear-pago`, {});
  }
}
