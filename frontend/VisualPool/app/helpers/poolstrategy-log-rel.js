import Ember from 'ember';

export function poolstrategyLogRel(params/*, hash*/) {
  var rel = params[0];
  if (rel === 0) {
    return "danger";
  } else if (rel === -1) {
    return "";
  } else if (rel === 1) {
    return "success";
  }
}

export default Ember.Helper.helper(poolstrategyLogRel);
