EmailClient.FolderController = Ember.ObjectController.extend({
  isAdding: false,
  actions: {
    add: function() {
      this.set('isAdding', true);
    },
    save: function() {
      var folder = this.model;
      var email = this.store.createRecord('email', {
        recipient: this.get('recipient'),
        subject: this.get('subject'),
        body: this.get('body'),
        sender: this.get('sender'),
      });
      folder.get('emails').then(function(emails) {
        emails.pushObject(email);
        email.save();
        folder.save();
      });
      this.set('isAdding', false)
    },
    delete: function() {
      if (confirm('Are you sure?')) {
      this.get('model').destroyRecord();
      this.transitionToRoute('home');
      }
    }
  }
});
