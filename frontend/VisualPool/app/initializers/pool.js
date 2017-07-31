import Ember from "ember";
import {EnumPooledDocumentState, QRels} from "../components/upload-qrels";

class TopicPool {
  constructor(id) {
    this.id = id;
    this.rankDocs = [];
    this.docs = new Set();
  }
}

class Pool {
  constructor() {
    this.qRels = new QRels();
    this.lRuns = [];
    this.mTopicPool = {};
    this.lTopicPool = Ember.A();
    this.lPoolStrategy = [
      new DepthD(),
      new TakeN(),
      new FairTakeN(),
      new CombMAXTakeN(),
      new CombMINTakeN(),
      new CombMEDTakeN(),
      new CombSUMTakeN(),
      new CombANZTakeN(),
      new CombMNZTakeN(),
      new DCGTakeN(),
      new RRFTakeN(),
      new RBPTakeN(),
      new RBPAdaptiveTakeN(),
      new RBPAdaptiveStarTakeN(),
      new MTFTakeN()
    ];
  }

  initilizePoolStrategies() {
    for (let i = 0; i < this.lPoolStrategy.length; i++) {
      this.lPoolStrategy[i].setLRuns(this.lRuns);
      this.lPoolStrategy[i].setQRels(this.qRels);
    }
  }

  setQRels(qRels) {
    if (this.qRels) {
      this.qRels.merge(qRels);
    } else {
      this.qRels = qRels;
    }
    this.initilizePoolStrategies();
  }

  addRuns(runs) {
    for (let key in runs.mRun) {
      if (!this.mTopicPool[key]) {
        this.mTopicPool[key] = new TopicPool(key);
        this.lTopicPool.pushObject(this.mTopicPool[key]);
      }
      this.addRun(runs.mRun[key], key);
    }
    this.lRuns.pushObject(runs);
    this.initilizePoolStrategies();
  }

  addRun(run, topic) {
    let topicPool = this.mTopicPool[topic];
    for (let i = 0; i < run.lRunRecord.length; i++) {
      topicPool.docs.add(run.lRunRecord[i].doc);
      if (!topicPool.rankDocs[run.lRunRecord[i].rank]) {
        topicPool.rankDocs[run.lRunRecord[i].rank] = new Set();
      }
      topicPool.rankDocs[run.lRunRecord[i].rank].add(run.lRunRecord[i].doc);
    }
  }
}

export function initialize(application) {
  let pool = new Pool();

  application.register('pool:main', pool, {instantiate: false});
  application.inject('component', 'pool', 'pool:main');
  application.inject('controller', 'pool', 'pool:main');
}

export default {
  name: 'pool',
  initialize
};

class D {
  constructor(value) {
    this.name = "D";
    this.description = "Depth of the Pool";
    this.value = value;
  }
}

class N {
  constructor(value) {
    this.name = "N";
    this.description = "Size of the Pool";
    this.value = value;
  }
}

class K {
  constructor(value) {
    this.name = "K";
    this.description = "Constant";
    this.value = value;
  }
}

class P {
  constructor(value) {
    this.name = "P";
    this.description = "Constant";
    this.value = value;
  }
}

class PooledDocument {
  constructor(doc, status) {
    this.doc = doc;
    this.status = status;
  }
}

class PoolingStrategy {
  constructor() {
    this.evas = {};
    this.gens = {};
    this.name = "Undefined";
    this.lRuns = [];
    this.qRels = new QRels();
    this.tQRels = new QRels();
    console.log("qRels");
    console.log(this.qRels);
    this.tDocs = {};
  }

  addAssessment(topic, doc, rel){
    this.qRels.addAssessment(topic, doc, rel);
    this.tQRels.addAssessment(topic, doc, rel);
  }

  setQRels(qRels) {
    this.qRels = qRels;
  }

  setLRuns(lRuns) {
    this.lRuns = lRuns;
  }

  numberOfTopics() {
    let vs = this.lRuns.map(runs => Object.keys(runs.mRun).length);
    let hist = {};
    for (let v of vs) {
      if (hist[v]) {
        hist[v] = hist[v]++;
      } else {
        hist[v] = 1;
      }
    }
    let lHist = Object.keys(hist).map(function (key) {
      return [key, hist[key]];
    });
    return lHist.sort(function (a, b) {
      return b[1] - a[1];
    })[0][0];
  }

  getPooledDocument(doc, qRel) {
    let pooledDocument = null;
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
    return pooledDocument;
  }

  shuffle(array) {
    let rand, index = -1,
      length = array.length,
      result = Array(length);
    while (++index < length) {
      rand = Math.floor(Math.random() * (index + 1));
      result[index] = result[rand];
      result[rand] = array[index];
    }
    return result;
  }

  getDoc2RunIdAndRunRecord(topic) {
    let doc2Runs = {};
    let lRuns = this.lRuns;
    for (let i = 0; i < lRuns.length; i++) {
      let runs = lRuns[i];
      let lRunRecord = runs.mRun[topic].lRunRecord;
      for (let j = 0; j < lRunRecord.length; j++) {
        if (!doc2Runs[lRunRecord[j].doc]) {
          doc2Runs[lRunRecord[j].doc] = [[runs.id, lRunRecord[j]]];
        } else {
          doc2Runs[lRunRecord[j].doc].concat([runs.id, lRunRecord[j]]);
        }
      }
    }
    return doc2Runs;
  }

}

class TwoStagesStrategy extends PoolingStrategy {

  getNextDocument(topic) {
    if (!this.gens[topic]) {
      this.gens[topic] = this.genPool(topic);
    }
    let doc = this.gens[topic].next();
    console.log(doc);

    if (!doc.done) {
      return doc;
    } else {
      doc = this.getPoolEvaluator(topic).next();
      return doc;
    }
  }

  getPoolEvaluator(topic) {
    if (!this.evas[topic]) {
      this.evas[topic] = this.evalPool(topic);
    }
    return this.evas[topic];
  }

  * evalPool(topic) {
    let docs = this.tDocs[topic];
    //if (this.qRels !== null) {

    console.log("qRels");
    console.log(this.qRels);
    let qRel = this.qRels.getQRel(topic);//THIS IS A PROBLEM YOU SHOULD CREATE IF IT DOES NOT EXIST
    for (let doc of docs) {
      console.log(doc);
      let pooledDocument = this.getPooledDocument(doc, qRel);
      yield pooledDocument;
    }
    //}
  }
}

class DepthD extends TwoStagesStrategy {

  constructor() {
    super();
    this.name = "Depth@D";
    // parameters
    this.D = new D(10);
  }

  getParameters() {
    return [this.D];
  }

  * genPool(topic) {
    if (!this.tDocs[topic]) {
      this.tDocs[topic] = new Set();
    }
    let docs = this.tDocs[topic];
    var lRun = this.lRuns.map(runs => runs.mRun[topic]);
    for (let i = 0; i < lRun.length; i++) {
      if (lRun[i]) {
        for (let j = 0; j < lRun[i].lRunRecord.length; j++) {
          if (lRun[i].lRunRecord[j].rank <= this.D.value) {
            let doc = lRun[i].lRunRecord[j].doc;
            if (!docs.has(doc)) {
              docs.add(doc);
              let pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);
              yield pooledDocument;
            }
          }
        }
      }
    }
  }
}

class TakeN extends TwoStagesStrategy {
  constructor() {
    super();
    this.name = "Take@N";
    // parameters
    this.N = new N(1000);
    this.nQ = 0;
  }


  getParameters() {
    return [this.N];
  }

  * genPool(topic) {
    if (this.nQ === 0) {
      this.nQ = this.numberOfTopics();
    }
    if (!this.tDocs[topic]) {
      this.tDocs[topic] = new Set();
    }
    let docs = this.tDocs[topic];
    let lRun = this.lRuns.map(runs => runs.mRun[topic]);
    let n = 0;
    for (let j = 0; j < lRun[0].lRunRecord.length; j++) {
      for (let i = 0; i < lRun.length; i++) {
        if (lRun[i].lRunRecord[j]) {
          console.log(lRun[i].lRunRecord[j].rank);
          let doc = lRun[i].lRunRecord[j].doc;
          if (!docs.has(doc)) {
            docs.add(doc);
            let pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);
            yield pooledDocument;
            n = n + 1;
            if (n >= this.N.value / this.mQRel.size()) {
              return;
            }
          }
        }
      }
    }
  }
}

class FairTakeN extends TwoStagesStrategy {
  constructor() {
    super();
    this.name = "FairTake@N";
    // parameters
    this.N = new N(1000);
  }

  getParameters() {
    return [this.N];
  }

  * genPool(topic) {
    if (!this.tDocs[topic]) {
      this.tDocs[topic] = new Set();
    }
    let docs = this.tDocs[topic];
    let lRun = this.lRuns.map(runs => runs.mRun[topic]);
    let n = 0;
    for (let j = 0; j < lRun[0].lRunRecord.length; j++) {
      let nlRun = this.shuffle(lRun);
      for (let i = 0; i < lRun.length; i++) {
        if (nlRun[i].lRunRecord[j]) {
          let doc = nlRun[i].lRunRecord[j].doc;
          if (!docs.has(doc)) {
            docs.add(doc);
            let pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);
            yield pooledDocument;
            n = n + 1;
            if (n >= this.N.value / this.qRels.mQRel.size()) {
              return;
            }
          }

        }
      }
    }
  }
}

class CombXTakeN extends TwoStagesStrategy {
  constructor() {
    super();
    this.name = "CombXTake@N";
    // parameters
    this.N = new N(1000);
    this.normalizedScore = false;
    this.nQ = 0;
  }

  getParameters() {
    return [this.N];
  }

  getDoc2RunRecord(topic) {
    let doc2Runs = {};
    let lRuns = this.lRuns;
    for (let i = 0; i < lRuns.length; i++) {
      let runs = lRuns[i];
      let lRunRecord = runs.mRun[topic].lRunRecord;
      for (let j = 0; j < lRunRecord.length; j++) {
        if (!doc2Runs[lRunRecord[j].doc]) {
          doc2Runs[lRunRecord[j].doc] = [lRunRecord[j]];
        } else {
          doc2Runs[lRunRecord[j].doc].concat(lRunRecord[j]);
        }
      }
    }
    return doc2Runs;
  }

  addMinMaxNormalizedScore2LRuns() {
    let lRuns = this.lRuns;
    for (let i = 0; i < lRuns.length; i++) {
      for (let topic in lRuns[i].mRun) {
        let lRunRecord = lRuns[i].mRun[topic].lRunRecord;
        // find max and min
        let max = lRunRecord[0].score;
        let min = lRunRecord[0].score;
        for (let j = 1; j < lRunRecord.length; j++) {
          if (lRunRecord[j].score > max) {
            max = lRunRecord[j].score;
          } else if (lRunRecord[j].score < min) {
            min = lRunRecord[j].score;
          }
        }
        // normalize
        for (let j = 0; j < lRunRecord.length; j++) {
          lRunRecord[j].normalizedScore = (lRunRecord[j].score - min) / (max - min);
        }
      }
    }
  }

  x(vs) {
    console.log("abstract method: x(" + vs + ")");
  }

  getLDocScore(topic) {
    if (!this.normalizedScore) {
      this.addMinMaxNormalizedScore2LRuns();
      this.normalizedScore = true;
    }
    let doc2RunRecord = this.getDoc2RunRecord(topic);
    let lDocScore = [];
    for (let doc in doc2RunRecord) {
      let lRunRecord = doc2RunRecord[doc];
      let value = this.x(lRunRecord.map(runRecord => runRecord.normalizedScore));
      lDocScore.push({'doc': doc, 'value': value});
    }
    lDocScore.sort(function (docScoreA, docScoreB) {
      return docScoreA.value - docScoreB.value;
    });
    return lDocScore;
  }

  * genPool(topic) {
    if (this.nQ === 0) {
      this.nQ = this.numberOfTopics();
    }
    if (!this.tDocs[topic]) {
      this.tDocs[topic] = new Set();
    }
    let docs = this.tDocs[topic];
    let lDocScore = this.getLDocScore(topic);
    let n = 0;
    for (let i = 0; i < lDocScore.length; i++) {
      let doc = lDocScore[i].doc;
      if (!docs.has(doc)) {
        docs.add(doc);
        let pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);
        yield pooledDocument;
        n++;
        if (n >= this.N.value / this.nQ) {
          return;
        }
      }
    }
  }

}

class CombMAXTakeN extends CombXTakeN {
  constructor() {
    super();
    this.name = "CombMAXTake@N";
  }

  x(vs) {
    let max = vs[0];
    for (let i = 1; i < vs.length; i++) {
      if (vs[i] > max) {
        max = vs[i];
      }
    }
    return max;
  }
}

class CombMINTakeN extends CombXTakeN {
  constructor() {
    super();
    this.name = "CombMINTake@N";
  }

  x(vs) {
    let min = vs[0];
    for (let i = 1; i < vs.length; i++) {
      if (vs[i] < min) {
        min = vs[i];
      }
    }
    return min;
  }
}

class CombMEDTakeN extends CombXTakeN {
  constructor() {
    super();
    this.name = "CombMEDTake@N";
  }

  x(vs) {
    if (vs.length === 1) {
      return vs[0];
    } else {
      let nvs = vs.sort();
      if (nvs.length % 2 === 0) {
        return nvs[nvs.length / 2 - 1] / 2 + nvs[nvs.length / 2] / 2;
      } else {
        return nvs[nvs.length / 2 - 0.5];
      }
    }
  }
}

class CombSUMTakeN extends CombXTakeN {
  constructor() {
    super();
    this.name = "CombSUMTake@N";
  }

  x(vs) {
    let sum = vs[0];
    for (let i = 1; i < vs.length; i++) {
      sum += vs[i];
    }
    return sum;
  }
}

class CombANZTakeN extends CombXTakeN {
  constructor() {
    super();
    this.name = "CombANZTake@N";
  }

  x(vs) {
    let sum = vs[0];
    for (let i = 1; i < vs.length; i++) {
      sum += vs[i];
    }
    return sum / vs.length;
  }
}

class CombMNZTakeN extends CombXTakeN {
  constructor() {
    super();
    this.name = "CombMNZTake@N";
  }

  x(vs) {
    let sum = vs[0];
    for (let i = 1; i < vs.length; i++) {
      sum += vs[i];
    }
    return sum * vs.length;
  }
}

class MeasureBasedTakeN extends TwoStagesStrategy {
  constructor() {
    super();
    this.name = "MeasureBasedTake@N";
    // parameters
    this.N = new N(1000);
    this.nQ = 0;
  }

  getParameters() {
    return [this.N];
  }

  getDoc2RunRecord(topic) {
    let doc2Runs = {};
    let lRuns = this.lRuns;
    for (let i = 0; i < lRuns.length; i++) {
      let runs = lRuns[i];
      let lRunRecord = runs.mRun[topic].lRunRecord;
      for (let j = 0; j < lRunRecord.length; j++) {
        if (!doc2Runs[lRunRecord[j].doc]) {
          doc2Runs[lRunRecord[j].doc] = [lRunRecord[j]];
        } else {
          doc2Runs[lRunRecord[j].doc].concat(lRunRecord[j]);
        }
      }
    }
    return doc2Runs;
  }

  x(vs) {
    console.log("abstract method: x(" + vs + ")");
  }

  getLDocScore(topic) {
    let doc2RunRecord = this.getDoc2RunRecord(topic);
    let lDocScore = [];
    for (let doc in doc2RunRecord) {
      let lRunRecord = doc2RunRecord[doc];
      let value = this.x(lRunRecord.map(runRecord => runRecord.rank));
      lDocScore.push({'doc': doc, 'value': value});
    }
    lDocScore.sort(function (docScoreA, docScoreB) {
      return docScoreA.value - docScoreB.value;
    });
    return lDocScore;
  }

  * genPool(topic) {
    if (this.nQ === 0) {
      this.nQ = this.numberOfTopics();
    }
    if (!this.tDocs[topic]) {
      this.tDocs[topic] = new Set();
    }
    let docs = this.tDocs[topic];
    let lDocScore = this.getLDocScore(topic);
    let n = 0;
    for (let i = 0; i < lDocScore.length; i++) {
      let doc = lDocScore[i].doc;
      if (!docs.has(doc)) {
        docs.add(doc);
        let pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);
        yield pooledDocument;
        n++;
        if (n >= this.N.value / this.nQ) {
          return;
        }
      }
    }
  }
}

class DCGTakeN extends MeasureBasedTakeN {
  constructor() {
    super();
    this.name = "DCGTake@N";
  }

  x(vs) {
    let sum = vs[0];
    for (let i = 1; i < vs.length; i++) {
      sum += Math.log(2) / Math.log(vs[i] + 1);
    }
    return sum;
  }
}

class RRFTakeN extends MeasureBasedTakeN {
  constructor() {
    super();
    this.name = "RRFTake@N";
    this.K = new K(30);
  }

  getParameters() {
    return [this.N, this.K];
  }

  x(vs) {
    let sum = vs[0];
    for (let i = 1; i < vs.length; i++) {
      sum += 1 / (vs[i] + this.K.value);
    }
    return sum;
  }
}

class RBPTakeN extends MeasureBasedTakeN {
  constructor() {
    super();
    this.name = "RBPTake@N";
    this.P = new P(0.8);
  }

  getParameters() {
    return [this.N, this.P];
  }

  x(vs) {
    let sum = vs[0];
    for (let i = 1; i < vs.length; i++) {
      sum += Math.pow(1 - this.P.value, vs[i] - 1);
    }
    return sum;
  }
}

function rbp(p, run, qRel) {
  let res = 0;
  for (let rr of run.lRunRecord) {
    if (qRel.getRel(rr.doc) >= 1) {
      res +=
        (1 - p) * Math.pow(p, rr.rank - 1);
    }
  }
  return res;
}

function rbpResidual(p, run, qRel) {
  let res = 0;
  for (let rr of run.lRunRecord) {
    if (qRel.getRel(rr.doc) < 0 || qRel.getRel(rr.doc) === EnumPooledDocumentState.SELECTED) {
      res +=
        (1 - p) * Math.pow(p, rr.rank - 1);
    }
  }
  return res;
}

class RBPAdaptiveTakeN extends TwoStagesStrategy {

  constructor() {
    super();
    this.name = "RBPAdaptiveTake@N";
    //parameters
    this.N = new N(1000);
    this.P = new P(0.8);
    this.nQ = 0;

    this.mDoc2RunsIdRunRecord = {};
  }

  getParameters() {
    return [this.N, this.P];
  }

  evalRunsIdRunRecord(runsId, runRecord, mRunsScores) {
    return Math.pow(1 - this.P.value, runRecord.rank - 1) * mRunsScores[runsId];
  }

  getBestDocument(topic) {
    if (!this.mDoc2RunsIdRunRecord[topic]) {
      this.mDoc2RunsIdRunRecord[topic] = this.getDoc2RunIdAndRunRecord(topic);
    }
    let doc2RunsIdRunRecord = this.mDoc2RunsIdRunRecord[topic];
    let mRunsScores = {};
    this.lRuns.map(runs => mRunsScores[runs.id] =
      rbpResidual(this.P.value, runs.mRun[topic], this.qRels.getQRel(topic)) );
    let lDocScore = [];
    for (let doc in doc2RunsIdRunRecord) {
      let lRunsIdRunRecord = doc2RunsIdRunRecord[doc];
      let values = [];
      for (let runsIdRunRecord of lRunsIdRunRecord) {
        let value = this.evalRunsIdRunRecord(runsIdRunRecord[0], runsIdRunRecord[1], mRunsScores);
        values.push(value);
      }
      let sum = 0;
      for (let value of values) {
        sum += value;
      }
      lDocScore.push({'doc': doc, 'value': sum});
    }
    lDocScore.sort(function (docScoreA, docScoreB) {
      return docScoreB.value - docScoreA.value;
    });
    let res = lDocScore[0].doc;
    delete doc2RunsIdRunRecord[res];
    return res;
  }

  * genPool(topic) {
    if (this.nQ === 0) {
      this.nQ = this.numberOfTopics();
    }
    if (!this.tDocs[topic]) {
      this.tDocs[topic] = new Set();
    }
    let docs = this.tDocs[topic];
    for (let i = 0; i < this.N.value / this.nQ; i++) {
      let doc = this.getBestDocument(topic);
      console.log(doc);
      if (!docs.has(doc)) {
        docs.add(doc);
        let pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);//this.getPooledDocument(doc, this.qRels.getQRel(topic));
        this.qRels.getQRel(topic).mQRelRecord[doc] = pooledDocument;
        yield pooledDocument;
      }
    }
  }

}

class RBPAdaptiveStarTakeN extends PoolingStrategy {

  constructor() {
    super();
    this.name = "RBPAdaptive*Take@N";
    //parameters
    this.N = new N(1000);
    this.P = new P(0.8);
    this.nQ = 0;

    this.tQRels = new QRels();
    this.mDoc2RunsIdRunRecord = {};
  }

  getParameters() {
    return [this.N, this.P];
  }

  getNextDocument(topic) {
    if (!this.gens[topic]) {
      this.gens[topic] = this.genPool(topic);
    }
    let doc = this.gens[topic].next();
    console.log(doc);
    return doc;
  }

  evalRunsIdRunRecord(runsId, runRecord, mRunsScores) {
    return Math.pow(1 - this.P.value, runRecord.rank - 1) * mRunsScores[runsId];
  }

  getBestDocument(topic) {
    if (!this.mDoc2RunsIdRunRecord[topic]) {
      this.mDoc2RunsIdRunRecord[topic] = this.getDoc2RunIdAndRunRecord(topic);
    }
    let doc2RunsIdRunRecord = this.mDoc2RunsIdRunRecord[topic];
    let mRunsScores = {};
    this.lRuns.map((runs) => {
      let base = rbp(this.P.value, runs.mRun[topic], this.tQRels.getQRel(topic));
      let res = rbpResidual(this.P.value, runs.mRun[topic], this.tQRels.getQRel(topic));
      mRunsScores[runs.id] =
        res * Math.pow(base + res/2, 3);
    });
    console.log(mRunsScores);
    let lDocScore = [];
    for (let doc in doc2RunsIdRunRecord) {
      let lRunsIdRunRecord = doc2RunsIdRunRecord[doc];
      let values = [];
      for (let runsIdRunRecord of lRunsIdRunRecord) {
        let value = this.evalRunsIdRunRecord(runsIdRunRecord[0], runsIdRunRecord[1], mRunsScores);
        values.push(value);
      }
      let sum = 0;
      for (let value of values) {
        sum += value;
      }
      lDocScore.push({'doc': doc, 'value': sum});
    }
    lDocScore.sort(function (docScoreA, docScoreB) {
      return docScoreB.value - docScoreA.value;
    });
    let res = lDocScore[0].doc;
    delete doc2RunsIdRunRecord[res];
    return res;
  }

  * genPool(topic) {
    if (this.nQ === 0) {
      this.nQ = this.numberOfTopics();
    }
    if (!this.tDocs[topic]) {
      this.tDocs[topic] = new Set();
    }
    let docs = this.tDocs[topic];
    for (let i = 0; i < this.N.value / this.nQ; i++) {
      let doc = this.getBestDocument(topic);
      console.log(doc);
      if (!docs.has(doc)) {
        docs.add(doc);
        let pooledDocument = new this.getPooledDocument(doc, this.qRels.getQRel(topic));
        yield pooledDocument;
      }
    }
  }
}

class MTFTakeN extends PoolingStrategy {

  constructor() {
    super();
    this.name = "MTFTake@N";
    //parameters
    this.N = new N(1000);
    this.nQ = 0;

    this.tQRels = new QRels();
    this.mLNumRuns = {};
    this.mMaxRunsId = {};
  }

  getParameters() {
    return [this.N];
  }

  getNextDocument(topic) {
    if (!this.gens[topic]) {
      this.gens[topic] = this.genPool(topic);
    }
    let doc = this.gens[topic].next();
    console.log(doc);
    return doc;
  }

  getBestDocument(topic) {
    let rel = 0;
    if(this.tQRels.mQRel[topic]){
      rel = Object.values(this.tQRels.mQRel[topic].mQRelRecord)[Object.values(this.tQRels.mQRel[topic].mQRelRecord).length - 1].score;
    }
    if (!this.mLNumRuns[topic]) {
      this.mLNumRuns[topic] = new Array(this.lRuns.length).fill(0);
    }
    let lNumRuns = this.mLNumRuns[topic];
    let maxRunsId;
    if(rel < 1) {
      let mRunsScores = {};
      for (let i =0; i < this.lRuns.length; i++) {
        mRunsScores[this.lRuns[i].id] = 0;
        for (let j = 0; j < lNumRuns[i]; j++) {
          if (this.tQRels.getQRel(topic).getRel(this.lRuns[i].mRun[topic].lRunRecord[j].doc) === EnumPooledDocumentState.NON_RELEVANT) {
            mRunsScores[this.lRuns[i].id]--;
          }
        }
      }
      console.log(mRunsScores);
      let maxValue = -Infinity;
      for (let i = 0; i < Object.values(mRunsScores).length; i++) {
        if (Object.values(mRunsScores)[i] > maxValue) {
          maxValue = Object.values(mRunsScores)[i];
          maxRunsId = i;
        }
      }
      this.mMaxRunsId[topic] = maxRunsId;
    }
    maxRunsId = this.mMaxRunsId[topic];
    let res = this.lRuns[maxRunsId].mRun[topic].lRunRecord[lNumRuns[maxRunsId]].doc;
    lNumRuns[maxRunsId]++;
    return res;
  }

  * genPool(topic) {
    if (this.nQ === 0) {
      this.nQ = this.numberOfTopics();
    }
    if (!this.tDocs[topic]) {
      this.tDocs[topic] = new Set();
    }
    let docs = this.tDocs[topic];
    for (let i = 0; i < this.N.value / this.nQ; i++) {
      let doc = this.getBestDocument(topic);
      while(this.tQRels.getQRel(topic).getRel(doc) !== EnumPooledDocumentState.UNSELECTED){
        doc = this.getBestDocument(topic);
      }
      console.log(doc);
      if (!docs.has(doc)) {
        docs.add(doc);
        let pooledDocument = new this.getPooledDocument(doc, this.qRels.getQRel(topic));
        yield pooledDocument;
      }
    }
  }
}
