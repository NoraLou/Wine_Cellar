// Models.
window.Wine = Backbone.Model.extend();

window.WineCollection = Backbone.Collection.extend({
  model:Wine,
  url: '../api/wines'
});


//Views
window.WineListView = Backbone.View.extend({
  tagName : 'ul',

  initialize:function(){
    this.model.bind('reset', this.render, this);
  },

  render:function(evt){

  }
});
