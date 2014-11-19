window.Journal.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],
  events: {
    "click button.post-delete": "deletePost"
  },
  initialize: function(){
    this.listenTo(this.collection, "remove add reset sync change:title", this.render)
  },
  
  render: function(){
    var renderedContent = this.template({
      posts: this.collection
    })
    
    this.$el.html(renderedContent)
    
    return this;
  },
  
  deletePost: function(event){
    event.preventDefault();
    var id = $(event.currentTarget).data("id")
    var post = this.collection.get(id)
    post.destroy({
      success: function(){
        this.collection.remove(post);
      }.bind(this)
    });
  }
  
  
})