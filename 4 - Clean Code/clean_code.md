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
function calc(a,b,c){
let r=0; for(let i=0;i<a.length;i++){r+=a[i]*b[i]+c;} return r;}

### Why it is difficult to read
- Poor indentation and spacing.
- Non-descriptive variable names (a, b, c, r).
- Single-line logic makes it hard to follow what the function does.
- Lacks comments or documentation.

## Cleaned-up ver
/**
 * Calculates the sum of element-wise multiplication of two arrays plus a constant.
 */

function calculateSum(arr1, arr2, constant) {
    let total = 0;

    for (let i = 0; i < arr1.length; i++) {
        total += (arr1[i] * arr2[i]) + constant;
    }

    return total;
}

### Improvements made:
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
let a = 100;
function doIt(x, y) {
  return x + y;
}

- Refactored version:
let totalUsers = 100;
function calculateSum(value1, value2) {
    return value1 + value2;
}

- Refactoring made the code self-documenting, easier to follow, and reduced the cognitive load needed to understand what the code is doing.