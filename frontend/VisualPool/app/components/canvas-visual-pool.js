import Ember from "ember";

class LRunsViewer {
  constructor(x, y, p) {
    this.topicDocument = {};
    this.x = x;
    this.y = y;
    this.lRuns = [];
    this.mRuns = {};
    this.nRuns = 0;
    this.maxNRunRecords = 0;
    this.p = p;
  }

  updateDocument(pooledDocument, topic) {
    this.topicDocument[topic][pooledDocument.document] = pooledDocument.rel;
  }

  getMaxNRunRecords(runs) {
    var max = 0;
    for (var key in runs.mRun) {
      if (runs.mRun[key].lRunRecord.length > max) {
        max = runs.mRun[key].lRunRecord.length;
      }
    }
    return max;
  }

  updateLRuns(lRuns) {
    for (let i = 0; i < lRuns.length; i++) {
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

  getMaxSizeRun(mRuns, topic){
    let max = 0;
    for (let key in mRuns) {
      if(mRuns[key].runs.mRun[topic] && mRuns[key].runs.mRun[topic].lRunRecord.length > max){
        max = mRuns[key].runs.mRun[topic].lRunRecord.length;
      }
    }
    return max;
  }

  draw(topic, viewSelector) {
    let w = (this.p.width - this.x) / this.nRuns;
    let h = (this.p.height - this.y) / this.maxNRunRecords;
    let i = 0;

    if(viewSelector === 0) {
      for (let key in this.mRuns) {
        this.p.textAlign(this.p.LEFT, this.p.BASELINE);
        //this.p.fill("black");
        //this.p.text(key, this.x + w * i + 5, this.y + 5);
        this.mRuns[key].draw(this.x + w * i, this.y + 10, w, h, topic, viewSelector);
        i++;
      }
    }else{
      let viewDoc = new Set();
      let maxJ = this.getMaxSizeRun(this.mRuns, topic);
      for(let j = 0; j < maxJ; j++) {
        i = 0;
        for (let key in this.mRuns) {
          this.p.textAlign(this.p.LEFT, this.p.BASELINE);
          if(this.mRuns[key].runs.mRun[topic].lRunRecord.length > j && !viewDoc.has(this.mRuns[key].runs.mRun[topic].lRunRecord[j].doc)) {
            viewDoc.add(this.mRuns[key].runs.mRun[topic].lRunRecord[j].doc);
            this.mRuns[key].drawSingleDoc(j, this.x + w * i, this.y + 10, w, h, topic, viewSelector);
            if(viewSelector === 2) {
              i = (i + 1) % Object.keys(this.mRuns).length;
            }
          }
          if(viewSelector === 1) {
            i = (i + 1) % Object.keys(this.mRuns).length;
          }
        }
      }
    }
  }
}

const EnumPooledDocumentState = {
  UNKNOWN: -3,
  UNSELECTED: -2,
  SELECTED: -1,
  NON_RELEVANT: 0,
  RELEVANT: 1
};

class RunsViewer {
  constructor(runs, topicDocument, p) {
    this.runs = runs;
    this.p = p;
    this.initializeDocs(topicDocument);
  }

  initializeDocs(topicDocument) {
    let runs = this.runs;
    for (let topic in runs.mRun) {
      if (!topicDocument[topic]) {
        topicDocument[topic] = {};
      }
      for (let i = 0; i < runs.mRun[topic].lRunRecord.length; i++) {
        let doc = runs.mRun[topic].lRunRecord[i].doc;
        if (!topicDocument[topic][doc]) {
          topicDocument[topic][doc] = EnumPooledDocumentState.UNSELECTED;
        }
      }
    }
    this.topicDocument = topicDocument;
  }

  drawDoc(doc, x, y, w, h, topic) {
    let p = this.p;
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

  draw(x, y, w, h, topic) {
    let runs = this.runs;
    if (runs.mRun[topic]) {
      for (let i = 0; i < runs.mRun[topic].lRunRecord.length; i++) {
        this.drawDoc(runs.mRun[topic].lRunRecord[i].doc, x, y + i * h, w - 1, h, topic);
      }
    }
  }

  drawSingleDoc(docIndex, x, y, w, h, topic) {
    let runs = this.runs;
    if (runs.mRun[topic]) {
      let i = docIndex;
      this.drawDoc(runs.mRun[topic].lRunRecord[i].doc, x, y + i * h, w - 1, h, topic);
    }
  }
}

export default Ember.Component.extend({
  //store: Ember.inject.service(),
  viewSelector:0,
  lPooledDocument: [],
  sketch: null,
  didRender(){
    //var pool = this.pool;
    let lRuns = this.lRuns;
    let _this = this;
    if (!this.sketch) {
      this.sketch = function (p) {
        var canvasContainer = Ember.$('#canvasVisualPoolContainer');
        var lRunsViewer = new LRunsViewer(0, 10, p);
        var lPooledDocument_i = 0;

        p.setup = function () {
          p.createCanvas(canvasContainer.width(), 500);
          p.background(255);
          p.frameRate(20);
        };

        var nRuns = 0;
        p.draw = function () {
          let viewSelector = _this.get("viewSelector");
          var topicSelected = _this.get("topicSelected");
          p.background(255);

          if ((nRuns - lRuns.length) !== 0) {
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
          p.resizeCanvas(canvasContainer.width(), 500);
        };
      };


      /* jshint ignore:start */
      new p5(this.sketch, "canvasVisualPoolContainer");
      /* jshint ignore:end */

    }
  }
});
