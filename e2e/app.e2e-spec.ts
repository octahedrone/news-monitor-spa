import { NmTemplatePage } from './app.po';

describe('nm-template App', () => {
  let page: NmTemplatePage;

  beforeEach(() => {
    page = new NmTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
