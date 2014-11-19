window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new window.Journal.Routers.JournalRouter({
      $rootEl: $("div#main")
    });
    
    Backbone.history.start();
  }
};