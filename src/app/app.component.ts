import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiCallsService } from './services/api-calls/api-calls.service';
import { SharedService } from './services/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imageList: any;
  constructor(private apiService: ApiCallsService, private sharedService: SharedService) {
    console.log("The Ui is On version", environment.version, " and the production build is :-", environment.production)
  }
  ngOnInit(): void {
    console.log("inside on init ");
    this.imageList = [
      "assets/images/Picture1.png",
      "assets/images/Picture2.png",
      "assets/images/Picture3.png",
      "assets/images/Picture4.png",
      "assets/images/Picture5.png",
      "assets/images/Picture6.png",
      "assets/images/Picture7.png",
      "assets/images/Picture8.png",
      "assets/images/Picture9.png",
      "assets/images/Picture10.png"
    ]
    throw new Error('Method not implemented.');
  }
  title = 'E-Commerce-UI';

  testApi() {
    console.log("inisde the test API FUNC")
    this.apiService.Login().subscribe(res => {
      console.log("we got response from the api", this.sharedService.loading)
    })
  }
}
