# Books-Collection

## Overview

This project demonstrates the development of a RESTful API for managing a Books Collection using **Express.js** and **Mongoose** for database integration. The API provides full CRUD functionality, allowing users to add new books, retrieve all books, update book details, and delete books by ID, while ensuring proper data validation for fields like title, author, ISBN, and published year.

Additionally, a custom endpoint enhances the API, offering features like random book recommendations or marking books as favorites. The database is integrated using **MongoDB**, ensuring reliable and persistent data storage. The project is hosted online for public access, with a clean codebase and a detailed README.md for setup and usage instructions.

## Table of Contents

- [Project Setup](#project-setup)
- [Routes](#routes)
  - [/books](#books)
  - [/books:id](#book-with-ID)
  - [/books/recommendations](#recommendations)
  - [/books/favorite:id](#favorite)

## Project Setup

### Steps to Set Up:

**1. Clone the repository:**

    `git clone https://github.com/MintesinotN/Books-Collection.git`

**2. Navigate into the project directory:**

    `cd Books-Collection`

**3. Ensure you have Node.js installed on your machine. You can check by running:**

`node -v`

**3. Ensure you have Node.js installed on your machine. You can check by running:**

`node -v`

**4. installing the packages**

`npm install`

**5. Command to run the server**

`npm run dev`

## Routes

### /books

This route works for both of the get and post request. when we use the **get** request it returns all of the books data stored in the database and by the **post** request we can add a new book to the database. At this time the because of the validation by the database model the Title, Autor and Isbn should be a string and the Published_year should be a number. and the Title, Autor and Published_year are required fields.

### post request

on post request the input data form:

    ```        
        {
            "Title": "Eloquent JavaScript, Third Edition",
            "Autor": "Marijn Haverbeke",
            "Isbn": "9781593279509",
            "Published_year": 2018,
        }
    ```
    send the above to url below if you are working locally

    `http://localhost:4000/books`

### get request

if you are working locally use the url below to to get all of the books stored in the database.

    `http://localhost:4000/books`

### /books:id

Using the above route it is possible to update the book with the id using the **put** request and delete from the database using the **delete** request.

### put request

Take the sample id: **6744d1853dae11798f63317e**

Then update the information on that book using the same insertion method of data for the post request but now use the put request.

### delete request

Take the sample id: **6744d1853dae11798f63317e**

Then using this id delete the book with that id.

### /books/recommendations

This route will recommend the book randomly, if you are working locally take the url below with **get** request.

    `http://localhost:4000/books/recommendations`

### /books/favorite/:id

To mark the book as a favorite you can the url that will update the favorite to **"favorite" : true** in the **put** request.

    `http://localhost:4000/books/favorite/id`

Take the sample id: **6744e2353dae11798f633183**

### /books/unfavorite

To unmark the book from the favorite use the url below that will update the favorite to **"favorite" : false** in the **put** request.

    `http://localhost:4000/books/unfavorite/id`

Take the sample id: **6744e2353dae11798f633183**

### /books/favorite

To get the favorite list you can use the url below in the **get** request.

    `http://localhost:4000/books/favorite`