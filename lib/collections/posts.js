Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInser: function(postAttributes) {
    check(Meteor.userID(), String);
    check(postAttributes, {
      title: String,
      url: String
    });

    var user = Meteor.user();
    var post = _.extend(postAttriutes, {
      userID: user._id,
      author: user.username,
      submitted: new Date()
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});
