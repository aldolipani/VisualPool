define('visual-pool/tests/initializers/runs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/runs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/runs.js should pass jshint.');
  });
});