import Validator from '../index';

test('true', () => {
  const v = new Validator();

  const schema = v.string();

  expect(schema.isValid('')).toBeTruthy(); // true

  expect(schema.required()).toBeTruthy();

  expect(schema.isValid('what does the fox say')).toBeTruthy();
  expect(schema.isValid('hexlet')).toBeTruthy();
  expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy();
});

test('false', () => {
  const v = new Validator();

  const schema = v.string();

  expect(schema.isValid('')).toBeTruthy(); // true

  expect(schema.required()).toBeTruthy();

  expect(schema.isValid('what does the fox say')).toBeTruthy();
  expect(schema.isValid('hexlet')).toBeTruthy();


  schema.contains('what').isValid('what does the fox say'); // true
  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid('')).toBeFalsy();
  expect(
    schema.contains('whatthe').isValid('what does the fox say')
  ).toBeFalsy();
});