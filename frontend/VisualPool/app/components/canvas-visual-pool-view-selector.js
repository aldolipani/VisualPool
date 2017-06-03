import Ember from 'ember';

export default Ember.Component.extend({
  viewSelector : 0,
  normalView:true,
  uniqueView:false,
  poolView:false,
  actions:{
    changeView(){
      this.set("viewSelector", (this.get("viewSelector")+1) % 3);

      let viewSelector = this.get("viewSelector");
      if(viewSelector === 0) {
        this.set("normalView", true);
        this.set("uniqueView", false);
        this.set("poolView", false);
      }else if(viewSelector === 1){
        this.set("normalView", false);
        this.set("uniqueView", true);
        this.set("poolView", false);
      }else if(viewSelector === 2){
        this.set("normalView", false);
        this.set("uniqueView", false);
        this.set("poolView", true);
      }
    }
  }
});
