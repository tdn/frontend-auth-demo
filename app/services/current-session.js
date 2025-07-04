import Service, { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isPresent } from '@ember/utils';
import { later } from '@ember/runloop';

export default class CurrentSessionService extends Service {
  @service session;
  @service store;

  @tracked user;
  @tracked organization;
  @tracked membership;
  @tracked role;
  @tracked isLoggedIn;

  constructor() {
    super(...arguments);

    this.lifecycle();
  }

  /* eslint-disable ember/no-get */
  async load() {
    if (this.session.isAuthenticated) {
      this.isLoggedIn = true;
      const membershipId = get(this.session, 'data.authenticated.data.relationships.membership.data.id');
      if (membershipId) {
        this.membership = await this.store.findRecord('membership', membershipId, {
          include: 'role,organization,user'
        });
        const [role, organization, user] = await Promise.all([
          this.membership.role,
          this.membership.organization,
          this.membership.user
        ]);
        this.organization = organization;
        this.user = user;
        this.role = role;
      }
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
