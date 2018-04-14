const test = require('ava');
const isBalanced = require('./is-balanced');

test('{{}} is balanced', (t) => {
  const str = '{{}}';

  t.true(isBalanced(str));
});

test('(([{[[{}]]}])) is balanced', (t) => {
  const str = '(([{[[{}]]}]))';

  t.true(isBalanced(str));
});

test('{{[}} is NOT balanced', (t) => {
  const str = '{{[}}';

  t.false(isBalanced(str));
});

test('{{[)}} is NOT balanced', (t) => {
  const str = '{{[)}}';

  t.false(isBalanced(str));
});

test('(([{[[{)}]]}])) is NOT balanced', (t) => {
  const str = '(([{[[{)}]]}]))';

  t.false(isBalanced(str));
});

test('string starting with a closing bracket is NOT balanced', (t) => {
  const str = '}{}()';

  t.false(isBalanced(str));
});

test('string with only opening brackets is NOT balanced', (t) => {
  const str = '({';

  t.false(isBalanced(str));
});

test('empty string is balanced', (t) => {
  const str = '';

  t.true(isBalanced(str));
});
