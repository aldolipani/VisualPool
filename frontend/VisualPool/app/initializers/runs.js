export function initialize(application) {
  var lRuns = [];

  application.register('lRuns:main', lRuns, {instantiate: false});
  application.inject('component', 'lRuns', 'lRuns:main');
}

export default {
  name: 'lRuns',
  initialize
};
