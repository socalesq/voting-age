// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { checkVotingAge } = require('./voting-age');

test('should return true when age is 18', () => {
  expect(checkVotingAge(18)).toBe(true);
});

test('should return true when age is 19', () => {
  expect(checkVotingAge(19)).toBe(true);
});

test('should return false when age is 17', () => {
  expect(checkVotingAge(17)).toBe(false);
});

test('should return false when age is 0', () => {
  expect(checkVotingAge(0)).toBe(false);
});

test('should return true when age is 21', () => {
  expect(checkVotingAge(21)).toBe(true);
});

test('should return false when age is 16', () => {
  expect(checkVotingAge(16)).toBe(false);
});