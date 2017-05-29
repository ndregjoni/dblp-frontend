import { DbplFrontendPage } from './app.po';

describe('dbpl-frontend App', function() {
  let page: DbplFrontendPage;

  beforeEach(() => {
    page = new DbplFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
