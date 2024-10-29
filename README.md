# COMP229 – Web Application Development**

# Assignment 2

# Portfolio Application – Node.js, Express REST APIs & MongoDB

> Due Week #8, Saturday 27th October @ 11:59 pm
>
> Portfolio – Node.js, Express REST APIs & MongoDB **Maximum Mark: 100**
>
> **Overview**: Create the Node.js Express exports REST APIs that
> interacts with MongoDB Database using Mongoose ODM for your Portfolio
> application. (Note: The Front-end of the application is already
> created in Assignment1).

# Instructions :

> The Portfolio Application:

1.  Using MongoDB database, create:**(25 Marks):**

    1.  A database by name Skeleton**.**

    2.  Create the following collections with their respective property.
        (5 Marks: Functionality).


1.  **contacts**

> firstname: string
>
> lastname: string
>
> email: string

1.  **users**

> name: string
>
> email: string
>
> password: string
>
> created: Date
>
> updated: Date

1.  Obtain your connection string ( url or uri)

2.  Provide the screen snapshot of your MongoDB database showing the
    above steps from 1a – c.

<!-- -->

1.  Configure the Backend of your portfolio Application by creating the
    server.js file in the root folder for your server and a server
    folder or backend folder in the root folder for all your backend
    code.

    1.  Update the server.js file i.e the server with code to display
        the message shown in the snapshot below when you run the app and
        provide a screen snapshot of it running in the browser as
        follows:

> <img src="media/image1.png" style="width:4.32831in;height:1.06076in" />

1.  Create the web server after creating the Express web server next:
    **(30 Marks)**

    1.  Add the configuration for the MongoDB database.

    2.  Create the contact and user model with Mongoose.

    3.  Write the controller for the contact and user.

    4.  Define the routes for handling all CRUD operations for the
        contacts and users api.

> Below is an overview of the REST APIs that will be exported:
>
> **contacts**

| **Methods** | **Urls**         | **Actions**          |
|-------------|------------------|----------------------|
| GET         | api/contacts     | get all contacts     |
| GET         | api/contacts/:id | get contacts by id   |
| POST        | api/contacts     | add new contact      |
| PUT         | api/contacts/:id | update contact by id |
| DELETE      | api/contacts/:id | remove contact by id |
| DELETE      | api/contacts     | remove all contacts  |

> **Users**

| **Methods** | **Urls**      | **Actions**       |
|-------------|---------------|-------------------|
| GET         | api/users     | get all users     |
| GET         | api/users/:id | get users by id   |
| POST        | api/users     | add new user      |
| PUT         | api/users/:id | update user by id |
| DELETE      | api/users/:id | remove user by id |
| DELETE      | api/users     | remove all users  |

> <img src="media/image2.png" style="width:7.33333in;height:4.19236in" />

1.  a\) Test the REST APIs using Postman, Thunder client or any tool you
    are familiar with. e.t.c.

b\) Provide the screen snapshot of the test. **(20 Marks)**
