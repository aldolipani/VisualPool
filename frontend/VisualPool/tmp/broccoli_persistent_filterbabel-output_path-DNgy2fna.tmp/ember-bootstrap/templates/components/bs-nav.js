define("ember-bootstrap/templates/components/bs-nav", ["exports"], function (exports) {
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
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "modules/ember-bootstrap/templates/components/bs-nav.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["item", ["subexpr", "component", ["bs-nav/item"], [], ["loc", [null, [3, 13], [3, 38]]], 0, 0], "link-to", ["subexpr", "component", ["bs-nav/link-to"], [], ["loc", [null, [4, 16], [4, 44]]], 0, 0], "dropdown", ["subexpr", "component", ["bs-dropdown"], ["inNav", true], ["loc", [null, [5, 17], [5, 53]]], 0, 0]], ["loc", [null, [2, 4], [6, 5]]], 0, 0]], [], ["loc", [null, [1, 0], [7, 2]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});