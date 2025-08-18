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