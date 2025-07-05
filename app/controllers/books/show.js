import { get } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Controller from '@ember/controller';
import { trackedFunction } from 'reactiveweb/function';
const FAVORITE_STORING_ROLE = "https://authorization-demo.redpencil.io/roles/ed5396a4-2a1d-4624-8e79-df294843a0f8";

export default class BooksShowController extends Controller {
  @tracked persisting = false;
  @tracked currentUserRoles;
  @service currentSession;

  get disableStoreFavorite() {
    return !this.currentUserRoles?.includes(FAVORITE_STORING_ROLE);
  }

  favorites = trackedFunction( this, async () => {
    return await get(this.currentSession,"user.favorites");
  });

  isFavorite = trackedFunction( this, async () => {
    const model = this.model;
    const favorites = await get(this.currentSession,"user.favorites");
    return [...favorites].includes(model);
  } );

  @action
  async updateFavorite(event) {
    this.persisting = true;
    const user = await this.currentSession.user;
    if ( event.target.checked ) {
      // add the item to the list
      (await user.favorites).push( this.model );
    } else {
      // remove the item from the list
      const favorites = await user.favorites;
      const idx = favorites.indexOf(this.model);
      if ( idx !== -1 )
        favorites.splice( idx, 1 );
    }
    await user.save();
    this.persisting = false;
  }
}
