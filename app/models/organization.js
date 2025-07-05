import Model, { attr, hasMany } from '@ember-data/model';

export default class Organization extends Model {
  @attr('string') name;
  @attr('string') identifier;
  @attr() uri;
  @hasMany('user', { inverse: 'organization', async: true }) members;
}
