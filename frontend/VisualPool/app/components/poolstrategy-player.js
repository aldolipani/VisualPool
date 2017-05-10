import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    stepForward(){
      this.sendAction('stepForward');
    },
    fastForward(){
      this.sendAction('fastForward');
    }
  }
});
