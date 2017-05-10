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
        this.topicDocument[topic][pooledDocument.doc] = pooledDocument.status;
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
      key: "draw",
      value: function draw(topic) {
        var i = 0;
        var w = (this.p.width - this.x) / this.nRuns;
        var h = (this.p.height - this.y) / this.maxNRunRecords;
        for (var key in this.mRuns) {
          this.p.textAlign(this.p.LEFT, this.p.BASELINE);
          this.p.fill("black");
          this.p.text(key, this.x + w * i + 5, this.y + 5);
          this.mRuns[key].draw(this.x + w * i, this.y + 10, w, h, topic);
          i++;
        }
      }
    }]);

    return LRunsViewer;
  })();

  var EnumPooledDocumentState = {
    UNKNOWN: -3,
    UNSELECTED: -2,
    SELECTED: -1,
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
          p.fill("#000000");
        } else if (this.topicDocument[topic][doc] === EnumPooledDocumentState.UNKNOWN) {
          p.fill("#9E002A");
        } else {
          p.fill("#E69F00"); // selected
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
    }]);

    return RunsViewer;
  })();

  exports["default"] = _ember["default"].Component.extend({
    //store: Ember.inject.service(),
    lPooledDocument: [],
    sketch: null,
    didRender: function didRender() {
      //var pool = this.pool;
      var lRuns = this.lRuns;
      var _this = this;
      if (!this.sketch) {
        this.sketch = function (p) {
          var canvasContainer = this.$('#canvasVisualPoolContainer');
          var lRunsViewer = new LRunsViewer(0, 20, p);
          var lPooledDocument_i = 0;

          p.setup = function () {
            p.createCanvas(canvasContainer.width(), 500);
            p.background(255);
            p.frameRate(20);
          };

          var nRuns = 0;
          p.draw = function () {
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
              lRunsViewer.draw(topicSelected);
            }
            //p.text(nRuns, 50, 20);
            //if(pool.lTopicPool[0])
            //	p.text(pool.lTopicPool[0].docs.size, 60, 20);

            //p.text("Pool", 300, 20);
            p.textAlign(p.LEFT, p.BASELINE);
            p.fill("black");
            p.text("Runs", 0, 10);
          };

          p.windowResized = function () {
            p.resizeCanvas(canvasContainer.width(), 500);
          };
        };

        /* jshint ignore:start */
        new p5(this.sketch, "canvasVisualPoolContainer");
        /* jshint ignore:end */
      }
    }
  });

  /*class TopicSelector { // To be implemented as a component
   // value
   constructor(x, y, p){
   this.x = x;
   this.y = y;
   this.p = p;
   }
   draw(topics){
   var p = this.p;
   var yGap = 20;
   var cx = this.x;
   var cy = this.y;
   p.fill(0);
   p.stroke(0);
   p.strokeWeight(0.1);
   p.textAlign(p.LEFT, p.BASELINE);
   p.text("Topic Selector", this.x, this.y);
   if(topics.length !== 0){
   for(var i = 0; i < topics.length; i++){
   if(cx + 5 + 25 * i + 20 > p.width){
   cx -= 25 * i;
   cy += yGap + 5;
   }
   if(this.value === undefined){
   this.select(0);
   }
   if(this.value === i){
   p.fill(255, 204, 0);
   }else{
   p.fill(255);
   }
   p.rect(cx + 25*i, cy + yGap - 15, 20, 20);
   p.fill(0);
   p.textAlign(p.CENTER, p.CENTER);
   p.text(i+1, cx + 10 + 25*i, cy + yGap - 5);
   }
   }else{
   p.text("{}", this.x, this.y + yGap);
   }
   }
   select(value){
   this.value = value;
   }
   }*/
});
define('visual-pool/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define("visual-pool/components/poolstrategy-log", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({});
  exports["default"] = _ember["default"].Component.extend({
    lPooledDocument: [],
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
define("visual-pool/components/topic-selector", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    topics: [],
    didRender: function didRender() {
      if (this.topics.length > 0) {
        this.sendAction("selectTopic", this.topics[0].id);
      }
    },
    actions: {
      selectTopic: function selectTopic(topic) {
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
      var qRelRecord = new QRelRecord(0, documentId, parseInt(elems[3]));
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

  function parseRuns(id, text, poolSize) {
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
        if (mem[topicId].lRunRecord.length <= poolSize) {
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
    poolSize: 1000,
    actions: {
      upload: function upload(event) {
        var _this = this;

        var _loop = function (i) {
          var reader = new FileReader();
          var file = event.target.files[i];
          var txtData = undefined;
          reader.onload = function () {
            txtData = reader.result;
            var runs = parseRuns(file.name, txtData, _this.get("poolSize"));
            _this.pool.addRuns(runs);
            _this.lRuns.push(runs);
            console.log("read " + file.name);
          };
          if (file) {
            reader.readAsText(file);
          }
        };

        for (var i = 0; i < event.target.files.length; i++) {
          _loop(i);
        }
        this.sendAction('updateTopicSelector');
      },
      poolSizeChange: function poolSizeChange(value) {
        this.set("poolSize", value);
      }
    }
  });
});
/*jshint loopfunc: true */
define('visual-pool/controllers/poolingmethod', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    pool: null,
    lPooledDocument: [],
    poolStrategySelected: null,
    topicSelected: null,
    loading: false,
    actions: {
      updateTopicSelector: function updateTopicSelector() {
        this.set('loading', true);
        var _this = this;
        _ember['default'].run.later(function () {
          _this.set('loading', false);
        }, 100);
      },
      selectPoolStrategy: function selectPoolStrategy(poolStrategy) {
        this.set("poolStrategySelected", poolStrategy);
      },
      selectTopic: function selectTopic(topic) {
        this.set("topicSelected", topic);
      },
      stepForward: function stepForward() {
        var strategy = this.get("poolStrategySelected");
        if (!strategy) {
          strategy = this.pool.lPoolStrategy[0];
        }
        var topic = this.get("topicSelected");
        var generator = strategy.getPoolGenerator(topic);
        var pooledDocument = generator.next();
        if (pooledDocument.value) {
          console.log(pooledDocument);
          this.get("lPooledDocument").push(pooledDocument.value);
        } else {
          var evaluator = strategy.getPoolEvaluator(topic);
          pooledDocument = evaluator.next();
          if (pooledDocument.value) {
            console.log(pooledDocument);
            this.get("lPooledDocument").push(pooledDocument.value);
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
          this.get("lPooledDocument").push(pooledDocument.value);
          pooledDocument = generator.next();
        }
        var evaluator = strategy.getPoolEvaluator(topic);
        pooledDocument = evaluator.next();
        while (pooledDocument.value) {
          this.get("lPooledDocument").push(pooledDocument.value);
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
define('visual-pool/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
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
define('visual-pool/initializers/pool', ['exports'], function (exports) {
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
      this.lTopicPool = [];
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
          }
          this.addRun(runs.mRun[key], key);
        }
        this.lRuns.push(runs);
        this.initilizePoolStrategies();
        for (var key in this.mTopicPool) {
          if (!this.lTopicPool[this.mTopicPool[key]]) {
            this.lTopicPool.push(this.mTopicPool[key]);
          }
        }
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
    UNKNOWN: -3,
    UNSELECTED: -2,
    SELECTED: -1,
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
define('visual-pool/initializers/runs', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize(application) {
    var lRuns = [];

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
              "line": 16,
              "column": 18
            },
            "end": {
              "line": 18,
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
              "line": 21,
              "column": 18
            },
            "end": {
              "line": 23,
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
              "line": 26,
              "column": 18
            },
            "end": {
              "line": 28,
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
            "line": 39,
            "column": 0
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
        dom.setAttribute(el1, "class", "navbar navbar-inverse");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "navbar-toggle collapsed");
        dom.setAttribute(el4, "data-toggle", "collapse");
        dom.setAttribute(el4, "data-target", "#navbar");
        dom.setAttribute(el4, "aria-expanded", "false");
        dom.setAttribute(el4, "aria-controls", "navbar");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "navbar-brand");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Visual Pooling");
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
        var el1 = dom.createTextNode("\n\n");
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
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [16, 18], [18, 30]]]], ["block", "link-to", ["about"], [], 1, null, ["loc", [null, [21, 18], [23, 30]]]], ["block", "link-to", ["contact"], [], 2, null, ["loc", [null, [26, 18], [28, 30]]]], ["content", "outlet", ["loc", [null, [36, 2], [36, 12]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
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
            "column": 42
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
define("visual-pool/templates/components/poolstrategy-log", ["exports"], function (exports) {
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
            "line": 62,
            "column": 0
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
        var el1 = dom.createComment("<div>\n{{#each lPooledDocument as |pooledDocument|}}\n  <div>{{pooledDocument.id}}</div>\n{{/each}}</div>");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "table-responsive");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "bodycontainer scrollable");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3, "class", "table table-hover table-striped table-condensed table-scrollable");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        dom.setAttribute(el5, "class", "warning");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("td");
        var el7 = dom.createTextNode("WSDNSAALDS3");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
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
              "line": 6,
              "column": 14
            },
            "end": {
              "line": 8,
              "column": 14
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
          var el1 = dom.createTextNode("                  ");
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
        statements: [["content", "strategy.name", ["loc", [null, [7, 26], [7, 43]]], 0, 0, 0, 0]],
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
              "column": 6
            },
            "end": {
              "line": 16,
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
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1, "class", "col-sm-1 control-label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(":");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col-sm-2");
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["content", "parameter.name", ["loc", [null, [12, 48], [12, 66]]], 0, 0, 0, 0], ["inline", "input", [], ["class", "form-control", "value", ["subexpr", "@mut", [["get", "parameter.value", ["loc", [null, [14, 49], [14, 64]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [14, 14], [14, 66]]], 0, 0]],
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
            "line": 23,
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
        dom.setAttribute(el1, "class", "form-horizontal");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "class", "col-sm-2 control-label");
        var el4 = dom.createTextNode("Strategy:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-3");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("select");
        dom.setAttribute(el4, "class", "form-control");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("\n      <div class=\"col-sm-2\">\n        <button class=\"btn btn-default\" onclick={{action \"applyPoolStrategy\"}}>Apply</button>\n      </div>\n      ");
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
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'onchange');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["selectPoolStrategy"], ["value", "target.value"], ["loc", [null, [null, null], [5, 81]]], 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "poolStrategies", ["loc", [null, [6, 22], [6, 36]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [6, 14], [8, 23]]]], ["block", "each", [["get", "parameters", ["loc", [null, [11, 14], [11, 24]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [11, 6], [16, 15]]]]],
      locals: [],
      templates: [child0, child1]
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
              "line": 7,
              "column": 14
            },
            "end": {
              "line": 9,
              "column": 14
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
          var el1 = dom.createTextNode("                  ");
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
        statements: [["content", "topic.id", ["loc", [null, [8, 26], [8, 38]]], 0, 0, 0, 0]],
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
              "line": 9,
              "column": 14
            },
            "end": {
              "line": 11,
              "column": 14
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
          var el1 = dom.createTextNode("                  ");
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
            "line": 15,
            "column": 7
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
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "form-horizontal");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "class", "col-sm-6 control-label");
        var el4 = dom.createTextNode("Topic:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-6");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("select");
        dom.setAttribute(el4, "class", "form-control");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("            ");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 3, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'onchange');
        morphs[1] = dom.createAttrMorph(element0, 'disabled');
        morphs[2] = dom.createMorphAt(element0, 1, 1);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["selectTopic"], ["value", "target.value"], ["loc", [null, [null, null], [5, 74]]], 0, 0], 0, 0, 0, 0], ["attribute", "disabled", ["concat", [["subexpr", "if", [["get", "noTopics", ["loc", [null, [6, 35], [6, 43]]], 0, 0, 0, 0], "disabled"], [], ["loc", [null, [6, 30], [6, 56]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "topics", ["loc", [null, [7, 22], [7, 28]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [7, 14], [11, 23]]]]],
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
            "line": 7,
            "column": 6
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
        dom.setAttribute(el1, "class", "form-horizontal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "class", "btn btn-default btn-file");
        var el4 = dom.createTextNode("\n        Upload QRels  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "multiple", "true");
        dom.setAttribute(el4, "type", "file");
        dom.setAttribute(el4, "style", "display: none;");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
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
        var element0 = dom.childAt(fragment, [0, 1, 1, 1]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'onchange');
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["upload"], [], ["loc", [null, [null, null], [4, 73]]], 0, 0], 0, 0, 0, 0]],
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
            "line": 16,
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
        dom.setAttribute(el1, "class", "form-horizontal");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-2");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "class", "btn btn-default btn-file");
        var el5 = dom.createTextNode("\n                Upload Runs ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "multiple", "true");
        dom.setAttribute(el5, "type", "file");
        dom.setAttribute(el5, "style", "display: none;");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "class", "col-sm-2 control-label");
        var el4 = dom.createTextNode("Run Size:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-2");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "text");
        dom.setAttribute(el4, "class", "form-control");
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1, 1, 1]);
        var element2 = dom.childAt(element0, [5, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element1, 'onchange');
        morphs[1] = dom.createAttrMorph(element2, 'onblur');
        morphs[2] = dom.createAttrMorph(element2, 'value');
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["attribute", "onchange", ["subexpr", "action", ["upload"], [], ["loc", [null, [null, null], [5, 79]]], 0, 0], 0, 0, 0, 0], ["attribute", "onblur", ["subexpr", "action", ["poolSizeChange"], ["value", "target.value"], ["loc", [null, [null, null], [12, 75]]], 0, 0], 0, 0, 0, 0], ["attribute", "value", ["get", "poolSize", ["loc", [null, [13, 57], [13, 65]]], 0, 0, 0, 0], 0, 0, 0, 0], ["element", "bind-attr", [], ["id", "item.textboxId"], ["loc", [null, [10, 19], [10, 52]]], 0, 0], ["element", "bind-attr", [], ["value", "item.value"], ["loc", [null, [11, 32], [11, 64]]], 0, 0]],
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
            "line": 15,
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
        var el3 = dom.createTextNode("Contact Us");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Super Rentals Representatives would love to help you");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("choose a destination or answer\n        any questions you may have.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n        Super Rentals HQ\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("address");
        var el4 = dom.createTextNode("\n        1212 Test Address Avenue");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        Testington, OR 97233\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "tel:503.555.1212");
        var el4 = dom.createTextNode("+1 (503) 555-1212");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "mailto:superrentalsrep@emberjs.com");
        var el4 = dom.createTextNode("superrentalsrep@emberjs.com");
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
define("visual-pool/templates/poolingmethod", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 6
            },
            "end": {
              "line": 9,
              "column": 6
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
              "line": 9,
              "column": 6
            },
            "end": {
              "line": 11,
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
        statements: [["inline", "topic-selector", [], ["selectTopic", "selectTopic", "topics", ["subexpr", "@mut", [["get", "pool.lTopicPool", ["loc", [null, [10, 58], [10, 73]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 75]]], 0, 0]],
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
            "line": 59,
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
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-6");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-2");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-2");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        dom.setAttribute(el3, "class", "form-horizontal");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "class", "control-label");
        var el6 = dom.createTextNode("Statistics");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-2");
        var el3 = dom.createTextNode("\n      ");
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-8");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-2");
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Some other text here. ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "math");
        var el4 = dom.createTextNode("\n        f(x) = \\sqrt{1+x}, \\quad x \\ge -1  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-2");
        var el3 = dom.createTextNode("\n      ");
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-8");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-2");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-md-2");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "form-horizontal");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "form-group");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        dom.setAttribute(el5, "class", "btn btn-default btn-file");
        var el6 = dom.createTextNode("\n            Download QRels  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "multiple", "true");
        dom.setAttribute(el6, "style", "display: none;");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
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
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(fragment, [4]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "poolstrategy-selector", [], ["poolStrategies", ["subexpr", "@mut", [["get", "pool.lPoolStrategy", ["loc", [null, [4, 23], [4, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "selected", ["subexpr", "@mut", [["get", "poolStrategySelected", ["loc", [null, [5, 17], [5, 37]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 6], [5, 39]]], 0, 0], ["block", "if", [["get", "loading", ["loc", [null, [8, 12], [8, 19]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [8, 6], [11, 13]]]], ["inline", "poolstrategy-player", [], ["stepForward", "stepForward", "fastForward", "fastForward"], ["loc", [null, [21, 6], [23, 35]]], 0, 0], ["inline", "canvas-visual-pool", [], ["topicSelected", ["subexpr", "@mut", [["get", "topicSelected", ["loc", [null, [29, 22], [29, 35]]], 0, 0, 0, 0]], [], [], 0, 0], "lPooledDocument", ["subexpr", "@mut", [["get", "lPooledDocument", ["loc", [null, [30, 24], [30, 39]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [28, 6], [30, 41]]], 0, 0], ["inline", "poolstrategy-log", [], ["lPooledDocument", ["subexpr", "@mut", [["get", "lPooledDocument", ["loc", [null, [40, 24], [40, 39]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [39, 6], [40, 41]]], 0, 0], ["inline", "upload-runs", [], ["updateTopicSelector", "updateTopicSelector"], ["loc", [null, [45, 6], [45, 63]]], 0, 0], ["content", "upload-qrels", ["loc", [null, [48, 6], [48, 22]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
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
  require("visual-pool/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"visual-pool","version":"0.0.0+7d98136b"});
}

/* jshint ignore:end */
//# sourceMappingURL=visual-pool.map
