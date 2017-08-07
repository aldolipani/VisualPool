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
    this.orderedKeys = [];
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
    this.orderedKeys = Object.keys(this.mRuns).sort();
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

  drawRunDetail(key, x, printKey){
    let p = this.p;
    p.fill(0);
    p.textSize(12);
    if(printKey) {
      p.text(key, x + 10, 25);
    }
    p.fill(255, 215, 0);
    p.rect(x, 10, 5, p.height);
  }

  draw(topic, viewSelector) {
    let p = this.p;
    let w = (p.width - this.x) / this.nRuns;
    let h = (p.height - this.y) / this.maxNRunRecords;
    let i = 0;
    if(viewSelector === 0) {
      for (let j = this.orderedKeys.length - 1; j >= 0; j--) {
        let key = this.orderedKeys[j];
        this.p.textAlign(this.p.LEFT, this.p.BASELINE);
        //this.p.fill("black");
        //this.p.text(key, this.x + w * i + 5, this.y + 5);
        this.mRuns[key].draw(p.width - w - this.x - w * i, this.y + 10, w, h, topic, viewSelector);
        i++;
      }
    }else{
      let viewDoc = new Set();
      let maxJ = this.getMaxSizeRun(this.mRuns, topic);
      for(let j = 0; j < maxJ; j++) {
        i = 0;
        for (let key of this.orderedKeys) {
          this.p.textAlign(this.p.LEFT, this.p.BASELINE);
          if(this.mRuns[key].runs.mRun[topic].lRunRecord.length > j && !viewDoc.has(this.mRuns[key].runs.mRun[topic].lRunRecord[j].doc)) {
            this.mRuns[key].drawSingleDoc(j, this.x + w * i, this.y + 10, w, h, topic, viewSelector);
            viewDoc.add(this.mRuns[key].runs.mRun[topic].lRunRecord[j].doc);
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
    i = 0;
    for (let key of this.orderedKeys) {
      if(p.mouseX && 0 <= p.mouseY && p.mouseY <= p.height && this.x + w * i <= p.mouseX && p.mouseX <= this.x + w * (i + 1)) {
        //console.log("selected run + " + key);
        if (viewSelector <= 1) {
          this.drawRunDetail(key, this.x + w * i, true);
        } else {
          this.drawRunDetail(key, this.x + w * i, false);
        }
      }
      i++;
    }
    if(viewSelector > 0) {
      if(this.topicDocument[topic]["@selectedDoc"]){
        this.p.textSize(11);
        this.p.fill(0);
        this.p.text(this.topicDocument[topic]["@selectedDoc"], this.topicDocument[topic]["@selectedX"], this.topicDocument[topic]["@selectedY"]);
      }
    }
  }
}

const EnumPooledDocumentState = {
  UNSELECTED: -3,
  SELECTED: -2,
  UNKNOWN: -1,
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
    p.noStroke();
    if(x <= p.mouseX && p.mouseX <= x + w && y <= p.mouseY && p.mouseY <= y + h) {
      if (this.topicDocument[topic]["@selectedDoc"] !== doc) {
        this.topicDocument[topic]["@selectedDoc"] = doc;
        this.topicDocument[topic]["@selectedValue"] = this.topicDocument[topic][doc];
        this.topicDocument[topic]["@selectedX"] = x + 10;
        this.topicDocument[topic]["@selectedY"] = y + h/2 + 4;
      }
    }
    p.fill(40);
    if(this.topicDocument[topic]["@selectedDoc"] === doc){
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
    if(p.mouseX < 0 || p.mouseX > p.width || p.mouseY < 0 || p.mouseY > p.height){
      this.topicDocument[topic]["@selectedDoc"] = null;
      this.topicDocument[topic]["@selectedValue"] = null;
    }
    p.fill(255);
  }

  draw(x, y, w, h, topic) {
    let runs = this.runs;
    if (runs.mRun[topic]) {
      for (let i = 0; i < runs.mRun[topic].lRunRecord.length; i++) {
        this.drawDoc(runs.mRun[topic].lRunRecord[i].doc, x, y + i * h, w - 1, h, topic);
      }
    }
    if(this.topicDocument[topic]["@selectedDoc"] && this.topicDocument[topic]["@selectedX"] === x + 10){
      this.p.textSize(11);
      this.p.fill(0);
      this.p.text(this.topicDocument[topic]["@selectedDoc"], this.topicDocument[topic]["@selectedX"], this.topicDocument[topic]["@selectedY"]);
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
        var lRunsViewer = new LRunsViewer(0, 0, p);
        var lPooledDocument_i = 0;

        p.setup = function () {
          p.createCanvas(canvasContainer.width(), canvasContainer.height());
          p.background(255);
          p.frameRate(24);
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
