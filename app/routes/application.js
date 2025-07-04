import { service } from '@ember/service';
import Route from '@ember/routing/route';
import { warn } from '@ember/debug';

export default class ApplicationRoute extends Route {
  @service session;
  @service currentSession;
  @service router;

  async beforeModel() {
    await this.session.setup();

    try {
      await this.currentSession.load();
    } catch (error) {
      warn(error, { id: 'current-session-load-failure' });
      this.router.transitionTo('auth.logout');
    }
  }
}
