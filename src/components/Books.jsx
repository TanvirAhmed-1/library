import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books , setbooks]=useState([]);
   useEffect(()=>{
    fetch("./booksData.json")
    .then(res=>res.json())
    .then(data=>setbooks(data))
   },[])
    return (
        <div>
           <h1 className='text-3xl font-bold text-center text-black mb-10'>Books</h1> 
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-[1170px] mx-auto my-9 '>
            {
              books.map(books=> <Book
              key={books.ookId}
              book={books}
              ></Book>)  
            }
           </div>
        </div>
    );
};

export default Books;