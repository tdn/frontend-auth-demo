import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @hasMany('account', { async: true, inverse: "user" }) accounts;
  @attr('string') firstName;
  @attr('string') lastName;
}
