define('visual-pool/tests/unit/initializers/pool-test', ['exports', 'ember', 'visual-pool/initializers/pool', 'qunit'], function (exports, _ember, _visualPoolInitializersPool, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | pool', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _visualPoolInitializersPool['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});