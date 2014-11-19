window.Journal.Views.PostShow = Backbone.View.extend({
  events: {
    "dblclick .title-edit": "editTitle",
    "blur form": "submitData",
    "submit form": "submitData",
    "dblclick .body-edit": "editBody"
  },
  
  template: JST["posts/show"],
  
  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
    this.state = "closed";
  },
  render: function(){
    var renderedContent = this.template({
      post: this.model
    })
    
    this.$el.html(renderedContent)
    
    return this;
  },
  
  submitData: function(event){
    event.preventDefault();
    var postParams = $(event.currentTarget).serializeJSON()
    this.model.set(postParams)
    this.model.save({},{
      success: function(){
        this.render()
      }.bind(this)
    })
  },
  
  editTitle: function() {
    var titleTemplate = JST["posts/edit_title"]
    var titleContent = titleTemplate({
      post: this.model
    })
    this.$(".title-edit").html(titleContent)
    this.$("input").focus()
  },
  
  editBody: function(){
    var bodyTemplate = JST["posts/edit_body"]
    var bodyContent = bodyTemplate({
      post: this.model
    })
    this.$(".body-edit").html(bodyContent)
    this.$("textarea").focus()
  }
  
  
  
  
  
  
})