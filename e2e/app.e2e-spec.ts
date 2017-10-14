import { APMPage } from './app.po';

describe('apm App', () => {
  let page: APMPage;

  beforeEach(() => {
    page = new APMPage();
  });

  it('First menu item', () => {
    page.navigateTo();
    expect(page.getFirstMenuItemText()).toEqual('Home');
  });


});
