EmailClient.Folder = DS.Model.extend({
  name: DS.attr(),
  emails: DS.hasMany('email', {async: true})
});
