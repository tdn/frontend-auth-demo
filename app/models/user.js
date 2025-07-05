import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @belongsTo('account', { async: true, inverse: "user" }) account;
  @hasMany('membership', { inverse: 'user', async: false }) memberships;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr() uri;

  get group() {
    return this.memberships.at(0);
  }
}
