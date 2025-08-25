# ✅ Reflection (nestjs-intro.md)

## What are the key differences between NestJS and Express.js?

- NestJS:
  - Opinionated and enforces modular architecture.
  - Has a strong TypeScript integration.
  - Designed for large-scale, maintainable apps.
- Express.js:
  - More minimal and flexible but developer has to decide on project structure.
  - Great for small APIs or prototypes.

## Why does NestJS use decorators extensively?

- To add metadata in a clear, declarative way such as defining routes and marking services.
- For example, **@Controller()** defines a controller class.

## How does NestJS handle dependency injection?

- By automatically injecting services/providers where needed through a built-in IoC container.

## What benefits does modular architecture provide in a large-scale app?

- Better separation of concerns
- Improved reusability and testability across teams.
