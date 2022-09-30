import React from 'react'

export const Book = ({ img, title, auther }) => {
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Hello world!')
  }

  const complexExampleHandler = (auther) => console.log(auther)

  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{auther}</h4>
      <button type='button' onClick={clickHandler}>
        refenrence example
      </button>
      <button type='button' onClick={() => complexExampleHandler(auther)}>
        more complex example
      </button>
    </article>
  )
}

export default Book
