

const Books = require('../data/Book')

const resolvers = {
  Query: {
    Books: () => Books,
    Book: (_, {id})  => {
      const b = Books.find(book => book.id === id);
      return b;
    }
  },
  Mutation: {
    createBook: (_, {title, category, author}) => {
      const id = `${Books.length + 1} `
      const newBook = {
        id,
        title,
        category,
        author
      }
      Books.push(newBook);
      return newBook;
    },
    deleteBook: (_, {id}) => {
      const index = Books.findIndex(book => book.id === id);
      if(!index) {
        return "Book not found!, check with a different id"
      }
      const deletedBook = Books.splice(index, 1);
      return deletedBook
    },
    updateBook: (_, {id, ...updates})  => {
      const index = Books.findIndex(book => book.id === id);
      const updatedBook = {
        ...Books[index], ...updates
      }
      Books[index] = updatedBook
      return updatedBook;
    }
  }
}


module.exports = resolvers;