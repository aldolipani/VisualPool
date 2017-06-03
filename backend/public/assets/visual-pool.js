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
      key: "draw",
      value: function draw(topic, viewSelector) {
        var w = (this.p.width - this.x) / this.nRuns;
        var h = (this.p.height - this.y) / this.maxNRunRecords;
        var i = 0;

        if (viewSelector === 0) {
          for (var key in this.mRuns) {
            this.p.textAlign(this.p.LEFT, this.p.BASELINE);
            //this.p.fill("black");
            //this.p.text(key, this.x + w * i + 5, this.y + 5);
            this.mRuns[key].draw(this.x + w * i, this.y + 10, w, h, topic, viewSelector);
            i++;
          }
        } else {
          var viewDoc = new Set();
          var maxJ = this.getMaxSizeRun(this.mRuns, topic);
          for (var j = 0; j < maxJ; j++) {
            i = 0;
            for (var key in this.mRuns) {
              this.p.textAlign(this.p.LEFT, this.p.BASELINE);
              if (this.mRuns[key].runs.mRun[topic].lRunRecord.length > j && !viewDoc.has(this.mRuns[key].runs.mRun[topic].lRunRecord[j].doc)) {
                viewDoc.add(this.mRuns[key].runs.mRun[topic].lRunRecord[j].doc);
                this.mRuns[key].drawSingleDoc(j, this.x + w * i, this.y + 10, w, h, topic, viewSelector);
                if (viewSelector === 2) {
                  i = (i + 1) % Object.keys(this.mRuns).length;
                }
              }
              if (viewSelector === 1) {
                i = (i + 1) % Object.keys(this.mRuns).length;
              }
            }
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
        p.fill(40);
        p.noStroke();
        if (this.topicDocument[topic][doc] === EnumPooledDocumentState.UNSELECTED) {
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
            p.frameRate(10);
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
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = lPooledDocument[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var pooledDocument = _step4.value;

          if (pooledDocument.rel >= 1 && pooledDocument.topic === topic) {
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
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = lPooledDocument[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var pooledDocument = _step5.value;

          if (pooledDocument.rel === 0 && pooledDocument.topic === topic) {
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
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = lPooledDocument[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var pooledDocument = _step6.value;

          if (pooledDocument.rel < 0 && pooledDocument.topic === topic) {
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
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = lPooledDocument[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var pooledDocument = _step7.value;

          if (pooledDocument.topic === topic) {
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
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = lPooledDocument[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var pooledDocument = _step8.value;

          if (pooledDocument.rel >= 1) {
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
      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = lPooledDocument[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var pooledDocument = _step9.value;

          if (pooledDocument.rel === 0) {
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
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = lPooledDocument[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var pooledDocument = _step10.value;

          if (pooledDocument.rel < 0) {
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
      var count = lPooledDocument.length;
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
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var QRels = function QRels(id, mQRel) {
    _classCallCheck(this, QRels);

    this.id = id;
    this.mQRel = mQRel;
  };

  var QRel = function QRel(id, mQRelRecord) {
    _classCallCheck(this, QRel);

    this.id = id;
    this.mQRelRecord = mQRelRecord;
  };

  var QRelRecord = function QRelRecord(iter, doc, score) {
    _classCallCheck(this, QRelRecord);

    //this.iter = iter;
    this.doc = doc;
    this.score = score;
  };

  exports.QRels = QRels;
  exports.QRel = QRel;
  exports.QRelRecord = QRelRecord;

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
        return a.score - b.score;
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
    runSize: 1000,
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
define("visual-pool/controllers/poolingmethod", ["exports", "ember"], function (exports, _ember) {
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

        var strategy = this.get("poolStrategySelected");
        if (!strategy) {
          strategy = this.pool.lPoolStrategy[0];
        }
        var topic = this.get("topicSelected");
        var generator = strategy.getPoolGenerator(topic);
        var pooledDocument = generator.next();
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
            }, function () {
              _this2.get("lPooledDocument").pushObject({
                'topic': topic,
                'document': pooledDocument.value.doc,
                'rel': 0
              });
            });
          }
        } else {
          var evaluator = strategy.getPoolEvaluator(topic);
          pooledDocument = evaluator.next();
          if (pooledDocument.value) {
            console.log(pooledDocument);
            this.get("lPooledDocument").pushObject({
              'topic': topic,
              'document': pooledDocument.value.doc,
              'rel': pooledDocument.value.status
            });
          }
        }
      },
      fastForward: function fastForward() {
        var strategy = this.get("poolStrategySelected");
        if (!strategy) {
          strategy = this.pool.lPoolStrategy[0];
        }
        var topic = this.get("topicSelected");
        var generator = strategy.getPoolGenerator(topic);
        var pooledDocument = generator.next();
        while (pooledDocument.value) {
          this.get("lPooledDocument").pushObject({
            'topic': topic,
            'document': pooledDocument.value.doc,
            'rel': pooledDocument.value.status
          });
          pooledDocument = generator.next();
        }
        var evaluator = strategy.getPoolEvaluator(topic);
        pooledDocument = evaluator.next();
        while (pooledDocument.value) {
          this.get("lPooledDocument").pushObject({
            'topic': topic,
            'document': pooledDocument.value.doc,
            'rel': pooledDocument.value.status
          });
          pooledDocument = evaluator.next();
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
define('visual-pool/initializers/pool', ['exports', 'ember'], function (exports, _ember) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.initialize = initialize;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TopicPool = function TopicPool(id) {
    _classCallCheck(this, TopicPool);

    this.id = id;
    this.rankDocs = [];
    this.docs = new Set();
  };

  var Pool = (function () {
    function Pool() {
      _classCallCheck(this, Pool);

      this.qRels = null;
      this.lRuns = [];
      this.mTopicPool = {};
      this.lTopicPool = _ember['default'].A();
      this.lPoolStrategy = [new DepthD(), new TakeN()];
    }

    _createClass(Pool, [{
      key: 'initilizePoolStrategies',
      value: function initilizePoolStrategies() {
        for (var i = 0; i < this.lPoolStrategy.length; i++) {
          this.lPoolStrategy[i].setLRuns(this.lRuns);
          this.lPoolStrategy[i].setQRels(this.qRels);
        }
      }
    }, {
      key: 'setQRels',
      value: function setQRels(qRels) {
        this.qRels = qRels;
        this.initilizePoolStrategies();
      }
    }, {
      key: 'addRuns',
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
      key: 'addRun',
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

  exports['default'] = {
    name: 'pool',
    initialize: initialize
  };

  var D = function D(value) {
    _classCallCheck(this, D);

    this.name = "D";
    this.description = "Depth of the Pool";
    this.value = value;
  };

  var N = function N(value) {
    _classCallCheck(this, N);

    this.name = "N";
    this.description = "Size of the Pool";
    this.value = value;
  };

  var EnumPooledDocumentState = {
    UNSELECTED: -3,
    SELECTED: -2,
    UNKNOWN: -1,
    NON_RELEVANT: 0,
    RELEVANT: 1
  };

  var PooledDocument = function PooledDocument(doc, status) {
    _classCallCheck(this, PooledDocument);

    this.doc = doc;
    this.status = status;
  };

  var DepthD = (function () {
    function DepthD() {
      _classCallCheck(this, DepthD);

      this.evas = {};
      this.gens = {};
      this.name = "Depth@D";
      this.lRuns = [];
      this.qRels = null;
      // parameters
      this.D = new D(10);
      //
      this.tDocs = {};
    }

    _createClass(DepthD, [{
      key: 'setQRels',
      value: function setQRels(qRels) {
        this.qRels = qRels;
      }
    }, {
      key: 'setLRuns',
      value: function setLRuns(lRuns) {
        this.lRuns = lRuns;
      }
    }, {
      key: 'getParameters',
      value: function getParameters() {
        return [this.D];
      }
    }, {
      key: 'getPoolGenerator',
      value: function getPoolGenerator(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        return this.gens[topic];
      }
    }, {
      key: 'getPoolEvaluator',
      value: function getPoolEvaluator(topic) {
        if (!this.evas[topic]) {
          this.evas[topic] = this.evalPool(topic);
        }
        return this.evas[topic];
      }
    }, {
      key: 'genPool',
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

              if (!(lRun[i].lRunRecord[j].rank < this.D.value)) {
                context$2$0.next = 15;
                break;
              }

              doc = lRun[i].lRunRecord[j].doc;

              if (docs.has(doc)) {
                context$2$0.next = 15;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);
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
            case 'end':
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }, {
      key: 'evalPool',
      value: regeneratorRuntime.mark(function evalPool(topic) {
        var docs, qRel, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc, pooledDocument;

        return regeneratorRuntime.wrap(function evalPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              docs = this.tDocs[topic];

              if (!(this.qRels !== null)) {
                context$2$0.next = 32;
                break;
              }

              qRel = this.qRels.mQRel[topic];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              context$2$0.prev = 6;
              _iterator = docs[Symbol.iterator]();

            case 8:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                context$2$0.next = 18;
                break;
              }

              doc = _step.value;
              pooledDocument = null;

              console.log(doc);
              if (qRel.mQRelRecord[doc]) {
                console.log(qRel.mQRelRecord[doc]);
                if (qRel.mQRelRecord[doc].score === 1) {
                  pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.RELEVANT);
                } else if (qRel.mQRelRecord[doc].score === 0) {
                  pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.NON_RELEVANT);
                } else {
                  pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.UNKNOWN);
                }
              } else {
                pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.UNKNOWN);
              }
              context$2$0.next = 15;
              return pooledDocument;

            case 15:
              _iteratorNormalCompletion = true;
              context$2$0.next = 8;
              break;

            case 18:
              context$2$0.next = 24;
              break;

            case 20:
              context$2$0.prev = 20;
              context$2$0.t0 = context$2$0['catch'](6);
              _didIteratorError = true;
              _iteratorError = context$2$0.t0;

            case 24:
              context$2$0.prev = 24;
              context$2$0.prev = 25;

              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }

            case 27:
              context$2$0.prev = 27;

              if (!_didIteratorError) {
                context$2$0.next = 30;
                break;
              }

              throw _iteratorError;

            case 30:
              return context$2$0.finish(27);

            case 31:
              return context$2$0.finish(24);

            case 32:
            case 'end':
              return context$2$0.stop();
          }
        }, evalPool, this, [[6, 20, 24, 32], [25,, 27, 31]]);
      })
    }]);

    return DepthD;
  })();

  var TakeN = (function () {
    function TakeN() {
      _classCallCheck(this, TakeN);

      this.gens = {};
      this.evas = {};
      this.name = "Take@N";
      this.lRuns = [];
      this.qRels = null;
      // parameters
      this.N = new N(100);
      //
      this.tDocs = {};
    }

    _createClass(TakeN, [{
      key: 'setLRuns',
      value: function setLRuns(lRuns) {
        this.lRuns = lRuns;
      }
    }, {
      key: 'setQRels',
      value: function setQRels(qRels) {
        this.qRels = qRels;
      }
    }, {
      key: 'getParameters',
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: 'getPoolGenerator',
      value: function getPoolGenerator(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        return this.gens[topic];
      }
    }, {
      key: 'getPoolEvaluator',
      value: function getPoolEvaluator(topic) {
        if (!this.evas[topic]) {
          this.evas[topic] = this.evalPool(topic);
        }
        return this.evas[topic];
      }
    }, {
      key: 'genPool',
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, lRun, topics, i, _topic, j, doc, pooledDocument;

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
              topics = new Set();

              for (i = 0; i < this.lRuns.length; i++) {
                for (_topic in this.lRuns[i].mRun) {
                  topics.add(_topic);
                }
              }
              j = 0;

            case 6:
              if (!(j < lRun[0].lRunRecord.length)) {
                context$2$0.next = 24;
                break;
              }

              i = 0;

            case 8:
              if (!(i < lRun.length)) {
                context$2$0.next = 21;
                break;
              }

              if (!lRun[i].lRunRecord[j]) {
                context$2$0.next = 18;
                break;
              }

              console.log(lRun[i].lRunRecord[j].rank);

              if (!(lRun[i].lRunRecord[j].rank < this.N.value / topics.size)) {
                context$2$0.next = 18;
                break;
              }

              doc = lRun[i].lRunRecord[j].doc;

              if (docs.has(doc)) {
                context$2$0.next = 18;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);
              context$2$0.next = 18;
              return pooledDocument;

            case 18:
              i++;
              context$2$0.next = 8;
              break;

            case 21:
              j++;
              context$2$0.next = 6;
              break;

            case 24:
            case 'end':
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }, {
      key: 'evalPool',
      value: regeneratorRuntime.mark(function evalPool(topic) {
        var docs, qRel, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, doc, pooledDocument;

        return regeneratorRuntime.wrap(function evalPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              docs = this.tDocs[topic];

              if (!(this.qRels !== null)) {
                context$2$0.next = 31;
                break;
              }

              qRel = this.qRels.mQRel[topic];
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              context$2$0.prev = 6;
              _iterator2 = docs[Symbol.iterator]();

            case 8:
              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                context$2$0.next = 17;
                break;
              }

              doc = _step2.value;
              pooledDocument = null;

              if (qRel.mQRelRecord[doc]) {
                if (qRel.mQRelRecord[doc].score === 1) {
                  pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.RELEVANT);
                } else if (qRel.mQRelRecord[doc].score === 0) {
                  pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.NON_RELEVANT);
                } else {
                  pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.UNKNOWN);
                }
              } else {
                pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.UNKNOWN);
              }
              context$2$0.next = 14;
              return pooledDocument;

            case 14:
              _iteratorNormalCompletion2 = true;
              context$2$0.next = 8;
              break;

            case 17:
              context$2$0.next = 23;
              break;

            case 19:
              context$2$0.prev = 19;
              context$2$0.t0 = context$2$0['catch'](6);
              _didIteratorError2 = true;
              _iteratorError2 = context$2$0.t0;

            case 23:
              context$2$0.prev = 23;
              context$2$0.prev = 24;

              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
              }

            case 26:
              context$2$0.prev = 26;

              if (!_didIteratorError2) {
                context$2$0.next = 29;
                break;
              }

              throw _iteratorError2;

            case 29:
              return context$2$0.finish(26);

            case 30:
              return context$2$0.finish(23);

            case 31:
            case 'end':
              return context$2$0.stop();
          }
        }, evalPool, this, [[6, 19, 23, 31], [24,, 26, 30]]);
      })
    }]);

    return TakeN;
  })();

  exports.PooledDocument = PooledDocument;
  exports.EnumPooledDocumentState = EnumPooledDocumentState;

  //const depthD = new DepthD();
  //const genPool = depthD.genPool(301);
});
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
    this.route('poolingmethod');
  });

  exports["default"] = Router;
});
define("visual-pool/routes/about", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("visual-pool/routes/contact", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
});
define("visual-pool/routes/index", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({
    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);
      this.replaceWith('poolingmethod');
    }
  });
});
define("visual-pool/routes/poolingmethod", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({});
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
            "line": 9,
            "column": 6
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
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "right tomster");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("About Super Rentals");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n        The Super Rentals website is a delightful project created to explore Ember.\n        By building a property rental site, we can simultaneously imagine traveling\n        AND building Ember applications.\n    ");
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
define("visual-pool/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 18
            },
            "end": {
              "line": 11,
              "column": 18
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
          var el1 = dom.createTextNode("                      Home\n");
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
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 18
            },
            "end": {
              "line": 16,
              "column": 18
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
          var el1 = dom.createTextNode("                      About\n");
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
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 18
            },
            "end": {
              "line": 21,
              "column": 18
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
          var el1 = dom.createTextNode("                      Contact\n");
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
            "line": 30,
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
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "class", "navbar-brand");
        var el5 = dom.createTextNode("Visual Pool");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "navbar");
        dom.setAttribute(el3, "class", "collapse navbar-collapse");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "class", "active");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
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
        var element0 = dom.childAt(fragment, [0, 1, 3, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [9, 18], [11, 30]]]], ["block", "link-to", ["about"], [], 1, null, ["loc", [null, [14, 18], [16, 30]]]], ["block", "link-to", ["contact"], [], 2, null, ["loc", [null, [19, 18], [21, 30]]]], ["content", "outlet", ["loc", [null, [29, 2], [29, 12]]], 0, 0, 0, 0]],
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
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "#");
        dom.setAttribute(el2, "class", "btn btn-default");
        dom.setAttribute(el2, "role", "button");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "glyphicon glyphicon-pause");
        dom.setAttribute(el3, "aria-hidden", "true");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
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
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 16,
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
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col-md-2 input-group");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "class", "input-group-addon");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["content", "parameter.name", ["loc", [null, [13, 36], [13, 54]]], 0, 0, 0, 0], ["inline", "input", [], ["class", "form-control", "value", ["subexpr", "@mut", [["get", "parameter.value", ["loc", [null, [14, 39], [14, 54]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [14, 4], [14, 56]]], 0, 0]],
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
            "line": 16,
            "column": 9
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 1, 3]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'onchange');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["selectPoolStrategy"], ["value", "target.value"], ["loc", [null, [null, null], [4, 73]]], 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "poolStrategies", ["loc", [null, [5, 14], [5, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [5, 6], [7, 15]]]], ["block", "each", [["get", "parameters", ["loc", [null, [11, 8], [11, 18]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [11, 0], [16, 9]]]]],
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
            "line": 9,
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
        dom.setAttribute(el1, "class", "jumbo");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "right tomster");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Contact the Author");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Aldo Lipani");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "http://aldolipani.com");
        var el4 = dom.createTextNode("http://aldolipani.com");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "mailto:aldolipani@aldolipani.com");
        var el4 = dom.createTextNode("aldolipani@aldolipani.com");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
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
define("visual-pool/templates/poolingmethod", ["exports"], function (exports) {
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
          "moduleName": "visual-pool/templates/poolingmethod.hbs"
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
          "moduleName": "visual-pool/templates/poolingmethod.hbs"
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
        "moduleName": "visual-pool/templates/poolingmethod.hbs"
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
  require("visual-pool/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"visual-pool","version":"0.0.0+8d754481"});
}

/* jshint ignore:end */
//# sourceMappingURL=visual-pool.map
