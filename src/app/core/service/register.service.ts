// rxjs
import { Observable } from "rxjs";
import { retry, catchError } from "rxjs/operators";

// service
import { UtilService } from './util.service';

// outros
import { environment } from '../../../environments/environment';

// interface
import { Register } from './../model/register.interface';

// angular
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService
  ) { }

  /**
     * Obtem lista de itens
     * @param endpoint
     * @returns Devolve um array de objetos de itens
     */
  getAllRegister<Register>(): Observable<Array<Register>> {
    return this.httpClient
      .get<Array<Register>>(`${environment.apiUrl}/register`)
      .pipe(retry(2), catchError(error => this.utilService.handleError(error)));
  }

  /**
     * Obtem o item através do id
     * @param id
     * @param endpoint
     * @returns Devolve um objeto do tipo Register
     */
  getRegisterById<Register>(id: number): Observable<Register> {
    return this.httpClient
      .get<Register>(`${environment.apiUrl}/register/${id}`)
      .pipe(retry(2), catchError(error => this.utilService.handleError(error)));
  }

  /**
   * Atualiza o item através do id
   * @param data
   * @param id
   */
  updateRegister(data: Register, id: number) {
    return this.httpClient
      .put(`${environment.apiUrl}/register/${id}`, data)
      .pipe(retry(2), catchError(error => this.utilService.handleError(error)));
  }

  /**
   * Deleta um item através do id
   * @param id
   */
  deleteRegister(id: number) {
    return this.httpClient
      .delete(`${environment.apiUrl}/register/${id}`)
      .pipe(retry(2), catchError(error => this.utilService.handleError(error)));
  }

  /**
   * Insere um novo item
   * @param data
   */
  postRegister(data: Register) {
    return this.httpClient
      .post(`${environment.apiUrl}/register`, data)
      .pipe(retry(2), catchError(error => this.utilService.handleError(error)));
  }

}
