import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  classNames: ['sticky-element'],

  didInsertElement() {
    this.oy = this.$().offset().top;
    this.listener = this.onScroll.bind(this);
    this.update = this.update.bind(this);

    window.addEventListener('scroll', this.listener);
    window.addEventListener('wheel', this.listener);
  },

  willDestroyElement() {
    window.removeEventListener('scroll', this.listener);
    window.removeEventListener('wheel', this.listener);
  },

  onScroll() {
    this.sy = window.scrollY;
    this.requestTick();
  },

  requestTick() {
    if (this.isTicking || this.isDestroying || this.isDestroyed) {
      return;
    }

    this.isTicking = true;

    window.requestAnimationFrame(this.update);
  },

  update() {
    let dy = Math.max(0, this.sy - this.oy);

    this.element.style.transform = `translateY(${dy}px)`;

    this.isTicking = false;
  }
});
