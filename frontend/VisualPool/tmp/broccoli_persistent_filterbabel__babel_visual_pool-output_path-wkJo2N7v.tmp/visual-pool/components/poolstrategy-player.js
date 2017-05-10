define('visual-pool/components/poolstrategy-player', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      stepForward: function stepForward() {
        this.sendAction('stepForward');
      },
      fastForward: function fastForward() {
        this.sendAction('fastForward');
      }
    }
  });
});