import Ember from "ember";

export const EnumPooledDocumentState = {
  UNSELECTED: -3,
  SELECTED: -2,
  UNKNOWN: -1,
  NON_RELEVANT: 0,
  RELEVANT: 1
};

export class QRels {
  constructor(id, mQRel) {
    if(!arguments.length) {
      this.id = "default";
      this.mQRel = {};
    } else {
      this.id = id;
      this.mQRel = mQRel;
    }
  }

  getQRel(topic){
    if(!this.mQRel[topic]){
      this.mQRel[topic] = new QRel(topic, {});
    }
    return this.mQRel[topic];
  }

  merge(qRels){
    if(!this.mQRel){
      for (let topic in qRels.mQRel) {
        if(this.mQRel[topic]){
          for(let doc in qRels.mQRel[topic]){
            if(!this.mQRel[topic][doc]){
              this.mQRel[topic][doc] = qRels.mQRel[topic][doc];
            }
          }
        }else{
          this.mQRel[topic] = qRels.mQRel[topic];
        }
      }
    }else{
      this.mQRel = qRels.mQRel;
    }
  }

  addAssessment(topic, doc, rel){
    this.getQRel(topic).addAssessment(doc, rel);
  }
}

class QRel {
  constructor(id, mQRelRecord) {
    this.id = id;
    this.mQRelRecord = mQRelRecord;
    this.lastRel = 0;
  }

  getRel(doc){
    if(this.mQRelRecord[doc]) {
      return this.mQRelRecord[doc].score;
    }else{
      return EnumPooledDocumentState.UNSELECTED;
    }
  }

  addAssessment(doc, rel){
    this.lastRel = rel;
    this.mQRelRecord[doc] = new QRelRecord(0, doc, rel);
  }
}

class QRelRecord {
  constructor(iter, doc, score) {
    //this.iter = iter;
    this.doc = doc;
    this.score = score;
  }
}

function parseQRels(id, text) {
  let reSs = new RegExp("\\s+");
  let reCs = new RegExp("\n+");
  let lines = text.split(reCs);
  let mem = {};
  for (let i = 0; i < lines.length - 1; i++) {
    var elems = lines[i].trim().split(reSs);
    let topicId = elems[0].trim();
    let documentId = elems[2].trim();
    let rel = parseInt(elems[3].trim());
    if(rel > 1){
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

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    upload: function (event) {
      let reader = new FileReader();
      let file = event.target.files[0];
      let txtData;
      reader.onload = () => {
        txtData = reader.result;
        var qRels = parseQRels(file.name, txtData);
        this.pool.setQRels(qRels);
        console.log("read " + file.name);
      };
      if (file) {
        reader.readAsText(file);
      }
      this.sendAction('updatePoolQRels');
    }
  }
});
