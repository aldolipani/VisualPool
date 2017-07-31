import Ember from "ember";

export default Ember.Controller.extend({
  pool:null,
  viewSelector:0,
  lPooledDocument: [],
  poolStrategySelected: null,
  topicSelected: null,
  loading: false,
  askForRelevance(topic, document, ifRelevant, ifNotRelevant){
    this.get("dialog").confirm("messages/isitrelevant", { document, topic }).then(ifRelevant, ifNotRelevant);
  },
  actions: {
    updateTopicSelector() {
      this.set('loading', true);
      let _this = this;
      Ember.run.later(function () {
        _this.set('loading', false);
      }, 100);
    },
    selectPoolStrategy(poolStrategy) {
      this.set("poolStrategySelected", poolStrategy);
    },
    selectTopic(topic) {
      this.set("topicSelected", topic);
      console.log(topic);
    },
    stepForward(){
      console.log("stepForward");
      let strategy = this.get("poolStrategySelected");
      if(!strategy) {
        strategy = this.pool.lPoolStrategy[0];
      }
      let topic = this.get("topicSelected");
      let pooledDocument = strategy.getNextDocument(topic);
      if (pooledDocument.value) {
        console.log(pooledDocument);
        if(pooledDocument.value.status !== -1) {
          this.get("lPooledDocument").pushObject(
            {
              'topic': topic,
              'document': pooledDocument.value.doc,
              'rel': pooledDocument.value.status
            });
        }else{
          this.askForRelevance(topic, pooledDocument.value.doc,
            () => {
              this.get("lPooledDocument").pushObject(
                {
                  'topic': topic,
                  'document': pooledDocument.value.doc,
                  'rel': 1
                });
              console.log(strategy.qRels);
              strategy.addAssessment(topic, pooledDocument.value.doc, 1);
            },
            () => {
              this.get("lPooledDocument").pushObject(
                {
                  'topic': topic,
                  'document': pooledDocument.value.doc,
                  'rel': 0
                });
              console.log(strategy.qRels);
              strategy.addAssessment(topic, pooledDocument.value.doc, 0);
            });
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
        this.get("lPooledDocument").pushObject(
          {
            'topic':topic,
            'document':pooledDocument.value.doc,
            'rel':pooledDocument.value.status
          }
        );
        pooledDocument = generator.next();
      }
      let evaluator = strategy.getPoolEvaluator(topic);
      pooledDocument = evaluator.next();
      while(pooledDocument.value) {
        this.get("lPooledDocument").pushObject(
          {
            'topic':topic,
            'document':pooledDocument.value.doc,
            'rel':pooledDocument.value.status
          }
        );
        pooledDocument = evaluator.next();
      }
    }
  }
});
