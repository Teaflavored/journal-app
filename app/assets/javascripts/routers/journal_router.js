window.Journal.Routers.JournalRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "postIndex",
    
  },
  
  postIndex: function(){
    var posts = new window.Journal.Collections.Posts();
    var indexView = new window.Journal.Views.PostsIndex({
      collection: posts
    });
    this.$rootEl.html(indexView.render().$el);
    posts.fetch();
  }
})