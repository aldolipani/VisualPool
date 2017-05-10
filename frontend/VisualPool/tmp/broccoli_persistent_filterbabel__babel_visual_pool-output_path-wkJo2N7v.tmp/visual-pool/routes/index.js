define("visual-pool/routes/index", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);
      this.replaceWith('poolingmethod');
    }
  });
});