define('visual-pool/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'visual-pool/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _visualPoolConfigEnvironment) {
  var _config$APP = _visualPoolConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});