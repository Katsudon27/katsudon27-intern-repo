# ✅ Reflection

## How does dependency injection improve maintainability?

- Dependency injection (DI) improves maintainability by decoupling classes from the creation of their dependencies.
- Instead of instantiating services manually, controllers and other components receive them from NestJS’s DI container.
- This makes the code more modular and easier to test.

## What is the purpose of the @Injectable() decorator?

- The `@Injectable()` decorator marks a class as a provider that can participate in NestJS’s DI system.  
- Applying `@Injectable()` ensures that services can be injected into controllers, other services, or modules.

## What are the different types of provider scopes, and when would you use each?

- Singleton:
  - A single shared instance of the provider is used throughout the application.
  - Best for stateless services or global logic such as data repositories.  
- Request:
  - A new instance is created for each incoming request.
  - Useful when a service needs to store request-specific data, such as user authentication state.  
- Transient:
  - A new instance is created every time the provider is injected.
  - Suitable when you need independent instances for different consumers.

## How does NestJS automatically resolve dependencies?

- NestJS uses a dependency injection container.
- When a class is requested, NestJS looks at the constructor parameters, finds the matching providers, and injects them automatically.
- For example, if a controller expects `UsersService` in its constructor, NestJS looks for a registered `UsersService` provider and injects it at runtime.
