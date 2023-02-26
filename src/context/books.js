import axios from "axios";
import { createContext, useState, useCallback } from "react";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
      const response = await axios.get("http://localhost:3001/books");

      setBooks(response.data);
    }, []);

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
          title: newTitle
        });
        console.log(response);
        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return { ...book, ...response.data };
          }
          return book;
        });
        setBooks(updatedBooks)
      };
  
       
      
      
      const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
      const updatedBooks = books.filter((book) => {
        return book.id !== id;
  
      });
  
      setBooks(updatedBooks);
  
      };
  
      const createBook = async (title) => {
        const response =  await axios.post("http://localhost:3001/books", {
            title
          });
           
        const updateBooks = [    
          ...books,
          response.data              
        ];
      
      
  
        setBooks(updateBooks)
       
      };

      const valueToShare = {
        books: books,
        deleteBookById: deleteBookById,
        editBookById: editBookById,
        createBook: createBook,
        fetchBooks: fetchBooks // If the key: and value are identical like books: books, etc. then you can just put the key without a colon ex. books, deleteBookById, etc.

      };

   return (<BooksContext.Provider value={valueToShare}>
    {children}
    </BooksContext.Provider>)
}
export { Provider };
export default BooksContext;

// import BooksContext, { Provider } from "" this is how you would import a named and default export at the same time
//  To import one or the other alone, remove the comma and the export you don't wish to import