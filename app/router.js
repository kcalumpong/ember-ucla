import EmberRouter from '@ember/routing/router';
import config from 'ember-quickstart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact');
  this.route('about', function () {
    this.route('los-angeles');
    this.route('san-diego');
    this.route('orange-county');
  });
  this.route('home', { path: '/' });
});
