define('visual-pool/initializers/pool', ['exports'], function (exports) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.initialize = initialize;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TopicPool = function TopicPool(id) {
    _classCallCheck(this, TopicPool);

    this.id = id;
    this.rankDocs = [];
    this.docs = new Set();
  };

  var Pool = (function () {
    function Pool() {
      _classCallCheck(this, Pool);

      this.qRels = null;
      this.lRuns = [];
      this.mTopicPool = {};
      this.lTopicPool = [];
      this.lPoolStrategy = [new DepthD(), new TakeN()];
    }

    _createClass(Pool, [{
      key: 'initilizePoolStrategies',
      value: function initilizePoolStrategies() {
        for (var i = 0; i < this.lPoolStrategy.length; i++) {
          this.lPoolStrategy[i].setLRuns(this.lRuns);
          this.lPoolStrategy[i].setQRels(this.qRels);
        }
      }
    }, {
      key: 'setQRels',
      value: function setQRels(qRels) {
        this.qRels = qRels;
        this.initilizePoolStrategies();
      }
    }, {
      key: 'addRuns',
      value: function addRuns(runs) {
        for (var key in runs.mRun) {
          if (!this.mTopicPool[key]) {
            this.mTopicPool[key] = new TopicPool(key);
          }
          this.addRun(runs.mRun[key], key);
        }
        this.lRuns.push(runs);
        this.initilizePoolStrategies();
        for (var key in this.mTopicPool) {
          if (!this.lTopicPool[this.mTopicPool[key]]) {
            this.lTopicPool.push(this.mTopicPool[key]);
          }
        }
      }
    }, {
      key: 'addRun',
      value: function addRun(run, topic) {
        var topicPool = this.mTopicPool[topic];
        for (var i = 0; i < run.lRunRecord.length; i++) {
          topicPool.docs.add(run.lRunRecord[i].doc);
          if (!topicPool.rankDocs[run.lRunRecord[i].rank]) {
            topicPool.rankDocs[run.lRunRecord[i].rank] = new Set();
          }
          topicPool.rankDocs[run.lRunRecord[i].rank].add(run.lRunRecord[i].doc);
        }
      }
    }]);

    return Pool;
  })();

  function initialize(application) {
    var pool = new Pool();

    application.register('pool:main', pool, { instantiate: false });
    application.inject('component', 'pool', 'pool:main');
    application.inject('controller', 'pool', 'pool:main');
  }

  exports['default'] = {
    name: 'pool',
    initialize: initialize
  };

  var D = function D(value) {
    _classCallCheck(this, D);

    this.name = "D";
    this.description = "Depth of the Pool";
    this.value = value;
  };

  var N = function N(value) {
    _classCallCheck(this, N);

    this.name = "N";
    this.description = "Size of the Pool";
    this.value = value;
  };

  var EnumPooledDocumentState = {
    UNKNOWN: -3,
    UNSELECTED: -2,
    SELECTED: -1,
    NON_RELEVANT: 0,
    RELEVANT: 1
  };

  var PooledDocument = function PooledDocument(doc, status) {
    _classCallCheck(this, PooledDocument);

    this.doc = doc;
    this.status = status;
  };

  var DepthD = (function () {
    function DepthD() {
      _classCallCheck(this, DepthD);

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

    _createClass(DepthD, [{
      key: 'setQRels',
      value: function setQRels(qRels) {
        this.qRels = qRels;
      }
    }, {
      key: 'setLRuns',
      value: function setLRuns(lRuns) {
        this.lRuns = lRuns;
      }
    }, {
      key: 'getParameters',
      value: function getParameters() {
        return [this.D];
      }
    }, {
      key: 'getPoolGenerator',
      value: function getPoolGenerator(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        return this.gens[topic];
      }
    }, {
      key: 'getPoolEvaluator',
      value: function getPoolEvaluator(topic) {
        if (!this.evas[topic]) {
          this.evas[topic] = this.evalPool(topic);
        }
        return this.evas[topic];
      }
    }, {
      key: 'genPool',
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, lRun, i, j, doc, pooledDocument;
        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              lRun = this.lRuns.map(function (runs) {
                return runs.mRun[topic];
              });
              i = 0;

            case 4:
              if (!(i < lRun.length)) {
                context$2$0.next = 21;
                break;
              }

              if (!lRun[i]) {
                context$2$0.next = 18;
                break;
              }

              j = 0;

            case 7:
              if (!(j < lRun[i].lRunRecord.length)) {
                context$2$0.next = 18;
                break;
              }

              if (!(lRun[i].lRunRecord[j].rank < this.D.value)) {
                context$2$0.next = 15;
                break;
              }

              doc = lRun[i].lRunRecord[j].doc;

              if (docs.has(doc)) {
                context$2$0.next = 15;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);
              context$2$0.next = 15;
              return pooledDocument;

            case 15:
              j++;
              context$2$0.next = 7;
              break;

            case 18:
              i++;
              context$2$0.next = 4;
              break;

            case 21:
            case 'end':
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }, {
      key: 'evalPool',
      value: regeneratorRuntime.mark(function evalPool(topic) {
        var docs, qRel, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, doc, pooledDocument;

        return regeneratorRuntime.wrap(function evalPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              docs = this.tDocs[topic];

              if (!(this.qRels !== null)) {
                context$2$0.next = 32;
                break;
              }

              qRel = this.qRels.mQRel[topic];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              context$2$0.prev = 6;
              _iterator = docs[Symbol.iterator]();

            case 8:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                context$2$0.next = 18;
                break;
              }

              doc = _step.value;
              pooledDocument = null;

              console.log(doc);
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
              context$2$0.next = 15;
              return pooledDocument;

            case 15:
              _iteratorNormalCompletion = true;
              context$2$0.next = 8;
              break;

            case 18:
              context$2$0.next = 24;
              break;

            case 20:
              context$2$0.prev = 20;
              context$2$0.t0 = context$2$0['catch'](6);
              _didIteratorError = true;
              _iteratorError = context$2$0.t0;

            case 24:
              context$2$0.prev = 24;
              context$2$0.prev = 25;

              if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
              }

            case 27:
              context$2$0.prev = 27;

              if (!_didIteratorError) {
                context$2$0.next = 30;
                break;
              }

              throw _iteratorError;

            case 30:
              return context$2$0.finish(27);

            case 31:
              return context$2$0.finish(24);

            case 32:
            case 'end':
              return context$2$0.stop();
          }
        }, evalPool, this, [[6, 20, 24, 32], [25,, 27, 31]]);
      })
    }]);

    return DepthD;
  })();

  var TakeN = (function () {
    function TakeN() {
      _classCallCheck(this, TakeN);

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

    _createClass(TakeN, [{
      key: 'setLRuns',
      value: function setLRuns(lRuns) {
        this.lRuns = lRuns;
      }
    }, {
      key: 'setQRels',
      value: function setQRels(qRels) {
        this.qRels = qRels;
      }
    }, {
      key: 'getParameters',
      value: function getParameters() {
        return [this.N];
      }
    }, {
      key: 'getPoolGenerator',
      value: function getPoolGenerator(topic) {
        if (!this.gens[topic]) {
          this.gens[topic] = this.genPool(topic);
        }
        return this.gens[topic];
      }
    }, {
      key: 'getPoolEvaluator',
      value: function getPoolEvaluator(topic) {
        if (!this.evas[topic]) {
          this.evas[topic] = this.evalPool(topic);
        }
        return this.evas[topic];
      }
    }, {
      key: 'genPool',
      value: regeneratorRuntime.mark(function genPool(topic) {
        var docs, lRun, topics, i, _topic, j, doc, pooledDocument;

        return regeneratorRuntime.wrap(function genPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              if (!this.tDocs[topic]) {
                this.tDocs[topic] = new Set();
              }
              docs = this.tDocs[topic];
              lRun = this.lRuns.map(function (runs) {
                return runs.mRun[topic];
              });
              topics = new Set();

              for (i = 0; i < this.lRuns.length; i++) {
                for (_topic in this.lRuns[i].mRun) {
                  topics.add(_topic);
                }
              }
              j = 0;

            case 6:
              if (!(j < lRun[0].lRunRecord.length)) {
                context$2$0.next = 24;
                break;
              }

              i = 0;

            case 8:
              if (!(i < lRun.length)) {
                context$2$0.next = 21;
                break;
              }

              if (!lRun[i].lRunRecord[j]) {
                context$2$0.next = 18;
                break;
              }

              console.log(lRun[i].lRunRecord[j].rank);

              if (!(lRun[i].lRunRecord[j].rank < this.N.value / topics.size)) {
                context$2$0.next = 18;
                break;
              }

              doc = lRun[i].lRunRecord[j].doc;

              if (docs.has(doc)) {
                context$2$0.next = 18;
                break;
              }

              docs.add(doc);
              pooledDocument = new PooledDocument(doc, EnumPooledDocumentState.SELECTED);
              context$2$0.next = 18;
              return pooledDocument;

            case 18:
              i++;
              context$2$0.next = 8;
              break;

            case 21:
              j++;
              context$2$0.next = 6;
              break;

            case 24:
            case 'end':
              return context$2$0.stop();
          }
        }, genPool, this);
      })
    }, {
      key: 'evalPool',
      value: regeneratorRuntime.mark(function evalPool(topic) {
        var docs, qRel, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, doc, pooledDocument;

        return regeneratorRuntime.wrap(function evalPool$(context$2$0) {
          while (1) switch (context$2$0.prev = context$2$0.next) {
            case 0:
              docs = this.tDocs[topic];

              if (!(this.qRels !== null)) {
                context$2$0.next = 31;
                break;
              }

              qRel = this.qRels.mQRel[topic];
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              context$2$0.prev = 6;
              _iterator2 = docs[Symbol.iterator]();

            case 8:
              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                context$2$0.next = 17;
                break;
              }

              doc = _step2.value;
              pooledDocument = null;

              if (qRel.mQRelRecord[doc]) {
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
              context$2$0.next = 14;
              return pooledDocument;

            case 14:
              _iteratorNormalCompletion2 = true;
              context$2$0.next = 8;
              break;

            case 17:
              context$2$0.next = 23;
              break;

            case 19:
              context$2$0.prev = 19;
              context$2$0.t0 = context$2$0['catch'](6);
              _didIteratorError2 = true;
              _iteratorError2 = context$2$0.t0;

            case 23:
              context$2$0.prev = 23;
              context$2$0.prev = 24;

              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
              }

            case 26:
              context$2$0.prev = 26;

              if (!_didIteratorError2) {
                context$2$0.next = 29;
                break;
              }

              throw _iteratorError2;

            case 29:
              return context$2$0.finish(26);

            case 30:
              return context$2$0.finish(23);

            case 31:
            case 'end':
              return context$2$0.stop();
          }
        }, evalPool, this, [[6, 19, 23, 31], [24,, 26, 30]]);
      })
    }]);

    return TakeN;
  })();

  exports.PooledDocument = PooledDocument;
  exports.EnumPooledDocumentState = EnumPooledDocumentState;

  //const depthD = new DepthD();
  //const genPool = depthD.genPool(301);
});