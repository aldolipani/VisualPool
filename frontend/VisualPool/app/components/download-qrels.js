import Ember from 'ember';

export default Ember.Component.extend({
  lPooledDocument: [],
  actions:{
    download() {
      var element = document.createElement('a');

      var content = "";
      var lPooledDocument = this.get("lPooledDocument");
      for (var i=0; i < lPooledDocument.length; i++){
        var pooledDocument = lPooledDocument[i];
        content += encodeURI(pooledDocument.topic) + "%20Q0%20" + encodeURI(pooledDocument.document) + "%20" + encodeURI(pooledDocument.rel) + "%0A";
      }

      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + content);
      element.setAttribute('download', 'qRels.txt');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }
});
