import { browser, element, by } from 'protractor';

export class TourneyUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderTitle() {
    return element(by.css('.header-title')).getText();
  }
}
