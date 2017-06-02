/*jshint loopfunc: true */
import Ember from "ember";

class Runs {
  constructor(id, mRun) {
    this.id = id;
    this.mRun = mRun;
  }
}

class Run {
  constructor(id, lRunRecord) {
    this.id = id;
    this.lRunRecord = lRunRecord;
  }
}

class RunRecord {
  constructor(iter, doc, rank, score) {
    //this.iter = iter;
    this.doc = doc;
    this.rank = rank;
    this.score = score;
  }
}

export{
  Runs,
  Run,
  RunRecord
};

function parseRuns(id, text, runSize) {
  let reSs = new RegExp("\\s+");
  let reCs = new RegExp("\n+");
  let lines = text.split(reCs);
  let mem = {};
  for (let i = 0; i < lines.length - 1; i++) {
    let elems = lines[i].trim().split(reSs);
    let topicId = elems[0].trim();
    let documentId = elems[2].trim();
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
  for (let key in mem) {
    let run = mem[key];
    let lRunRecord = run.lRunRecord;
    // remove duplicates
    // TODO
    // sort
    let slRunRecord = lRunRecord.sort(function (a, b) {
      return a.score - b.score;
    });
    // reconstruct rank
    for (let j = 0; j < slRunRecord.length; j++) {
      slRunRecord[j].rank = j + 1;
    }
    run.lRunRecord = slRunRecord;
  }
  return new Runs(id, mem);
}

export default Ember.Component.extend({
  store: Ember.inject.service(),
  runSize: 1000,
  actions: {
    upload: function (event) {
      for (let i = 0; i < event.target.files.length; i++) {
        let reader = new FileReader();
        let file = event.target.files[i];
        let txtData;
        reader.onload = () => {
          txtData = reader.result;
          var runs = parseRuns(file.name, txtData, this.get("runSize"));
          this.pool.addRuns(runs);
          this.lRuns.pushObject(runs);
          console.log("read " + file.name);
        };
        if (file) {
          reader.readAsText(file);
        }
      }
      this.sendAction('updateTopicSelector');//this makes the topic selector to render again in order to be updated
    },
    runSizeChange(value) {
      this.set("runSize", value);
    }
  }
});
