import Ember from "ember";

export default Ember.Component.extend({
  topics: [],
  didRender(){
    if(this.topics.length > 0) {
      this.sendAction("selectTopic", this.topics[0].id);
    }
  },
  actions: {
    selectTopic: function (topic) {
      this.sendAction("selectTopic", topic);
    }
  }
});
