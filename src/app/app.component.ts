import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    console.log("The Ui is On version",environment.version ," and the production build is :-",environment.production)
  }
  title = 'E-Commerce-UI';
}
