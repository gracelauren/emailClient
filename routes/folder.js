EmailClient.FolderRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('folder', params.folder_id);
  }
});
