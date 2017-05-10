define("ember-bootstrap/templates/components/bs-dropdown", ["exports"], function (exports) {
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
            "line": 7,
            "column": 2
          }
        },
        "moduleName": "modules/ember-bootstrap/templates/components/bs-dropdown.hbs"
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
      statements: [["inline", "yield", [["subexpr", "hash", [], ["button", ["subexpr", "component", ["bs-dropdown/button"], ["dropdown", ["subexpr", "@mut", [["get", "this", ["loc", [null, [3, 56], [3, 60]]], 0, 0, 0, 0]], [], [], 0, 0], "onClick", ["subexpr", "action", ["toggleDropdown"], [], ["loc", [null, [3, 69], [3, 94]]], 0, 0]], ["loc", [null, [3, 15], [3, 95]]], 0, 0], "toggle", ["subexpr", "component", ["bs-dropdown/toggle"], ["dropdown", ["subexpr", "@mut", [["get", "this", ["loc", [null, [4, 56], [4, 60]]], 0, 0, 0, 0]], [], [], 0, 0], "inNav", ["subexpr", "@mut", [["get", "inNav", ["loc", [null, [4, 67], [4, 72]]], 0, 0, 0, 0]], [], [], 0, 0], "onClick", ["subexpr", "action", ["toggleDropdown"], [], ["loc", [null, [4, 81], [4, 106]]], 0, 0]], ["loc", [null, [4, 15], [4, 107]]], 0, 0], "menu", ["subexpr", "component", ["bs-dropdown/menu"], [], ["loc", [null, [5, 13], [5, 43]]], 0, 0]], ["loc", [null, [2, 4], [6, 5]]], 0, 0]], [], ["loc", [null, [1, 0], [7, 2]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});