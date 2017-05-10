define('visual-pool/app', ['exports', 'ember', 'visual-pool/resolver', 'ember-load-initializers', 'visual-pool/config/environment'], function (exports, _ember, _visualPoolResolver, _emberLoadInitializers, _visualPoolConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _visualPoolConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _visualPoolConfigEnvironment['default'].podModulePrefix,
    Resolver: _visualPoolResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _visualPoolConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});