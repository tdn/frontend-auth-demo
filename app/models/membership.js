import Model, { attr, belongsTo } from '@ember-data/model';

export default class Membership extends Model {
  @attr uri;
  @belongsTo('user', { inverse: 'memberships', async: true }) user;
  @belongsTo('organization', { inverse: 'memberships', async: true })
  organization;
}
