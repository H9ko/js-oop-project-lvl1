import Validator from '../index';

test('string true', () => {
  const v = new Validator();

  const schema = v.string();

  expect(schema.isValid('')).toBeTruthy(); // true

  expect(schema.required()).toBeTruthy();

  expect(schema.isValid('what does the fox say')).toBeTruthy();
  expect(schema.isValid('hexlet')).toBeTruthy();
  expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy();
});

test('string false', () => {
  const v = new Validator();

  const schema = v.string();
  schema.required();
  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid('')).toBeFalsy();
  expect(
    schema.contains('whatthe').isValid('what does the fox say')
  ).toBeFalsy();
});

test('number', () => {
  const v = new Validator();

  const schema = v.number();

  expect(schema.isValid(null)).toBeTruthy(); // true

  schema.required();
  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid(7)).toBeTruthy();
  expect(schema.positive().isValid(10)).toBeTruthy();

  schema.range(-5, 5);

  expect(schema.isValid(-3)).toBeFalsy();
  expect(schema.isValid(5)).toBeTruthy();
});

test('array', () => {
  const v = new Validator();

  const schema = v.array();

  expect(schema.isValid(null)).toBeTruthy(); // в задании falsy

  schema.required();
  expect(schema.isValid([])).toBeTruthy();
  expect(schema.isValid(['hexlet'])).toBeTruthy();

  schema.sizeof(2);

  expect(schema.isValid(['hexlet'])).toBeFalsy();
  expect(schema.isValid(['hexlet', 'code-basics'])).toBeTruthy();
});
