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