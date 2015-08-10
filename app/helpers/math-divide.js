import Ember from 'ember';

export function mathDivide([a, b]) {
  return Number(a) / Number(b);
}

export default Ember.Helper.helper(mathDivide);
