/* eslint-disable no-console */
const generatePyramid = require('./pyramid');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('generatePyramid function is defined', () => {
  expect(generatePyramid).toBeDefined();
});

test('outputs the right pyramid when called with n = 1', () => {
  generatePyramid(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('outputs the right pyramid when called with n = 2', () => {
  generatePyramid(2);
  expect(console.log.mock.calls[0][0]).toEqual(' # ');
  expect(console.log.mock.calls[1][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('outputs the right pyramid when called with n = 3', () => {
  generatePyramid(3);
  expect(console.log.mock.calls[0][0]).toEqual('  #  ');
  expect(console.log.mock.calls[1][0]).toEqual(' ### ');
  expect(console.log.mock.calls[2][0]).toEqual('#####');
  expect(console.log.mock.calls.length).toEqual(3);
});
