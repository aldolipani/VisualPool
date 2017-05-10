define("visual-pool/components/topic-selector", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    topics: [],
    didRender: function didRender() {
      if (this.topics.length > 0) {
        this.sendAction("selectTopic", this.topics[0].id);
      }
    },
    actions: {
      selectTopic: function selectTopic(topic) {
        this.sendAction("selectTopic", topic);
      }
    }
  });
});