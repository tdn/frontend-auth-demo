import EmberRouter from '@ember/routing/router';
import config from 'frontend-auth-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('books', function() {
    this.route('show', { path: ":book_id" });
  });
  this.route('sparql');
  this.route('mock-login');

  this.route('auth', function() {
    this.route('logout');
  });
  this.route('logout');
});
