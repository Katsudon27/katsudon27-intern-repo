# Reflection
## Find or write code examples that demonstrate the following code smells:
```javascript
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.loggedIn = false;
    }

    login(password) {
        if(password === "1234") { // Magic String
            this.loggedIn = true;
        }
    }

    celebrateBirthday() {
        if(this.age < 100) { // Magic Number
            this.age += 1;
        }
    }

    processUser() {
        // Very long function doing multiple things
        if(this.age < 18) {
            console.log("Minor user");
        } else {
            console.log("Adult user");
        }
        if(this.loggedIn) {
            console.log("Welcome " + this.name);
        }
        // duplicate logic
        console.log("Welcome " + this.name);
    }
}

```

## Refactor the code to eliminate these code smells.
```javascript
const MIN_AGE = 18;
const MAX_AGE = 100;
const DEFAULT_PASSWORD = "1234";

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.loggedIn = false;
    }

    login(password) {
        if (this._isValidPassword(password)) {
            this.loggedIn = true;
        }
    }

    _isValidPassword(password) {
        return password === DEFAULT_PASSWORD;
    }

    celebrateBirthday() {
        if(this.age < MAX_AGE) {
            this.age += 1;
        }
    }

    processUser() {
        this._displayAgeCategory();
        this._greetUser();
    }

    _displayAgeCategory() {
        if(this.age < MIN_AGE) {
            console.log("Minor user");
        } else {
            console.log("Adult user");
        }
    }

    _greetUser() {
        if(this.loggedIn) {
            console.log(`Welcome ${this.name}`);
        }
    }
```


## What code smells did you find in your code?
- Magic numbers and strings ("1234", 18, 100).
- Long function processUser doing multiple things.
- Duplicate logic for greeting the user.

## How did refactoring improve the readability and maintainability of the code?
- Extracted constants for clarity and easier updates.
- Broke long functions into smaller, single-purpose functions.
- Removed duplicate logic by moving all greeting-related logic into _greetUser().
- Improved structure makes future changes easier and safer.

## How can avoiding code smells make future debugging easier?
- Clear and modular code helps identify where errors occur quickly.
- Easier to test individual functions.
- Reduces the risk of introducing new bugs when updating logic.