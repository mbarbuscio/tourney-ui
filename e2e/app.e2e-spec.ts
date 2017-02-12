import { TourneyUiPage } from './app.po';

describe('tourney-ui App', function() {
  let page: TourneyUiPage;

  beforeEach(() => {
    page = new TourneyUiPage();
  });

  it('should display message saying Tourney at Harrenhal', () => {
    page.navigateTo();
    expect(page.getHeaderTitle()).toEqual('Tourney at Harrenhal!');
  });
});
