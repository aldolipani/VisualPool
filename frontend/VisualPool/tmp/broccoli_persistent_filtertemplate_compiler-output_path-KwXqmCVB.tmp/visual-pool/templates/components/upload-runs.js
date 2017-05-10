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
          "line": 16,
          "column": 6
        }
      },
      "moduleName": "visual-pool/templates/components/upload-runs.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","form-horizontal");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","form-group");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-sm-2");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("label");
      dom.setAttribute(el4,"class","btn btn-default btn-file");
      var el5 = dom.createTextNode("\n                Upload Runs ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("input");
      dom.setAttribute(el5,"multiple","true");
      dom.setAttribute(el5,"type","file");
      dom.setAttribute(el5,"style","display: none;");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("label");
      dom.setAttribute(el3,"class","col-sm-2 control-label");
      var el4 = dom.createTextNode("Run Size:");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-sm-2");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("input");
      dom.setAttribute(el4,"type","text");
      dom.setAttribute(el4,"class","form-control");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0, 1]);
      var element1 = dom.childAt(element0, [1, 1, 1]);
      var element2 = dom.childAt(element0, [5, 1]);
      var morphs = new Array(5);
      morphs[0] = dom.createAttrMorph(element1, 'onchange');
      morphs[1] = dom.createAttrMorph(element2, 'onblur');
      morphs[2] = dom.createAttrMorph(element2, 'value');
      morphs[3] = dom.createElementMorph(element2);
      morphs[4] = dom.createElementMorph(element2);
      return morphs;
    },
    statements: [
      ["attribute","onchange",["subexpr","action",["upload"],[],["loc",[null,[null,null],[5,79]]],0,0],0,0,0,0],
      ["attribute","onblur",["subexpr","action",["poolSizeChange"],["value","target.value"],["loc",[null,[null,null],[12,75]]],0,0],0,0,0,0],
      ["attribute","value",["get","poolSize",["loc",[null,[13,57],[13,65]]],0,0,0,0],0,0,0,0],
      ["element","bind-attr",[],["id","item.textboxId"],["loc",[null,[10,19],[10,52]]],0,0],
      ["element","bind-attr",[],["value","item.value"],["loc",[null,[11,32],[11,64]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));