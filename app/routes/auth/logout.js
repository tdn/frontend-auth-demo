import { service } from '@ember/service';
import Route from '@ember/routing/route';

export default class AuthLogoutRoute extends Route {
  @service router;
  @service session;

  async beforeModel(transition) {
    if (this.session.requireAuthentication(transition, 'index')) {
      try {
        await this.session.invalidate();
        const logoutUrl = this.router.urlFor('mock-login')
        window.location.replace(logoutUrl);
      } catch (error) {
        throw new Error(
          'Something went wrong while trying to remove the session on the server',
          {
            cause: error,
          },
        );
      }
    }
  }
}
