define('visual-pool/tests/unit/initializers/runs-test', ['exports', 'ember', 'visual-pool/initializers/runs', 'qunit'], function (exports, _ember, _visualPoolInitializersRuns, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | runs', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _visualPoolInitializersRuns['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});