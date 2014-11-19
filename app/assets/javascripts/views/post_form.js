window.Journal.Views.PostForm = Backbone.View.extend({
  template: JST["posts/new"],
  events: {
    "submit form": "submitForm"
  },
  
  initialize: function(){
    
  },
  
  render: function(resp){
    var renderedContent = this.template({
      errors: resp,
      post: this.model
    })
    this.$el.html(renderedContent)
    
    return this;
  },
  
  submitForm: function(event){
    event.preventDefault();
    var postParams = $(event.currentTarget).serializeJSON();
    this.model.set(postParams);
    this.model.save({}, {
      success: function() {
        window.Journal.posts.add(this.model)
      },
      error: function(model, resp){
        this.model.set(model.get("post"))
        this.render(resp.responseJSON); 
      }.bind(this)
    });
  }
})