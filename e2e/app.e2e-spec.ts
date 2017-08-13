import { NcounterNg2Page } from './app.po';

describe('ncounter-ng2 App', () => {
  let page: NcounterNg2Page;

  beforeEach(() => {
    page = new NcounterNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
