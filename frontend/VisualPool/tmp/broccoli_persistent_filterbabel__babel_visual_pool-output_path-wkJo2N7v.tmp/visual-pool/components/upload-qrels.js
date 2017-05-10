define("visual-pool/components/upload-qrels", ["exports", "ember"], function (exports, _ember) {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var QRels = function QRels(id, mQRel) {
    _classCallCheck(this, QRels);

    this.id = id;
    this.mQRel = mQRel;
  };

  var QRel = function QRel(id, mQRelRecord) {
    _classCallCheck(this, QRel);

    this.id = id;
    this.mQRelRecord = mQRelRecord;
  };

  var QRelRecord = function QRelRecord(iter, doc, score) {
    _classCallCheck(this, QRelRecord);

    //this.iter = iter;
    this.doc = doc;
    this.score = score;
  };

  exports.QRels = QRels;
  exports.QRel = QRel;
  exports.QRelRecord = QRelRecord;

  function parseQRels(id, text) {
    var reSs = new RegExp("\\s+");
    var reCs = new RegExp("\n+");
    var lines = text.split(reCs);
    var mem = {};
    for (var i = 0; i < lines.length - 1; i++) {
      var elems = lines[i].trim().split(reSs);
      var topicId = elems[0].trim();
      var documentId = elems[2].trim();
      var qRelRecord = new QRelRecord(0, documentId, parseInt(elems[3]));
      if (topicId in mem) {
        mem[topicId].mQRelRecord[qRelRecord.doc] = qRelRecord;
      } else {
        mem[topicId] = new QRel(topicId, {});
        mem[topicId].mQRelRecord[qRelRecord.doc] = qRelRecord;
      }
    }
    return new QRels(id, mem);
  }

  exports["default"] = _ember["default"].Component.extend({
    store: _ember["default"].inject.service(),
    actions: {
      upload: function upload(event) {
        var _this = this;

        var reader = new FileReader();
        var file = event.target.files[0];
        var txtData = undefined;
        reader.onload = function () {
          txtData = reader.result;
          var qRels = parseQRels(file.name, txtData);
          _this.pool.setQRels(qRels);
          console.log("read " + file.name);
        };
        if (file) {
          reader.readAsText(file);
        }
        this.sendAction('updatePoolQRels');
      }
    }
  });
});