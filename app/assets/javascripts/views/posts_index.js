window.Journal.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],
  events: {
    "click button.post-delete": "deletePost"
  },
  initialize: function(){
    this.listenTo(this.collection, "remove add reset sync", this.render);
  },
  
  render: function(){
    var renderedContent = this.template({})
    this.$el.html(renderedContent)
    this.$indexList = this.$("ul.index-items")
    this.collection.each(function(post){
      var indexItemView = new window.Journal.Views.PostsIndexItem({model: post})
      this.$indexList.append(indexItemView.render().$el);
    }.bind(this))    
    return this;
  },
  
  deletePost: function(event){
    event.preventDefault();
    var id = $(event.currentTarget).data("id")
    var post = this.collection.getOrFetch(id)
    post.destroy({
      success: function(){
        
        this.collection.remove(post);
      }.bind(this)
    });
  }
  
  
})