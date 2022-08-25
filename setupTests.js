/* eslint-disable @typescript-eslint/no-var-requires */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
require('@testing-library/jest-dom/extend-expect');
const server = require('./src/integration-test/server');

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  server.resetHandlers();
  jest.useFakeTimers();
});

afterEach(() => {
  server.close();
  jest.clearAllMocks();
  jest.resetAllMocks();
  localStorage.clear();
  sessionStorage.clear();
});
