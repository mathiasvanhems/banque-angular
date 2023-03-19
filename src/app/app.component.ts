import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router) {
    console.log(environment.production); // Logs false for development environment
  }
  title = 'banque-front';
  
}
