window.Journal.Views.PostsIndexItem = Backbone.View.extend({
  template: JST["posts/index_item"],
  initialize: function(){
    this.listenTo(this.model, "change:title sync", this.render)
  },
  
  render: function(){
    var renderedContent = this.template({
      post: this.model
    })
    this.$el.html(renderedContent)
    
    return this;
  }  
})