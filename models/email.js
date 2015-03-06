EmailClient.Email = DS.Model.extend({
  recipient: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
  sender: DS.attr("GreyOsprey@giggleplex.com"),
  date: DS.attr(function() { return (new Date()).toString(); }),
  dateSort: DS.attr(function() { return Date.now().toString(); })
  folder: DS.belongsTo('folder', {async: true})
});
