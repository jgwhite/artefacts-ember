import { mathDivide } from '../../../helpers/math-divide';
import { module, test } from 'qunit';

module('Unit | Helper | math divide');

test('it works', function(assert) {
  assert.equal(mathDivide([42, 2]), 21);
});
