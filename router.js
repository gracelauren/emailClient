Sothebys.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('email', {path: ':email_id'}, function() {
    this.resource('show-product', {path: ':product_id'});
  });
  this.resource('new-email');
});
