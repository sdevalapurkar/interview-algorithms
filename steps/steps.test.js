/* eslint-disable no-console */
const generateSteps = require('./steps');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('generateSteps function is defined', () => {
  expect(generateSteps).toBeDefined();
});

test('outputs the right steps when called with n = 1', () => {
  generateSteps(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('outputs the right steps when called with n = 2', () => {
  generateSteps(2);
  expect(console.log.mock.calls[0][0]).toEqual('# ');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('outputs the right steps when called with n = 8', () => {
  generateSteps(8);
  expect(console.log.mock.calls[0][0]).toEqual('#       ');
  expect(console.log.mock.calls[1][0]).toEqual('##      ');
  expect(console.log.mock.calls[2][0]).toEqual('###     ');
  expect(console.log.mock.calls[3][0]).toEqual('####    ');
  expect(console.log.mock.calls[4][0]).toEqual('#####   ');
  expect(console.log.mock.calls[5][0]).toEqual('######  ');
  expect(console.log.mock.calls[6][0]).toEqual('####### ');
  expect(console.log.mock.calls[7][0]).toEqual('########');
  expect(console.log.mock.calls.length).toEqual(8);
});
