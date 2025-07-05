import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentSessionService extends Service {
  @service session;
  @service store;

  @tracked isLoggedIn;
  @tracked account;
  @tracked user;
  @tracked group;
  @tracked roles = [];

  /* eslint-disable ember/no-get */
  async load() {
    if (this.session.isAuthenticated) {
      this.isLoggedIn = true;

      let accountId =
        this.session.data.authenticated.relationships.account.data.id;
      this.account = await this.store.findRecord('account', accountId, {
        include: 'user',
      });

      this.user = this.account.user;
      this.roles = this.session.data.authenticated.data.attributes.roles;

      let groupId = this.session.data.authenticated.relationships.group.data.id;
      this.group = await this.store.findRecord('organization', groupId);
    }
  }
  /* eslint-enable ember/no-get */

  clear() {
    this.user = null;
    this.role = null;
    this.organization = null;
    this.isLoggedIn = false;
  }

  get isAuthenticated() {
    return this.session.isAuthenticated;
  }

  get isLoggedIn() {
    return this.isLoggedIn;
  }
}
