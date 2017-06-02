import Ember from "ember";

export default Ember.Component.extend({
  lPooledDocument: [],
  reverse: function(){
    return this.get('lPooledDocument').toArray().reverse();
  }.property('lPooledDocument.@each'),
  actions: {

  }
});
