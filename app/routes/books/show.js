import { service } from '@ember/service';
import Route from '@ember/routing/route';

export default class BooksShowRoute extends Route {
  @service store;
  @service currentSession;

  currentUserRoles

  async beforeModel() {
    const user = await this.currentSession.user;
    const account = await user?.account;
    this.currentUserRoles = await account?.roles;
  }

  async model({book_id}) {
    let book = await this.store.findRecord('book', book_id);
    return book;
  }

  async setupController(controller) {
    super.setupController(...arguments);
    controller.currentUserRoles = this.currentUserRoles;
  }
}
