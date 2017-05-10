define("ember-bootstrap/templates/components/bs-navbar", ["exports"], function (exports) {
  "use strict";

  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "modules/ember-bootstrap/templates/components/bs-navbar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0, 1, 1);
        return morphs;
      },
      statements: [["attribute", "class", ["subexpr", "if", [["get", "fluid", ["loc", [null, [1, 16], [1, 21]]], 0, 0, 0, 0], "container-fluid", "container"], [], ["loc", [null, [null, null], [1, 53]]], 0, 0], 0, 0, 0, 0], ["inline", "yield", [["subexpr", "hash", [], ["toggle", ["subexpr", "component", ["bs-navbar/toggle"], ["onClick", ["subexpr", "action", ["toggleNavbar"], [], ["loc", [null, [4, 57], [4, 80]]], 0, 0], "collapsed", ["subexpr", "@mut", [["get", "collapsed", ["loc", [null, [4, 91], [4, 100]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 19], [4, 101]]], 0, 0], "content", ["subexpr", "component", ["bs-navbar/content"], ["collapsed", ["subexpr", "@mut", [["get", "collapsed", ["loc", [null, [5, 61], [5, 70]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [5, 20], [5, 71]]], 0, 0], "nav", ["subexpr", "component", ["bs-navbar/nav"], [], ["loc", [null, [6, 16], [6, 43]]], 0, 0]], ["loc", [null, [3, 8], [7, 9]]], 0, 0]], [], ["loc", [null, [2, 4], [8, 6]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});