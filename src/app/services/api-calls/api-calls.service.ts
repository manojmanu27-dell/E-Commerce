import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpServiceArgsService } from '../http-service-args.service';
import { AbstractHttpService } from '../abstract-http.service';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/Backend-Service';
@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  })

  httpRequest = new HttpServiceArgsService()

  constructor(private abstractHttpService: AbstractHttpService) { }

  setHeader(): void {
    this.headers = new HttpHeaders({ token: "1234", 'Content-Type': "application/json" })
  }

  public Login(): Observable<any> {
    const httpRequest = new HttpServiceArgsService();
    httpRequest.url = BackendService.login;
    this.setHeader();
    httpRequest.headers = this.headers;
    return this.abstractHttpService.get$(httpRequest)
  }
}
