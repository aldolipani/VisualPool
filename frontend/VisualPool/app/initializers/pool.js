import Ember from "ember";

class TopicPool {
  constructor(id) {
    this.id = id;
    this.rankDocs = [];
    this.docs = new Set();
  }
}

class Pool {
  constructor() {
    this.qRels = null;
    this.lRuns = [];
    this.mTopicPool = {};
    this.lTopicPool = Ember.A();
    this.lPoolStrategy = [
      new DepthD(),
      new TakeN()
    ];
  }

  initilizePoolStrategies() {
    for (let i = 0; i < this.lPoolStrategy.length; i++) {
      this.lPoolStrategy[i].setLRuns(this.lRuns);
      this.lPoolStrategy[i].setQRels(this.qRels);
    }
  }

  setQRels(qRels) {
    this.qRels = qRels;
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

const EnumPooledDocumentState = {
  UNSELECTED: -3,
  SELECTED: -2,
  UNKNOWN:-1,
  NON_RELEVANT: 0,
  RELEVANT: 1
};

class PooledDocument {
  constructor(doc, status) {
    this.doc = doc;
    this.status = status;
  }
}

class DepthD {
  constructor() {
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

  setQRels(qRels){
    this.qRels = qRels;
  }

  setLRuns(lRuns) {
    this.lRuns = lRuns;
  }

  getParameters() {
    return [this.D];
  }

  getPoolGenerator(topic) {
    if (!this.gens[topic]) {
      this.gens[topic] = this.genPool(topic);
    }
    return this.gens[topic];
  }

  getPoolEvaluator(topic) {
    if (!this.evas[topic]) {
      this.evas[topic] = this.evalPool(topic);
    }
    return this.evas[topic];
  }

  * genPool(topic) {
    if (!this.tDocs[topic]) {
      this.tDocs[topic] = new Set();
    }
    let docs = this.tDocs[topic];
    var lRun = this.lRuns.map(runs => runs.mRun[topic]);
    for (let i = 0; i < lRun.length; i++) {
      if(lRun[i]) {
        for (let j = 0; j < lRun[i].lRunRecord.length; j++) {
          if (lRun[i].lRunRecord[j].rank < this.D.value) {
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

  * evalPool(topic) {
    let docs = this.tDocs[topic];
    if(this.qRels !== null) {
      let qRel = this.qRels.mQRel[topic];
      for (let doc of docs) {
        let pooledDocument = null;
        console.log(doc);
        if(qRel.mQRelRecord[doc]) {
          console.log(qRel.mQRelRecord[doc]);
          if (qRel.mQRelRecord[doc].score === 1) {
            pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.RELEVANT);
          } else if (qRel.mQRelRecord[doc].score === 0) {
            pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.NON_RELEVANT);
          } else {
            pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.UNKNOWN);
          }
        }else{
          pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.UNKNOWN);
        }
        yield pooledDocument;
      }
    }
  }
}

class TakeN {
  constructor() {
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

  setLRuns(lRuns) {
    this.lRuns = lRuns;
  }

  setQRels(qRels) {
    this.qRels = qRels;
  }

  getParameters() {
    return [this.N];
  }

  getPoolGenerator(topic) {
    if (!this.gens[topic]) {
      this.gens[topic] = this.genPool(topic);
    }
    return this.gens[topic];
  }

  getPoolEvaluator(topic) {
    if (!this.evas[topic]) {
      this.evas[topic] = this.evalPool(topic);
    }
    return this.evas[topic];
  }

  * genPool(topic) {
    if (!this.tDocs[topic]) {
      this.tDocs[topic] = new Set();
    }
    let docs = this.tDocs[topic];
    let lRun = this.lRuns.map(runs => runs.mRun[topic]);
    let topics = new Set();
    for (let i = 0; i < this.lRuns.length; i++){
      for (let topic in this.lRuns[i].mRun){
        topics.add(topic);
      }
    }
    for (let j = 0; j < lRun[0].lRunRecord.length; j++) {
      for (let i = 0; i < lRun.length; i++) {
        if(lRun[i].lRunRecord[j]) {
          console.log(lRun[i].lRunRecord[j].rank);
          if (lRun[i].lRunRecord[j].rank < this.N.value / topics.size) {
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

  * evalPool(topic) {
    let docs = this.tDocs[topic];
    if(this.qRels !== null) {
      let qRel = this.qRels.mQRel[topic];
      for (let doc of docs) {
        let pooledDocument = null;
        if(qRel.mQRelRecord[doc]) {
          if (qRel.mQRelRecord[doc].score === 1) {
            pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.RELEVANT);
          } else if (qRel.mQRelRecord[doc].score === 0) {
            pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.NON_RELEVANT);
          } else {
            pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.UNKNOWN);
          }
        }else{
          pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.UNKNOWN);
        }
        yield pooledDocument;
      }
    }
  }
}


export{
  PooledDocument,
  EnumPooledDocumentState
};

//const depthD = new DepthD();
//const genPool = depthD.genPool(301);
