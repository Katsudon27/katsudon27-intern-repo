# Reflection

## Find or write code examples that demonstrate the following code smells

```javascript
// Commented-out code
// function oldLogin() {
//     // legacy login method
// }

class User {
    constructor(user_name, age, emailAddress) { // Inconsistent Naming
        this.user_name = user_name;
        this.age = age;
        this.emailAddress = emailAddress;
        this.loggedIn = false;
        this.orders = [];   // too many responsibilities (God Object)
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
            if(this.loggedIn) {  // Deeply nested conditional
                console.log("Minor and logged in");
            } else {
                console.log("Minor but not logged in");
            }
        } else {
            console.log("Adult user");
        }

        if(this.loggedIn) {
            console.log("Welcome " + this.user_name);
        }
        // duplicate logic
        console.log("Welcome " + this.user_name);
    }

    // Unrelated order-processing logic inside User (God Object)
    addOrder(order) {
        this.orders.push(order);
    }
}

```

## Refactor the code to eliminate these code smells

```javascript
const MIN_AGE = 18;
const MAX_AGE = 100;
const DEFAULT_PASSWORD = "1234";

class User {
    constructor(name, age, email) { // consistent naming
        this.name = name;
        this.age = age;
        this.email = email;
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
        if (this.age < MAX_AGE) {
            this.age += 1;
        }
    }

    processUser() {
        this._displayAgeCategory();
        this._greetUser();
    }

    _displayAgeCategory() {
        console.log(this.age < MIN_AGE ? "Minor user" : "Adult user"); // flattened conditional
    }

    _greetUser() {
        if (this.loggedIn) {
            console.log(`Welcome ${this.name}`);
        }
    }
}

// Extracting order logic into a separate class
class OrderManager {
    constructor() {
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }
}
```

## What code smells did you find in your code?

- Magic numbers and strings: "1234", 18, 100.
- Long function: processUser was doing multiple things.
- Duplicate logic: Greeting message appeared more than once.
- God Object: User class was responsible for both user data and order management.
- Deeply nested conditionals: Nested if inside processUser.
- Commented-out code: Legacy login method left in place.
- Inconsistent naming: Mixed styles (user_name, emailAddress).

## How did refactoring improve the readability and maintainability of the code?

- Extracted constants for clarity and easier updates.
- Broke long functions into smaller, single-purpose methods.
- Removed duplicate logic by consolidating greetings into _greetUser().
- Split responsibilities by moving order management into a new OrderManager class.
- Simplified nested conditionals into more readable forms.
- Removed commented-out code to reduce clutter.
- Used consistent naming conventions (name, email) to avoid confusion.

## How can avoiding code smells make future debugging easier?

- Clear and modular code helps identify where errors occur quickly.
- Easier to test individual functions and classes in isolation.
- Reduces the risk of introducing new bugs when updating logic.
- Developers can understand and extend the codebase faster without needing to untangle messy logic.

## Personal example
- In a previous project, I built a small inventory management system with my friends where we put everything (item info, database updates, notifications) inside one large Inventory class. It quickly became overwhelming whenever we tried to change the source code, we risked breaking some other unrelated features. 
- After refactoring into smaller, single-responsibility classes like Item and NotificationService, debugging became significantly easier. For example, I once had a bug in the database not being updated correctly, and because the logic was isolated, I only needed to check the corresponding class instead of digging through hundreds of lines in a bloated Inventory class.
