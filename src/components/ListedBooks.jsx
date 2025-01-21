import React, { useState, useEffect } from "react"; 
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStorRead, getStorwish } from "../utiliti/savedata"; 
import Book from "./Book";

const ListedBooks = () => {
  const [addBook, setBook] = useState([]);
  const allBooks = useLoaderData();
  const [wishBook, setWishBook] = useState([]);

  useEffect(() => {
    const getStorageData = getStorwish(); 
    const storageIds = getStorageData.map((id) => parseInt(id)); 
    const filteredBooks = allBooks.filter((book) =>
      storageIds.includes(book.bookId) 
    );
    setWishBook(filteredBooks); 
  }, [allBooks]);

  useEffect(() => {
    const getStorageData = getStorRead(); 
    const storageIds = getStorageData.map((id) => parseInt(id)); 
    const filteredBooks = allBooks.filter((book) =>
      storageIds.includes(book.bookId)
    );
    setBook(filteredBooks);
  }, [allBooks]);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-black text-center my-10">
        Listed Books
      </h1>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Read Books: {addBook.length}</h2>
          <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 my-10">
            {addBook.map((book) => (
              <Book key={book.bookId}
               book={book}
              ></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wishlist Books: {wishBook.length}</h2>
          <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 my-10">
            {wishBook.map((book) => (
              <Book key={book.bookId}
               book={book}
              ></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
