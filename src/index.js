import React from 'react'
import ReactDOM from 'react-dom/client'

// CSS
import './index.css'

const firstBook = {
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Question_book-new.svg/512px-Question_book-new.svg.png?20210726203554',
  title: 'I Love You to the Moon and Back',
  auther: 'Amelia Hepworth',
}

const secondBook = {
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Question_book-new.svg/512px-Question_book-new.svg.png?20210726203554',
  title: 'Our Class is a Family',
  auther: 'Shannon Olsen',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        auther={firstBook.auther}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          voluptates quis expedita accusamus cumque ratione iure rem magni
          temporibus voluptatum!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        auther={secondBook.auther}
      />
    </section>
  )
}

// const Book = ({ img, title, auther, children }) => {
const Book = (props) => {
  console.log(props)
  const { img, title, auther, children } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{auther}</h4>
      {children}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
