EmailClient.HomeRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('folder');
  }
});
