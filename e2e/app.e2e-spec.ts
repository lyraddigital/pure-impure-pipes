import { PureImpurePipesPage } from './app.po';

describe('pure-impure-pipes App', function() {
  let page: PureImpurePipesPage;

  beforeEach(() => {
    page = new PureImpurePipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
