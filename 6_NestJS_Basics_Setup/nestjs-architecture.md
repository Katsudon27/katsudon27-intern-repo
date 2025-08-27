# ✅ Tasks

- I created a simple module with a controller and a service.
- Module code snippet:
```ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

- Controller code snippet:
```ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```

- Service code snippet:
```ts
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
```

# ✅ Reflection 

## What is the purpose of a module in NestJS?

- Organizss related controllers and providers into a single unit.
- Enables separation of concerns and modularity.
- Declares imports, providers, and controllers for a logical grouping.

## How does a controller differ from a provider?

- Controllers handle incoming HTTP requests and return responses.
- Providers contain business logic or reusable services.

## Why is dependency injection useful in NestJS?

- Allows automatic injection of providers into controllers or other providers.
- Eliminates manual instantiation of services.
- Promotes modular, testable, and maintainable code.

## How does NestJS ensure modularity and separation of concerns?

- Uses `@Module()` to group related controllers and providers.
- DI ensures controllers and providers are loosely coupled.
- Each module handles a specific part of the application, thus promoting decoupling of code.

