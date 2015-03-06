EmailClient.NewFolderController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newFolder = this.store.createRecord('folder', {
        name: this.get('name')
      });

      newFolder.save();
      this.transitionToRoute('home');
    }
  }
});
