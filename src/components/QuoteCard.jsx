import React from "react";

const QuoteCard = ({ quote }) => {
  return (
    <div className="cards">
      <p className="quote-text">“{quote.content}”</p>

      <div className="quote-footer">
        <span className="author">— {quote.author}</span>
        <span className="length">{quote.length} chars</span>
      </div>

      <div className="tags">
        {quote.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>

      <div className="date">
        Added: {quote.dateAdded}
      </div>
    </div>
  );
};

export default QuoteCard;