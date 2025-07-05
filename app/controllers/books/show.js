import { get } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Controller from '@ember/controller';
import { trackedFunction } from 'reactiveweb/function';

export default class BooksShowController extends Controller {
  @tracked
  persisting = false;

  @service currentSession;

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
