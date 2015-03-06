EmailClient.Email = DS.Model.extend({
  recipient: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  sender: DS.attr('string', {defaultValue: "GreyOsprey@giggleplex.com" }),
  date: DS.attr('string', {defaultValue: function() { return (new Date()).toString(); } }),
  dateSort: DS.attr('string', {defaultValue: function() { return Date.now().toString(); } }),
  folder: DS.belongsTo('folder', {async: true})
});
