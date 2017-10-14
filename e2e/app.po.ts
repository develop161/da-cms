import { browser, by, element } from 'protractor';

export class APMPage {
  navigateTo() {
    return browser.get('/');
  }

  getFirstMenuItemText() {
    return element(by.css('.navbar .container-fluid .nav li a')).getText();
  }
}
