define('visual-pool/tests/helpers/resolver', ['exports', 'visual-pool/resolver', 'visual-pool/config/environment'], function (exports, _visualPoolResolver, _visualPoolConfigEnvironment) {

  var resolver = _visualPoolResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _visualPoolConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _visualPoolConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});