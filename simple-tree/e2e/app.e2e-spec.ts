import { SimpleTreePage } from './app.po';

describe('simple-tree App', () => {
  let page: SimpleTreePage;

  beforeEach(() => {
    page = new SimpleTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
