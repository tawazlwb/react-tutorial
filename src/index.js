import React from 'react'
import ReactDOM from 'react-dom/client'

// Custom
import { ErrorBoundary } from './ErrorBoundary'

// Tutorial
import { BookList } from './BookList'
import { greeting } from './testing/testing'

console.log(greeting)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BookList />
    </ErrorBoundary>
  </React.StrictMode>
)
