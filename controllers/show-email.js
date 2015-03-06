EmailClient.ShowEmailController = Ember.ObjectController.extend({
  isDeleted: false,
  actions: {
    delete: function() {
      if (confirm('Are you sure?')) {
        var email = this.get('model');
        var folder = this.get('model').get('folder');
        this.get('model').destroyRecord();

        this.set('isDeleted', true);
        this.transitionToRoute('folder', folder);
        this.set('isDeleted', false);
      }
    }
  }
});
xs
