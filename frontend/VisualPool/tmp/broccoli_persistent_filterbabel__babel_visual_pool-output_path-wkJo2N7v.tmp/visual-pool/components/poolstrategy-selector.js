define("visual-pool/components/poolstrategy-selector", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    poolStrategies: [],
    selected: _ember["default"].computed("poolStrategies", function () {
      return this.get("poolStrategies")[0].name;
    }),
    parameters: _ember["default"].computed("poolStrategies", function () {
      return this.get("poolStrategies")[0].getParameters();
    }),
    actions: {
      selectPoolStrategy: function selectPoolStrategy(name) {
        console.log(name);
        var strategy = this.get("poolStrategies").find(function (s) {
          return s.name === name;
        });
        this.set("selected", strategy);
        this.set("parameters", strategy.getParameters());
      }
    }
  });
});