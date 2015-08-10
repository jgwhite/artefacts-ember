import Ember from 'ember';
import moment from 'moment';

const parsers = {
  date(input) {
    return moment(input).toDate();
  }
};

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
    let [key,type] = name.split(':');

    if (type) {
      value = parsers[type](value);
    }

    result[key] = value;

    return result;
  }, {});
}
