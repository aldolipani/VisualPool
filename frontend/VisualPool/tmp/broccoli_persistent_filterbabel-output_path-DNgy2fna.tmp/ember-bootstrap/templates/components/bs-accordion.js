define("ember-bootstrap/templates/components/bs-accordion", ["exports"], function (exports) {
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
            "line": 6,
            "column": 2
          }
        },
        "moduleName": "modules/ember-bootstrap/templates/components/bs-accordion.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["subexpr", "hash", [], ["item", ["subexpr", "component", ["bs-accordion/item"], ["selected", ["subexpr", "@mut", [["get", "isSelected", ["loc", [null, [3, 53], [3, 63]]], 0, 0, 0, 0]], [], [], 0, 0], "onClick", ["subexpr", "action", ["change"], [], ["loc", [null, [3, 72], [3, 89]]], 0, 0]], ["loc", [null, [3, 13], [3, 90]]], 0, 0], "change", ["subexpr", "action", ["change"], [], ["loc", [null, [4, 15], [4, 32]]], 0, 0]], ["loc", [null, [2, 4], [5, 5]]], 0, 0]], [], ["loc", [null, [1, 0], [6, 2]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});