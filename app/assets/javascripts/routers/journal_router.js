window.Journal.Routers.JournalRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$sidebar = options.$sidebar;
    this.$rootEl = options.$rootEl;
    this.postIndex();
  },
  
  routes: {
    "": "postIndex",
    "posts/new": "postForm",
    "posts/:id/edit": "postEdit",
    "posts/:id": "postShow"
  },
  
  postEdit: function(id){
    var post = window.Journal.posts.getOrFetch(id)
    var formView = new window.Journal.Views.PostForm({
      model: post
    })
    this.$rootEl.html(formView.render().$el)
  },
  
  postIndex: function(){
    this.indexView = new window.Journal.Views.PostsIndex({
      collection: Journal.posts
    });
    this.$sidebar.html(this.indexView.render().$el);
    Journal.posts.fetch();
  },
  
  postShow: function(id){
    // if(!this.indexView){
    //   this.postIndex();
    // }
    var post = Journal.posts.getOrFetch(id)
    var showView = new window.Journal.Views.PostShow({
      model: post
    })
    this.$rootEl.html(showView.render().$el)
  },
  
  postForm: function(){
    var post = new Journal.Models.Post();
    var formView = new window.Journal.Views.PostForm({
      model: post
    })
    this.$rootEl.html(formView.render().$el)
  }
})