const express = require('express');
const app = express();


//Middleware
app.use(express.json());

let books = [
  {
    id: 1,
    title: 'Book 1'
  },
  {
    id: 2,
    title: 'Book 2'
  }
];

//intro
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to our bookstore api'
  })
})

//get all books
app.get('/get', (req, res) => {
  res.json(books);
})

//get a single book
app.get('/get/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: 'Book not found'
    })
  }

})

//add a new book
app.post('/add', (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: `Book ${Math.floor(Math.random() * 1000)}`
  }

  books.push(newBook);
  res.status(200).json(
    {
      data: newBook,
      message: "New Book is added successfully"
    }
  )
})

//update a book
app.put('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const findCurrentBook = books.find(book => book.id === id);

  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title

    res.status(200).json(
      {
        message: `Book with ID ${req.params.id} updated successfully`,
        data: findCurrentBook
      }
    )
  } else {
    res.status(404).json(
      {
        message: `Book not found`
      }
    )
  }
})

//delete a book
app.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const findIndexOfCurrentBook = books.findIndex(book => book.id === id);
  if (findIndexOfCurrentBook !== -1) {
    const deletedBook = books.splice(findIndexOfCurrentBook, 1)
    res.status(200).json(
      {
        message: 'Book deleted successfully',
        data: deletedBook[0]
      }
    )
  } else {
    res.status(404).json(
      {
        message: `Book not found`
      }
    )
  }
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

