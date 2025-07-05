import { service } from '@ember/service';
import Controller from '@ember/controller';

export default class FavoritesController extends Controller {
  @service currentSession;
}
