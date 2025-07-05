import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MockLoginRoute extends Route {
  @service('session') simpleAuthSession;
  @service store;

  beforeModel() {
    this.simpleAuthSession.prohibitAuthentication('index');
  }

  model() {
    return this.store.queryAll('account', {
      include: 'user,user.organization',
      filter: {
        provider: 'https://github.com/lblod/mock-login-service',
      },
      sort: 'user.first-name,user.last-name',
    });
  }
}
