import { AuctionServicesIntegrationFrontendPage } from './app.po';

describe('auction-services-integration-frontend App', function() {
  let page: AuctionServicesIntegrationFrontendPage;

  beforeEach(() => {
    page = new AuctionServicesIntegrationFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
