import { Bf1Page } from './app.po';

describe('bf1 App', () => {
  let page: Bf1Page;

  beforeEach(() => {
    page = new Bf1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
