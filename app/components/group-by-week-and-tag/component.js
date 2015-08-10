import Ember from 'ember';
const { Component, computed, isEmpty } = Ember;

export default Ember.Component.extend({
  items: null,

  weeks: computed('items.@each.{createdAt,tag}', function() {
    let items = this.get('items');
    let tags = items.mapBy('tag').uniq().compact().concat(['']);
    let weeks = [];

    items.forEach(item => {
      let date = startOfWeek(item.get('createdAt'));
      let id = Number(date);
      let tag = item.get('tag') || '';
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
  })
});

function startOfWeek(date) {
  return moment(date).startOf('week').toDate();
}
