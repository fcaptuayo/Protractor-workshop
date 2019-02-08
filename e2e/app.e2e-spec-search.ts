import {TourOfHeroesPage} from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('set Search BOX', () => {
    page.navigateTo();
    page.setSearchBox();
  });

  it('Esperar  un tiempo para ver la pagina', () => {
    page.sleep();
  });

});
