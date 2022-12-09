import React from "react";
import Book from "../components/ui/Book";
import { books } from "../data.js";
const Books = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select id="filter" defaultValue={"DEFAULT"}>
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price,LOW TO HIGH</option>
                  <option value="HIGH_TO_LOW">Price,HIGH TO LOW</option>
                  <option value="RATING">RATING</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book key={book.id} book={book} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
