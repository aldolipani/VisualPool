import Ember from "ember";

export function initialize(application) {
  let lRuns = Ember.A();

  application.register('lRuns:main', lRuns, {instantiate: false});
  application.inject('component', 'lRuns', 'lRuns:main');
}

export default {
  name: 'lRuns',
  initialize
};
