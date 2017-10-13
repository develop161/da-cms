
// import members we need
import { Component } from '@angular/core';


// Angular decorator: metadata + template
@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

// Angular class of root component -> convention is to call it AppComponent
export class AppComponent {
  // property pageTitle
  pageTitle: string = 'CTCUE'; // default value
}
