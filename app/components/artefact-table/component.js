import Ember from 'ember';
import moment from 'moment';
const { Component, computed, isEmpty } = Ember;
const UNTAGGED = 'untagged';

export default Component.extend({
  tagName: 'artefact-table',
  artefacts: computed(() => []),

  tags: computed('artefacts.@each.tag', function() {
    let artefacts = this.get('artefacts');

    return artefacts
      .mapBy('tag')
      .uniq()
      .reject(isEmpty)
      .sort()
      .concat([UNTAGGED]);
  }),

  weeks: computed('artefacts.@each.{createdAt,tag}', 'tags', function() {
    let artefacts = this.get('artefacts');
    let tags = this.get('tags');
    let weeks = [];

    artefacts.forEach(item => {
      let date = startOfWeek(item.get('createdAt'));
      let id = Number(date);
      let tag = item.get('tag') || UNTAGGED;
      let week = weeks.findBy('id', id);

      if (!week) {
        week = {
          id,
          date,
          tags: tags.map(name => makeTagObj(name))
        };
        weeks.push(week);
      }

      let tagObj = week.tags.findBy('id', tag);

      tagObj.artefacts.push(item);
    });

    return weeks.sort((a, b) => b.id - a.id);
  }),

  colWidth: computed('tags.length', function() {
    let n = this.get('tags.length');
    return `${100 / n}%`;
  }),

  actions: {
    removeArtefact(artefact) {
      this.sendAction('on-remove-artefact', artefact);
    }
  }
});

function startOfWeek(date) {
  return moment(date).startOf('week').toDate();
}

function makeTagObj(tag) {
  return {
    id: tag,
    name: tag,
    artefacts: []
  };
}
