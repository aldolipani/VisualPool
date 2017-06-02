import Ember from "ember";

export default Ember.Component.extend({
  topicSelected: "null",
  lPooledDocument:[],
  nT: function () {
    let topics = this.pool.lTopicPool;
    let res = "|T| = ";
    if (topics) {
      return res + topics.length;
    } else {
      return res + "0";
    }
  }.property('pool.lTopicPool.@each'),
  nRt: function () {
    let lRuns = this.pool.lRuns;
    let topic = this.get("topicSelected");
    let res = "|R_{" + topic + "}| = ";
    if (topic === "null") {
      return res + "0";
    } else {
      let count = 0;
      for (let runs of lRuns) {
        if (runs.mRun[topic]) {
          count++;
        }
      }
      return res + count;
    }
  }.property('topicSelected', 'pool.lRuns.@each'),
  sNRt: function () {
    let lRuns = this.pool.lRuns;
    let topic = this.get("topicSelected");
    let res = "\\sum_{r_{" + topic + "} \\in R_{" + topic + "}} \\left|r_{" + topic + "}\\right| = ";
    if (topic === "null") {
      return res + "0";
    } else {
      let count = 0;
      for (let runs of lRuns) {
        if (runs.mRun[topic]) {
          count += runs.mRun[topic].lRunRecord.length;
        }
      }
      return res + count;
    }
  }.property('topicSelected', 'pool.lRuns.@each'),
  sURt: function () {
    let mTopicPool = this.pool.mTopicPool;
    let topic = this.get("topicSelected");
    let res = "\\left|\\bigcup_{r_{" + topic + "} \\in R_{" + topic + "}} r_{" + topic + "}\\right| = ";
    if (topic === "null") {
      return res + "0";
    } else {
      let count = 0;
      if (mTopicPool[topic]) {
        count += mTopicPool[topic].docs.size;
      }
      return res + count;
    }
  }.property('topicSelected', 'pool.lRuns.@each'),
  nR: function () {
    let lRuns = this.pool.lRuns;
    return "|R| = " + lRuns.length;
  }.property('pool.lRuns.@each'),
  sNR: function () {
    let lRuns = this.pool.lRuns;
    let res = "\\sum_{r \\in R} \\left|r\\right| = ";
    let count = 0;
    for (let runs of lRuns) {
      for (let topic in runs.mRun) {
        count += runs.mRun[topic].lRunRecord.length;
      }
    }
    return res + count;
  }.property('pool.lRuns.@each'),
  sUR: function () {
    let mTopicPool = this.pool.mTopicPool;
    let res = "\\left|\\bigcup_{r \\in R} r\\right| = ";
    let count = 0;
    for (let topic in mTopicPool) {
      count += mTopicPool[topic].docs.size;
    }
    return res + count;
  }.property('pool.lRuns.@each'),
  nQPt: function(){
    let lPooledDocument = this.get("lPooledDocument");
    let topic = this.get("topicSelected");
    let res = "|Q^+_{"+topic+"}| = ";
    let count = 0;
    for(let pooledDocument of lPooledDocument){
      if(pooledDocument.rel >= 1 && pooledDocument.topic === topic){
        count++;
      }
    }
    return res + count;
  }.property('lPooledDocument.@each', 'topicSelected'),
  nQNt:function(){
    let lPooledDocument = this.get("lPooledDocument");
    let topic = this.get("topicSelected");
    let res = "|Q^-_{"+topic+"}| = ";
    let count = 0;
    for(let pooledDocument of lPooledDocument){
      if(pooledDocument.rel === 0 && pooledDocument.topic === topic){
        count++;
      }
    }
    return res + count;
  }.property('lPooledDocument.@each', 'topicSelected'),
  nQQt:function(){
    let lPooledDocument = this.get("lPooledDocument");
    let topic = this.get("topicSelected");
    let res = "|Q^?_{"+topic+"}| = ";
    let count = 0;
    for(let pooledDocument of lPooledDocument){
      if(pooledDocument.rel < 0 && pooledDocument.topic === topic){
        count++;
      }
    }
    return res + count;
  }.property('lPooledDocument.@each', 'topicSelected'),
  nQt:function(){
    let lPooledDocument = this.get("lPooledDocument");
    let topic = this.get("topicSelected");
    let res = "|Q_{"+topic+"}| = ";
    let count = 0;
    for(let pooledDocument of lPooledDocument){
      if(pooledDocument.topic === topic){
        count++;
      }
    }
    return res + count;
  }.property('lPooledDocument.@each', 'topicSelected'),
  nQP: function(){
    let lPooledDocument = this.get("lPooledDocument");
    let res = "|Q^+| = ";
    let count = 0;
    for(let pooledDocument of lPooledDocument){
      if(pooledDocument.rel >= 1){
        count++;
      }
    }
    return res + count;
  }.property('lPooledDocument.@each', 'topicSelected'),
  nQN:function(){
    let lPooledDocument = this.get("lPooledDocument");
    let res = "|Q^-| = ";
    let count = 0;
    for(let pooledDocument of lPooledDocument){
      if(pooledDocument.rel === 0){
        count++;
      }
    }
    return res + count;
  }.property('lPooledDocument.@each', 'topicSelected'),
  nQQ:function(){
    let lPooledDocument = this.get("lPooledDocument");
    let res = "|Q^?| = ";
    let count = 0;
    for(let pooledDocument of lPooledDocument){
      if(pooledDocument.rel < 0){
        count++;
      }
    }
    return res + count;
  }.property('lPooledDocument.@each', 'topicSelected'),
  nQ:function(){
    let lPooledDocument = this.get("lPooledDocument");
    let res = "|Q| = ";
    let count = lPooledDocument.length;
    return res + count;
  }.property('lPooledDocument.@each', 'topicSelected'),
});
