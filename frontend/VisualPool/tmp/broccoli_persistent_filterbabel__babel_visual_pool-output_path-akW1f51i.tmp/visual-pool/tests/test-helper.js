define('visual-pool/tests/test-helper', ['exports', 'visual-pool/tests/helpers/resolver', 'ember-qunit'], function (exports, _visualPoolTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_visualPoolTestsHelpersResolver['default']);
});