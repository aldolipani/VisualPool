define('visual-pool/helpers/app-version', ['exports', 'ember', 'visual-pool/config/environment'], function (exports, _ember, _visualPoolConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _visualPoolConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});