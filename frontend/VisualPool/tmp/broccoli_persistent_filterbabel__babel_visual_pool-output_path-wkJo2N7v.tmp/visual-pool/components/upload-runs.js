define("visual-pool/components/upload-runs", ["exports", "ember"], function (exports, _ember) {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Runs = function Runs(id, mRun) {
    _classCallCheck(this, Runs);

    this.id = id;
    this.mRun = mRun;
  };

  var Run = function Run(id, lRunRecord) {
    _classCallCheck(this, Run);

    this.id = id;
    this.lRunRecord = lRunRecord;
  };

  var RunRecord = function RunRecord(iter, doc, rank, score) {
    _classCallCheck(this, RunRecord);

    //this.iter = iter;
    this.doc = doc;
    this.rank = rank;
    this.score = score;
  };

  exports.Runs = Runs;
  exports.Run = Run;
  exports.RunRecord = RunRecord;

  function parseRuns(id, text, poolSize) {
    var reSs = new RegExp("\\s+");
    var reCs = new RegExp("\n+");
    var lines = text.split(reCs);
    var mem = {};
    for (var i = 0; i < lines.length - 1; i++) {
      var elems = lines[i].trim().split(reSs);
      var topicId = elems[0].trim();
      var documentId = elems[2].trim();
      var runRecord = new RunRecord(0, documentId, parseInt(elems[3]), parseFloat(elems[4]));
      if (topicId in mem) {
        if (mem[topicId].lRunRecord.length <= poolSize) {
          mem[topicId].lRunRecord = mem[topicId].lRunRecord.concat(runRecord);
        }
      } else {
        var run = new Run(topicId, [runRecord]);
        mem[topicId] = run;
      }
    }
    // clean input
    for (var key in mem) {
      var _run = mem[key];
      var lRunRecord = _run.lRunRecord;
      // remove duplicates
      // TODO
      // sort
      var slRunRecord = lRunRecord.sort(function (a, b) {
        return a.score - b.score;
      });
      // reconstruct rank
      for (var j = 0; j < slRunRecord.length; j++) {
        slRunRecord[j].rank = j + 1;
      }
      _run.lRunRecord = slRunRecord;
    }
    return new Runs(id, mem);
  }

  exports["default"] = _ember["default"].Component.extend({
    store: _ember["default"].inject.service(),
    poolSize: 1000,
    actions: {
      upload: function upload(event) {
        var _this = this;

        var _loop = function (i) {
          var reader = new FileReader();
          var file = event.target.files[i];
          var txtData = undefined;
          reader.onload = function () {
            txtData = reader.result;
            var runs = parseRuns(file.name, txtData, _this.get("poolSize"));
            _this.pool.addRuns(runs);
            _this.lRuns.push(runs);
            console.log("read " + file.name);
          };
          if (file) {
            reader.readAsText(file);
          }
        };

        for (var i = 0; i < event.target.files.length; i++) {
          _loop(i);
        }
        this.sendAction('updateTopicSelector');
      },
      poolSizeChange: function poolSizeChange(value) {
        this.set("poolSize", value);
      }
    }
  });
});
/*jshint loopfunc: true */