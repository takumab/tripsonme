import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({

  actions: {
    viewTrip() {
      set(this, 'showModal', true);
    },

    hideTrip() {
      set(this, 'showModal', false);
    }
  }
});
