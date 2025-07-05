import { belongsTo, attr } from '@ember-data/model';
import Model from '@ember-data/model';

export default class AccountModel extends Model {
  @belongsTo("user", { async: true, inverse: "accounts" } ) user;
  @attr() provider;
  @attr() uri;
}
