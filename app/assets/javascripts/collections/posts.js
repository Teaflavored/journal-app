window.Journal.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: window.Journal.Models.Post,
  getOrFetch: function(id){
    var coll = this;
    var post = Journal.posts.get(id)
    if(post){
      post.fetch();
    } else {
      post = new window.Journal.Models.Post({id: id})
      post.fetch({
        success: function(){
          coll.add(post);
        },
        error: function(){
            alert('no models')
        }
      });
    }
      return post
  }
})


// window.Journal.posts = new window.Journal.Collections.Posts();