define('visual-pool/tests/helpers/start-app', ['exports', 'ember', 'visual-pool/app', 'visual-pool/config/environment'], function (exports, _ember, _visualPoolApp, _visualPoolConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _visualPoolConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _visualPoolApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});