import { Component } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  public pageTitle: string = 'Doctor Appointment CMS';
  public subTitle: string = 'For a quick, easy and reliable doctor appointment system!';

}
