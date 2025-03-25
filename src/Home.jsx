import React from "react";
import books from "./booksdata"; 
import { useNavigate } from "react-router-dom"; 

const Home = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Book List</h1>

      <button onClick={() => navigate("/add-book")} style={{ marginBottom: "20px" }}>
        Add Book
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {books.map((book) => (
          <div key={book.id} style={{ border: "1px solid #ddd", padding: "10px", width: "200px" }}>
            <img src={book.coverImage} alt={book.title} style={{ width: "100%", height: "150px" }} />
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>

   
  );
};

export default Home;
