---
title: 'Getting Started with NestJS & SequilizeJS'
date: '2019-09-07'
status: published
image: '/feature-image/nestjs-sequelize-feature-image.jpeg'
description: 'Coming from Laravel, which has a myriad of built-in features I started to resent shifting to NodeJS. Setting up error handling, logging, dependency injection, etc. was not what I had in mind. Thankfully I found NestJS, with its out-of-the-box architecture and great documentation I started feeling at home again.'
tags:
  - nestjs
  - sequelizejs
  - nodejs
  - typescript
categories:
  - blog-post
---

## Preface

> Coming from _Laravel_, which has a myriad of built-in features I started to resent shifting to NodeJS. Setting up error handling, logging, dependency injection, etc. was not what I had in mind. Thankfully I found NestJS, with its out-of-the-box architecture and great documentation I started feeling at home again.

SequelizeJS is an ORM that offers connectivity to relational databases like MySQL, PostgreSQL, and MSSQL. For this article, I’m going to use MySQL hosted on [RemoteMySQL](https://remotemysql.com/), but you can use any relational database you like.

## Getting Started

Assuming you have a nest project ready to go. We’ll start by installing the following dependencies.

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"shell","mime":"text/x-sh","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"fileName":"npm install --save sequelize sequelize-typescript mysql2<br>2npm install --save-dev @types/sequelizeShell","hasCustomCSS":false,"customCSS":"","language":"Shell","modeName":"shell"}">npm install --save sequelize sequelize-typescript mysql2
npm install --save-dev @types/sequelize
```

</div>First, we’ll pass the connection details to SequelizeJS. We can do this by creating a database module and provider.

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"shell","mime":"text/x-sh","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"hasCustomCSS":false,"customCSS":"","language":"Shell","modeName":"shell"}">nest generate module database
nest generate provider database/database.providers
```

</div>This is where we will add our entity models to SequelizeJS. I’m adding models right now (even though they are created yet), but you can do this later.

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"javascript","mime":"application/javascript","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"hasCustomCSS":false,"customCSS":"","language":"JavaScript","modeName":"js"}">import { Module } from "@nestjs/common"
import { databaseProviders } from "./database.providers"
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
```

</div>I have imported and added the *user* model to the *`addModels`* function. Now export your database provider so it can be consumed with any module that needs to access the database through SequelizeJS.

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"javascript","mime":"application/javascript","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"hasCustomCSS":false,"customCSS":"","language":"JavaScript","modeName":"js"}">import { User } from "./user.entity"
import { USER_REPOSITORY } from "../utils/constants"
export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
]
```

## </div>**User Entity Model**

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"javascript","mime":"application/javascript","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"hasCustomCSS":false,"customCSS":"","language":"JavaScript","modeName":"js"}">import { Injectable, Inject } from "@nestjs/common"
import { USER_REPOSITORY } from "../utils/constants"
import { User } from "./user.entity"
import { CreateUserDto } from "./dto/index"
@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
  ) {}
  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll<User>()
  }
  async createUser(createUser: CreateUserDto): Promise<User> {
    return await this.userRepository.create<User>(createUser)
  }
}
```

</div>I’m not going to explain how the code above populates the database table and its attributes. If you’re interested in learning more about SequelizeJS, you can look [here](http://docs.sequelizejs.com/).

Next, we’ll create _`user.provider.ts`_ which will be used to export the User model so it can be used in different _services_.

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"javascript","mime":"application/javascript","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"hasCustomCSS":false,"customCSS":"","language":"JavaScript","modeName":"js"}">import { User } from "./user.entity"
import { USER_REPOSITORY } from "../utils/constants"
export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
]
```

</div>The *`USER_REPOSITORY`* is stored in a const variable, in a separate file, so it can be used anywhere without being subject to human error.

At this point, we’re done with our database and SequelizeJS configuration. From now on it’s just a matter of importing database and its models and using them 😀.

## Onwards with the Code

Let’s move on and create our user _module, controller and service_ with the following command.

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"shell","mime":"text/x-sh","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"hasCustomCSS":false,"customCSS":"","language":"Shell","modeName":"shell"}">nest generate module user
nest generate controller user
nest generate service user
```

</div>These are the files responsible for entertaining recurring database requests. But first we’ll create a Data Transfer Object (DTO), this is especially useful for validating *body* of the incoming HTTP request or building API documentation with swagger, etc.

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"javascript","mime":"application/javascript","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"hasCustomCSS":false,"customCSS":"","language":"JavaScript","modeName":"js"}">export class CreateUserDto {
  readonly name: string
  readonly age: number
  readonly email: string
}
```

## </div>User Module

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"javascript","mime":"application/javascript","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"languageLabel":"no","hasCustomCSS":false,"customCSS":"","language":"JavaScript","modeName":"js"}">import { Module } from "@nestjs/common"
import { UserService } from "./user.service"
import { UserController } from "./user.controller"
import { DatabaseModule } from "../database/database.module"
import { userProviders } from "./user.providers"
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
```

</div>The above code is consolidating all the User code (controller, service, model) into one place, the *user module* so it can be exported to the *app module*.

Note that the user _controller_ and _service_ have been generated but are empty right at this step. You can opt to populate this file later on.

## User Service

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"javascript","mime":"application/javascript","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"hasCustomCSS":false,"customCSS":"","language":"JavaScript","modeName":"js"}">import { Injectable, Inject } from "@nestjs/common"
import { USER_REPOSITORY } from "../utils/constants"
import { User } from "./user.entity"
import { CreateUserDto } from "./dto/index"
@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
  ) {}
  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll<User>()
  }
  async createUser(createUser: CreateUserDto): Promise<User> {
    return await this.userRepository.create<User>(createUser)
  }
}
```

</div>Unlike *user service* which uses the *“Injectable”* decorator, the *user provider* we created to use the *User Model* is not a part of NestJS, therefore has to be injected manually.

We do this inside the service’s _constructor_ method using the _“Inject”_ decorator.

## User Controller

<div class="wp-block-codemirror-blocks-code-block code-block">```
<pre class="CodeMirror" data-setting="{"mode":"javascript","mime":"application/javascript","theme":"material","lineNumbers":false,"styleActiveLine":false,"lineWrapping":false,"readOnly":true,"showPanel":false,"hasCustomCSS":false,"customCSS":"","language":"JavaScript","modeName":"js"}">import { Controller, Get, Post, Body } from "@nestjs/common"
import { UserService } from "./user.service"
import { User } from "./user.entity"
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  public async getUsers(): Promise<User[]> {
    return this.userService.getAllUsers()
  }
  @Post()
  public async createUser(@Body() body): Promise<User> {
    return this.userService.createUser(body)
  }
}
```

</div>The last step is to inject the *user service* in our *user controller*. The controller exposes our code base to externally accessible API endpoints.

## Folder Structure

<div class='wp-block-image'>
  <figure class='alignleft size-full is-resized'>
    ![](http://hzburki.com/wp-content/uploads/2022/08/1_vaJB14wJUGp4QGyoTDhc2A.png)
  </figure>
</div>
- - - - - -

If you’re curious, this is how my folder structure looks like.

The database connection details are in the _database_ folder, easy to maintain and reuse anywhere in the app.

The bulk of the files are in the _user_ folder. You can ignore the _.spec_ files as they are used to host tests that are out of the scope of this article.

The _dto_ folder holds “data transfer objects” for each request. The _index_ file is used to export all **_dto-_**s.

<div aria-hidden='true' class='wp-block-spacer' style='height:27px'></div>- - - -
- -
