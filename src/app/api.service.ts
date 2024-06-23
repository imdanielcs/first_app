import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://mindicador.cl/api';  // URL base de la API

  constructor(private http: HttpClient) { }

  // Método para obtener datos
  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe(
      catchError(this.handleError)
      );
  }

  // Método para manejar errores
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Unknown error! Please check your internet connection and try again.';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    }
    return throwError(errorMessage);
  }
}
