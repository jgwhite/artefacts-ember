import Ember from 'ember';
const { $, run } = Ember;

export default Ember.Component.extend({
  didInsertElement() {
    this._listener = this.updatePosition.bind(this);
    $(window).on('scroll', this._listener);

    this._oy = this.$().offset().top;
  },

  willDestroyElement() {
    $(window).off('scroll', this._listener);
  },

  updatePosition() {
    let sy = $(window).scrollTop();
    let dy = Math.max(0, sy - this._oy);

    this.$().css({
      transform: `translateY(${dy}px)`
    });
  }
});
