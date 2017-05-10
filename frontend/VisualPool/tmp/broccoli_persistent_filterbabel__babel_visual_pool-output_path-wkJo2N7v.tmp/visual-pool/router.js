define("visual-pool/router", ["exports", "ember", "visual-pool/config/environment"], function (exports, _ember, _visualPoolConfigEnvironment) {

  var Router = _ember["default"].Router.extend({
    location: _visualPoolConfigEnvironment["default"].locationType,
    rootURL: _visualPoolConfigEnvironment["default"].rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('poolingmethod');
  });

  exports["default"] = Router;
});