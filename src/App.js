 import "./index.css";
 import {  useEffect, useContext } from "react"; // useEffect, useState, useContext are all hooks. They are functions inside of react that add addtional features to a component.
 import BookCreate from "./components/BookCreate"; // useEffect - Allows a component to run code at specific points in time
 import BookList from "./components/BookList";    // useState - Allows a component to use the state system
 import BooksContext from "./context/books";      // useContext - Allows a component to access value stored inside context

function App() {
   const  { fetchBooks } = useContext(BooksContext);

    useEffect(() => { // Use effect can only return another function.
        fetchBooks();
      }, [fetchBooks]);

    
    return (
    <div className="app">
    <h1>BookZ List</h1>
      <BookList  />
      <BookCreate />
    </div>
    ); 
    
}


export default App;