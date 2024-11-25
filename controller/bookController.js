import bookModel from "../models/bookModel.js";

const listBook = async(req,res)=>{
    
    try{
        const books = await bookModel.find({});
        res.json({success:true,data:books})
    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}
const addBook = async(req,res)=>{

    const book = new bookModel({
        Title: req.body.Title,
        Autor: req.body.Autor,
        Isbn: req.body.Isbn,
        Published_year: req.body.Published_year,
        favorite: req.body.favorite
    })

    try{
        await book.save();
        res.json({success:true, message:"Book Added"})
    } catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }

}

const updateBook = async (req, res) => {
  const bookId = req.params.id;

  try {
      const updatedBook = await bookModel.findByIdAndUpdate(
          bookId, 
          req.body, 
          { new: true, runValidators: true }
      );

      if (!updatedBook) {
          return res.status(404).json({ message: 'Book not found' });
      }

      res.status(200).json({ message: `Book ID ${bookId} updated successfully`, book: updatedBook });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating book', error: error.message });
  }
};

const removeBook = async(req,res)=>{
    const bookId = req.params.id;
  
    try {
      const deletedBook = await bookModel.findByIdAndDelete(bookId);
  
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(200).json({ message: `Book with ID ${bookId} deleted successfully`, book: deletedBook });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting book', error: error.message });
    }
  }

const recommendations = async(req,res)=>{
    try {
      const count = await bookModel.countDocuments(); // Get total number of books
      if (count === 0) {
        return res.status(404).json({ success: false, message: "No books found" });
      }
  
      const randomIndex = Math.floor(Math.random() * count); // Generate a random index
      const randomBook = await bookModel.findOne().skip(randomIndex); // Fetch the random book
  
      res.json({ success: true, data: randomBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  const favorite = async (req, res) => {
    try {
      const bookId = req.params.id; // Get the book ID from request params
      
      // Find the book by its ID
      const book = await bookModel.findById(bookId);
  
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      // Unmark the book as favorite
      book.favorite = true;
      await book.save(); // Save the updated book
  
      res.status(200).json({ message: `Book ID ${bookId} marked as favorite`, book });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while retrieving favorite books' });
    }
  } 

  const favorites = async (req, res) => {
    try {
      // Fetch only books that are marked as favorite
      const favoriteBooks = await bookModel.find({ favorite: true });
  
      if (favoriteBooks.length === 0) {
        return res.status(404).json({ message: 'No favorite books found' });
      }
  
      res.status(200).json(favoriteBooks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while retrieving favorite books' });
    }
  }  

  const unfavorite = async (req, res) => {
    try {
      const bookId = req.params.id; // Get the book ID from request params
      
      // Find the book by its ID
      const book = await bookModel.findById(bookId);
  
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      // Unmark the book as favorite
      book.favorite = false;
      await book.save(); // Save the updated book
  
      res.status(200).json({ message: `Book ID ${bookId} unmarked as favorite`, book });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while unmarking the book as favorite' });
    }
  }  

export {listBook,addBook,updateBook,removeBook,recommendations,favorite,favorites,unfavorite}