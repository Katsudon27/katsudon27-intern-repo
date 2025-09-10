# 📌 Introduction to Unit Testing with Jest

## Task

- I created a utility function that adds two numbers:
```js
// utils/add.js
function add(a, b) {
  return a + b;
}
module.exports = add;
```
- I created a test for the utility function:
```js
// utils/add.test.js
const add = require('./add');

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds negative numbers correctly', () => {
  expect(add(-2, -3)).toBe(-5);
});
```
- I ran the test and verified that it passes:
![Screenshot of successful test](images/jest_utility_test.png)
- I pushed the test to the GitHub repo of my test application:
https://github.com/Katsudon27/focusbear_test_project/commit/1f3ccabb7c16c1d8366e281c9be0f3be04d6fb58

## Reflections

### Why is automated testing important in software development?

- Ensures new changes don’t break existing features (prevents regressions).
- Increases confidence when deploying updates.
- Saves time by catching bugs early.
- Improves code maintainability and reliability.

### What did you find challenging when writing your first Jest test?

- Understanding how to structure the test syntax (test, expect, matchers).
- Remembering how Jest automatically finds test files.
- For example, when I first installed Jest in my repo, I had to configure package.json so that Jest targets both js and ts files.
