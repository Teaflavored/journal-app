window.Journal.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: window.Journal.Models.Post
})