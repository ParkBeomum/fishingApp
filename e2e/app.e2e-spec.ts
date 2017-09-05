import { FishingAppPage } from './app.po';

describe('fishing-app App', function() {
  let page: FishingAppPage;

  beforeEach(() => {
    page = new FishingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
