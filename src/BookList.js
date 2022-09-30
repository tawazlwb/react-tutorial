import React from 'react'

// Custom
import { Book } from './Book'

// Data
import { books } from './books'

// CSS
import './index.css'

export const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  )
}

export default BookList
