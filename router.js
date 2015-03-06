EmailClient.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('folder', {path: ':folder_id'}, function() {
    this.resource('show-email', {path: ':email_id'});
  });
  this.resource('new-folder');
});
