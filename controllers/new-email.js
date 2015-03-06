EmailClient.NewEmailController = Ember.ObjectController.extend({
  isAdding: false,
  actions: {
    add: function() {
      this.set('isAdding', true);
    },
    save: function() {
      var email = this.get('model');
      email.save();

      var controller = this;
      email.get('folder').then(function(folder) {
        folder.save();
        controller.transitionToRoute('folder', folder);
      });
      this.set('isAdding', false)
    }
  }
});
