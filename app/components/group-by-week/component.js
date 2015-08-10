import Ember from 'ember';
import moment from 'moment';
const { Component, computed } = Ember;

export default Component.extend({
  weeks: computed('items.@each.createdAt', function() {
    let result = [];
    let items = this.get('items');

    items.forEach(item => {
      let date = startOfWeek(item.get('createdAt'));
      let id = Number(date);
      let week = result.findBy('id', id);

      if (!week) {
        week = {
          id: id,
          date: date,
          items: []
        };
        result.push(week);
      }

      week.items.push(item);
    });

    return result;
  })
});

function startOfWeek(date) {
  return moment(date).startOf('week').toDate();
}
