import Ember from "ember";

export default Ember.Component.extend({
  poolStrategies: [],
  selected: Ember.computed("poolStrategies", function () {
    return this.get("poolStrategies")[0].name;
  }),
  parameters: Ember.computed("poolStrategies", function () {
    return this.get("poolStrategies")[0].getParameters();
  }),
  actions: {
    selectPoolStrategy(name) {
      console.log(name);
      let strategy = this.get("poolStrategies").find(s => s.name === name);
      this.set("selected", strategy);
      this.set("parameters", strategy.getParameters());
    }
  }
});
