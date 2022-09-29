import React from 'react'
import ReactDOM from 'react-dom'

// stateless functional component
// always return JSX

// function Greeting() {
//   return <h4>Hello world!</h4>
// }

function BookList() {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Auther />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Question_book-new.svg/512px-Question_book-new.svg.png?20210726203554'
      alt=''
      width='250px'
    />
  )
}

const Title = () => <h1>I Love You to the Moon and Back</h1>
const Auther = () => <h4>Amelia Hepworth</h4>

ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById('root')
)
