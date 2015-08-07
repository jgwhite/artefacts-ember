import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',

  submit(event) {
    event.preventDefault();

    let fields = this.$().serializeArray();
    let payload = fieldsAsObject(fields);

    this.sendAction('on-submit', payload);
  }
});

function fieldsAsObject(fields) {
  return fields.reduce((result, { name, value }) => {
    result[name] = value;
    return result;
  }, {});
}
