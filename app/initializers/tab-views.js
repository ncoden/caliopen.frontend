import TabViews from '../services/tab-views';

export function initialize(container, application) {
  application.register('service:tab-views', TabViews);
}

export default {
  name: 'tab-views',
  initialize: initialize
};

