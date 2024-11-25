import express from 'express'
import { addBook, listBook, updateBook, removeBook, recommendations, favorite,favorites, unfavorite } from '../controller/bookController.js';

const bookRouter = express.Router()

bookRouter.get("/books",listBook)
bookRouter.post("/books",addBook)
bookRouter.put("/books/:id",updateBook)
bookRouter.delete("/books/:id",removeBook)
bookRouter.get("/books/recommendations",recommendations)
bookRouter.put("/books/favorite/:id",favorite)
bookRouter.get('/books/favorite',favorites)
bookRouter.put('/books/unfavorite/:id',unfavorite)

export default bookRouter;