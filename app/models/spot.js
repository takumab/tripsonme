import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  city: DS.attr(),
  country: DS.attr(),
  image: DS.attr(),
  info: DS.attr(),

  cityAndCoutnry: computed('city', 'country', function() {
    return `${this.get('city')}, ${this.get('country')}`
  })
});
