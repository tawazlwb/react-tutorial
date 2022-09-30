import React from 'react'

export const Book = (props) => {
  const { img, title, auther } = props.book
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{auther}</h4>
    </article>
  )
}

export default Book
