EmailClient.Email = DS.Model.extend({
  address: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  sender: DS.attr(),
  date: DS.attr(),
  folder: DS.belongsTo('folder', {async: true})
});
