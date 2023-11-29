import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './Book'
import './index.css';
import { books } from './books'



function Booklist () {
  
    return(
        <>
        <h1>Recommended Personal Development Videos</h1>
        <section className='booklist'>
            
            {books.map((book, index) => {
               
                return(
                    <Book {...book} key={book.id} number = {index}/>
                )
            })}
        </section>
        </>
    )
}





const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist/>)