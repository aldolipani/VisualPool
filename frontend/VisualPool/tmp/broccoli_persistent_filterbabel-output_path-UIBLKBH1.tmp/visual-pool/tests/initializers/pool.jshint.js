define('visual-pool/tests/initializers/pool.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/pool.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/pool.js should pass jshint.');
  });
});