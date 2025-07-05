import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LogoutRoute extends Route {
  @service router;
  @service session;

  async beforeModel(transition) {
    if (this.session.requireAuthentication(transition, 'mock-login')) {
      await this.session.invalidate();
      window.location.replace(this.router.urlFor('index'));
    }
  }
}
