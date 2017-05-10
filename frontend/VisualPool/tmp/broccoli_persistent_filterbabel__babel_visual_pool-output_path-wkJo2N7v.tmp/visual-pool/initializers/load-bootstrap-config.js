define('visual-pool/initializers/load-bootstrap-config', ['exports', 'visual-pool/config/environment', 'ember-bootstrap/config'], function (exports, _visualPoolConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_visualPoolConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});