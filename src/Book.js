import React from 'react'

export const Book = ({ img, title, auther }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{auther}</h4>
    </article>
  )
}

export default Book
