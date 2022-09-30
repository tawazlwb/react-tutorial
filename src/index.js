import React from 'react'
import ReactDOM from 'react-dom/client'

// Custom
import { ErrorBoundary } from './ErrorBoundary'
import { Book } from './Book'

// CSS
import './index.css'

const books = [
  {
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Question_book-new.svg/512px-Question_book-new.svg.png?20210726203554',
    title: 'I Love You to the Moon and Back',
    auther: 'Amelia Hepworth',
  },

  {
    id: 2,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Question_book-new.svg/512px-Question_book-new.svg.png?20210726203554',
    title: 'Our Class is a Family',
    auther: 'Shannon Olsen',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BookList />
    </ErrorBoundary>
  </React.StrictMode>
)
