import { VivranWebPage } from './app.po';

describe('vivran-web App', () => {
  let page: VivranWebPage;

  beforeEach(() => {
    page = new VivranWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
