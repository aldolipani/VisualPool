define('visual-pool/initializers/runs', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize(application) {
    var lRuns = [];

    application.register('lRuns:main', lRuns, { instantiate: false });
    application.inject('component', 'lRuns', 'lRuns:main');
  }

  exports['default'] = {
    name: 'lRuns',
    initialize: initialize
  };
});