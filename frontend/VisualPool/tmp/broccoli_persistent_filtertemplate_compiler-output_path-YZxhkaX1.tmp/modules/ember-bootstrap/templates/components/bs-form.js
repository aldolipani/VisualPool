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
          "line": 12,
          "column": 2
        }
      },
      "moduleName": "modules/ember-bootstrap/templates/components/bs-form.hbs"
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
      ["inline","yield",[["subexpr","hash",[],["element",["subexpr","component",["bs-form/element"],["model",["subexpr","@mut",[["get","model",["loc",[null,[4,18],[4,23]]],0,0,0,0]],[],[],0,0],"formLayout",["subexpr","@mut",[["get","formLayout",["loc",[null,[5,23],[5,33]]],0,0,0,0]],[],[],0,0],"horizontalLabelGridClass",["subexpr","@mut",[["get","horizontalLabelGridClass",["loc",[null,[6,37],[6,61]]],0,0,0,0]],[],[],0,0],"showAllValidations",["subexpr","@mut",[["get","showAllValidations",["loc",[null,[7,31],[7,49]]],0,0,0,0]],[],[],0,0],"onChange",["subexpr","action",["change"],[],["loc",[null,[8,21],[8,38]]],0,0]],["loc",[null,[3,16],[9,9]]],0,0],"group",["subexpr","component",["bs-form/group"],["formLayout",["subexpr","@mut",[["get","formLayout",["loc",[null,[10,52],[10,62]]],0,0,0,0]],[],[],0,0]],["loc",[null,[10,14],[10,63]]],0,0]],["loc",[null,[2,4],[11,5]]],0,0]],[],["loc",[null,[1,0],[12,2]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));