export default Ember.HTMLBars.template((function() {
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
          "column": 0
        }
      },
      "moduleName": "modules/ember-bootstrap/templates/components/bs-dropdown/menu.hbs"
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["item",["subexpr","component",["bs-dropdown/menu/item"],[],["loc",[null,[3,13],[3,48]]],0,0],"divider",["subexpr","component",["bs-dropdown/menu/divider"],[],["loc",[null,[4,16],[4,54]]],0,0]],["loc",[null,[2,4],[5,5]]],0,0]],[],["loc",[null,[1,0],[6,2]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));