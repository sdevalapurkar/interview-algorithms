const capitalize = require('./capitalize');

test('capitalize function is defined', () => {
  expect(capitalize).toBeDefined();
});

test('returns the proper capitalized string', () => {
  expect(capitalize("hey man what's up")).toBe("Hey Man What's Up");
});

test('works with a string that starts with a space', () => {
  expect(capitalize(' hey man How you doinnnn, look it works!'))
    .toBe(' Hey Man How You Doinnnn, Look It Works!');
});

test('it works with an empty string', () => {
  expect(capitalize('')).toBe('');
});
