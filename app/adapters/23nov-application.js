//  ./adapters/application.js

import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api'
});