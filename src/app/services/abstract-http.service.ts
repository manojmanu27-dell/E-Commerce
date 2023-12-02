import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SharedService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class AbstractHttpService {

  private headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedService: SharedService
  ) { }

  public get$(request: any) {
    return this.http.get(request.url, { headers: request.headers, observe: 'response' }).pipe(timeout(60000),
      tap(res => {
        this.sharedService.loading = true;
        console.log("successfull you can write code after success")
      }),
      catchError(async (error) =>

        // this.handleError(error, request.url)
        console.log("error")
      )
    );
  }
  private handleError(error: Response | any, operation = 'operation') {
    this.sharedService.loading = false;

    console.log("Inisde handle error")

  }
}
