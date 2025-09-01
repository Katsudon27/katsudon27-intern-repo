# Creating REST APIs with NestJS

## Task

- I created a service with simple business logic for managing users and a controller with basic CRUD routes in NestJS.
  - Controller (users.controller.ts):

    ```javascript
    import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
    import { UsersService } from './users.service';

    @Controller('users')
    export class UsersController {
        constructor(private readonly usersService: UsersService) {}

        @Get()
        findAll() {
            return this.usersService.findAll();
        }

        @Get(':id')
        findOne(@Param('id') id: string) {
            return this.usersService.findOne(+id);
        }

        @Post()
        create(@Body('name') name: string) {
            return this.usersService.create(name);
        }

        @Put(':id')
        update(@Param('id') id: string, @Body('name') name: string) {
            return this.usersService.update(+id, name);
        }

        @Delete(':id')
        remove(@Param('id') id: string) {
            return this.usersService.remove(+id);
        }
    }
    ```

  - Service (users.service.ts):

    ```javascript
    import { Injectable } from '@nestjs/common';

    @Injectable()
    export class UsersService {
        private users = [{ id: 1, name: 'Alice' }];

        findAll() {
            return this.users;
        }

        findOne(id: number) {
            return this.users.find(user => user.id === id);
        }

        create(name: string) {
            const newUser = { id: Date.now(), name };
            this.users.push(newUser);
            return newUser;
        }

        update(id: number, name: string) {
            const user = this.findOne(id);
            if (user) user.name = name;
            return user;
        }

        remove(id: number) {
            this.users = this.users.filter(user => user.id !== id);
            return { deleted: true };
        }
    }
    ```

- I tested the endpoints on the localhost URL where the nestJS server was running using Postman. See screenshots below as evidence:
  - Sent a GET request to retrieve list of users
    ![Screenshot of Postman output for GET request](images/GET_all%20users.png)
  - Sent a GET request to retrieve info for user with id "1".
    ![Screenshot of Postman output for GET request](images/GET_specific%20user.png)
  - Sent a POST request to create a new user.
    ![Screenshot of Postman output for POST request](images/POST_new%20user.png)
  - Sent a PUT request to update the name of user with id "1".
    ![Screenshot of Postman output for PUT request](images/POST_new%20user.png)
  - Sent a DELETE request to delete the user with id "1".
    ![Screenshot of Postman output for DELETE request](images/DELETE_delete%20user.png)

## Reflection

### What is the role of a controller in NestJS?

- Handles incoming HTTP requests
- Defines routes and maps them to methods
- Delegates business logic to services

### How should business logic be separated from the controller?

- Business logic should be separated by having controllers to only focus on request/response handling and the services to contain reusable business logic.

### Why is it important to use services instead of handling logic inside controllers?

- Makes code reusable across different controllers
- Improves testability (services can be tested independently)
- Keeps controllers simple and focused

### How does NestJS automatically map request methods (GET, POST, etc.) to handlers?

- Uses decorators like @Get(), @Post(), @Put(), @Delete()
- Maps routes + HTTP methods directly to controller functions
- Example: @Get('users') → mapped to GET /users
