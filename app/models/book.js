import Model, { attr, belongsTo } from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') title;
  @attr('string') author;
  @attr('string') isbn;
  @attr('date') publicationDate;
  @attr('string') genre;
  @attr('string') language;
  @attr('string') links;
  @belongsTo( 'file', { async: true, inverse: null } ) qrCode;
}
