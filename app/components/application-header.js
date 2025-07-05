import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class ApplicationHeader extends Component {
  @service currentSession;
  @service session;

  constructor() {
    super(...arguments);
  }

  @action
  async logout() {
    await this.session.invalidate();
  }
}
