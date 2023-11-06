import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiCallsService } from './services/api-calls/api-calls.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiCallsService) {
    console.log("The Ui is On version", environment.version, " and the production build is :-", environment.production)
  }
  title = 'E-Commerce-UI';

  testApi() {
    console.log("inisde the test API FUNC")
    this.apiService.Login().subscribe(res => {
      console.log("we got response from the api",res)
    })
  }
}
