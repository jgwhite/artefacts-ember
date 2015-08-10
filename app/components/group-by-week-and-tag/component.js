import Ember from 'ember';
import moment from 'moment';
const { Component, computed } = Ember;
const UNTAGGED = 'untagged';

export default Component.extend({
  tagName: '',
  items: null,

  tags: computed('items.@each.tag', function() {
    let items = this.get('items');

    return items.mapBy('tag').uniq().compact().concat([UNTAGGED]);
  }),

  weeks: computed('items.@each.{createdAt,tag}', 'tags', function() {
    let items = this.get('items');
    let tags = this.get('tags');
    let weeks = [];

    items.forEach(item => {
      let date = startOfWeek(item.get('createdAt'));
      let id = Number(date);
      let tag = item.get('tag') || UNTAGGED;
      let week = weeks.findBy('id', id);

      if (!week) {
        week = {
          id,
          date,
          tags: tags.map(name => ({ name, items: [] }))
        };
        weeks.push(week);
      }

      let tagObj = week.tags.findBy('name', tag);

      tagObj.items.push(item);
    });

    return weeks.sort((a, b) => b.id - a.id);
  }),

  colWidth: computed('tags.length', function() {
    let n = this.get('tags.length');
    return `${100 / n}%`;
  })
});

function startOfWeek(date) {
  return moment(date).startOf('week').toDate();
}
