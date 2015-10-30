Router.configure({
  layoutTemplate: 'layout',
  loadingTeamplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
