# ✅ Reflection

## How does dependency injection improve maintainability?

- Dependency injection (DI) improves maintainability by decoupling classes from the creation of their dependencies.
- Instead of instantiating services manually, controllers and other components receive them from NestJS’s DI container.
- This makes the code more modular and easier to test.
- Personal example: While working on the Focus Bear onboarding repo, I created a UsersService to manage user-related logic like returning a list of users. Initially, I thought about creating a new instance of the service in each controller, but that quickly became repetitive and error-prone. 
- Using DI, I simply applied @Injectable() to the service and let NestJS inject it into the UsersController automatically. This allowed me to change the internal logic of UsersService without touching the controller code at all.

## What is the purpose of the @Injectable() decorator?

- The `@Injectable()` decorator marks a class as a provider that can participate in NestJS’s DI system.  
- Applying `@Injectable()` ensures that services can be injected into controllers, other services, or modules.
- Example from my test project:
  - users.service.ts
  ```typescript
  @Injectable()
  export class UsersService {
    constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
    ) {}

    // Create a new user
    createUser(name: string, email: string){
      const user = this.userRepository.create({ name, email });
      return this.userRepository.save(user);
    }
  }
  ```
  - users.controller.ts
  ```typescript
  @Controller('users')
  @UseInterceptors(LoggingInterceptor)
  export class UsersController {
      constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() CreateUserDto: CreateUserDto) {
      this.usersService.createUser(CreateUserDto.name, CreateUserDto.email);
      return {
        message: 'User created successfully',
        data: CreateUserDto,
      };
    }
  }
  ```

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
- Using this feature made it easy to swap out UsersService for a mock implementation during testing, greatly simplifying unit tests for the controller.
