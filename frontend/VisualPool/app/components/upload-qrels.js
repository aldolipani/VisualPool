import Ember from "ember";

class QRels {
  constructor(id, mQRel) {
    this.id = id;
    this.mQRel = mQRel;
  }
}

class QRel {
  constructor(id, mQRelRecord) {
    this.id = id;
    this.mQRelRecord = mQRelRecord;
  }
}

class QRelRecord {
  constructor(iter, doc, score) {
    //this.iter = iter;
    this.doc = doc;
    this.score = score;
  }
}

export{
  QRels,
  QRel,
  QRelRecord
};

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
