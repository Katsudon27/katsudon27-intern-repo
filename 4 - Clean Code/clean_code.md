# Task #61 (Understanding Clean Code Principles)

## Clean Code Principles 

1. Simplicity – Keep code as simple as possible.
    - Avoid unnecessary complexity or features that aren’t required. Simple code is easier to understand, debug, and maintain.
2. Readability – Code should be easy to understand.
    - Use descriptive variable and function names, proper indentation, and logical organisation.
3. Maintainability – Future developers (including you!) should be able to work with the code easily.
    - Code should be structured so that future developers can easily modify, extend, or debug it without breaking functionality.
4. Consistency – Follow style guides and project conventions.
    - Follow style guides and project conventions consistently across files and modules. This includes naming conventions, formatting, and documentation style.
5. Efficiency – Write performant, optimized code without premature over-engineering.
    - Focus on clean logic first, then improve efficiency when necessary.

## Example of messy code

```

function calc(a,b,c){
let r=0; for(let i=0;i<a.length;i++){r+=a[i]*b[i]+c;} return r;}

```

### Why it is difficult to read

- Poor indentation and spacing.
- Non-descriptive variable names (a, b, c, r).
- Single-line logic makes it hard to follow what the function does.
- Lacks comments or documentation.

## Cleaned-up ver

```
/**
  Calculates the sum of element-wise multiplication of two arrays plus a constant.
 */

function calculateSum(arr1, arr2, constant) {
    let total = 0;

    for (let i = 0; i < arr1.length; i++) {
        total += (arr1[i] * arr2[i]) + constant;
    }

    return total;
}

```

### Improvements made

- Added meaningful function and variable names.
- Broke the logic into multiple lines with proper indentation.
- Added comments to explain the purpose of the function.

---

# Task #62 (Code Formatting & Style Guides)

## Why is code formatting important?

- Consistent code formatting improves readability, reduces misunderstandings, and makes collaboration smoother.
- It ensures all team members follow the same conventions, reducing bugs caused by misinterpreted code.
- Tools like linters and formatters enforce these rules automatically, saving time and preventing style arguments in code reviews.

## What issues did the linter detect?

- It managed to detect issues like missing reference error that occurred when I tried to integrate Prettier such that it would work with Eslint in my development environment.
- It also detected an error whereby the React version was not specified in the configuration settings.
- I managed to resolve it by referring to the official documentation from Prettier and Eslint by adding the missing references and configurations that are required.

## Did formatting the code make it easier to read?

- The linter highlighted several style inconsistencies in my code that I hadn’t noticed before, especially indentation and variable naming issues.
- Running Prettier made the code much easier to read at a glance and ensured consistency across files.
- Using linters and formatters early in development can prevent messy code from accumulating, saving time in code reviews and debugging.

---

# Task #63 (Naming Variables & Functions)

## What makes a good variable or function name?

- A good name clearly describes the purpose or action, so someone reading the code can understand its intent without extra comments.
- Use nouns for variables (e.g., userList, totalPrice) and verbs for functions (e.g., calculateTotal(), fetchUserData()).
- Follow consistent naming conventions (camelCase for JavaScript).

## What issues can arise from poorly named variables?

- Ambiguous names make the code hard to read and understand.
- Can cause bugs if a developer misinterprets the purpose of a variable or function.
- Makes collaboration harder and slower, as teammates need extra effort to figure out what each piece of code does.

## How did refactoring improve code readability?

- Example of poor naming:

```
let a = 100;
function doIt(x, y) {
  return x + y;
}
```

- Refactored version:
```
let totalUsers = 100;
function calculateSum(value1, value2) {
    return value1 + value2;
}

```

- Refactoring made the code self-documenting, easier to follow, and reduced the cognitive load needed to understand what the code is doing.

---

# Task #64 (Writing Small, Focused Functions)

## Why is breaking down functions beneficial?

- It can improve readability of the code because smaller functions.

## How did refactoring improve the structure of the code?

- Example of a long function:
```
function processOrders(orders) {
  let total = 0;
  for (let order of orders) {
    // calculate discount
    if (order.quantity > 10) {
      order.price *= 0.9;
    }
    total += order.price * order.quantity;
    // send invoice
    console.log(`Invoice sent for order ${order.id}`);
  }
  console.log(`Total revenue: ${total}`);
}
```

- Refactored version:
```
function calculateDiscount(order) {
  if (order.quantity > 10) order.price *= 0.9;
}

function sendInvoice(order) {
  console.log(`Invoice sent for order ${order.id}`);
}

function calculateTotalRevenue(orders) {
  let total = 0;
  for (let order of orders) {
    calculateDiscount(order);
    total += order.price * order.quantity;
    sendInvoice(order);
  }
  return total;
}
```

- Improvements made:

  - Each function now has a single responsibility.
  - Code is easier to read and understand.
  - Bugs are easier to trace, since logic is separated.

---

# Task #65 (Writing Small, Focused Functions)

## Research the "Don't Repeat Yourself" (DRY) principle
- The principle means that every piece of knowledge or logic should only exist in one place in your codebase. Duplication will lead to bugs and make it harder to maintain the codebase.

## What were the issues with duplicated code?
- Duplicated code example:
```
function calculateCircleArea(radius) {
  return 3.14 * radius * radius;
}

function calculateCylinderVolume(radius, height) {
  return 3.14 * radius * radius * height;
}
```
- Duplicated code caused unnecessary repetition of the same logic across multiple functions. In this example, the formula for calculating the circle’s area was duplicated in both functions.
- This made the code harder to maintain, since updating one formula would require changing it in several places.


## How did refactoring improve maintainability?
- After refactoring:
```
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

function calculateCylinderVolume(radius, height) {
  return calculateCircleArea(radius) * height;
}
```
- By extracting the duplicated logic into a single function, I made the code more maintainable and easier to extend. 
- Now, if the formula for calculating a circle’s area ever changes, I only need to update it once.
- This improves readability, reduces the chance of bugs, and keeps the codebase clean.

---

# Task #66 (Refactoring Code for Simplicity)

## What made the original code complex?
- Example of complex code:
```javascript
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].price && items[i].quantity) {
      total += items[i].price * items[i].quantity;
    } else if (items[i].price && !items[i].quantity) {
      total += items[i].price;
    } else if (!items[i].price && items[i].quantity) {
      total += 0; // ignore
    } else {
      total += 0; // ignore
    }
  }
  return total;
}
```
- The original code had redundant if-else checks for every combination of price and quantity, making it harder to read and maintain.

## How did refactoring improve it?
- After refactoring:
```javascript
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
}
```
- By using reduce and default values, the function became concise, easier to read, and maintainable. It also handles edge cases more elegantly without extra conditions.

---

# Task #67 (Commenting & Documentation)

## Find an example of poorly commented code and rewrite the comments to be more useful.
- Example of poorly commented code:
```python
def calc(self, wet_thickness, solid_content):
    """
    Performs calculation
    """
    return wet_thickness * (1 - solid_content) * self.density
```
  - The comment here does not provide meaningful context to the code. 
  - It does not explain what the calculation is for and what each parameter represent. 
- Rewriting the comments:
```python
def calc(self, wet_thickness, solid_content):
    """
    Calculates initial solvent mass per unit area.

    Parameters:
        wet_thickness (float): Initial wet coating thickness (m)
        solid_content (float): Fraction of solids in slurry (0-1)

    Returns:
        float: Initial solvent mass per unit area (kg/m²)
    """
    return wet_thickness * (1 - solid_content) * self.density
```
  - The comment now explains the purpose of the function, what each parameter represents, and what the return value is.
  - This would help someone reading the code to understand what this function is for.

## When should you add comments? 
- When the reason behind the code is not obvious.
- When explaining complex algorithms, business rules, or edge cases.
- When documenting public APIs, modules, or functions for other developers.

## When should you avoid comments and instead improve the code?
- Comments should be avoided when the code itself can clearly convey its purpose.
- This includes obvious operations and poorly named variables or functions.
- In the example above, instead of commenting "Performs calculation", rename the function to be self-explanatory (e.g. calculate_initial_solvent_mass).

---

# Task #68 (Handling Errors & Edge Cases)

## What was the issue with the original code?
- Original code:
```javascript
function getFirstCharacter(str) {
    return str[0]; 
}
```
- The issue with this function is that it assumes that the parameter will always be a non-empty string.
- If the parameter is undefined or null, the code will crash or return unexpected results.

## How does handling errors improve reliability?
- Refactored function:
```javascript
function getFirstCharacter(str) {
    // Guard clause: handle invalid input
    if (!str) {
        console.error("Invalid input: string is required.");
        return null; // fail gracefully
    }
    return str[0];
}
```
- The function now fails gracefully by returning a null value to avoid runtime crashes.
- Edge cases are managed, making the function more maintainable and reduces debugging time by logging the error.