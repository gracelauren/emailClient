EmailClient.ShowEmailRoute = Ember.Route.extend({
  model: function(params) {
    var folder = this.modelFor('folder');
    var email = folder.get('emails').then(function(emails) {
      this.store.find('email', params.email_id);
    });
    return email;
  }
});
