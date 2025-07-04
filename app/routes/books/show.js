import { service } from '@ember/service';
import Route from '@ember/routing/route';

export default class BooksShowRoute extends Route {
  @service store;

  model({book_id}) {
    return this.store.findRecord('book', book_id);
  }
}
