import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  setSearchBox() {
    return element(by.id('search-box'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  searchHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
  }

  clickInHeroInInput() {
    element(by.css('.search-result')).click();
  }

  clickInDeleteHeroInInput() {
    element(by.css('.delete')).click();
  }

  changeNameHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Save')).click();
  }

  clickInHeroDashboard() {
    element(by.css('.module')).click();
  }

  clickBackDashboard() {
    element(by.buttonText('Back')).click();
  }

  clickDetailListHero() {
    element(by.css('.badge')).click();
    element(by.buttonText('View Details')).click();
  }

  sleep() {
    browser.sleep(4000);
  }
}
