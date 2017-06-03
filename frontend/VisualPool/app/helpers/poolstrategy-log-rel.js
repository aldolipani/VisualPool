import Ember from 'ember';

export function poolstrategyLogRel(params/*, hash*/) {
  var rel = params[0];
  if (rel === 0) {
    return "non_relevant";
  } else if (rel === -1) {
    return "unknown";
  } else if (rel === 1) {
    return "relevant";
  }
}

export default Ember.Helper.helper(poolstrategyLogRel);
