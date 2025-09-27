const Book = require('../models/book');

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({})
    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: 'All books retrieved successfully',
        data: allBooks
      })
    } else {
      res.status(404).json({
        success: false,
        message: "Books not found in the database"
      })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again later"
    })

  }
}
const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const singleBook = await Book.findById(getCurrentBookId);
    if (!singleBook) {
      res.status(404).json({
        success: false,
        message: "Book with the given ID not found!, please check the ID and try again"
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Book retrieved successfully',
        data: singleBook
      })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again later"
    })
  }

}
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newCreatedBook = await Book.create(newBookFormData);
    if (newCreatedBook) {
      res.status(201).json({
        success: true,
        message: 'New book created successfully',
        data: newCreatedBook
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again later"
    })
  }
}
const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const getCurrentBookId = req.params.id;
    const existingBook = await Book.findById(getCurrentBookId);
    console.log('Existing book:', existingBook);
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookId,
      updatedBookFormData,
      {
        new: true,
      }
    );

    if (!updatedBook) {
     return res.status(404).json({
        success: false,
        message: "Book not found in the database"
      })
    }
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: updatedBook
    })

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again later"
    })
  }
}
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params
    const deletedBook = await Book.findByIdAndDelete(id)
    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book with the given ID not found!, please check the ID and try again"
      })
    } else {
      res.status(200).json({
        success: true,
        message: 'Book deleted successfully',
        data: deletedBook
      })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again later"
    })
  }
}

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook
}