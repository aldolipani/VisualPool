import Ember from "ember";

export default Ember.Controller.extend({
  pool:null,
  lPooledDocument: [],
  poolStrategySelected: null,
  topicSelected: null,
  loading: false,
  actions: {
    updateTopicSelector() {
      this.set('loading', true);
      var _this = this;
      Ember.run.later(function () {
        _this.set('loading', false);
      }, 100);
    },
    selectPoolStrategy(poolStrategy) {
      this.set("poolStrategySelected", poolStrategy);
    },
    selectTopic(topic) {
      this.set("topicSelected", topic);
    },
    stepForward(){
      let strategy = this.get("poolStrategySelected");
      if(!strategy) {
        strategy = this.pool.lPoolStrategy[0];
      }
      let topic = this.get("topicSelected");
      let generator = strategy.getPoolGenerator(topic);
      let pooledDocument = generator.next();
      if (pooledDocument.value) {
        console.log(pooledDocument);
        this.get("lPooledDocument").push(pooledDocument.value);
      } else {
        let evaluator = strategy.getPoolEvaluator(topic);
        pooledDocument = evaluator.next();
        if (pooledDocument.value) {
          console.log(pooledDocument);
          this.get("lPooledDocument").push(pooledDocument.value);
        }
      }
    },
    fastForward(){
      let strategy = this.get("poolStrategySelected");
      if(!strategy) {
        strategy = this.pool.lPoolStrategy[0];
      }
      let topic = this.get("topicSelected");
      let generator = strategy.getPoolGenerator(topic);
      let pooledDocument = generator.next();
      while (pooledDocument.value) {
        this.get("lPooledDocument").push(pooledDocument.value);
        pooledDocument = generator.next();
      }
      let evaluator = strategy.getPoolEvaluator(topic);
      pooledDocument = evaluator.next();
      while(pooledDocument.value) {
        this.get("lPooledDocument").push(pooledDocument.value);
        pooledDocument = evaluator.next();
      }
    }
  }
});
