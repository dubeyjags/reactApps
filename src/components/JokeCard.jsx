import React from "react";

const JokeCard = ({ joke }) => {
  return (
    <div className="cards">
      <p className="joke-text">{joke.content}</p>

      <div className="joke-footer">
        <span className="joke-id">#{joke.id}</span>

        <div className="categories">
          {joke.categories.map((cat, index) => (
            <span key={index} className="category">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JokeCard;