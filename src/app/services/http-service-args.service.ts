import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class HttpServiceArgsService {
  url?: string;
  headers?: HttpHeaders;
  params?: HttpParams;
  observe?: "response";
  responseType?: "json";
}
