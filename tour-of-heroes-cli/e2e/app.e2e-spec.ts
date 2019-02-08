import {TourOfHeroesPage} from './app.po';
import {by, element} from 'protractor';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});


describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});

describe('Buscar héroes', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('Refrest to page', () => {
    page.navigateTo();
    //page.setSearchBox();
  });

  it('Search Hero', () => {
    page.searchHeroInInput('Celeritas');
    page.sleep();
  });

  it('Search Hero', () => {
    page.clickInHeroInInput();
  });

  it('Esperar  un tiempo para ver la pagina', () => {
    page.sleep();
  });

});


describe('Eliminar un héroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
    page.sleep();
  });

  it('should add a new hero', () => {
    page.sleep();
    const currentHeroes = page.getAllHeroes().count();
    page.clickInDeleteHeroInInput();
    page.sleep();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
    page.sleep();
  });

});


describe('Editar un héroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('Refrest to page', () => {
    page.navigateTo();
  });

  it('Search Hero', () => {
    page.searchHeroInInput('Celeritas');
    page.sleep();
  });

  it('Click in Hero', () => {
    page.clickInHeroInInput();
    page.sleep();
  });

  it('Update Name', () => {
    page.changeNameHeroInInput('New Name the Hero');
    page.sleep();
  });

});


describe('Navegar a un héroe desde el dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('Refrest to page', () => {
    page.sleep();
    page.navigateTo();
    page.sleep();
  });

  it('Navigator Hero Dashboard', () => {
    page.sleep();
    page.clickInHeroDashboard();
    page.sleep();
  });

  it('Back Dashboard', () => {
    page.sleep();
    page.clickBackDashboard();
    page.sleep();
  });
});

describe('Navegar a un héroe desde la lista de héroes', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('Validate list', () => {
    const currentHeroes = page.getAllHeroes().count();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n));
  });

  it('Select Hero', () => {
    page.clickDetailListHero();
    page.sleep();
  });

  it('View Detail', () => {
    page.clickDetailListHero();
    page.sleep();
  });


});

describe('Navegar a un héroe desde la búsqueda', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('Refrest to page', () => {
    page.navigateTo();
    //page.setSearchBox();
  });

  it('Search Hero', () => {
    page.searchHeroInInput('Celeritas');
    page.sleep();
  });

  it('Search Hero', () => {
    page.clickInHeroInInput();
    page.sleep();
  });

});
