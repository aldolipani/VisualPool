"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('visual-pool/app', ['exports', 'ember', 'visual-pool/resolver', 'ember-load-initializers', 'visual-pool/config/environment'], function (exports, _ember, _visualPoolResolver, _emberLoadInitializers, _visualPoolConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _visualPoolConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _visualPoolConfigEnvironment['default'].podModulePrefix,
    Resolver: _visualPoolResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _visualPoolConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('visual-pool/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('visual-pool/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('visual-pool/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _emberBootstrapComponentsBsAccordionItemBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItemBody['default'];
    }
  });
});
define('visual-pool/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _emberBootstrapComponentsBsAccordionItemTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItemTitle['default'];
    }
  });
});
define('visual-pool/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('visual-pool/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroup['default'];
    }
  });
});
define('visual-pool/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _emberBootstrapComponentsBsButtonGroupButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroupButton['default'];
    }
  });
});
define('visual-pool/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButton['default'];
    }
  });
});
define('visual-pool/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('visual-pool/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('visual-pool/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('visual-pool/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('visual-pool/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _emberBootstrapComponentsBsDropdownMenuDivider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuDivider['default'];
    }
  });
});
define('visual-pool/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _emberBootstrapComponentsBsDropdownMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuItem['default'];
    }
  });
});
define('visual-pool/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('visual-pool/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('visual-pool/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _emberBootstrapComponentsBsFormElementControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControl['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementControlCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlCheckbox['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _emberBootstrapComponentsBsFormElementControlInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlInput['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _emberBootstrapComponentsBsFormElementControlTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlTextarea['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _emberBootstrapComponentsBsFormElementErrors) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementErrors['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _emberBootstrapComponentsBsFormElementFeedbackIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementFeedbackIcon['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _emberBootstrapComponentsBsFormElementHelpText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementHelpText['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _emberBootstrapComponentsBsFormElementLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLabel['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontal['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInline['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVertical) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVertical['default'];
    }
  });
});
define('visual-pool/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox['default'];
    }
  });
});
define('visual-pool/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('visual-pool/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _emberBootstrapComponentsBsModalSimple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalSimple['default'];
    }
  });
});
define('visual-pool/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('visual-pool/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('visual-pool/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('visual-pool/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('visual-pool/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('visual-pool/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _emberBootstrapComponentsBsModalHeaderClose) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderClose['default'];
    }
  });
});
define('visual-pool/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _emberBootstrapComponentsBsModalHeaderTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderTitle['default'];
    }
  });
});
define('visual-pool/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('visual-pool/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('visual-pool/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _emberBootstrapComponentsBsNavLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavLinkTo['default'];
    }
  });
});
define('visual-pool/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('visual-pool/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('visual-pool/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('visual-pool/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('visual-pool/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('visual-pool/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('visual-pool/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('visual-pool/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('visual-pool/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('visual-pool/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('visual-pool/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('visual-pool/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define("visual-pool/components/canvas-visual-pool-view-selector", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    viewSelector: 0,
    normalView: true,
    uniqueView: false,
    poolView: false,
    actions: {
      changeView: function changeView() {
        this.set("viewSelector", (this.get("viewSelector") + 1) % 3);

        var viewSelector = this.get("viewSelector");
        if (viewSelector === 0) {
          this.set("normalView", true);
          this.set("uniqueView", false);
          this.set("poolView", false);
        } else if (viewSelector === 1) {
          this.set("normalView", false);
          this.set("uniqueView", true);
          this.set("poolView", false);
        } else if (viewSelector === 2) {
          this.set("normalView", false);
          this.set("uniqueView", false);
          this.set("poolView", true);
        }
      }
    }
  });
});
define("visual-pool/components/canvas-visual-pool", ["exports", "ember"], function (exports, _ember) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var LRunsViewer = (function () {
    function LRunsViewer(x, y, p) {
      _classCallCheck(this, LRunsViewer);

      this.topicDocument = {};
      this.x = x;
      this.y = y;
      this.lRuns = [];
      this.mRuns = {};
      this.nRuns = 0;
      this.maxNRunRecords = 0;
      this.p = p;
      this.orderedKeys = [];
    }

    _createClass(LRunsViewer, [{
      key: "updateDocument",
      value: function updateDocument(pooledDocument, topic) {
        this.topicDocument[topic][pooledDocument.document] = pooledDocument.rel;
      }
    }, {
      key: "getMaxNRunRecords",
      value: function getMaxNRunRecords(runs) {
        var max = 0;
        for (var key in runs.mRun) {
          if (runs.mRun[key].lRunRecord.length > max) {
            max = runs.mRun[key].lRunRecord.length;
          }
        }
        return max;
      }
    }, {
      key: "updateLRuns",
      value: function updateLRuns(lRuns) {
        for (var i = 0; i < lRuns.length; i++) {
          if (!this.mRuns[lRuns[i].id]) {
            this.mRuns[lRuns[i].id] = new RunsViewer(lRuns[i], this.topicDocument, this.p);
            this.nRuns++;
            var tMaxNRunRecords = this.getMaxNRunRecords(lRuns[i]);
            if (tMaxNRunRecords > this.maxNRunRecords) {
              this.maxNRunRecords = tMaxNRunRecords;
            }
          }
        }
        this.orderedKeys = Object.keys(this.mRuns).sort();
      }
    }, {
      key: "getMaxSizeRun",
      value: function getMaxSizeRun(mRuns, topic) {
        var max = 0;
        for (var key in mRuns) {
          if (mRuns[key].runs.mRun[topic] && mRuns[key].runs.mRun[topic].lRunRecord.length > max) {
            max = mRuns[key].runs.mRun[topic].lRunRecord.length;
          }
        }
        return max;
      }
    }, {
      key: "drawRunDetail",
      value: function drawRunDetail(key, x, printKey) {
        var p = this.p;
        p.fill(0);
        p.textSize(12);
        if (printKey) {
          p.text(key, x + 10, 25);
        }
        p.fill(255, 215, 0);
        p.rect(x, 10, 5, p.height);
      }
    }, {
      key: "draw",
      value: function draw(topic, viewSelector) {
        var p = this.p;
        var w = (p.width - this.x) / this.nRuns;
        var h = (p.height - this.y) / this.maxNRunRecords;
        var i = 0;
        if (viewSelector === 0) {
          for (var j = this.orderedKeys.length - 1; j >= 0; j--) {
            var key = this.orderedKeys[j];
            this.p.textAlign(this.p.LEFT, this.p.BASELINE);
            //this.p.fill("black");
            //this.p.text(key, this.x + w * i + 5, this.y + 5);
            this.mRuns[key].draw(p.width - w - this.x - w * i, this.y + 10, w, h, topic, viewSelector);
            i++;
          }
        } else {
          var viewDoc = new Set();
          var maxJ = this.getMaxSizeRun(this.mRuns, topic);
          for (var j = 0; j < maxJ; j++) {
            i = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.orderedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                this.p.textAlign(this.p.LEFT, this.p.BASELINE);
                if (this.mRuns[key].runs.mRun[topic].lRunRecord.length > j && !viewDoc.has(this.mRuns[key].runs.mRun[topic].lRunRecord[j].doc)) {
                  this.mRuns[key].drawSingleDoc(j, this.x + w * i, this.y + 10, w, h, topic, viewSelector);
                  viewDoc.add(this.mRuns[key].runs.mRun[topic].lRunRecord[j].doc);
                  if (viewSelector === 2) {
                    i = (i + 1) % Object.keys(this.mRuns).length;
                  }
                }
                if (viewSelector === 1) {
                  i = (i + 1) % Object.keys(this.mRuns).length;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"]) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }
        i = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.orderedKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            if (p.mouseX && 0 <= p.mouseY && p.mouseY <= p.height && this.x + w * i <= p.mouseX && p.mouseX <= this.x + w * (i + 1)) {
              //console.log("selected run + " + key);
              if (viewSelector <= 1) {
                this.drawRunDetail(key, this.x + w * i, true);
              } else {
                this.drawRunDetail(key, this.x + w * i, false);
              }
            }
            i++;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (viewSelector > 0) {
          if (this.topicDocument[topic]["@selectedDoc"]) {
            this.p.textSize(11);
            this.p.fill(0);
            this.p.text(this.topicDocument[topic]["@selectedDoc"], this.topicDocument[topic]["@selectedX"], this.topicDocument[topic]["@selectedY"]);
          }
        }
      }
    }]);

    return LRunsViewer;
  })();

  var EnumPooledDocumentState = {
    UNSELECTED: -3,
    SELECTED: -2,
    UNKNOWN: -1,
    NON_RELEVANT: 0,
    RELEVANT: 1
  };

  var RunsViewer = (function () {
    function RunsViewer(runs, topicDocument, p) {
      _classCallCheck(this, RunsViewer);

      this.runs = runs;
      this.p = p;
      this.initializeDocs(topicDocument);
    }

    _createClass(RunsViewer, [{
      key: "initializeDocs",
      value: function initializeDocs(topicDocument) {
        var runs = this.runs;
        for (var topic in runs.mRun) {
          if (!topicDocument[topic]) {
            topicDocument[topic] = {};
          }
          for (var i = 0; i < runs.mRun[topic].lRunRecord.length; i++) {
            var doc = runs.mRun[topic].lRunRecord[i].doc;
            if (!topicDocument[topic][doc]) {
              topicDocument[topic][doc] = EnumPooledDocumentState.UNSELECTED;
            }
          }
        }
        this.topicDocument = topicDocument;
      }
    }, {
      key: "drawDoc",
      value: function drawDoc(doc, x, y, w, h, topic) {
        var p = this.p;
        p.noStroke();
        if (x <= p.mouseX && p.mouseX <= x + w && y <= p.mouseY && p.mouseY <= y + h) {
          if (this.topicDocument[topic]["@selectedDoc"] !== doc) {
            this.topicDocument[topic]["@selectedDoc"] = doc;
            this.topicDocument[topic]["@selectedValue"] = this.topicDocument[topic][doc];
            this.topicDocument[topic]["@selectedX"] = x + 10;
            this.topicDocument[topic]["@selectedY"] = y + h / 2 + 4;
          }
        }
        p.fill(40);
        if (this.topicDocument[topic]["@selectedDoc"] === doc) {
          p.fill("#dd8b0d");
        } else if (this.topicDocument[topic][doc] === EnumPooledDocumentState.UNSELECTED) {
          p.fill("#DDDDDD");
        } else if (this.topicDocument[topic][doc] === EnumPooledDocumentState.RELEVANT) {
          p.fill("#009E73");
        } else if (this.topicDocument[topic][doc] === EnumPooledDocumentState.NON_RELEVANT) {
          p.fill("#9E002A");
        } else if (this.topicDocument[topic][doc] === EnumPooledDocumentState.UNKNOWN) {
          p.fill("#000000");
        } else {
          p.fill("#AAAAAA"); // selected
        }
        p.rect(x, y, w, h);

        // reset view
        if (p.mouseX < 0 || p.mouseX > p.width || p.mouseY < 0 || p.mouseY > p.height) {
          this.topicDocument[topic]["@selectedDoc"] = null;
          this.topicDocument[topic]["@selectedValue"] = null;
        }
        p.fill(255);
      }
    }, {
      key: "draw",
      value: function draw(x, y, w, h, topic) {
        var runs = this.runs;
        if (runs.mRun[topic]) {
          for (var i = 0; i < runs.mRun[topic].lRunRecord.length; i++) {
            this.drawDoc(runs.mRun[topic].lRunRecord[i].doc, x, y + i * h, w - 1, h, topic);
          }
        }
        if (this.topicDocument[topic]["@selectedDoc"] && this.topicDocument[topic]["@selectedX"] === x + 10) {
          this.p.textSize(11);
          this.p.fill(0);
          this.p.text(this.topicDocument[topic]["@selectedDoc"], this.topicDocument[topic]["@selectedX"], this.topicDocument[topic]["@selectedY"]);
        }
      }
    }, {
      key: "drawSingleDoc",
      value: function drawSingleDoc(docIndex, x, y, w, h, topic) {
        var runs = this.runs;
        if (runs.mRun[topic]) {
          var i = docIndex;
          this.drawDoc(runs.mRun[topic].lRunRecord[i].doc, x, y + i * h, w - 1, h, topic);
        }
      }
    }]);

    return RunsViewer;
  })();

  exports["default"] = _ember["default"].Component.extend({
    //store: Ember.inject.service(),
    viewSelector: 0,
    lPooledDocument: [],
    sketch: null,
    didRender: function didRender() {
      //var pool = this.pool;
      var lRuns = this.lRuns;
      var _this = this;
      if (!this.sketch) {
        this.sketch = function (p) {
          var canvasContainer = _ember["default"].$('#canvasVisualPoolContainer');
          var lRunsViewer = new LRunsViewer(0, 0, p);
          var lPooledDocument_i = 0;

          p.setup = function () {
            p.createCanvas(canvasContainer.width(), canvasContainer.height());
            p.background(255);
            p.frameRate(24);
          };

          var nRuns = 0;
          p.draw = function () {
            var viewSelector = _this.get("viewSelector");
            var topicSelected = _this.get("topicSelected");
            p.background(255);

            if (nRuns - lRuns.length !== 0) {
              nRuns = lRuns.length;
              lRunsViewer.updateLRuns(lRuns);
              // update scale docs
              // update runs
            }
            var lPooledDocument = _this.get("lPooledDocument");
            while (lPooledDocument_i < lPooledDocument.length) {
              lRunsViewer.updateDocument(lPooledDocument[lPooledDocument_i], topicSelected);
              lPooledDocument_i++;
            }

            if (topicSelected) {
              lRunsViewer.draw(topicSelected, viewSelector);
            }
            //p.text(nRuns, 50, 20);
            //if(pool.lTopicPool[0])
            //	p.text(pool.lTopicPool[0].docs.size, 60, 20);

            //p.text("Pool", 300, 20);
            p.textAlign(p.LEFT, p.BASELINE);
            p.fill("black");
            //p.text("Runs", 0, 10);

            // MOUSE POP-UP
            //detailedContextView.draw(p.mouseX, p.mouseY);
          };

          p.windowResized = function () {
            p.resizeCanvas(canvasContainer.width(), canvasContainer.height());
          };
        };

        /* jshint ignore:start */
        new p5(this.sketch, "canvasVisualPoolContainer");
        /* jshint ignore:end */
      }
    }
  });
});
define('visual-pool/components/dialog-body', ['exports', 'ember-dialog/components/dialog-body'], function (exports, _emberDialogComponentsDialogBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDialogComponentsDialogBody['default'];
    }
  });
});
define('visual-pool/components/download-qrels', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    lPooledDocument: [],
    actions: {
      download: function download() {
        var element = document.createElement('a');

        var content = "";
        var lPooledDocument = this.get("lPooledDocument");
        for (var i = 0; i < lPooledDocument.length; i++) {
          var pooledDocument = lPooledDocument[i];
          content += encodeURI(pooledDocument.topic) + "%20Q0%20" + encodeURI(pooledDocument.document) + "%20" + encodeURI(pooledDocument.rel) + "%0A";
        }

        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + content);
        element.setAttribute('download', 'qRels.txt');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }
    }
  });
});
define('visual-pool/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('visual-pool/components/latex-maths', ['exports', 'ember', 'ember-cli-latex-maths/components/latex-maths'], function (exports, _ember, _emberCliLatexMathsComponentsLatexMaths) {
  exports['default'] = _emberCliLatexMathsComponentsLatexMaths['default'];
});
define('visual-pool/components/poolstrategy-log', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    lPooledDocument: [],
    reverse: (function () {
      return this.get('lPooledDocument').toArray().reverse();
    }).property('lPooledDocument.@each'),
    actions: {}
  });
});
define('visual-pool/components/poolstrategy-player', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      stepForward: function stepForward() {
        this.sendAction('stepForward');
      },
      fastForward: function fastForward() {
        this.sendAction('fastForward');
      }
    }
  });
});
define("visual-pool/components/poolstrategy-selector", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    poolStrategies: [],
    selected: _ember["default"].computed("poolStrategies", function () {
      return this.get("poolStrategies")[0].name;
    }),
    parameters: _ember["default"].computed("poolStrategies", function () {
      return this.get("poolStrategies")[0].getParameters();
    }),
    actions: {
      selectPoolStrategy: function selectPoolStrategy(name) {
        console.log(name);
        var strategy = this.get("poolStrategies").find(function (s) {
          return s.name === name;
        });
        this.set("selected", strategy);
        this.set("parameters", strategy.getParameters());
      }
    }
  });
});
define("visual-pool/components/poolstrategy-stats", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    topicSelected: "null",
    lPooledDocument: [],
    nT: (function () {
      var topics = this.pool.lTopicPool;
      var res = "|T| = ";
      if (topics) {
        return res + topics.length;
      } else {
        return res + "0";
      }
    }).property('pool.lTopicPool.@each'),
    nRt: (function () {
      var lRuns = this.pool.lRuns;
      var topic = this.get("topicSelected");
      var res = "|R_{" + topic + "}| = ";
      if (topic === "null") {
        return res + "0";
      } else {
        var count = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = lRuns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var runs = _step.value;

            if (runs.mRun[topic]) {
              count++;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return res + count;
      }
    }).property('topicSelected', 'pool.lRuns.@each'),
    sNRt: (function () {
      var lRuns = this.pool.lRuns;
      var topic = this.get("topicSelected");
      var res = "\\sum_{r_{" + topic + "} \\in R_{" + topic + "}} \\left|r_{" + topic + "}\\right| = ";
      if (topic === "null") {
        return res + "0";
      } else {
        var count = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = lRuns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var runs = _step2.value;

            if (runs.mRun[topic]) {
              count += runs.mRun[topic].lRunRecord.length;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return res + count;
      }
    }).property('topicSelected', 'pool.lRuns.@each'),
    sURt: (function () {
      var mTopicPool = this.pool.mTopicPool;
      var topic = this.get("topicSelected");
      var res = "\\left|\\bigcup_{r_{" + topic + "} \\in R_{" + topic + "}} r_{" + topic + "}\\right| = ";
      if (topic === "null") {
        return res + "0";
      } else {
        var count = 0;
        if (mTopicPool[topic]) {
          count += mTopicPool[topic].docs.size;
        }
        return res + count;
      }
    }).property('topicSelected', 'pool.lRuns.@each'),
    nR: (function () {
      var lRuns = this.pool.lRuns;
      return "|R| = " + lRuns.length;
    }).property('pool.lRuns.@each'),
    sNR: (function () {
      var lRuns = this.pool.lRuns;
      var res = "\\sum_{r \\in R} \\left|r\\right| = ";
      var count = 0;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = lRuns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var runs = _step3.value;

          for (var topic in runs.mRun) {
            count += runs.mRun[topic].lRunRecord.length;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return res + count;
    }).property('pool.lRuns.@each'),
    sUR: (function () {
      var mTopicPool = this.pool.mTopicPool;
      var res = "\\left|\\bigcup_{r \\in R} r\\right| = ";
      var count = 0;
      for (var topic in mTopicPool) {
        count += mTopicPool[topic].docs.size;
      }
      return res + count;
    }).property('pool.lRuns.@each'),
    nQPt: (function () {
      var lPooledDocument = this.get("lPooledDocument");
      var topic = this.get("topicSelected");
      var res = "|Q^+_{" + topic + "}| = ";
      var count = 0;
      var docs = new Set();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = lPooledDocument[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var pooledDocument = _step4.value;

          if (!docs.has(pooledDocument.document) && pooledDocument.rel >= 1 && pooledDocument.topic === topic) {
            docs.add(pooledDocument.document);
            count++;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return res + count;
    }).property('lPooledDocument.@each', 'topicSelected'),
    nQNt: (function () {
      var lPooledDocument = this.get("lPooledDocument");
      var topic = this.get("topicSelected");
      var res = "|Q^-_{" + topic + "}| = ";
      var count = 0;
      var docs = new Set();
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = lPooledDocument[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var pooledDocument = _step5.value;

          if (!docs.has(pooledDocument.document) && pooledDocument.rel === 0 && pooledDocument.topic === topic) {
            docs.add(pooledDocument.document);
            count++;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return res + count;
    }).property('lPooledDocument.@each', 'topicSelected'),
    nQQt: (function () {
      var lPooledDocument = this.get("lPooledDocument");
      var topic = this.get("topicSelected");
      var res = "|Q^?_{" + topic + "}| = ";
      var count = 0;
      var docs = new Set();
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = lPooledDocument[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var pooledDocument = _step6.value;

          if (!docs.has(pooledDocument.document) && pooledDocument.rel < 0 && pooledDocument.topic === topic) {
            docs.add(pooledDocument.document);
            count++;
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return res + count;
    }).property('lPooledDocument.@each', 'topicSelected'),
    nQt: (function () {
      var lPooledDocument = this.get("lPooledDocument");
      var topic = this.get("topicSelected");
      var res = "|Q_{" + topic + "}| = ";
      var count = 0;
      var docs = new Set();
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = lPooledDocument[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var pooledDocument = _step7.value;

          if (!docs.has(pooledDocument.document) && pooledDocument.topic === topic) {
            docs.add(pooledDocument.document);
            count++;
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
            _iterator7["return"]();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      return res + count;
    }).property('lPooledDocument.@each', 'topicSelected'),
    nQP: (function () {
      var lPooledDocument = this.get("lPooledDocument");
      var res = "|Q^+| = ";
      var count = 0;
      var docs = new Set();
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = lPooledDocument[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var pooledDocument = _step8.value;

          if (!docs.has(pooledDocument.document) && pooledDocument.rel >= 1) {
            docs.add(pooledDocument.document);
            count++;
          }
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
            _iterator8["return"]();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      return res + count;
    }).property('lPooledDocument.@each', 'topicSelected'),
    nQN: (function () {
      var lPooledDocument = this.get("lPooledDocument");
      var res = "|Q^-| = ";
      var count = 0;
      var docs = new Set();
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = lPooledDocument[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var pooledDocument = _step9.value;

          if (!docs.has(pooledDocument.document) && pooledDocument.rel === 0) {
            docs.add(pooledDocument.document);
            count++;
          }
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
            _iterator9["return"]();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }

      return res + count;
    }).property('lPooledDocument.@each', 'topicSelected'),
    nQQ: (function () {
      var lPooledDocument = this.get("lPooledDocument");
      var res = "|Q^?| = ";
      var count = 0;
      var docs = new Set();
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = lPooledDocument[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var pooledDocument = _step10.value;

          if (!docs.has(pooledDocument.document) && pooledDocument.rel < 0) {
            docs.add(pooledDocument.document);
            count++;
          }
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }

      return res + count;
    }).property('lPooledDocument.@each', 'topicSelected'),
    nQ: (function () {
      var lPooledDocument = this.get("lPooledDocument");
      var res = "|Q| = ";
      var count = 0;
      var docs = new Set();
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = lPooledDocument[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var pooledDocument = _step11.value;

          if (!docs.has(pooledDocument.document)) {
            docs.add(pooledDocument.document);
            count++;
          }
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
            _iterator11["return"]();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      return res + count;
    }).property('lPooledDocument.@each', 'topicSelected')
  });
});
define('visual-pool/components/presenter', ['exports', 'ember-dialog/components/presenter'], function (exports, _emberDialogComponentsPresenter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDialogComponentsPresenter['default'];
    }
  });
});
define("visual-pool/components/topic-selector", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    topics: [],
    topicSelected: "Null",
    didRender: function didRender() {
      if (this.topics.length > 0) {
        this.sendAction("selectTopic", this.topics[0].id);
      }
    },
    actions: {
      selectTopic: function selectTopic(topic) {
        this.set("topicSelected", topic);
        this.sendAction("selectTopic", topic);
      }
    }
  });
});
define("visual-pool/components/upload-qrels", ["exports", "ember"], function (exports, _ember) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var EnumPooledDocumentState = {
    UNSELECTED: -3,
    SELECTED: -2,
    UNKNOWN: -1,
    NON_RELEVANT: 0,
    RELEVANT: 1
  };

  exports.EnumPooledDocumentState = EnumPooledDocumentState;

  var QRels = (function () {
    function QRels(id, mQRel) {
      _classCallCheck(this, QRels);

      if (!arguments.length) {
        this.id = "default";
        this.mQRel = {};
      } else {
        this.id = id;
        this.mQRel = mQRel;
      }
    }

    _createClass(QRels, [{
      key: "getQRel",
      value: function getQRel(topic) {
        if (!this.mQRel[topic]) {
          this.mQRel[topic] = new QRel(topic, {});
        }
        return this.mQRel[topic];
      }
    }, {
      key: "merge",
      value: function merge(qRels) {
        if (!this.mQRel) {
          for (var topic in qRels.mQRel) {
            if (this.mQRel[topic]) {
              for (var doc in qRels.mQRel[topic]) {
                if (!this.mQRel[topic][doc]) {
                  this.mQRel[topic][doc] = qRels.mQRel[topic][doc];
                }
              }
            } else {
              this.mQRel[topic] = qRels.mQRel[topic];
            }
          }
        } else {
          this.mQRel = qRels.mQRel;
        }
      }
    }, {
      key: "addAssessment",
      value: function addAssessment(topic, doc, rel) {
        this.getQRel(topic).addAssessment(doc, rel);
      }
    }]);

    return QRels;
  })();

  exports.QRels = QRels;

  var QRel = (function () {
    function QRel(id, mQRelRecord) {
      _classCallCheck(this, QRel);

      this.id = id;
      this.mQRelRecord = mQRelRecord;
      this.lastRel = 0;
    }

    _createClass(QRel, [{
      key: "getRel",
      value: function getRel(doc) {
        if (this.mQRelRecord[doc]) {
          return this.mQRelRecord[doc].score;
        } else {
          return EnumPooledDocumentState.UNSELECTED;
        }
      }
    }, {
      key: "addAssessment",
      value: function addAssessment(doc, rel) {
        this.lastRel = rel;
        this.mQRelRecord[doc] = new QRelRecord(0, doc, rel);
      }
    }]);

    return QRel;
  })();

  var QRelRecord = function QRelRecord(iter, doc, score) {
    _classCallCheck(this, QRelRecord);

    //this.iter = iter;
    this.doc = doc;
    this.score = score;
  };

  function parseQRels(id, text) {
    var reSs = new RegExp("\\s+");
    var reCs = new RegExp("\n+");
    var lines = text.split(reCs);
    var mem = {};
    for (var i = 0; i < lines.length - 1; i++) {
      var elems = lines[i].trim().split(reSs);
      var topicId = elems[0].trim();
      var documentId = elems[2].trim();
      var rel = parseInt(elems[3].trim());
      if (rel > 1) {
        rel = 1;
      }
      var qRelRecord = new QRelRecord(0, documentId, rel);
      if (topicId in mem) {
        mem[topicId].mQRelRecord[qRelRecord.doc] = qRelRecord;
      } else {
        mem[topicId] = new QRel(topicId, {});
        mem[topicId].mQRelRecord[qRelRecord.doc] = qRelRecord;
      }
    }
    //  return QRels.create({'id':id, 'mQRels':mem});
    return new QRels(id, mem);
  }

  exports["default"] = _ember["default"].Component.extend({
    store: _ember["default"].inject.service(),
    actions: {
      upload: function upload(event) {
        var _this = this;

        var reader = new FileReader();
        var file = event.target.files[0];
        var txtData = undefined;
        reader.onload = function () {
          txtData = reader.result;
          var qRels = parseQRels(file.name, txtData);
          _this.pool.setQRels(qRels);
          console.log("read " + file.name);
        };
        if (file) {
          reader.readAsText(file);
        }
        this.sendAction('updatePoolQRels');
      }
    }
  });
});
define("visual-pool/components/upload-runs", ["exports", "ember"], function (exports, _ember) {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Runs = function Runs(id, mRun) {
    _classCallCheck(this, Runs);

    this.id = id;
    this.mRun = mRun;
  };

  var Run = function Run(id, lRunRecord) {
    _classCallCheck(this, Run);

    this.id = id;
    this.lRunRecord = lRunRecord;
  };

  var RunRecord = function RunRecord(iter, doc, rank, score) {
    _classCallCheck(this, RunRecord);

    //this.iter = iter;
    this.doc = doc;
    this.rank = rank;
    this.score = score;
  };

  exports.Runs = Runs;
  exports.Run = Run;
  exports.RunRecord = RunRecord;

  function parseRuns(id, text, runSize) {
    var reSs = new RegExp("\\s+");
    var reCs = new RegExp("\n+");
    var lines = text.split(reCs);
    var mem = {};
    for (var i = 0; i < lines.length - 1; i++) {
      var elems = lines[i].trim().split(reSs);
      var topicId = elems[0].trim();
      var documentId = elems[2].trim();
      var runRecord = new RunRecord(0, documentId, parseInt(elems[3]), parseFloat(elems[4]));
      if (topicId in mem) {
        if (mem[topicId].lRunRecord.length < runSize) {
          mem[topicId].lRunRecord = mem[topicId].lRunRecord.concat(runRecord);
        }
      } else {
        var run = new Run(topicId, [runRecord]);
        mem[topicId] = run;
      }
    }
    // clean input
    for (var key in mem) {
      var _run = mem[key];
      var lRunRecord = _run.lRunRecord;
      // remove duplicates
      // TODO
      // sort
      var slRunRecord = lRunRecord.sort(function (a, b) {
        return b.score - a.score;
      });
      // reconstruct rank
      for (var j = 0; j < slRunRecord.length; j++) {
        slRunRecord[j].rank = j + 1;
      }
      _run.lRunRecord = slRunRecord;
    }
    return new Runs(id, mem);
  }

  exports["default"] = _ember["default"].Component.extend({
    store: _ember["default"].inject.service(),
    runSize: 100,
    actions: {
      upload: function upload(event) {
        var _this = this;

        var _loop = function (i) {
          var reader = new FileReader();
          var file = event.target.files[i];
          var txtData = undefined;
          reader.onload = function () {
            txtData = reader.result;
            var runs = parseRuns(file.name, txtData, _this.get("runSize"));
            _this.pool.addRuns(runs);
            _this.lRuns.pushObject(runs);
            console.log("read " + file.name);
          };
          if (file) {
            reader.readAsText(file);
          }
        };

        for (var i = 0; i < event.target.files.length; i++) {
          _loop(i);
        }
        this.sendAction('updateTopicSelector'); //this makes the topic selector to render again in order to be updated
      },
      runSizeChange: function runSizeChange(value) {
        this.set("runSize", value);
      }
    }
  });
});
/*jshint loopfunc: true */
define("visual-pool/controllers/app", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    pool: null,
    viewSelector: 0,
    lPooledDocument: [],
    poolStrategySelected: null,
    topicSelected: null,
    loading: false,
    askForRelevance: function askForRelevance(topic, document, ifRelevant, ifNotRelevant) {
      this.get("dialog").confirm("messages/isitrelevant", { document: document, topic: topic }).then(ifRelevant, ifNotRelevant);
    },
    actions: {
      updateTopicSelector: function updateTopicSelector() {
        this.set('loading', true);
        var _this = this;
        _ember["default"].run.later(function () {
          _this.set('loading', false);
        }, 100);
      },
      selectPoolStrategy: function selectPoolStrategy(poolStrategy) {
        this.set("poolStrategySelected", poolStrategy);
      },
      selectTopic: function selectTopic(topic) {
        this.set("topicSelected", topic);
        console.log(topic);
      },
      stepForward: function stepForward() {
        var _this2 = this;

        console.log("stepForward");
        var strategy = this.get("poolStrategySelected");
        if (!strategy) {
          strategy = this.pool.lPoolStrategy[0];
        }
        var topic = this.get("topicSelected");
        var pooledDocument = strategy.getNextDocument(topic);
        if (pooledDocument.value) {
          console.log(pooledDocument);
          if (pooledDocument.value.status !== -1) {
            this.get("lPooledDocument").pushObject({
              'topic': topic,
              'document': pooledDocument.value.doc,
              'rel': pooledDocument.value.status
            });
          } else {
            this.askForRelevance(topic, pooledDocument.value.doc, function () {
              _this2.get("lPooledDocument").pushObject({
                'topic': topic,
                'document': pooledDocument.value.doc,
                'rel': 1
              });
              console.log(strategy.qRels);
              strategy.addAssessment(topic, pooledDocument.value.doc, 1);
            }, function () {
              _this2.get("lPooledDocument").pushObject({
                'topic': topic,
                'document': pooledDocument.value.doc,
                'rel': 0
              });
              console.log(strategy.qRels);
              strategy.addAssessment(topic, pooledDocument.value.doc, 0);
            });
          }
        }
      },
      fastForward: function fastForward() {
        var _this3 = this;

        console.log("stepForward");
        var strategy = this.get("poolStrategySelected");
        if (!strategy) {
          strategy = this.pool.lPoolStrategy[0];
        }
        var topic = this.get("topicSelected");
        var pooledDocument = strategy.getNextDocument(topic);
        while (pooledDocument.value) {
          console.log(pooledDocument);
          if (pooledDocument.value.status !== -1) {
            this.get("lPooledDocument").pushObject({
              'topic': topic,
              'document': pooledDocument.value.doc,
              'rel': pooledDocument.value.status
            });
            pooledDocument = strategy.getNextDocument(topic);
          } else {
            this.askForRelevance(topic, pooledDocument.value.doc, function () {
              _this3.get("lPooledDocument").pushObject({
                'topic': topic,
                'document': pooledDocument.value.doc,
                'rel': 1
              });
              console.log(strategy.qRels);
              strategy.addAssessment(topic, pooledDocument.value.doc, 1);
            }, function () {
              _this3.get("lPooledDocument").pushObject({
                'topic': topic,
                'document': pooledDocument.value.doc,
                'rel': 0
              });
              console.log(strategy.qRels);
              strategy.addAssessment(topic, pooledDocument.value.doc, 0);
            });
            break;
          }
        }
      }
    }
  });
});
define('visual-pool/helpers/app-version', ['exports', 'ember', 'visual-pool/config/environment'], function (exports, _ember, _visualPoolConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _visualPoolConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('visual-pool/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('visual-pool/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('visual-pool/helpers/hash', ['exports', 'ember-dialog/helpers/hash'], function (exports, _emberDialogHelpersHash) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDialogHelpersHash['default'];
    }
  });
});
define('visual-pool/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define("visual-pool/helpers/poolstrategy-log-rel", ["exports", "ember"], function (exports, _ember) {
  exports.poolstrategyLogRel = poolstrategyLogRel;

  function poolstrategyLogRel(params /*, hash*/) {
    var rel = params[0];
    if (rel === 0) {
      return "non_relevant";
    } else if (rel === -1) {
      return "unknown";
    } else if (rel === 1) {
      return "relevant";
    }
  }

  exports["default"] = _ember["default"].Helper.helper(poolstrategyLogRel);
});
define('visual-pool/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('visual-pool/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'visual-pool/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _visualPoolConfigEnvironment) {
  var _config$APP = _visualPoolConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('visual-pool/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('visual-pool/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('visual-pool/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('visual-pool/initializers/export-application-global', ['exports', 'ember', 'visual-pool/config/environment'], function (exports, _ember, _visualPoolConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_visualPoolConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _visualPoolConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_visualPoolConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('visual-pool/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('visual-pool/initializers/load-bootstrap-config', ['exports', 'visual-pool/config/environment', 'ember-bootstrap/config'], function (exports, _visualPoolConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_visualPoolConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define("visual-pool/initializers/pool", ["exports", "ember", "visual-pool/components/upload-qrels"], function (exports, _ember, _visualPoolComponentsUploadQrels) {
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.initialize = initialize;

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var TopicPool = function TopicPool(id) {
    _classCallCheck(this, TopicPool);

    this.id = id;
    this.rankDocs = [];
    this.docs = new Set();
  };

  var Pool = (function () {
    function Pool() {
      _classCallCheck(this, Pool);

      this.qRels = new _visualPoolComponentsUploadQrels.QRels();
      this.lRuns = [];
      this.mTopicPool = {};
      this.lTopicPool = _ember["default"].A();
      this.lPoolStrategy = [new DepthD(), new TakeN(), new FairTakeN(), new BordaTakeN(), new CondorcetTakeN(), new CombMAXTakeN(), new CombMINTakeN(), new CombMEDTakeN(), new CombSUMTakeN(), new CombANZTakeN(), new CombMNZTakeN(), new DCGTakeN(), new RRFTakeN(), new RBPTakeN(), new RBPAdaptiveTakeN(), new RBPAdaptiveStarTakeN(), new MTFTakeN(), new HedgeTakeN(), new MABRandomTakeN(), new MABGreedyTakeN(), new MABUCBTakeN(), new MABBetaTakeN(), new MABMaxMeanTakeN()];
    }

    _createClass(Pool, [{
      key: "initilizePoolStrategies",
      value: function initilizePoolStrategies() {
        for (var i = 0; i < this.lPoolStrategy.length; i++) {
          this.lPoolStrategy[i].setLRuns(this.lRuns);
          this.lPoolStrategy[i].setQRels(this.qRels);
        }
      }
    }, {
      key: "setQRels",
      value: function setQRels(qRels) {
        if (this.qRels) {
          this.qRels.merge(qRels);
        } else {
          this.qRels = qRels;
        }
        this.initilizePoolStrategies();
      }
    }, {
      key: "addRuns",
      value: function addRuns(runs) {
        for (var key in runs.mRun) {
          if (!this.mTopicPool[key]) {
            this.mTopicPool[key] = new TopicPool(key);
            this.lTopicPool.pushObject(this.mTopicPool[key]);
          }
          this.addRun(runs.mRun[key], key);
        }
        this.lRuns.pushObject(runs);
        this.initilizePoolStrategies();
      }
    }, {
      key: "addRun",
      value: function addRun(run, topic) {
        var topicPool = this.mTopicPool[topic];
        for (var i = 0; i < run.lRunRecord.length; i++) {
          topicPool.docs.add(run.lRunRecord[i].doc);
          if (!topicPool.rankDocs[run.lRunRecord[i].rank]) {
            topicPool.rankDocs[run.lRunRecord[i].rank] = new Set();
          }
          topicPool.rankDocs[run.lRunRecord[i].rank].add(run.lRunRecord[i].doc);
        }
      }
    }]);

    return Pool;
  })();

  function initialize(application) {
    var pool = new Pool();

    application.register('pool:main', pool, { instantiate: false });
    application.inject('component', 'pool', 'pool:main');
    application.inject('controller', 'pool', 'pool:main');
  }

  exports["default"] = {
    name: 'pool',
    initialize: initialize
  };

  var D = function D(value) {
    _classCallCheck(this, D);

    this.name = "D";
    this.description = "Depth of the Pool";
    this.value = value;
  };

  var Beta = function Beta(value) {
    _classCallCheck(this, Beta);

    this.name = "β";
    this.description = "β";
    this.value = value;
  };

  var N = function N(value) {
    _classCallCheck(this, N);

    this.name = "N";
    this.description = "Size of the Pool";
    this.value = value;
  };

  var C0 = function C0(value) {
    _classCallCheck(this, C0);

    this.name = "c0";
    this.description = "";
    this.value = value;
  };

  var C1 = function C1(value) {
    _classCallCheck(this, C1);

    this.name = "c1";
    this.description = "";
    this.value = value;
  };

  var K = function K(value) {
    _classCallCheck(this, K);

    this.name = "K";
    this.description = "Constant";
    this.value = value;
  };

  var P = function P(value) {
    _classCallCheck(this, P);

    this.name = "P";
    this.description = "Constant";
    this.value = value;
  };

  var PooledDocument = function PooledDocument(doc, status) {
    _classCallCheck(this, PooledDocument);

    this.doc = doc;
    this.status = status;
  };

  var PoolingStrategy = (function () {
    function PoolingStrategy() {
      _classCallCheck(this, PoolingStrategy);

      this.evas = {};
      this.gens = {};
      this.name = "Undefined";
      this.lRuns = [];
      this.qRels = new _visualPoolComponentsUploadQrels.QRels();
      this.tQRels = new _visualPoolComponentsUploadQrels.QRels();
      console.log("qRels");
      console.log(this.qRels);
      this.tDocs = {};
    }

    _createClass(PoolingStrategy, [{
      key: "addAssessment",
      value: function addAssessment(topic, doc, rel) {
        this.qRels.addAssessment(topic, doc, rel);
        this.tQRels.addAssessment(topic, doc, rel);
      }
    }, {
      key: "setQRels",
      value: function setQRels(qRels) {
        this.qRels = qRels;
      }
    }, {
      key: "setLRuns",
      value: function setLRuns(lRuns) {
        this.lRuns = lRuns;
      }
    }, {
      key: "numberOfTopics",
      value: function numberOfTopics() {
        var vs = this.lRuns.map(function (runs) {
          return Object.keys(runs.mRun).length;
        });
        var hist = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = vs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var v = _step.value;

            if (hist[v]) {
              hist[v] = hist[v]++;
            } else {
              hist[v] = 1;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var lHist = Object.keys(hist).map(function (key) {
          return [key, hist[key]];
        });
        return lHist.sort(function (a, b) {
          return b[1] - a[1];
        })[0][0];
      }
    }, {
      key: "getPooledDocument",
      value: function getPooledDocument(doc, qRel) {
        var pooledDocument = null;
        if (qRel.mQRelRecord[doc]) {
          console.log(qRel.mQRelRecord[doc]);
          if (qRel.mQRelRecord[doc].score === 1) {
            pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.RELEVANT);
          } else if (qRel.mQRelRecord[doc].score === 0) {
            pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.NON_RELEVANT);
          } else {
            pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.UNKNOWN);
          }
        } else {
          pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.UNKNOWN);
        }
        return pooledDocument;
      }
    }, {
      key: "shuffle",
      value: function shuffle(array) {
        var rand = undefined,
            index = -1,
            length = array.length,
            result = Array(length);
        while (++index < length) {
          rand = Math.floor(Math.random() * (index + 1));
          result[index] = result[rand];
          result[rand] = array[index];
        }
        return result;
      }
    }, {
      key: "getDoc2RunIdAndRunRecord",
      value: function getDoc2RunIdAndRunRecord(topic) {
        var doc2Runs = {};
        var lRuns = this.lRuns;
        for (var i = 0; i < lRuns.length; i++) {
          var runs = lRuns[i];
          var lRunRecord = runs.mRun[topic].lRunRecord;
          for (var j = 0; j < lRunRecord.length; j++) {
            if (!doc2Runs[lRunRecord[j].doc]) {
              doc2Runs[lRunRecord[j].doc] = [[runs.id, lRunRecord[j]]];
            } else {
              doc2Runs[lRunRecord[j].doc].concat([runs.id, lRunRecord[j]]);
            }
          }
        }
        return doc2Runs;
      }
    }]);

    return PoolingStrategy;
  })();

  var TwoStagesStrategy = (function (_PoolingStrategy) {
    _inherits(TwoStagesStrategy, _PoolingStrategy);

    function TwoStagesStrategy() {
      _classCallCheck(this, TwoStagesStrategy);

      _get(Object.getPrototypeOf(TwoStagesStrategy.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(TwoStagesStrategy, [{
      key: "getNextDocument",
      value: function getNextDocument(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        var doc = this.gens[topic].next();
        console.log(doc);

        if (!doc.done) {
          return doc;
        } else {
          doc = this.getPoolEvaluator(topic).next();
          return doc;
        }
      }
    }, {
      key: "getPoolEvaluator",
      value: function getPoolEvaluator(topic) {
        if (!this.evas[topic]) {
          this.evas[topic] = this.evalPool(topic);
        }
        return this.evas[topic];
      }
    }, {
      key: "evalPool",
      value: regeneratorRuntime.mark(function evalPool(topic) {
        var docs, qRel, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, doc, pooledDocument;

        return regeneratorRuntime.wrap(function evalPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              docs = this.tDocs[topic];

              //if (this.qRels !== null) {

              console.log("qRels");
              console.log(this.qRels);
              qRel = this.qRels.getQRel(topic);
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              context$2$0.prev = 7;
              _iterator2 = docs[Symbol.iterator]();

            case 9:
              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                context$2$0.next = 18;
                break;
              }

              doc = _step2.value;

              console.log(doc);
              pooledDocument = this.getPooledDocument(doc, qRel);
              context$2$0.next = 15;
              return pooledDocument;

            case 15:
              _iteratorNormalCompletion2 = true;
              context$2$0.next = 9;
              break;

            case 18:
              context$2$0.next = 24;
              break;

            case 20:
              context$2$0.prev = 20;
              context$2$0.t0 = context$2$0["catch"](7);
              _didIteratorError2 = true;
              _iteratorError2 = context$2$0.t0;

            case 24:
              context$2$0.prev = 24;
              context$2$0.prev = 25;

              if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                _iterator2["return"]();
              }

            case 27:
              context$2$0.prev = 27;

              if (!_didIteratorError2) {
                context$2$0.next = 30;
                break;
              }

              throw _iteratorError2;

            case 30:
              return context$2$0.finish(27);

            case 31:
              return context$2$0.finish(24);

            case 32:
            case "end":
              return context$2$0.stop();
          }
        }, evalPool, this, [[7, 20, 24, 32], [25,, 27, 31]]);
      })
    }]);

    return TwoStagesStrategy;
  })(PoolingStrategy);

  //}

  var DepthD = (function (_TwoStagesStrategy) {
    _inherits(DepthD, _TwoStagesStrategy);

    function DepthD() {
      _classCallCheck(this, DepthD);

      _get(Object.getPrototypeOf(DepthD.prototype), "constructor", this).call(this);
      this.name = "Depth@D";
      // parameters
      this.D = new D(10);
    }

    _createClass(DepthD, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.D];
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, lRun, i, j, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              lRun = this.lRuns.map(function (runs) {
                return runs.mRun[topic];
              });
              i = 0;

            case 4:
              if (!(i < lRun.length)) {
                context$2$0.next = 21;
                break;
              }

              if (!lRun[i]) {
                context$2$0.next = 18;
                break;
              }

              j = 0;

            case 7:
              if (!(j < lRun[i].lRunRecord.length)) {
                context$2$0.next = 18;
                break;
              }

              if (!(lRun[i].lRunRecord[j].rank <= this.D.value)) {
                context$2$0.next = 15;
                break;
              }

              doc = lRun[i].lRunRecord[j].doc;

              if (docs.has(doc)) {
                context$2$0.next = 15;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.SELECTED);
              context$2$0.next = 15;
              return pooledDocument;

            case 15:
              j++;
              context$2$0.next = 7;
              break;

            case 18:
              i++;
              context$2$0.next = 4;
              break;

            case 21:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return DepthD;
  })(TwoStagesStrategy);

  var TakeN = (function (_TwoStagesStrategy2) {
    _inherits(TakeN, _TwoStagesStrategy2);

    function TakeN() {
      _classCallCheck(this, TakeN);

      _get(Object.getPrototypeOf(TakeN.prototype), "constructor", this).call(this);
      this.name = "Take@N";
      // parameters
      this.N = new N(10000);
      this.nQ = 0;
    }

    _createClass(TakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, lRun, n, j, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              lRun = this.lRuns.map(function (runs) {
                return runs.mRun[topic];
              });
              n = 0;
              j = 0;

            case 6:
              if (!(j < lRun[0].lRunRecord.length)) {
                context$2$0.next = 27;
                break;
              }

              i = 0;

            case 8:
              if (!(i < lRun.length)) {
                context$2$0.next = 24;
                break;
              }

              if (!lRun[i].lRunRecord[j]) {
                context$2$0.next = 21;
                break;
              }

              console.log(lRun[i].lRunRecord[j].rank);
              doc = lRun[i].lRunRecord[j].doc;

              if (docs.has(doc)) {
                context$2$0.next = 21;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.SELECTED);
              context$2$0.next = 17;
              return pooledDocument;

            case 17:
              n = n + 1;
              console.log("n/N/|T|: " + n + "/" + this.N.value + "/" + this.nQ);

              if (!(n >= this.N.value / this.nQ)) {
                context$2$0.next = 21;
                break;
              }

              return context$2$0.abrupt("return");

            case 21:
              i++;
              context$2$0.next = 8;
              break;

            case 24:
              j++;
              context$2$0.next = 6;
              break;

            case 27:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return TakeN;
  })(TwoStagesStrategy);

  var FairTakeN = (function (_TwoStagesStrategy3) {
    _inherits(FairTakeN, _TwoStagesStrategy3);

    function FairTakeN() {
      _classCallCheck(this, FairTakeN);

      _get(Object.getPrototypeOf(FairTakeN.prototype), "constructor", this).call(this);
      this.name = "FairTake@N";
      // parameters
      this.N = new N(10000);
      this.nQ = 0;
    }

    _createClass(FairTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, lRun, n, j, nlRun, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              lRun = this.lRuns.map(function (runs) {
                return runs.mRun[topic];
              });
              n = 0;
              j = 0;

            case 6:
              if (!(j < lRun[0].lRunRecord.length)) {
                context$2$0.next = 27;
                break;
              }

              nlRun = this.shuffle(lRun);
              i = 0;

            case 9:
              if (!(i < lRun.length)) {
                context$2$0.next = 24;
                break;
              }

              if (!nlRun[i].lRunRecord[j]) {
                context$2$0.next = 21;
                break;
              }

              doc = nlRun[i].lRunRecord[j].doc;

              if (docs.has(doc)) {
                context$2$0.next = 21;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.SELECTED);
              context$2$0.next = 17;
              return pooledDocument;

            case 17:
              n = n + 1;
              console.log("n/N/|T|: " + n + "/" + this.N.value + "/" + this.nQ);

              if (!(n >= this.N.value / this.nQ)) {
                context$2$0.next = 21;
                break;
              }

              return context$2$0.abrupt("return");

            case 21:
              i++;
              context$2$0.next = 9;
              break;

            case 24:
              j++;
              context$2$0.next = 6;
              break;

            case 27:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return FairTakeN;
  })(TwoStagesStrategy);

  var CombXTakeN = (function (_TwoStagesStrategy4) {
    _inherits(CombXTakeN, _TwoStagesStrategy4);

    function CombXTakeN() {
      _classCallCheck(this, CombXTakeN);

      _get(Object.getPrototypeOf(CombXTakeN.prototype), "constructor", this).call(this);
      this.name = "CombXTake@N";
      // parameters
      this.N = new N(10000);
      this.normalizedScore = false;
      this.nQ = 0;
    }

    _createClass(CombXTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "getDoc2RunRecord",
      value: function getDoc2RunRecord(topic) {
        var doc2Runs = {};
        var lRuns = this.lRuns;
        for (var i = 0; i < lRuns.length; i++) {
          var runs = lRuns[i];
          var lRunRecord = runs.mRun[topic].lRunRecord;
          for (var j = 0; j < lRunRecord.length; j++) {
            if (!doc2Runs[lRunRecord[j].doc]) {
              doc2Runs[lRunRecord[j].doc] = [lRunRecord[j]];
            } else {
              doc2Runs[lRunRecord[j].doc].concat(lRunRecord[j]);
            }
          }
        }
        return doc2Runs;
      }
    }, {
      key: "addMinMaxNormalizedScore2LRuns",
      value: function addMinMaxNormalizedScore2LRuns() {
        var lRuns = this.lRuns;
        for (var i = 0; i < lRuns.length; i++) {
          for (var topic in lRuns[i].mRun) {
            var lRunRecord = lRuns[i].mRun[topic].lRunRecord;
            // find max and min
            var max = lRunRecord[0].score;
            var min = lRunRecord[0].score;
            for (var j = 1; j < lRunRecord.length; j++) {
              if (lRunRecord[j].score > max) {
                max = lRunRecord[j].score;
              } else if (lRunRecord[j].score < min) {
                min = lRunRecord[j].score;
              }
            }
            // normalize
            for (var j = 0; j < lRunRecord.length; j++) {
              lRunRecord[j].normalizedScore = (lRunRecord[j].score - min) / (max - min);
            }
          }
        }
      }
    }, {
      key: "x",
      value: function x(vs) {
        console.log("abstract method: x(" + vs + ")");
      }
    }, {
      key: "getLDocScore",
      value: function getLDocScore(topic) {
        if (!this.normalizedScore) {
          this.addMinMaxNormalizedScore2LRuns();
          console.log(this.lRuns);
          this.normalizedScore = true;
        }
        var doc2RunRecord = this.getDoc2RunRecord(topic);
        var lDocScore = [];
        for (var doc in doc2RunRecord) {
          var lRunRecord = doc2RunRecord[doc];
          var value = this.x(lRunRecord.map(function (runRecord) {
            return runRecord.normalizedScore;
          }));
          lDocScore.push({ 'doc': doc, 'value': value });
        }
        lDocScore.sort(function (docScoreA, docScoreB) {
          return docScoreB.value - docScoreA.value;
        });
        return lDocScore;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, lDocScore, n, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              lDocScore = this.getLDocScore(topic);
              n = 0;
              i = 0;

            case 6:
              if (!(i < lDocScore.length)) {
                context$2$0.next = 19;
                break;
              }

              doc = lDocScore[i].doc;

              if (docs.has(doc)) {
                context$2$0.next = 16;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.SELECTED);
              context$2$0.next = 13;
              return pooledDocument;

            case 13:
              n++;

              if (!(n >= this.N.value / this.nQ)) {
                context$2$0.next = 16;
                break;
              }

              return context$2$0.abrupt("return");

            case 16:
              i++;
              context$2$0.next = 6;
              break;

            case 19:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return CombXTakeN;
  })(TwoStagesStrategy);

  var CombMAXTakeN = (function (_CombXTakeN) {
    _inherits(CombMAXTakeN, _CombXTakeN);

    function CombMAXTakeN() {
      _classCallCheck(this, CombMAXTakeN);

      _get(Object.getPrototypeOf(CombMAXTakeN.prototype), "constructor", this).call(this);
      this.name = "CombMAXTake@N";
    }

    _createClass(CombMAXTakeN, [{
      key: "x",
      value: function x(vs) {
        var max = vs[0];
        for (var i = 1; i < vs.length; i++) {
          if (vs[i] > max) {
            max = vs[i];
          }
        }
        return max;
      }
    }]);

    return CombMAXTakeN;
  })(CombXTakeN);

  var CombMINTakeN = (function (_CombXTakeN2) {
    _inherits(CombMINTakeN, _CombXTakeN2);

    function CombMINTakeN() {
      _classCallCheck(this, CombMINTakeN);

      _get(Object.getPrototypeOf(CombMINTakeN.prototype), "constructor", this).call(this);
      this.name = "CombMINTake@N";
    }

    _createClass(CombMINTakeN, [{
      key: "x",
      value: function x(vs) {
        var min = vs[0];
        for (var i = 1; i < vs.length; i++) {
          if (vs[i] < min) {
            min = vs[i];
          }
        }
        return min;
      }
    }]);

    return CombMINTakeN;
  })(CombXTakeN);

  var CombMEDTakeN = (function (_CombXTakeN3) {
    _inherits(CombMEDTakeN, _CombXTakeN3);

    function CombMEDTakeN() {
      _classCallCheck(this, CombMEDTakeN);

      _get(Object.getPrototypeOf(CombMEDTakeN.prototype), "constructor", this).call(this);
      this.name = "CombMEDTake@N";
    }

    _createClass(CombMEDTakeN, [{
      key: "x",
      value: function x(vs) {
        if (vs.length === 1) {
          return vs[0];
        } else {
          var nvs = vs.sort();
          if (nvs.length % 2 === 0) {
            return nvs[nvs.length / 2 - 1] / 2 + nvs[nvs.length / 2] / 2;
          } else {
            return nvs[nvs.length / 2 - 0.5];
          }
        }
      }
    }]);

    return CombMEDTakeN;
  })(CombXTakeN);

  var CombSUMTakeN = (function (_CombXTakeN4) {
    _inherits(CombSUMTakeN, _CombXTakeN4);

    function CombSUMTakeN() {
      _classCallCheck(this, CombSUMTakeN);

      _get(Object.getPrototypeOf(CombSUMTakeN.prototype), "constructor", this).call(this);
      this.name = "CombSUMTake@N";
    }

    _createClass(CombSUMTakeN, [{
      key: "x",
      value: function x(vs) {
        var sum = vs[0];
        for (var i = 1; i < vs.length; i++) {
          sum += vs[i];
        }
        return sum;
      }
    }]);

    return CombSUMTakeN;
  })(CombXTakeN);

  var CombANZTakeN = (function (_CombXTakeN5) {
    _inherits(CombANZTakeN, _CombXTakeN5);

    function CombANZTakeN() {
      _classCallCheck(this, CombANZTakeN);

      _get(Object.getPrototypeOf(CombANZTakeN.prototype), "constructor", this).call(this);
      this.name = "CombANZTake@N";
    }

    _createClass(CombANZTakeN, [{
      key: "x",
      value: function x(vs) {
        var sum = vs[0];
        for (var i = 1; i < vs.length; i++) {
          sum += vs[i];
        }
        return sum / vs.length;
      }
    }]);

    return CombANZTakeN;
  })(CombXTakeN);

  var CombMNZTakeN = (function (_CombXTakeN6) {
    _inherits(CombMNZTakeN, _CombXTakeN6);

    function CombMNZTakeN() {
      _classCallCheck(this, CombMNZTakeN);

      _get(Object.getPrototypeOf(CombMNZTakeN.prototype), "constructor", this).call(this);
      this.name = "CombMNZTake@N";
    }

    _createClass(CombMNZTakeN, [{
      key: "x",
      value: function x(vs) {
        var sum = vs[0];
        for (var i = 1; i < vs.length; i++) {
          sum += vs[i];
        }
        return sum * vs.length;
      }
    }]);

    return CombMNZTakeN;
  })(CombXTakeN);

  var BordaTakeN = (function (_TwoStagesStrategy5) {
    _inherits(BordaTakeN, _TwoStagesStrategy5);

    function BordaTakeN() {
      _classCallCheck(this, BordaTakeN);

      _get(Object.getPrototypeOf(BordaTakeN.prototype), "constructor", this).call(this);
      this.name = "BordaTake@N";
      // parameters
      this.N = new N(10000);
      this.nQ = 0;
    }

    _createClass(BordaTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "getDoc2RunRecord",
      value: function getDoc2RunRecord(topic) {
        var doc2Runs = {};
        var lRuns = this.lRuns;
        for (var i = 0; i < lRuns.length; i++) {
          var runs = lRuns[i];
          var lRunRecord = runs.mRun[topic].lRunRecord;
          for (var j = 0; j < lRunRecord.length; j++) {
            if (!doc2Runs[lRunRecord[j].doc]) {
              doc2Runs[lRunRecord[j].doc] = [lRunRecord[j]];
            } else {
              doc2Runs[lRunRecord[j].doc].concat(lRunRecord[j]);
            }
          }
        }
        return doc2Runs;
      }
    }, {
      key: "getLDocScore",
      value: function getLDocScore(topic) {
        var doc2RunRecord = this.getDoc2RunRecord(topic);
        var lDocScore = [];
        for (var doc in doc2RunRecord) {
          var lRunRecord = doc2RunRecord[doc];
          var value = 0;
          for (var i = 0; i < lRunRecord.length; i++) {
            value += -lRunRecord[i].rank;
          }
          lDocScore.push({ 'doc': doc, 'value': value });
        }
        lDocScore.sort(function (docScoreA, docScoreB) {
          return docScoreB.value - docScoreA.value;
        });
        return lDocScore;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, lDocScore, n, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              lDocScore = this.getLDocScore(topic);
              n = 0;
              i = 0;

            case 6:
              if (!(i < lDocScore.length)) {
                context$2$0.next = 19;
                break;
              }

              doc = lDocScore[i].doc;

              if (docs.has(doc)) {
                context$2$0.next = 16;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.SELECTED);
              context$2$0.next = 13;
              return pooledDocument;

            case 13:
              n++;

              if (!(n >= this.N.value / this.nQ)) {
                context$2$0.next = 16;
                break;
              }

              return context$2$0.abrupt("return");

            case 16:
              i++;
              context$2$0.next = 6;
              break;

            case 19:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return BordaTakeN;
  })(TwoStagesStrategy);

  var CondorcetTakeN = (function (_TwoStagesStrategy6) {
    _inherits(CondorcetTakeN, _TwoStagesStrategy6);

    function CondorcetTakeN() {
      _classCallCheck(this, CondorcetTakeN);

      _get(Object.getPrototypeOf(CondorcetTakeN.prototype), "constructor", this).call(this);
      this.name = "CondorcetTake@N";
      // parameters
      this.N = new N(10000);
      this.nQ = 0;
    }

    _createClass(CondorcetTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "getDoc2RunId2Rank",
      value: function getDoc2RunId2Rank(topic) {
        var doc2Runs = {};
        var lRuns = this.lRuns;
        for (var i = 0; i < lRuns.length; i++) {
          var runs = lRuns[i];
          var lRunRecord = runs.mRun[topic].lRunRecord;
          for (var j = 0; j < lRunRecord.length; j++) {
            if (!doc2Runs[lRunRecord[j].doc]) {
              doc2Runs[lRunRecord[j].doc] = {};
              doc2Runs[lRunRecord[j].doc][runs.id] = lRunRecord[j].rank;
            } else {
              doc2Runs[lRunRecord[j].doc][runs.id] = lRunRecord[j].rank;
            }
          }
        }
        return doc2Runs;
      }
    }, {
      key: "getLDocScore",
      value: function getLDocScore(topic) {
        var doc2RunId2Rank = this.getDoc2RunId2Rank(topic);
        var lDocScore = [];
        for (var doc0 in doc2RunId2Rank) {
          var value = 0;
          for (var doc1 in doc2RunId2Rank) {
            var value1 = 0;
            if (doc0 !== doc1) {
              for (var run0 in doc2RunId2Rank[doc0]) {
                if (!doc2RunId2Rank[doc1][run0]) {
                  value1++;
                } else {
                  value1 += Math.sign(doc2RunId2Rank[doc1][run0] - doc2RunId2Rank[doc0][run0]);
                }
              }
              if (doc2RunId2Rank[doc1].length - doc2RunId2Rank[doc0].length > 0) {
                value1 -= doc2RunId2Rank[doc1].length - doc2RunId2Rank[doc0].length;
              }
            }
            if (value1 > 0) {
              value++;
            }
          }
          lDocScore.push({ 'doc': doc0, 'value': value });
        }
        lDocScore.sort(function (docScoreA, docScoreB) {
          return docScoreB.value - docScoreA.value;
        });
        return lDocScore;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, lDocScore, n, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              lDocScore = this.getLDocScore(topic);
              n = 0;
              i = 0;

            case 6:
              if (!(i < lDocScore.length)) {
                context$2$0.next = 19;
                break;
              }

              doc = lDocScore[i].doc;

              if (docs.has(doc)) {
                context$2$0.next = 16;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.SELECTED);
              context$2$0.next = 13;
              return pooledDocument;

            case 13:
              n++;

              if (!(n >= this.N.value / this.nQ)) {
                context$2$0.next = 16;
                break;
              }

              return context$2$0.abrupt("return");

            case 16:
              i++;
              context$2$0.next = 6;
              break;

            case 19:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return CondorcetTakeN;
  })(TwoStagesStrategy);

  var MeasureBasedTakeN = (function (_TwoStagesStrategy7) {
    _inherits(MeasureBasedTakeN, _TwoStagesStrategy7);

    function MeasureBasedTakeN() {
      _classCallCheck(this, MeasureBasedTakeN);

      _get(Object.getPrototypeOf(MeasureBasedTakeN.prototype), "constructor", this).call(this);
      this.name = "MeasureBasedTake@N";
      // parameters
      this.N = new N(10000);
      this.nQ = 0;
    }

    _createClass(MeasureBasedTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "getDoc2RunRecord",
      value: function getDoc2RunRecord(topic) {
        var doc2Runs = {};
        var lRuns = this.lRuns;
        for (var i = 0; i < lRuns.length; i++) {
          var runs = lRuns[i];
          var lRunRecord = runs.mRun[topic].lRunRecord;
          for (var j = 0; j < lRunRecord.length; j++) {
            if (!doc2Runs[lRunRecord[j].doc]) {
              doc2Runs[lRunRecord[j].doc] = [lRunRecord[j]];
            } else {
              doc2Runs[lRunRecord[j].doc].concat(lRunRecord[j]);
            }
          }
        }
        return doc2Runs;
      }
    }, {
      key: "x",
      value: function x(vs) {
        console.log("abstract method: x(" + vs + ")");
      }
    }, {
      key: "getLDocScore",
      value: function getLDocScore(topic) {
        var doc2RunRecord = this.getDoc2RunRecord(topic);
        var lDocScore = [];
        for (var doc in doc2RunRecord) {
          var lRunRecord = doc2RunRecord[doc];
          var value = this.x(lRunRecord.map(function (runRecord) {
            return runRecord.rank;
          }));
          lDocScore.push({ 'doc': doc, 'value': value });
        }
        lDocScore.sort(function (docScoreA, docScoreB) {
          return docScoreA.value - docScoreB.value;
        });
        return lDocScore;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, lDocScore, n, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              lDocScore = this.getLDocScore(topic);
              n = 0;
              i = 0;

            case 6:
              if (!(i < lDocScore.length)) {
                context$2$0.next = 19;
                break;
              }

              doc = lDocScore[i].doc;

              if (docs.has(doc)) {
                context$2$0.next = 16;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.SELECTED);
              context$2$0.next = 13;
              return pooledDocument;

            case 13:
              n++;

              if (!(n >= this.N.value / this.nQ)) {
                context$2$0.next = 16;
                break;
              }

              return context$2$0.abrupt("return");

            case 16:
              i++;
              context$2$0.next = 6;
              break;

            case 19:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return MeasureBasedTakeN;
  })(TwoStagesStrategy);

  var DCGTakeN = (function (_MeasureBasedTakeN) {
    _inherits(DCGTakeN, _MeasureBasedTakeN);

    function DCGTakeN() {
      _classCallCheck(this, DCGTakeN);

      _get(Object.getPrototypeOf(DCGTakeN.prototype), "constructor", this).call(this);
      this.name = "DCGTake@N";
    }

    _createClass(DCGTakeN, [{
      key: "x",
      value: function x(vs) {
        var sum = vs[0];
        for (var i = 1; i < vs.length; i++) {
          sum += Math.log(2) / Math.log(vs[i] + 1);
        }
        return sum;
      }
    }]);

    return DCGTakeN;
  })(MeasureBasedTakeN);

  var RRFTakeN = (function (_MeasureBasedTakeN2) {
    _inherits(RRFTakeN, _MeasureBasedTakeN2);

    function RRFTakeN() {
      _classCallCheck(this, RRFTakeN);

      _get(Object.getPrototypeOf(RRFTakeN.prototype), "constructor", this).call(this);
      this.name = "RRFTake@N";
      this.K = new K(30);
    }

    _createClass(RRFTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N, this.K];
      }
    }, {
      key: "x",
      value: function x(vs) {
        var sum = vs[0];
        for (var i = 1; i < vs.length; i++) {
          sum += 1 / (vs[i] + this.K.value);
        }
        return sum;
      }
    }]);

    return RRFTakeN;
  })(MeasureBasedTakeN);

  var RBPTakeN = (function (_MeasureBasedTakeN3) {
    _inherits(RBPTakeN, _MeasureBasedTakeN3);

    function RBPTakeN() {
      _classCallCheck(this, RBPTakeN);

      _get(Object.getPrototypeOf(RBPTakeN.prototype), "constructor", this).call(this);
      this.name = "RBPTake@N";
      this.P = new P(0.8);
    }

    _createClass(RBPTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N, this.P];
      }
    }, {
      key: "x",
      value: function x(vs) {
        var sum = vs[0];
        for (var i = 1; i < vs.length; i++) {
          sum += Math.pow(1 - this.P.value, vs[i] - 1);
        }
        return sum;
      }
    }]);

    return RBPTakeN;
  })(MeasureBasedTakeN);

  function rbp(p, run, qRel) {
    var res = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = run.lRunRecord[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var rr = _step3.value;

        if (qRel.getRel(rr.doc) >= 1) {
          res += (1 - p) * Math.pow(p, rr.rank - 1);
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return res;
  }

  function rbpResidual(p, run, qRel) {
    var res = 1;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = run.lRunRecord[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var rr = _step4.value;

        if (qRel.getRel(rr.doc) < 0 || qRel.getRel(rr.doc) < _visualPoolComponentsUploadQrels.EnumPooledDocumentState.NON_RELEVANT) {
          res -= (1 - p) * Math.pow(p, rr.rank - 1);
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    return res;
  }

  var RBPAdaptiveTakeN = (function (_TwoStagesStrategy8) {
    _inherits(RBPAdaptiveTakeN, _TwoStagesStrategy8);

    function RBPAdaptiveTakeN() {
      _classCallCheck(this, RBPAdaptiveTakeN);

      _get(Object.getPrototypeOf(RBPAdaptiveTakeN.prototype), "constructor", this).call(this);
      this.name = "RBPAdaptiveTake@N";
      //parameters
      this.N = new N(10000);
      this.P = new P(0.8);
      this.nQ = 0;

      this.mDoc2RunsIdRunRecord = {};
    }

    _createClass(RBPAdaptiveTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N, this.P];
      }
    }, {
      key: "evalRunsIdRunRecord",
      value: function evalRunsIdRunRecord(runsId, runRecord, mRunsScores) {
        return Math.pow(1 - this.P.value, runRecord.rank - 1) * mRunsScores[runsId];
      }
    }, {
      key: "getBestDocument",
      value: function getBestDocument(topic) {
        var _this = this;

        if (!this.mDoc2RunsIdRunRecord[topic]) {
          this.mDoc2RunsIdRunRecord[topic] = this.getDoc2RunIdAndRunRecord(topic);
        }
        var doc2RunsIdRunRecord = this.mDoc2RunsIdRunRecord[topic];
        var mRunsScores = {};
        this.lRuns.map(function (runs) {
          return mRunsScores[runs.id] = rbpResidual(_this.P.value, runs.mRun[topic], _this.qRels.getQRel(topic));
        });
        console.log(mRunsScores);
        var lDocScore = [];
        for (var doc in doc2RunsIdRunRecord) {
          var lRunsIdRunRecord = doc2RunsIdRunRecord[doc];
          var values = [];
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = lRunsIdRunRecord[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var runsIdRunRecord = _step5.value;

              var value = this.evalRunsIdRunRecord(runsIdRunRecord[0], runsIdRunRecord[1], mRunsScores);
              values.push(value);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
                _iterator5["return"]();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          var sum = 0;
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = values[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var value = _step6.value;

              sum += value;
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
                _iterator6["return"]();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          lDocScore.push({ 'doc': doc, 'value': sum });
        }
        lDocScore.sort(function (docScoreA, docScoreB) {
          return docScoreB.value - docScoreA.value;
        });
        console.log(lDocScore);
        var res = lDocScore[0].doc;
        delete doc2RunsIdRunRecord[res];
        return res;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              i = 0;

            case 4:
              if (!(i < this.N.value / this.nQ)) {
                context$2$0.next = 15;
                break;
              }

              doc = this.getBestDocument(topic);

              console.log(doc);

              if (docs.has(doc)) {
                context$2$0.next = 12;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, _visualPoolComponentsUploadQrels.EnumPooledDocumentState.SELECTED);
              context$2$0.next = 12;
              return pooledDocument;

            case 12:
              i++;
              context$2$0.next = 4;
              break;

            case 15:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return RBPAdaptiveTakeN;
  })(TwoStagesStrategy);

  var RBPAdaptiveStarTakeN = (function (_PoolingStrategy2) {
    _inherits(RBPAdaptiveStarTakeN, _PoolingStrategy2);

    function RBPAdaptiveStarTakeN() {
      _classCallCheck(this, RBPAdaptiveStarTakeN);

      _get(Object.getPrototypeOf(RBPAdaptiveStarTakeN.prototype), "constructor", this).call(this);
      this.name = "RBPAdaptive*Take@N";
      //parameters
      this.N = new N(10000);
      this.P = new P(0.8);
      this.nQ = 0;

      this.tQRels = new _visualPoolComponentsUploadQrels.QRels();
      this.mDoc2RunsIdRunRecord = {};
    }

    _createClass(RBPAdaptiveStarTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N, this.P];
      }
    }, {
      key: "getNextDocument",
      value: function getNextDocument(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        var doc = this.gens[topic].next();
        console.log(doc);
        return doc;
      }
    }, {
      key: "evalRunsIdRunRecord",
      value: function evalRunsIdRunRecord(runsId, runRecord, mRunsScores) {
        return Math.pow(1 - this.P.value, runRecord.rank - 1) * mRunsScores[runsId];
      }
    }, {
      key: "getBestDocument",
      value: function getBestDocument(topic) {
        var _this2 = this;

        if (!this.mDoc2RunsIdRunRecord[topic]) {
          this.mDoc2RunsIdRunRecord[topic] = this.getDoc2RunIdAndRunRecord(topic);
        }
        var doc2RunsIdRunRecord = this.mDoc2RunsIdRunRecord[topic];
        var mRunsScores = {};
        this.lRuns.map(function (runs) {
          var base = rbp(_this2.P.value, runs.mRun[topic], _this2.tQRels.getQRel(topic));
          var res = rbpResidual(_this2.P.value, runs.mRun[topic], _this2.tQRels.getQRel(topic));
          mRunsScores[runs.id] = res * Math.pow(base + res / 2, 3);
        });
        console.log(mRunsScores);
        var lDocScore = [];
        for (var doc in doc2RunsIdRunRecord) {
          var lRunsIdRunRecord = doc2RunsIdRunRecord[doc];
          var values = [];
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = lRunsIdRunRecord[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var runsIdRunRecord = _step7.value;

              var value = this.evalRunsIdRunRecord(runsIdRunRecord[0], runsIdRunRecord[1], mRunsScores);
              values.push(value);
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
                _iterator7["return"]();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }

          var sum = 0;
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = values[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var value = _step8.value;

              sum += value;
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
                _iterator8["return"]();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          lDocScore.push({ 'doc': doc, 'value': sum });
        }
        lDocScore.sort(function (docScoreA, docScoreB) {
          return docScoreB.value - docScoreA.value;
        });
        var res = lDocScore[0].doc;
        delete doc2RunsIdRunRecord[res];
        return res;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              i = 0;

            case 4:
              if (!(i < this.N.value / this.nQ)) {
                context$2$0.next = 16;
                break;
              }

              doc = this.getBestDocument(topic);

              console.log(doc);

              if (docs.has(doc)) {
                context$2$0.next = 13;
                break;
              }

              docs.add(doc);
              //let pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);
              pooledDocument = this.getPooledDocument(doc, this.qRels.getQRel(topic));

              this.tQRels.addAssessment(topic, pooledDocument.doc, pooledDocument.status);
              context$2$0.next = 13;
              return pooledDocument;

            case 13:
              i++;
              context$2$0.next = 4;
              break;

            case 16:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return RBPAdaptiveStarTakeN;
  })(PoolingStrategy);

  var MTFTakeN = (function (_PoolingStrategy3) {
    _inherits(MTFTakeN, _PoolingStrategy3);

    function MTFTakeN() {
      _classCallCheck(this, MTFTakeN);

      _get(Object.getPrototypeOf(MTFTakeN.prototype), "constructor", this).call(this);
      this.name = "MTFTake@N";
      //parameters
      this.N = new N(10000);
      this.nQ = 0;

      this.tQRels = new _visualPoolComponentsUploadQrels.QRels();
      this.mLNumRuns = {};
      this.mMaxRunsId = {};
    }

    _createClass(MTFTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "getNextDocument",
      value: function getNextDocument(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        var doc = this.gens[topic].next();
        console.log(doc);
        return doc;
      }
    }, {
      key: "getBestDocument",
      value: function getBestDocument(topic) {
        var rel = 0;
        if (this.tQRels.mQRel[topic]) {
          console.log(this.tQRels.mQRel[topic].mQRelRecord);
          rel = Object.values(this.tQRels.mQRel[topic].mQRelRecord)[Object.values(this.tQRels.mQRel[topic].mQRelRecord).length - 1].score;
        }
        if (!this.mLNumRuns[topic]) {
          this.mLNumRuns[topic] = new Array(this.lRuns.length).fill(0);
        }
        var lNumRuns = this.mLNumRuns[topic];
        var maxRunsId = undefined;
        if (rel < 1) {
          var mRunsScores = {};
          for (var i = 0; i < this.lRuns.length; i++) {
            mRunsScores[this.lRuns[i].id] = 0;
            for (var j = 0; j < lNumRuns[i]; j++) {
              if (this.tQRels.getQRel(topic).getRel(this.lRuns[i].mRun[topic].lRunRecord[j].doc) === _visualPoolComponentsUploadQrels.EnumPooledDocumentState.NON_RELEVANT) {
                mRunsScores[this.lRuns[i].id]--;
              }
            }
          }
          console.log(mRunsScores);
          var maxValue = -Infinity;
          for (var i = 0; i < Object.values(mRunsScores).length; i++) {
            if (Object.values(mRunsScores)[i] > maxValue && lNumRuns[i] < this.lRuns[i].mRun[topic].lRunRecord.length) {
              maxValue = Object.values(mRunsScores)[i];
              maxRunsId = i;
            }
          }
          this.mMaxRunsId[topic] = maxRunsId;
        }
        maxRunsId = this.mMaxRunsId[topic];
        var res = this.lRuns[maxRunsId].mRun[topic].lRunRecord[lNumRuns[maxRunsId]].doc;
        lNumRuns[maxRunsId]++;
        return res;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              i = 0;

            case 4:
              if (!(i < this.N.value / this.nQ)) {
                context$2$0.next = 17;
                break;
              }

              doc = this.getBestDocument(topic);

              while (this.tQRels.getQRel(topic).getRel(doc) !== _visualPoolComponentsUploadQrels.EnumPooledDocumentState.UNSELECTED) {
                doc = this.getBestDocument(topic);
              }
              console.log(doc);

              if (docs.has(doc)) {
                context$2$0.next = 14;
                break;
              }

              docs.add(doc);
              //let pooledDocument = new this.getPooledDocument(doc, this.qRels.getQRel(topic));
              pooledDocument = this.getPooledDocument(doc, this.qRels.getQRel(topic));

              this.tQRels.addAssessment(topic, pooledDocument.doc, pooledDocument.status);
              context$2$0.next = 14;
              return pooledDocument;

            case 14:
              i++;
              context$2$0.next = 4;
              break;

            case 17:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return MTFTakeN;
  })(PoolingStrategy);

  var HedgeTakeN = (function (_PoolingStrategy4) {
    _inherits(HedgeTakeN, _PoolingStrategy4);

    function HedgeTakeN() {
      _classCallCheck(this, HedgeTakeN);

      _get(Object.getPrototypeOf(HedgeTakeN.prototype), "constructor", this).call(this);
      this.name = "HedgeTake@N";
      //parameters
      this.Beta = new Beta(0.8);
      this.N = new N(10000);
      this.D = new D(10000000);
      this.nQ = 0;

      this.tQRels = new _visualPoolComponentsUploadQrels.QRels();
      this.mLNumRuns = {};
      this.mMaxRunsId = {};
      this.mDoc2RunId2Rank = {};
      this.avgGStar = {};
      this.ll = {};
    }

    _createClass(HedgeTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.Beta, this.N, this.D];
      }
    }, {
      key: "getDoc2RunId2Rank",
      value: function getDoc2RunId2Rank(topic) {
        var doc2Runs = {};
        var lRuns = this.lRuns;
        for (var i = 0; i < lRuns.length; i++) {
          var runs = lRuns[i];
          var lRunRecord = runs.mRun[topic].lRunRecord;
          for (var j = 0; j < lRunRecord.length; j++) {
            if (!doc2Runs[lRunRecord[j].doc]) {
              doc2Runs[lRunRecord[j].doc] = {};
              doc2Runs[lRunRecord[j].doc][runs.id] = lRunRecord[j].rank;
            } else {
              doc2Runs[lRunRecord[j].doc][runs.id] = lRunRecord[j].rank;
            }
          }
        }
        return doc2Runs;
      }
    }, {
      key: "getRunId2Length",
      value: function getRunId2Length(topic) {
        var runsId2Length = {};
        var lRuns = this.lRuns;
        for (var i = 0; i < lRuns.length; i++) {
          runsId2Length[lRuns[i].id] = lRuns[i].mRun[topic].lRunRecord.length;
        }
        return runsId2Length;
      }
    }, {
      key: "getNextDocument",
      value: function getNextDocument(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        var doc = this.gens[topic].next();
        console.log(doc);
        return doc;
      }
    }, {
      key: "g",
      value: function g(rank) {
        //console.log("g parameters - 2");
        //console.log(Math.log(this.D.value));
        //console.log(Math.log(rank));
        return Math.log(this.D.value) - Math.log(rank);
      }
    }, {
      key: "gStar",
      value: function gStar(doc, runsId, doc2RunId2Rank, topic) {
        //console.log("gStar parameters - 4");
        //console.log(doc);
        //console.log(runsId);
        //console.log(doc2RunId2Rank);
        //console.log(topic);
        var value = 0;
        if (!doc2RunId2Rank[doc][runsId]) {
          var _length = this.getRunId2Length(topic)[runsId];
          if (!this.avgGStar[this.D.value - _length]) {
            for (var i = _length + 1; i <= this.D.value; i++) {
              value += this.g(i);
            }
            value /= this.D.value - _length;
            this.avgGStar[this.D.value - _length] = value;
          }
          value = this.avgGStar[this.D.value - _length];
        } else {
          value = this.g(doc2RunId2Rank[doc][runsId]);
        }
        return value;
      }
    }, {
      key: "l",
      value: function l(runs, tQRel, doc2RunId2Rank, topic) {
        if (!this.ll[topic]) {
          this.ll[topic] = {};
        }
        if (!this.ll[topic][runs.id]) {
          this.ll[topic][runs.id] = 0;
        }
        var cl = this.ll[topic][runs.id];
        var res = cl;
        if (Object.values(tQRel.mQRelRecord).length > 0) {
          var rel = Object.values(tQRel.mQRelRecord)[Object.values(tQRel.mQRelRecord).length - 1].score;
          var doc = Object.values(tQRel.mQRelRecord)[Object.values(tQRel.mQRelRecord).length - 1].doc;

          //console.log("l parameters - 4");
          //console.log(runs);
          //console.log(tQRel);
          //console.log(doc2RunId2Rank);
          //console.log(topic);
          if (rel === 0) {
            res += this.gStar(doc, runs.id, doc2RunId2Rank, topic) / 2;
          } else if (rel === 1) {
            res -= this.gStar(doc, runs.id, doc2RunId2Rank, topic) / 2;
          }
          //}
          this.ll[topic][runs.id] = res;
        }
        return res;
      }

      /*l(runs, tQRel, doc2RunId2Rank, topic) {
        //console.log("l parameters - 4");
        //console.log(runs);
        //console.log(tQRel);
        //console.log(doc2RunId2Rank);
        //console.log(topic);
        let res = 0;
        for (let runRecord of runs.mRun[topic].lRunRecord) {
          //console.log(tQRel);
          if (tQRel.getRel(runRecord.doc) === 0) {
            res += this.gStar(runRecord.doc, runs.id, doc2RunId2Rank, topic);
          } else if (tQRel.getRel(runRecord.doc) === 1) {
            res -= this.gStar(runRecord.doc, runs.id, doc2RunId2Rank, topic);
          }
        }
        return res / 2;
      }*/

    }, {
      key: "getBestDocument",
      value: function getBestDocument(topic) {
        if (!this.mDoc2RunId2Rank[topic]) {
          this.mDoc2RunId2Rank[topic] = this.getDoc2RunId2Rank(topic);
        }
        var doc2RunId2Rank = this.mDoc2RunId2Rank[topic];
        var lDocScore = [];
        var mRunsScores = {};
        var den = 0;
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = this.lRuns[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var runs = _step9.value;

            mRunsScores[runs.id] = this.l(runs, this.tQRels.getQRel(topic), doc2RunId2Rank, topic);
            mRunsScores[runs.id] = Math.pow(this.Beta.value, mRunsScores[runs.id]);
            den += mRunsScores[runs.id];
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
              _iterator9["return"]();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        for (var doc in doc2RunId2Rank) {
          // compute l scores
          var value = 0;

          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = this.lRuns[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var runs = _step10.value;

              value += mRunsScores[runs.id] / den * this.gStar(doc, runs.id, doc2RunId2Rank, topic);
              //console.log("loop");
              //console.log(runs.id);
              //console.log(mRunsScores[runs.id]);
              //console.log(den);
              //console.log(this.gStar(doc, runs.id, doc2RunId2Rank, topic));
              //console.log(value);
            }
          } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
                _iterator10["return"]();
              }
            } finally {
              if (_didIteratorError10) {
                throw _iteratorError10;
              }
            }
          }

          lDocScore.push({ 'doc': doc, 'value': value });
        }
        this.shuffle(lDocScore).sort(function (docScoreA, docScoreB) {
          return docScoreB.value - docScoreA.value;
        });
        console.log(lDocScore);
        var i = undefined;
        for (i = 0; i < lDocScore.length; i++) {
          if (this.tQRels.getQRel(topic).getRel(lDocScore[i].doc) < 0) {
            break;
          }
        }
        console.log(lDocScore[i].value);
        return lDocScore[i].doc;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              i = 0;

            case 3:
              if (!(i < this.N.value / this.nQ)) {
                context$2$0.next = 13;
                break;
              }

              doc = this.getBestDocument(topic);

              console.log(doc);
              pooledDocument = this.getPooledDocument(doc, this.qRels.getQRel(topic));

              this.tQRels.addAssessment(topic, pooledDocument.doc, pooledDocument.status);
              context$2$0.next = 10;
              return pooledDocument;

            case 10:
              i++;
              context$2$0.next = 3;
              break;

            case 13:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return HedgeTakeN;
  })(PoolingStrategy);

  var MABRandomTakeN = (function (_PoolingStrategy5) {
    _inherits(MABRandomTakeN, _PoolingStrategy5);

    function MABRandomTakeN() {
      _classCallCheck(this, MABRandomTakeN);

      _get(Object.getPrototypeOf(MABRandomTakeN.prototype), "constructor", this).call(this);
      this.name = "MABRandomTake@N";
      //parameters
      this.N = new N(10000);
      this.nQ = 0;

      this.tQRels = new _visualPoolComponentsUploadQrels.QRels();
      this.mLNumRuns = {};
      this.mMaxRunsId = {};
    }

    _createClass(MABRandomTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "getNextDocument",
      value: function getNextDocument(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        var doc = this.gens[topic].next();
        console.log(doc);
        return doc;
      }
    }, {
      key: "shuffle",
      value: function shuffle(array) {
        var currentIndex = array.length,
            tempValue = undefined,
            randomIndex = undefined;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          tempValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = tempValue;
        }
        return array;
      }
    }, {
      key: "getBestDocument",
      value: function getBestDocument(topic) {
        if (!this.mLNumRuns[topic]) {
          this.mLNumRuns[topic] = new Array(this.lRuns.length).fill(0);
        }
        var lNumRuns = this.mLNumRuns[topic];
        var runsIndexes = [];
        for (var i = 0; i < this.lRuns.length; i++) {
          runsIndexes.push(i);
        }
        runsIndexes = this.shuffle(runsIndexes);
        console.log(runsIndexes);
        var maxRunsId = runsIndexes[0];
        while (lNumRuns[maxRunsId] === this.lRuns[maxRunsId].mRun[topic].lRunRecord.length) {
          runsIndexes = this.shuffle(runsIndexes);
          console.log(runsIndexes);
          maxRunsId = runsIndexes[0];
        }

        this.mMaxRunsId[topic] = maxRunsId;
        var res = this.lRuns[maxRunsId].mRun[topic].lRunRecord[lNumRuns[maxRunsId]].doc;
        lNumRuns[maxRunsId]++;
        return res;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              i = 0;

            case 4:
              if (!(i < this.N.value / this.nQ)) {
                context$2$0.next = 16;
                break;
              }

              doc = this.getBestDocument(topic);

              while (this.tQRels.getQRel(topic).getRel(doc) !== _visualPoolComponentsUploadQrels.EnumPooledDocumentState.UNSELECTED) {
                doc = this.getBestDocument(topic);
              }
              console.log(doc);

              if (docs.has(doc)) {
                context$2$0.next = 13;
                break;
              }

              docs.add(doc);
              pooledDocument = new this.getPooledDocument(doc, this.qRels.getQRel(topic));
              context$2$0.next = 13;
              return pooledDocument;

            case 13:
              i++;
              context$2$0.next = 4;
              break;

            case 16:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return MABRandomTakeN;
  })(PoolingStrategy);

  var MABGreedyTakeN = (function (_PoolingStrategy6) {
    _inherits(MABGreedyTakeN, _PoolingStrategy6);

    function MABGreedyTakeN() {
      _classCallCheck(this, MABGreedyTakeN);

      _get(Object.getPrototypeOf(MABGreedyTakeN.prototype), "constructor", this).call(this);
      this.name = "MABGreedyTake@N";
      //parameters
      this.N = new N(10000);
      this.C0 = new C0(0.1);
      this.C1 = new C1(0.01);
      this.nQ = 0;
      this.mN = {};
      this.tQRels = new _visualPoolComponentsUploadQrels.QRels();
      this.mLNumRuns = {};
      this.mMaxRunsId = {};
    }

    _createClass(MABGreedyTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.C0, this.C1, this.N];
      }
    }, {
      key: "getNextDocument",
      value: function getNextDocument(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        var doc = this.gens[topic].next();
        console.log(doc);
        return doc;
      }
    }, {
      key: "shuffle",
      value: function shuffle(array) {
        var rand = undefined,
            index = -1,
            length = array.length,
            result = Array(length);
        while (++index < length) {
          rand = Math.floor(Math.random() * (index + 1));
          result[index] = result[rand];
          result[rand] = array[index];
        }
        return result;
      }
    }, {
      key: "getBestDocument",
      value: function getBestDocument(topic) {
        if (!this.mN[topic]) {
          this.mN[topic] = 0;
        }
        this.mN[topic]++;
        if (!this.mLNumRuns[topic]) {
          this.mLNumRuns[topic] = new Array(this.lRuns.length).fill(0);
        }
        var lNumRuns = this.mLNumRuns[topic];
        var maxRunsId = undefined;
        var threshold = Math.min(1, this.C0.value * this.lRuns.length / Math.pow(this.C1.value, 2) / this.mN[topic]);
        if (Math.random() < threshold) {
          var is = [];
          for (var i = 0; i < this.lRuns.length; i++) {
            is.push(i);
          }
          maxRunsId = this.shuffle(is)[0];
        } else {
          var mRunsScores = {};
          for (var i = 0; i < this.lRuns.length; i++) {
            mRunsScores[this.lRuns[i].id] = 0;
            for (var j = 0; j < lNumRuns[i]; j++) {
              if (this.tQRels.getQRel(topic).getRel(this.lRuns[i].mRun[topic].lRunRecord[j].doc) === _visualPoolComponentsUploadQrels.EnumPooledDocumentState.RELEVANT) {
                mRunsScores[this.lRuns[i].id]++;
              }
            }
            mRunsScores[this.lRuns[i].id] /= lNumRuns[this.lRuns[i].id];
          }
          console.log(mRunsScores);
          var maxValue = -Infinity;
          for (var i = 0; i < Object.values(mRunsScores).length; i++) {
            if (Object.values(mRunsScores)[i] > maxValue && lNumRuns[i] < this.lRuns[i].mRun[topic].lRunRecord.length) {
              maxValue = Object.values(mRunsScores)[i];
              maxRunsId = i;
            }
          }
        }
        this.mMaxRunsId[topic] = maxRunsId;
        maxRunsId = this.mMaxRunsId[topic];
        var res = this.lRuns[maxRunsId].mRun[topic].lRunRecord[lNumRuns[maxRunsId]].doc;
        lNumRuns[maxRunsId]++;
        return res;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              i = 0;

            case 4:
              if (!(i < this.N.value / this.nQ)) {
                context$2$0.next = 17;
                break;
              }

              doc = this.getBestDocument(topic);

              while (this.tQRels.getQRel(topic).getRel(doc) !== _visualPoolComponentsUploadQrels.EnumPooledDocumentState.UNSELECTED) {
                doc = this.getBestDocument(topic);
              }
              console.log(doc);

              if (docs.has(doc)) {
                context$2$0.next = 14;
                break;
              }

              docs.add(doc);
              pooledDocument = new this.getPooledDocument(doc, this.qRels.getQRel(topic));

              this.tQRels.addAssessment(topic, pooledDocument.doc, pooledDocument.status);
              context$2$0.next = 14;
              return pooledDocument;

            case 14:
              i++;
              context$2$0.next = 4;
              break;

            case 17:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return MABGreedyTakeN;
  })(PoolingStrategy);

  var MABUCBTakeN = (function (_PoolingStrategy7) {
    _inherits(MABUCBTakeN, _PoolingStrategy7);

    function MABUCBTakeN() {
      _classCallCheck(this, MABUCBTakeN);

      _get(Object.getPrototypeOf(MABUCBTakeN.prototype), "constructor", this).call(this);
      this.name = "MABUCBTake@N";
      //parameters
      this.N = new N(10000);
      this.nQ = 0;
      this.tQRels = new _visualPoolComponentsUploadQrels.QRels();
      this.mLNumRuns = {};
      this.mMaxRunsId = {};
      this.mN = {};
    }

    _createClass(MABUCBTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "getNextDocument",
      value: function getNextDocument(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        var doc = this.gens[topic].next();
        console.log(doc);
        return doc;
      }
    }, {
      key: "getBestDocument",
      value: function getBestDocument(topic) {
        if (!this.mN[topic]) {
          this.mN[topic] = 0;
        }
        this.mN[topic]++;
        if (!this.mLNumRuns[topic]) {
          this.mLNumRuns[topic] = new Array(this.lRuns.length).fill(0);
        }
        var lNumRuns = this.mLNumRuns[topic];
        console.log(lNumRuns);
        var maxRunsId = undefined;
        var isOne = -1;
        for (var i = 0; i < lNumRuns.length; i++) {
          if (lNumRuns[i] === 0) {
            isOne = i;
            break;
          }
        }
        if (isOne >= 0) {
          maxRunsId = isOne;
        } else {
          var mRunsScores = {};
          for (var i = 0; i < this.lRuns.length; i++) {
            mRunsScores[this.lRuns[i].id] = 0;
            var sum1 = 0;
            var sum2 = 0;
            for (var j = 0; j < lNumRuns[i]; j++) {
              if (this.tQRels.getQRel(topic).getRel(this.lRuns[i].mRun[topic].lRunRecord[j].doc) === _visualPoolComponentsUploadQrels.EnumPooledDocumentState.RELEVANT) {
                mRunsScores[this.lRuns[i].id]++;
                sum1 += mRunsScores[this.lRuns[i].id] / (j + 1);
                sum2 += mRunsScores[this.lRuns[i].id] / (j + 1) * mRunsScores[this.lRuns[i].id] / (j + 1);
              }
            }
            sum1 /= lNumRuns[i];
            sum2 = sum2 / lNumRuns[i] - sum1 * sum1;
            /*console.log("ciao");
            console.log(this.lRuns[i].id);
            console.log(sum1);
            console.log(sum2);
            console.log(lNumRuns[i]);
            console.log(mRunsScores[this.lRuns[i].id]);*/
            mRunsScores[this.lRuns[i].id] = sum1 + Math.sqrt(Math.log(this.mN[topic]) / lNumRuns[i] * Math.min(1 / 4, sum2) + Math.sqrt(2 * Math.log(this.mN[topic]) / lNumRuns[i]));
          }
          console.log(mRunsScores);

          var maxValue = -Infinity;
          for (var i = 0; i < Object.values(mRunsScores).length; i++) {
            if (Object.values(mRunsScores)[i] > maxValue && lNumRuns[i] < this.lRuns[i].mRun[topic].lRunRecord.length) {
              maxValue = Object.values(mRunsScores)[i];
              maxRunsId = i;
            }
          }
        }
        this.mMaxRunsId[topic] = maxRunsId;
        var res = this.lRuns[maxRunsId].mRun[topic].lRunRecord[lNumRuns[maxRunsId]].doc;
        lNumRuns[maxRunsId]++;
        return res;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              i = 0;

            case 4:
              if (!(i < this.N.value / this.nQ)) {
                context$2$0.next = 17;
                break;
              }

              doc = this.getBestDocument(topic);

              while (this.tQRels.getQRel(topic).getRel(doc) !== _visualPoolComponentsUploadQrels.EnumPooledDocumentState.UNSELECTED) {
                doc = this.getBestDocument(topic);
              }
              console.log(doc);

              if (docs.has(doc)) {
                context$2$0.next = 14;
                break;
              }

              docs.add(doc);
              pooledDocument = new this.getPooledDocument(doc, this.qRels.getQRel(topic));

              this.tQRels.addAssessment(topic, pooledDocument.doc, pooledDocument.status);
              context$2$0.next = 14;
              return pooledDocument;

            case 14:
              i++;
              context$2$0.next = 4;
              break;

            case 17:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return MABUCBTakeN;
  })(PoolingStrategy);

  var MABBetaTakeN = (function (_PoolingStrategy8) {
    _inherits(MABBetaTakeN, _PoolingStrategy8);

    function MABBetaTakeN() {
      _classCallCheck(this, MABBetaTakeN);

      _get(Object.getPrototypeOf(MABBetaTakeN.prototype), "constructor", this).call(this);
      this.name = "MABBetaTake@N";
      //parameters
      this.N = new N(10000);
      this.nQ = 0;
      this.tQRels = new _visualPoolComponentsUploadQrels.QRels();
      this.mLNumRuns = {};
      this.mMaxRunsId = {};
    }

    _createClass(MABBetaTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "getNextDocument",
      value: function getNextDocument(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        var doc = this.gens[topic].next();
        console.log(doc);
        return doc;
      }
    }, {
      key: "getBestDocument",
      value: function getBestDocument(topic) {
        if (!this.mLNumRuns[topic]) {
          this.mLNumRuns[topic] = new Array(this.lRuns.length).fill(0);
        }
        var lNumRuns = this.mLNumRuns[topic];
        console.log(lNumRuns);
        var maxRunsId = undefined;
        var mRunsScores = {};
        for (var i = 0; i < this.lRuns.length; i++) {
          mRunsScores[this.lRuns[i].id] = 0;
          for (var j = 0; j < lNumRuns[i]; j++) {
            if (this.tQRels.getQRel(topic).getRel(this.lRuns[i].mRun[topic].lRunRecord[j].doc) === _visualPoolComponentsUploadQrels.EnumPooledDocumentState.RELEVANT) {
              mRunsScores[this.lRuns[i].id]++;
            }
          }
          mRunsScores[this.lRuns[i].id] = jStat.beta.sample(1 + mRunsScores[this.lRuns[i].id], 1 + lNumRuns[i] - mRunsScores[this.lRuns[i].id]);
        }
        console.log(mRunsScores);

        var maxValue = -Infinity;
        for (var i = 0; i < Object.values(mRunsScores).length; i++) {
          if (Object.values(mRunsScores)[i] > maxValue && lNumRuns[i] < this.lRuns[i].mRun[topic].lRunRecord.length) {
            maxValue = Object.values(mRunsScores)[i];
            maxRunsId = i;
          }
        }
        this.mMaxRunsId[topic] = maxRunsId;
        maxRunsId = this.mMaxRunsId[topic];
        var res = this.lRuns[maxRunsId].mRun[topic].lRunRecord[lNumRuns[maxRunsId]].doc;
        lNumRuns[maxRunsId]++;
        return res;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              i = 0;

            case 4:
              if (!(i < this.N.value / this.nQ)) {
                context$2$0.next = 17;
                break;
              }

              doc = this.getBestDocument(topic);

              while (this.tQRels.getQRel(topic).getRel(doc) !== _visualPoolComponentsUploadQrels.EnumPooledDocumentState.UNSELECTED) {
                doc = this.getBestDocument(topic);
              }
              console.log(doc);

              if (docs.has(doc)) {
                context$2$0.next = 14;
                break;
              }

              docs.add(doc);
              pooledDocument = new this.getPooledDocument(doc, this.qRels.getQRel(topic));

              this.tQRels.addAssessment(topic, pooledDocument.doc, pooledDocument.status);
              context$2$0.next = 14;
              return pooledDocument;

            case 14:
              i++;
              context$2$0.next = 4;
              break;

            case 17:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return MABBetaTakeN;
  })(PoolingStrategy);

  var MABMaxMeanTakeN = (function (_PoolingStrategy9) {
    _inherits(MABMaxMeanTakeN, _PoolingStrategy9);

    function MABMaxMeanTakeN() {
      _classCallCheck(this, MABMaxMeanTakeN);

      _get(Object.getPrototypeOf(MABMaxMeanTakeN.prototype), "constructor", this).call(this);
      this.name = "MABMaxMeanTake@N";
      //parameters
      this.N = new N(10000);
      this.nQ = 0;
      this.tQRels = new _visualPoolComponentsUploadQrels.QRels();
      this.mLNumRuns = {};
      this.mMaxRunsId = {};
    }

    _createClass(MABMaxMeanTakeN, [{
      key: "getParameters",
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: "getNextDocument",
      value: function getNextDocument(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        var doc = this.gens[topic].next();
        console.log(doc);
        return doc;
      }
    }, {
      key: "getBestDocument",
      value: function getBestDocument(topic) {
        if (!this.mLNumRuns[topic]) {
          this.mLNumRuns[topic] = new Array(this.lRuns.length).fill(0);
        }
        var lNumRuns = this.mLNumRuns[topic];
        console.log(lNumRuns);
        var maxRunsId = undefined;
        var mRunsScores = {};
        for (var i = 0; i < this.lRuns.length; i++) {
          mRunsScores[this.lRuns[i].id] = 0;
          for (var j = 0; j < lNumRuns[i]; j++) {
            if (this.tQRels.getQRel(topic).getRel(this.lRuns[i].mRun[topic].lRunRecord[j].doc) === _visualPoolComponentsUploadQrels.EnumPooledDocumentState.RELEVANT) {
              mRunsScores[this.lRuns[i].id]++;
            }
          }
          mRunsScores[this.lRuns[i].id] = (1 + mRunsScores[this.lRuns[i].id]) / (2 + lNumRuns[i] - mRunsScores[this.lRuns[i].id]);
        }
        console.log(mRunsScores);

        var maxValue = -Infinity;
        for (var i = 0; i < Object.values(mRunsScores).length; i++) {
          if (Object.values(mRunsScores)[i] > maxValue && lNumRuns[i] < this.lRuns[i].mRun[topic].lRunRecord.length) {
            maxValue = Object.values(mRunsScores)[i];
            maxRunsId = i;
          }
        }
        this.mMaxRunsId[topic] = maxRunsId;
        var res = this.lRuns[maxRunsId].mRun[topic].lRunRecord[lNumRuns[maxRunsId]].doc;
        lNumRuns[maxRunsId]++;
        return res;
      }
    }, {
      key: "genPool",
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, i, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (this.nQ === 0) {
                this.nQ = this.numberOfTopics();
              }
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              i = 0;

            case 4:
              if (!(i < this.N.value / this.nQ)) {
                context$2$0.next = 17;
                break;
              }

              doc = this.getBestDocument(topic);

              while (this.tQRels.getQRel(topic).getRel(doc) !== _visualPoolComponentsUploadQrels.EnumPooledDocumentState.UNSELECTED) {
                doc = this.getBestDocument(topic);
              }
              console.log(doc);

              if (docs.has(doc)) {
                context$2$0.next = 14;
                break;
              }

              docs.add(doc);
              pooledDocument = new this.getPooledDocument(doc, this.qRels.getQRel(topic));

              this.tQRels.addAssessment(topic, pooledDocument.doc, pooledDocument.status);
              context$2$0.next = 14;
              return pooledDocument;

            case 14:
              i++;
              context$2$0.next = 4;
              break;

            case 17:
            case "end":
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }]);

    return MABMaxMeanTakeN;
  })(PoolingStrategy);
});
//THIS IS A PROBLEM YOU SHOULD CREATE IF IT DOES NOT EXIST
//this.getPooledDocument(doc, this.qRels.getQRel(topic));
define('visual-pool/initializers/runs', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize(application) {
    var lRuns = _ember['default'].A();

    application.register('lRuns:main', lRuns, { instantiate: false });
    application.inject('component', 'lRuns', 'lRuns:main');
  }

  exports['default'] = {
    name: 'lRuns',
    initialize: initialize
  };
});
define('visual-pool/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('visual-pool/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("visual-pool/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('visual-pool/instance-initializers/ember-dialog', ['exports', 'visual-pool/config/environment', 'ember-dialog/configuration'], function (exports, _visualPoolConfigEnvironment, _emberDialogConfiguration) {
  exports.initialize = initialize;

  function initialize(application) {
    _emberDialogConfiguration['default'].load(_visualPoolConfigEnvironment['default']);
    application.inject('controller', 'dialog', 'service:dialog');
  }

  exports['default'] = {
    name: 'ember-dialog',
    initialize: initialize
  };
});
define("visual-pool/resolver", ["exports", "ember-resolver"], function (exports, _emberResolver) {
  exports["default"] = _emberResolver["default"];
});
define("visual-pool/router", ["exports", "ember", "visual-pool/config/environment"], function (exports, _ember, _visualPoolConfigEnvironment) {

  var Router = _ember["default"].Router.extend({
    location: _visualPoolConfigEnvironment["default"].locationType,
    rootURL: _visualPoolConfigEnvironment["default"].rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('app');
  });

  exports["default"] = Router;
});
define("visual-pool/routes/about", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("visual-pool/routes/app", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("visual-pool/routes/contact", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("visual-pool/routes/index", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);
      this.replaceWith('app');
    }
  });
});
define('visual-pool/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('visual-pool/services/dialog', ['exports', 'ember-dialog/services/dialog'], function (exports, _emberDialogServicesDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDialogServicesDialog['default'];
    }
  });
});
define("visual-pool/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 292,
            "column": 0
          }
        },
        "moduleName": "visual-pool/templates/about.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "jumbo");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-1 text-right");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-9 text-justify");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        var el5 = dom.createTextNode("Visual Pool: A Tool to Visualize and Interact with the Pooling Method");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-2 text-right");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-1 text-right");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-9 text-justify");
        var el4 = dom.createTextNode("\n      Every year more than 25 test collections are built among the main Information\n      Retrieval (IR) evaluation campaigns. They are extremely\n      important in IR because they become the evaluation praxis for the\n      forthcoming years. Test collections are built mostly using the pooling\n      method. The main advantage of this method is that it drastically\n      reduces the number of documents to be judged. It does so at the\n      cost of introducing biases, which are sometimes aggravated by non\n      optimal configuration. Here, we develop a novel visualization\n      technique for the pooling method, and integrate it in this demo\n      application named Visual Pool. This demo application enables the\n      user to interact with the pooling method with ease, and develops\n      visual hints in order to analyze existing test collections, and build\n      better ones.\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-2 text-right");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-1 text-right");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-9 text-justify");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        var el5 = dom.createTextNode("Introduction");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-2 text-right");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-1 text-right");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-9 text-justify");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        Test collection based evaluation in IR is a cornerstone of the IR\n        experimentation. Most often, test collections are built using the\n        pooling method. This method refers to a sampling procedure, according\n        to a given strategy, of documents to be judged. This demo\n        aims to visualize this procedure, allowing the user deeper insights.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        A test collection is composed of a collection of documents, a set\n        of topics, and a set of relevance judgements. A relevance judgment\n        (or qrel) expresses the relevance of a document for a given topic.\n        Due to the size of the modern collection of documents, to produce a\n        complete set of relevance judgements is impossible. For example, if\n        we examine what today would be considered a small test collection,\n        with 500,000 documents and 50 topics (approximately the size of the\n        TREC Ad Hoc 8 test collection [16]), the total relevance judgments\n        to be made would be 25 × 106. At an optimistic rate of 120 seconds\n        per judgment, this represents the equivalent of around 400 years of\n        work for one person [4]. To solve this problem, early in the modern\n        IR history, a sampling method was developed, the pooling method\n        [14].");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        The pooling method consists in building a test collection by\n        using the results provided by a set of search engines. These are\n        usually systems designed by participants of challenges organized\n        by IR evaluation campaigns such as: TREC, CLEF, NTCIR, or FIRE.\n        In these challenges, every participant is provided a collection of\n        documents and a set of topics. Their task is to develop a search\n        engine to produce a result that maximizes the goal dened by the\n        challenge. This result is then sent to the organizers, who now have\n        everything they need to implement a pooling strategy.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        The most common pooling strategy is the ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("i");
        var el6 = dom.createTextNode("Depth@K");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" strategy.\n        This consists of creating a pool by selecting the top K documents\n        from the results submitted by each system of each participant. The\n        pool is given to the relevance assessors, who will produce a set of\n        relevance assessments, which are then used in combination with\n        an IR evaluation measure to rank the performance of the systems\n        of the participants. These test collections are then used later by\n        researchers to evaluate their systems. However, when comparing a\n        new system with the search engines that participated in the challenge,\n        the pooled systems have an advantage given by the guarantee\n        that at least their top K documents have been judged, while for the\n        new system this guarantee does not exist. This effect goes under\n        the name of pool bias, which manifests itself when the evaluated\n        system retrieves documents that will never be considered relevant\n        [5] because they had never been seen by the human assessors.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        This bias can be mitigated by increasing: 1) the depth of the\n        pool, which decreases the probability of retrieving a non-judged\n        document; 2) the number of topics, which reduces the variability of\n        the bias making it easier to correct; and, 3) the number (assumed\n        to be proportional to the variety) of the submitted results by the\n        participants, which leads to a better exploration of the information\n        space. However, all of these solutions result in a mere increase of\n        the number of documents to be judged and therefore in an increase\n        of the cost of the test collection. The research in the IR community\n        to reduce the pool bias has branched out into two directions: (a)\n        identifying a pooling strategy and a set of parameters that manifests\n        a lower bias, and (b) estimating the bias to correct the score\n        obtained by the search engine. The former direction has lead to\n        the development of new pooling strategies [7, 10, 11], the latter\n        instead to the development of new pool bias estimators [6, 8, 9].\n        Moreover, a hybrid approach has been also explored developing\n        IR evaluation measures in combination with pooling strategies in\n        order to minimize the pool bias [15, 17].");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("\n        In this paper we present a demo that enables the user to visualize\n        and interact with the pooling method. This demo addresses the\n        needs of four classes of users: test collection builders, researchers,\n        lecturers, and students. This solution aims to, by exploiting the\n        users’ sight, develop visual cues to guide the development of more\n        sophisticated analyses. This solution is open source (MIT licensed)\n        and is available in this GitHub ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "https://github.com/aldolipani/VisualPool");
        var el6 = dom.createTextNode("repository");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(".\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-2 text-right");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("\n  <div class=\"row\">\n    <div class=\"col-md-1 text-right\"></div>\n    <div class=\"col-md-9 text-justify\">\n      <h2>Visual Pool</h2>\n    </div>\n    <div class=\"col-md-2 text-right\"></div>\n  </div>\n  <p>\n    Visual Pool gives its users a new perspective over the pooling\n    method, integrating a novel information visualization technique.\n    This section is divided into three parts: we rst present our pooling\n    visualization technique, then we explain how this is integrated into\n    the demo application, and we conclude listing the features of the\n    demo. The authors have not found any solution that addresses a\n    similar issue, which makes this solution unique in its kind.\n    In Figure 1 we see an example of the pool visualization technique.\n    In this case we have applied a Depth@K pooling strategy. On the\n    le, the run view highlights how the documents are distributed\n    among the runs. On the center, the unique documents runs view\n    where all the duplicated documents retrieved at a lower rank are\n    removed. On the right, the pool view shows the distribution of\n    unique documents at varying of the rank.</p>\n  <img src=\"/assets/images/Fig1.png\" class=\"img-responsive\" style=\"max-width: 30%\" alt=\"Responsive image\">\n  <p>In Figure 2 we show a screen-shot of the Visual Pool application.\n    In this user interface we identify the following sections (the\n    numbers correspond to those in the Figure):\n  </p>\n  <ol>\n    <li>Pooling Strategy Selection and Conguration. We can select\n      the pooling strategy among the 22 implemented. Every\n      pooling strategy is congurable, if needed.\n    </li>\n    <li>Visualization Control. We can select which topic to visualize,\n      and we can control which pool visualization view to\n      display: run, unique documents runs, or pool.\n    </li>\n    <li>Pool Strategy Control. We can control the progress of the\n      pooling strategy. We can here decide if to step the pooling\n      strategy forward by one document or till the end, for the\n      current topic, or for all the topics.\n    </li>\n    <li>Visualization. We visualize the pool using the previously\n      described visualization technique.\n    </li>\n    <li>Analytics. We have a set of analytics that show statistics\n      about the pool and display the current status of the pooling\n      strategy.\n    </li>\n    <li>Log. The log of the pooling strategy is displayed, where we\n      show the status of the processed documents.\n    </li>\n    <li>Run/QRels upload. We can upload the set of runs to be\n      analyzed. It is possible also to indicate at which size to cut\n      the runs. When an existing test collection is to be analyzed,\n      we can also upload the set of relevance assessments, which\n      will be used to visualize the process of assessment.\n    </li>\n    <li>QRels download. We can download the current qrels le,\n      e.g. the current set of relevance assessments as generated\n      by the pooling strategy.\n    </li>\n  </ol>\n  <p>\n    In summary, here we list all the features implemented in the\n    version of the demo presented at SIGIR:</p>\n  <ul>\n    <li>Load runs les in TREC format with a given size;</li>\n    <li>Load a qrels le in TREC format;</li>\n    <li>Select a pooling strategy and congure its parameters;</li>\n    <li>Select which topic to visualize;</li>\n    <li>Control the progress of the pooling strategy;</li>\n    <li>Visualize the pool in three views: runs, unique documents\n      runs, or pool;\n    </li>\n    <li>Visualize the log of the progress of the pooling strategy;</li>\n    <li>Visualize the statistics about the pool and the status of the\n      pooling strategy.\n    </li>\n    <li> Save the progress of the pooling strategy as a qrels le in\n      TREC format;\n    </li>\n    <li> If required by the pooling strategy ask the user to judge a\n      document;\n    </li>\n    <li>Offer API for controlling the pooling strategy in order to\n      perform the judgment with an external application.\n    </li>\n  </ul>\n\n  <p>In Table 1 are listed all the pooling strategies already implemented\n    in the demo.</p>\n\n  <h2>Use Cases</h2>\n  <p>In this section we present three use cases that cover the main user\n    needs expressed by the four classes of users we aim to address. The\n    rst use case is about the visualization of an existing test collection.</p>\n  The second use case is about the analysis of a pooling strategy.\n  Finally, the third use case is about building a test collection.\n  <h3>Visualizing a Test Collection</h3>\n  <p>This use case addresses the needs of researchers when (a) interested\n    in checking the properties of a test collection, e.g. visualize the\n    pooled runs, assess the behavior of each topic, bias of the nonpooled\n    or new systems, or (b) interested in juxtaposing two or\n    more test collections to compare their properties.\n    For this use case, it is required from the user to provide as input\n    both the runs les and the qrels le. Then, select the pooling\n    strategy used to build the test collection, select the appropriate\n    parameters, and execute the pooling strategy. Now, the application\n    will display a visualization similar to Figure 1, where the user\n    can select dynamically which view, and topic to visualize. When\n    multiple test collections are to be compared, the user can repeat\n    the process with a new instance of the application for each test\n    collection.</p>\n  <h3>Analyzing of a Pooling Strategy</h3>\n  <p>This use case addresses the needs of lecturers to help them explain\n    the pooling method to students, and to address the needs of students\n    to better understand the algorithm. However, also researchers\n    benet from this use case, e.g. when interested in juxtaposing the\n    results obtained with different pooling strategies.\n    For this use case, it is required from the user to provide as input\n    both the runs les and the qrels le. Then, the user can select a\n    pooling strategy to be analyzed, and configure it. Now, the application\n    of the pooling strategy can be controlled by the controllers\n    in the pooling controller section that allows the user to follow the\n    pooling strategy at her/his own pace. To compare different pooling\n    strategies, the user can repeat the process with a new instance of\n    the application for each pooling strategy</p>\n  <h3>Building a Test Collection</h3>\n  <p>This use case addresses the needs of a test collection builder to\n    help them control the assessments of the selected documents using\n    the application as a dashboard. This is achieved by making use\n    of the API offered by the application, which allows a third party\n    application to query the application about which document should\n    be judged, and send a response back with the label.</p>\n  <p>\n    For this use case, it is required from the user to provide as input\n    the runs les, select a pooling strategy to be used, and congure\n    it. Then, generate a unique key that will be used by the third party\n    application to communicate with the application. At this point the\n    user is able to follow the judgment process on-line. The application\n    allows the user to change strategy if required, by downloading the\n    current qrels and giving them as input to a new instance of the\n    application.</p>\n  <h2>TECHNOLOGY</h2>\n  <p>This demo has been developed as a modern web application in\n    JavaScript for the front-end and Scala for the back-end. The frontend\n    is based on the web framework Ember.js1\n    , and on the visualization\n    library p5.js2\n    , which is based on the Processing3\n    language.\n    The back-end is based on the Play Framework4\n    and for in-memory\n    storage on Redis5\n    , which is required only to support the API module.</p>\n  <p>The input les to be provided to the application are based on\n    the de facto standard format of trec eval6\n    . The format is a nonbreakable\n    space separated le. In Table 2 we show the elds in\n    the correct order as they should be contained by a runs le, and in\n    Table 3 we show the same but for a qrels le. As indicated in the\n    tables, some of the elds are ignored because they are redundant.\n    The type String+ is a String type that does not contain spaces.</p>\n  <h2>DISCUSSION & CONCLUSION</h2>\n  <p>In this demo paper we have presented Visual Pool, an application to\n    help test collection builders, researchers, lecturers, and students to\n    visualize the pooling method. We believe that this technology will\n    have a commercial impact because it allows the building of more\n    ecient test collections but at the same cost, through the application\n    of more ecient pooling strategies. We also believe it will have\n    a research impact because it enables the analysis of new pooling\n    strategies. Finally, it will have an educational impact because it\n    supports lecturers in explaining and students in understanding the\n    pooling method.</p>\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("visual-pool/templates/app", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 11,
              "column": 8
            }
          },
          "moduleName": "visual-pool/templates/app.hbs"
        },
        isEmpty: true,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 13,
              "column": 8
            }
          },
          "moduleName": "visual-pool/templates/app.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "topic-selector", [], ["selectTopic", "selectTopic", "topics", ["subexpr", "@mut", [["get", "pool.lTopicPool", ["loc", [null, [12, 60], [12, 75]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [12, 10], [12, 77]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 61,
            "column": 6
          }
        },
        "moduleName": "visual-pool/templates/app.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container col-md-8");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-9");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-2");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-1");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-2");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container col-md-2");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        dom.setAttribute(el3, "style", "margin-top:7px");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-8");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-2");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-2");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element0, [5]);
        var element4 = dom.childAt(fragment, [2]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [3, 1]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element3, [1, 1]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(element3, [3, 1]), 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
        morphs[8] = dom.createMorphAt(dom.childAt(element4, [3]), 1, 1);
        morphs[9] = dom.createMorphAt(dom.childAt(element4, [5]), 1, 1);
        return morphs;
      },
      statements: [["inline", "poolstrategy-selector", [], ["poolStrategies", ["subexpr", "@mut", [["get", "pool.lPoolStrategy", ["loc", [null, [6, 25], [6, 43]]], 0, 0, 0, 0]], [], [], 0, 0], "selected", ["subexpr", "@mut", [["get", "poolStrategySelected", ["loc", [null, [7, 19], [7, 39]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [5, 8], [7, 41]]], 0, 0], ["block", "if", [["get", "loading", ["loc", [null, [10, 14], [10, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [10, 8], [13, 15]]]], ["inline", "canvas-visual-pool-view-selector", [], ["viewSelector", ["subexpr", "@mut", [["get", "viewSelector", ["loc", [null, [17, 23], [17, 35]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [16, 8], [17, 37]]], 0, 0], ["inline", "canvas-visual-pool", [], ["viewSelector", ["subexpr", "@mut", [["get", "viewSelector", ["loc", [null, [23, 23], [23, 35]]], 0, 0, 0, 0]], [], [], 0, 0], "topicSelected", ["subexpr", "@mut", [["get", "topicSelected", ["loc", [null, [24, 24], [24, 37]]], 0, 0, 0, 0]], [], [], 0, 0], "lPooledDocument", ["subexpr", "@mut", [["get", "lPooledDocument", ["loc", [null, [25, 26], [25, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [22, 8], [25, 43]]], 0, 0], ["inline", "poolstrategy-stats", [], ["topicSelected", ["subexpr", "@mut", [["get", "topicSelected", ["loc", [null, [31, 20], [31, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "lPooledDocument", ["subexpr", "@mut", [["get", "lPooledDocument", ["loc", [null, [32, 22], [32, 37]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [30, 4], [32, 39]]], 0, 0], ["inline", "poolstrategy-player", [], ["stepForward", "stepForward", "fastForward", "fastForward"], ["loc", [null, [37, 8], [39, 37]]], 0, 0], ["inline", "poolstrategy-log", [], ["lPooledDocument", ["subexpr", "@mut", [["get", "lPooledDocument", ["loc", [null, [45, 26], [45, 41]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [44, 8], [45, 43]]], 0, 0], ["inline", "upload-runs", [], ["updateTopicSelector", "updateTopicSelector"], ["loc", [null, [52, 4], [52, 61]]], 0, 0], ["content", "upload-qrels", ["loc", [null, [55, 4], [55, 20]]], 0, 0, 0, 0], ["inline", "download-qrels", [], ["lPooledDocument", ["subexpr", "@mut", [["get", "lPooledDocument", ["loc", [null, [59, 22], [59, 37]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [58, 4], [59, 39]]], 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("visual-pool/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 8
            },
            "end": {
              "line": 7,
              "column": 8
            }
          },
          "moduleName": "visual-pool/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createTextNode("Visual Pool");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element2, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "view.href", ["loc", [null, [6, 21], [6, 30]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "visual-pool/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createTextNode("About");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element1, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "view.href", ["loc", [null, [9, 21], [9, 30]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 8
            },
            "end": {
              "line": 13,
              "column": 8
            }
          },
          "moduleName": "visual-pool/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createTextNode("Contact");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "view.href", ["loc", [null, [12, 21], [12, 30]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 6
          }
        },
        "moduleName": "visual-pool/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-inverse navbar-static-top");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "navbar");
        dom.setAttribute(el3, "class", "collapse navbar-collapse");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        dom.setAttribute(el1, "style", "width:100%");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [0, 1, 1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element3, 1, 1);
        morphs[1] = dom.createMorphAt(element3, 2, 2);
        morphs[2] = dom.createMorphAt(element3, 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["app"], ["tagName", "li"], 0, null, ["loc", [null, [5, 8], [7, 20]]]], ["block", "link-to", ["about"], ["tagName", "li"], 1, null, ["loc", [null, [8, 8], [10, 20]]]], ["block", "link-to", ["contact"], ["tagName", "li"], 2, null, ["loc", [null, [11, 8], [13, 20]]]], ["content", "outlet", ["loc", [null, [20, 2], [20, 12]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("visual-pool/templates/components/canvas-visual-pool-view-selector", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "visual-pool/templates/components/canvas-visual-pool-view-selector.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "glyphicon glyphicon-align-justify");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "visual-pool/templates/components/canvas-visual-pool-view-selector.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "glyphicon glyphicon-align-left");
            dom.setAttribute(el1, "aria-hidden", "true");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 2
                },
                "end": {
                  "line": 8,
                  "column": 2
                }
              },
              "moduleName": "visual-pool/templates/components/canvas-visual-pool-view-selector.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "glyphicon glyphicon-indent-right");
              dom.setAttribute(el1, "aria-hidden", "true");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n  ");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 2
              }
            },
            "moduleName": "visual-pool/templates/components/canvas-visual-pool-view-selector.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "poolView", ["loc", [null, [6, 12], [6, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [6, 2], [8, 2]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 2
            }
          },
          "moduleName": "visual-pool/templates/components/canvas-visual-pool-view-selector.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "uniqueView", ["loc", [null, [4, 12], [4, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 2], [8, 2]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 9
          }
        },
        "moduleName": "visual-pool/templates/components/canvas-visual-pool-view-selector.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "type", "button");
        dom.setAttribute(el1, "class", "btn btn-default pull-right");
        dom.setAttribute(el1, "style", "margin-bottom:4px;white-space: normal;");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        return morphs;
      },
      statements: [["element", "action", ["changeView"], [], ["loc", [null, [1, 104], [1, 127]]], 0, 0], ["block", "if", [["get", "normalView", ["loc", [null, [2, 8], [2, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 2], [8, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("visual-pool/templates/components/canvas-visual-pool", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 125
          }
        },
        "moduleName": "visual-pool/templates/components/canvas-visual-pool.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "canvasVisualPoolContainer");
        dom.setAttribute(el1, "style", "height:calc(100vh - 196px);max-height:calc(100vh - 196px);padding-left:5px");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("visual-pool/templates/components/download-qrels", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "visual-pool/templates/components/download-qrels.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "btn-group btn-group-justified");
        dom.setAttribute(el1, "role", "group");
        dom.setAttribute(el1, "aria-label", "Justified button group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "#");
        dom.setAttribute(el2, "class", "btn btn-default");
        dom.setAttribute(el2, "role", "button");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "glyphicon glyphicon-save");
        dom.setAttribute(el3, "aria-hidden", "true");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Save QRels\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["download"], [], ["loc", [null, [2, 52], [2, 73]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("visual-pool/templates/components/poolstrategy-log", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 10
            },
            "end": {
              "line": 11,
              "column": 10
            }
          },
          "moduleName": "visual-pool/templates/components/poolstrategy-log.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "text-right");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "text-left");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [2]), 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["subexpr", "poolstrategy-log-rel", [["get", "pooledDocument.rel", ["loc", [null, [8, 46], [8, 64]]], 0, 0, 0, 0]], [], ["loc", [null, [8, 23], [8, 66]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "pooledDocument.topic", ["loc", [null, [9, 37], [9, 61]]], 0, 0, 0, 0], ["content", "pooledDocument.document", ["loc", [null, [9, 88], [9, 115]]], 0, 0, 0, 0]],
        locals: ["pooledDocument"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 6
          }
        },
        "moduleName": "visual-pool/templates/components/poolstrategy-log.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body");
        dom.setAttribute(el2, "style", "height:calc(100vh - 200px);max-height:calc(100vh - 200px);overflow-y:scroll;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "table-responsive");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "bodycontainer scrollable");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("table");
        dom.setAttribute(el5, "class", "table table-hover table-striped table-condensed");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("tbody");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 1, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "reverse", ["loc", [null, [7, 18], [7, 25]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [7, 10], [11, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("visual-pool/templates/components/poolstrategy-player", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 6
          }
        },
        "moduleName": "visual-pool/templates/components/poolstrategy-player.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "btn-group btn-group-justified");
        dom.setAttribute(el1, "role", "group");
        dom.setAttribute(el1, "aria-label", "Justified button group");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "#");
        dom.setAttribute(el2, "class", "btn btn-default");
        dom.setAttribute(el2, "role", "button");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "glyphicon glyphicon-step-forward");
        dom.setAttribute(el3, "aria-hidden", "true");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "#");
        dom.setAttribute(el2, "class", "btn btn-default");
        dom.setAttribute(el2, "role", "button");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "glyphicon glyphicon-play");
        dom.setAttribute(el3, "aria-hidden", "true");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("<a href=\"#\" class=\"btn btn-default\" role=\"button\">\n        <span class=\"glyphicon glyphicon-pause\" aria-hidden=\"true\"></span>\n    </a>!");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["element", "action", ["stepForward"], [], ["loc", [null, [2, 54], [2, 78]]], 0, 0], ["element", "action", ["fastForward"], [], ["loc", [null, [5, 54], [5, 78]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("visual-pool/templates/components/poolstrategy-selector", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 6
            },
            "end": {
              "line": 7,
              "column": 6
            }
          },
          "moduleName": "visual-pool/templates/components/poolstrategy-selector.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "strategy.name", ["loc", [null, [6, 16], [6, 33]]], 0, 0, 0, 0]],
        locals: ["strategy"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 19,
              "column": 0
            }
          },
          "moduleName": "visual-pool/templates/components/poolstrategy-selector.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col-md-3");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "input-group");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "input-group-addon");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0, 1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["content", "parameter.name", ["loc", [null, [15, 36], [15, 54]]], 0, 0, 0, 0], ["inline", "input", [], ["class", "form-control", "value", ["subexpr", "@mut", [["get", "parameter.value", ["loc", [null, [16, 39], [16, 54]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [16, 4], [16, 56]]], 0, 0]],
        locals: ["parameter"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 6
          }
        },
        "moduleName": "visual-pool/templates/components/poolstrategy-selector.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col-md-4");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "input-group");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "input-group-addon");
        dom.setAttribute(el3, "id", "basic-addon-strategy");
        var el4 = dom.createTextNode("Strategy");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("select");
        dom.setAttribute(el3, "class", "form-control");
        dom.setAttribute(el3, "aria-describedby", "basic-addon-strategy");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col-md-8");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 1, 3]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'onchange');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["selectPoolStrategy"], ["value", "target.value"], ["loc", [null, [null, null], [4, 73]]], 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "poolStrategies", ["loc", [null, [5, 14], [5, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [5, 6], [7, 15]]]], ["block", "each", [["get", "parameters", ["loc", [null, [12, 8], [12, 18]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [12, 0], [19, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("visual-pool/templates/components/poolstrategy-stats", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 6
          }
        },
        "moduleName": "visual-pool/templates/components/poolstrategy-stats.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3, "class", "panel-title");
        var el4 = dom.createTextNode("Pooling Stats");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body");
        dom.setAttribute(el2, "style", "height:calc(100vh - 199px);max-height:calc(100vh - 198px);overflow-y:scroll;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 3]);
        var morphs = new Array(15);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(element0, [11]), 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(element0, [13]), 0, 0);
        morphs[7] = dom.createMorphAt(dom.childAt(element0, [15]), 0, 0);
        morphs[8] = dom.createMorphAt(dom.childAt(element0, [17]), 0, 0);
        morphs[9] = dom.createMorphAt(dom.childAt(element0, [19]), 0, 0);
        morphs[10] = dom.createMorphAt(dom.childAt(element0, [21]), 0, 0);
        morphs[11] = dom.createMorphAt(dom.childAt(element0, [23]), 0, 0);
        morphs[12] = dom.createMorphAt(dom.childAt(element0, [25]), 0, 0);
        morphs[13] = dom.createMorphAt(dom.childAt(element0, [27]), 0, 0);
        morphs[14] = dom.createMorphAt(dom.childAt(element0, [29]), 0, 0);
        return morphs;
      },
      statements: [["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nT", ["loc", [null, [6, 26], [6, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [6, 7], [6, 30]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nRt", ["loc", [null, [7, 26], [7, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 7], [7, 31]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "sNRt", ["loc", [null, [8, 26], [8, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [8, 7], [8, 32]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "sURt", ["loc", [null, [9, 26], [9, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [9, 7], [9, 32]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nR", ["loc", [null, [10, 26], [10, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 7], [10, 30]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "sNR", ["loc", [null, [11, 26], [11, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [11, 7], [11, 31]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "sUR", ["loc", [null, [12, 26], [12, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [12, 7], [12, 31]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nQPt", ["loc", [null, [13, 26], [13, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [13, 7], [13, 32]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nQNt", ["loc", [null, [14, 26], [14, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [14, 7], [14, 32]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nQQt", ["loc", [null, [15, 26], [15, 30]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [15, 7], [15, 32]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nQt", ["loc", [null, [16, 26], [16, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [16, 7], [16, 31]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nQP", ["loc", [null, [17, 26], [17, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [17, 7], [17, 31]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nQN", ["loc", [null, [18, 26], [18, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [18, 7], [18, 31]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nQQ", ["loc", [null, [19, 26], [19, 29]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [19, 7], [19, 31]]], 0, 0], ["inline", "latex-maths", [], ["expr", ["subexpr", "@mut", [["get", "nQ", ["loc", [null, [20, 26], [20, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [20, 7], [20, 30]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("visual-pool/templates/components/topic-selector", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "visual-pool/templates/components/topic-selector.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "topic.id", ["loc", [null, [6, 14], [6, 26]]], 0, 0, 0, 0]],
        locals: ["topic"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 9,
              "column": 4
            }
          },
          "moduleName": "visual-pool/templates/components/topic-selector.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("Null");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 6
          }
        },
        "moduleName": "visual-pool/templates/components/topic-selector.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "input-group pull-right");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "input-group-addon");
        dom.setAttribute(el2, "id", "basic-addon-topic");
        var el3 = dom.createTextNode("Topic");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("select");
        dom.setAttribute(el2, "class", "form-control");
        dom.setAttribute(el2, "aria-describedby", "basic-addon-topic");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 3]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'onchange');
        morphs[1] = dom.createAttrMorph(element0, 'disabled');
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["selectTopic"], ["value", "target.value"], ["loc", [null, [null, null], [3, 64]]], 0, 0], 0, 0, 0, 0], ["attribute", "disabled", ["concat", [["subexpr", "if", [["get", "noTopics", ["loc", [null, [4, 25], [4, 33]]], 0, 0, 0, 0], "disabled"], [], ["loc", [null, [4, 20], [4, 46]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "topics", ["loc", [null, [5, 12], [5, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [5, 4], [9, 13]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("visual-pool/templates/components/upload-qrels", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "visual-pool/templates/components/upload-qrels.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "btn-group btn-group-justified");
        dom.setAttribute(el1, "role", "group");
        dom.setAttribute(el1, "aria-label", "Justified button group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "class", "btn btn-default btn-file");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "glyphicon glyphicon-upload");
        dom.setAttribute(el3, "aria-hidden", "true");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Load QRels  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "multiple", "true");
        dom.setAttribute(el3, "type", "file");
        dom.setAttribute(el3, "style", "display: none;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 3]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'onchange');
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["upload"], [], ["loc", [null, [null, null], [3, 135]]], 0, 0], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("visual-pool/templates/components/upload-runs", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 6
          }
        },
        "moduleName": "visual-pool/templates/components/upload-runs.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col-md-2");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "class", "btn btn-default btn-file");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "glyphicon glyphicon-upload");
        dom.setAttribute(el3, "aria-hidden", "true");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Load Runs ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "multiple", "true");
        dom.setAttribute(el3, "type", "file");
        dom.setAttribute(el3, "style", "display: none;");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col-md-2 input-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "input-group-addon");
        var el3 = dom.createTextNode("Run Size");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "class", "form-control");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 3]);
        var element1 = dom.childAt(fragment, [2, 3]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'onchange');
        morphs[1] = dom.createAttrMorph(element1, 'onblur');
        morphs[2] = dom.createAttrMorph(element1, 'value');
        morphs[3] = dom.createElementMorph(element1);
        morphs[4] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["upload"], [], ["loc", [null, [null, null], [4, 65]]], 0, 0], 0, 0, 0, 0], ["attribute", "onblur", ["subexpr", "action", ["runSizeChange"], ["value", "target.value"], ["loc", [null, [null, null], [11, 58]]], 0, 0], 0, 0, 0, 0], ["attribute", "value", ["get", "runSize", ["loc", [null, [12, 35], [12, 42]]], 0, 0, 0, 0], 0, 0, 0, 0], ["element", "bind-attr", [], ["id", "item.textboxId"], ["loc", [null, [9, 9], [9, 42]]], 0, 0], ["element", "bind-attr", [], ["value", "item.value"], ["loc", [null, [10, 16], [10, 48]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("visual-pool/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 43,
            "column": 6
          }
        },
        "moduleName": "visual-pool/templates/contact.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "page-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Contact the Authors");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        dom.setAttribute(el2, "style", "margin-right: 15px; margin-left: 15px;");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4 m-b-lg");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default panel-profile m-b-0");
        dom.setAttribute(el4, "style", "margin-right: 15px; margin-left: 15px;");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-heading");
        dom.setAttribute(el5, "style", "height: 150px");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "class", "panel-profile-img");
        dom.setAttribute(el6, "src", "/assets/images/Aldo_Lipani.jpg");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h5");
        dom.setAttribute(el6, "class", "panel-title");
        var el7 = dom.createTextNode("Aldo Lipani");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "m-b");
        var el7 = dom.createTextNode("TU Wien");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://aldolipani.com");
        var el7 = dom.createTextNode("http://aldolipani.com");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4 m-b-lg");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default panel-profile m-b-0");
        dom.setAttribute(el4, "style", "margin-right: 15px; margin-left: 15px;");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-heading");
        dom.setAttribute(el5, "style", "height: 150px");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "class", "panel-profile-img");
        dom.setAttribute(el6, "src", "/assets/images/Mihai_Lupu.jpg");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h5");
        dom.setAttribute(el6, "class", "panel-title");
        var el7 = dom.createTextNode("Mihai Lupu");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "m-b");
        var el7 = dom.createTextNode("TU Wien");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://mihailupu.net");
        var el7 = dom.createTextNode("http://mihailupu.net");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4 m-b-lg");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default panel-profile m-b-0");
        dom.setAttribute(el4, "style", "margin-right: 15px; margin-left: 15px;");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-heading");
        dom.setAttribute(el5, "style", "height: 150px");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "class", "panel-profile-img");
        dom.setAttribute(el6, "src", "/assets/images/Allan_Hanbury.jpg");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h5");
        dom.setAttribute(el6, "class", "panel-title");
        var el7 = dom.createTextNode("Allan Hanbury");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "m-b");
        var el7 = dom.createTextNode("TU Wien");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://allan.hanbury.eu");
        var el7 = dom.createTextNode("http://allan.hanbury.eu");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("visual-pool/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "visual-pool/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("visual-pool/templates/layouts/alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 6
            },
            "end": {
              "line": 11,
              "column": 6
            }
          },
          "moduleName": "visual-pool/templates/layouts/alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "dialog-body");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "partial", [["get", "templateName", ["loc", [null, [10, 43], [10, 55]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 33], [10, 57]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 6
            },
            "end": {
              "line": 13,
              "column": 6
            }
          },
          "moduleName": "visual-pool/templates/layouts/alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "component", ["dialog-body"], ["layout", ["subexpr", "@mut", [["get", "template", ["loc", [null, [12, 41], [12, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "contextObject", ["subexpr", "@mut", [["get", "contextObject", ["loc", [null, [12, 64], [12, 77]]], 0, 0, 0, 0]], [], [], 0, 0], "context", ["subexpr", "@mut", [["get", "context", ["loc", [null, [12, 86], [12, 93]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "dialog-body"], ["loc", [null, [12, 8], [12, 115]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "visual-pool/templates/layouts/alert.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dialog-content");
        dom.setAttribute(el2, "tabindex", "-1");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "dialog-close");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "dialog-title");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-footer");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn__accept");
        dom.setAttribute(el4, "type", "button");
        var el5 = dom.createTextNode("OK");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element1, [5, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        morphs[3] = dom.createMorphAt(element1, 3, 3);
        morphs[4] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ember-dialog-dialog ", ["get", "className", ["loc", [null, [1, 34], [1, 43]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "substrate", ["loc", [null, [1, 51], [1, 60]]], 0, 0, 0, 0], "substrate"], [], ["loc", [null, [1, 46], [1, 74]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["accept"], [], ["loc", [null, [5, 49], [5, 68]]], 0, 0], ["content", "title", ["loc", [null, [6, 32], [6, 41]]], 0, 0, 0, 0], ["block", "if", [["get", "templateName", ["loc", [null, [9, 12], [9, 24]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [9, 6], [13, 13]]]], ["element", "action", ["accept"], [], ["loc", [null, [16, 52], [16, 71]]], 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("visual-pool/templates/layouts/blank", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 4
            }
          },
          "moduleName": "visual-pool/templates/layouts/blank.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "dialog-body");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "partial", [["get", "templateName", ["loc", [null, [4, 41], [4, 53]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 31], [4, 55]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 4
            }
          },
          "moduleName": "visual-pool/templates/layouts/blank.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "component", ["dialog-body"], ["layout", ["subexpr", "@mut", [["get", "template", ["loc", [null, [6, 39], [6, 47]]], 0, 0, 0, 0]], [], [], 0, 0], "contextObject", ["subexpr", "@mut", [["get", "contextObject", ["loc", [null, [6, 62], [6, 75]]], 0, 0, 0, 0]], [], [], 0, 0], "context", ["subexpr", "@mut", [["get", "context", ["loc", [null, [6, 84], [6, 91]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "dialog-body"], ["loc", [null, [6, 6], [6, 113]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "visual-pool/templates/layouts/blank.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dialog-content");
        dom.setAttribute(el2, "tabindex", "-1");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ember-dialog-dialog ", ["get", "className", ["loc", [null, [1, 34], [1, 43]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "substrate", ["loc", [null, [1, 51], [1, 60]]], 0, 0, 0, 0], "substrate"], [], ["loc", [null, [1, 46], [1, 74]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "templateName", ["loc", [null, [3, 10], [3, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 4], [7, 11]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("visual-pool/templates/layouts/confirm", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 6
            },
            "end": {
              "line": 11,
              "column": 6
            }
          },
          "moduleName": "visual-pool/templates/layouts/confirm.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "dialog-body");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "partial", [["get", "templateName", ["loc", [null, [10, 43], [10, 55]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 33], [10, 57]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 6
            },
            "end": {
              "line": 13,
              "column": 6
            }
          },
          "moduleName": "visual-pool/templates/layouts/confirm.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "component", ["dialog-body"], ["layout", ["subexpr", "@mut", [["get", "template", ["loc", [null, [12, 41], [12, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "contextObject", ["subexpr", "@mut", [["get", "contextObject", ["loc", [null, [12, 64], [12, 77]]], 0, 0, 0, 0]], [], [], 0, 0], "context", ["subexpr", "@mut", [["get", "context", ["loc", [null, [12, 86], [12, 93]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "dialog-body"], ["loc", [null, [12, 8], [12, 115]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "visual-pool/templates/layouts/confirm.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dialog-content");
        dom.setAttribute(el2, "tabindex", "-1");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "dialog-close");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "dialog-title");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-footer");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn__accept");
        dom.setAttribute(el4, "type", "button");
        var el5 = dom.createTextNode("Yes");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn__decline");
        dom.setAttribute(el4, "type", "button");
        var el5 = dom.createTextNode("No");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element1, [5]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element4, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        morphs[3] = dom.createMorphAt(element1, 3, 3);
        morphs[4] = dom.createElementMorph(element5);
        morphs[5] = dom.createElementMorph(element6);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ember-dialog-dialog ", ["get", "className", ["loc", [null, [1, 34], [1, 43]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "substrate", ["loc", [null, [1, 51], [1, 60]]], 0, 0, 0, 0], "substrate"], [], ["loc", [null, [1, 46], [1, 74]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["decline"], [], ["loc", [null, [5, 49], [5, 69]]], 0, 0], ["content", "title", ["loc", [null, [6, 32], [6, 41]]], 0, 0, 0, 0], ["block", "if", [["get", "templateName", ["loc", [null, [9, 12], [9, 24]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [9, 6], [13, 13]]]], ["element", "action", ["accept"], [], ["loc", [null, [16, 52], [16, 71]]], 0, 0], ["element", "action", ["decline"], [], ["loc", [null, [17, 53], [17, 73]]], 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("visual-pool/templates/messages/isitrelevant", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 82
          }
        },
        "moduleName": "visual-pool/templates/messages/isitrelevant.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Is document ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" relevant for topic ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("?");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["content", "contextObject.document", ["loc", [null, [1, 12], [1, 38]]], 0, 0, 0, 0], ["content", "contextObject.topic", ["loc", [null, [1, 58], [1, 81]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('visual-pool/utils/zindex', ['exports', 'ember-dialog/utils/zindex'], function (exports, _emberDialogUtilsZindex) {
  Object.defineProperty(exports, 'max', {
    enumerable: true,
    get: function get() {
      return _emberDialogUtilsZindex.max;
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('visual-pool/config/environment', ['ember'], function(Ember) {
  var prefix = 'visual-pool';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("visual-pool/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"visual-pool","version":"0.0.0+419f4b80"});
}

/* jshint ignore:end */
//# sourceMappingURL=visual-pool.map
