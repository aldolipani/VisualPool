define('visual-pool/controllers/poolingmethod', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    pool: null,
    lPooledDocument: [],
    poolStrategySelected: null,
    topicSelected: null,
    loading: false,
    actions: {
      updateTopicSelector: function updateTopicSelector() {
        this.set('loading', true);
        var _this = this;
        _ember['default'].run.later(function () {
          _this.set('loading', false);
        }, 100);
      },
      selectPoolStrategy: function selectPoolStrategy(poolStrategy) {
        this.set("poolStrategySelected", poolStrategy);
      },
      selectTopic: function selectTopic(topic) {
        this.set("topicSelected", topic);
      },
      stepForward: function stepForward() {
        var strategy = this.get("poolStrategySelected");
        if (!strategy) {
          strategy = this.pool.lPoolStrategy[0];
        }
        var topic = this.get("topicSelected");
        var generator = strategy.getPoolGenerator(topic);
        var pooledDocument = generator.next();
        if (pooledDocument.value) {
          console.log(pooledDocument);
          this.get("lPooledDocument").push(pooledDocument.value);
        } else {
          var evaluator = strategy.getPoolEvaluator(topic);
          pooledDocument = evaluator.next();
          if (pooledDocument.value) {
            console.log(pooledDocument);
            this.get("lPooledDocument").push(pooledDocument.value);
          }
        }
      },
      fastForward: function fastForward() {
        var strategy = this.get("poolStrategySelected");
        if (!strategy) {
          strategy = this.pool.lPoolStrategy[0];
        }
        var topic = this.get("topicSelected");
        var generator = strategy.getPoolGenerator(topic);
        var pooledDocument = generator.next();
        while (pooledDocument.value) {
          this.get("lPooledDocument").push(pooledDocument.value);
          pooledDocument = generator.next();
        }
        var evaluator = strategy.getPoolEvaluator(topic);
        pooledDocument = evaluator.next();
        while (pooledDocument.value) {
          this.get("lPooledDocument").push(pooledDocument.value);
          pooledDocument = evaluator.next();
        }
      }
    }
  });
});