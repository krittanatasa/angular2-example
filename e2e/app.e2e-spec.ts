import { NgosoftPage } from './app.po';

describe('ngosoft App', () => {
  let page: NgosoftPage;

  beforeEach(() => {
    page = new NgosoftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
