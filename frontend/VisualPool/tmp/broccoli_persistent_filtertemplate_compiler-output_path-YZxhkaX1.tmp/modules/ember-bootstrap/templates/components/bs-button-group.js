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
          "line": 5,
          "column": 2
        }
      },
      "moduleName": "modules/ember-bootstrap/templates/components/bs-button-group.hbs"
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
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","yield",[["subexpr","hash",[],["button",["subexpr","component",["bs-button-group/button"],["buttonGroupType",["subexpr","@mut",[["get","type",["loc",[null,[3,67],[3,71]]],0,0,0,0]],[],[],0,0],"groupValue",["subexpr","@mut",[["get","value",["loc",[null,[3,83],[3,88]]],0,0,0,0]],[],[],0,0],"onClick",["subexpr","action",["buttonPressed"],[],["loc",[null,[3,97],[3,121]]],0,0]],["loc",[null,[3,15],[3,122]]],0,0]],["loc",[null,[2,4],[4,5]]],0,0]],[],["loc",[null,[1,0],[5,2]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));