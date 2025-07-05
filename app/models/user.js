import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @belongsTo('account', { async: true, inverse: "user", serializable: false }) account;
  @belongsTo('organization', { inverse: 'members', async: true, serializable: false }) organization;
  @hasMany('book', { inverse: null, async: true} ) favorites;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr() uri;

  get group() {
    return this.organization;
  }
}
