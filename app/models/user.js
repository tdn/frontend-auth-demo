import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @belongsTo('account', { async: true, inverse: "user" }) account;
  @belongsTo('organization', { inverse: 'members', async: true }) organization;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr() uri;

  get group() {
    return this.organization;
  }
}
