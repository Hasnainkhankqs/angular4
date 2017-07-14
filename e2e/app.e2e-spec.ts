import { HasnainAppPage } from './app.po';

describe('hasnain-app App', () => {
  let page: HasnainAppPage;

  beforeEach(() => {
    page = new HasnainAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
