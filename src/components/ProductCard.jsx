import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.thumbnail);

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="cards">
      <div className="image-section">
        <img src={activeImage} alt={product.title} className="main-image" />

        <div className="thumbnail-list">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumb"
              onClick={() => setActiveImage(img)}
              className={activeImage === img ? "active" : ""}
            />
          ))}
        </div>

        <span className="discount-badge">
          -{product.discountPercentage}%
        </span>
      </div>

      <div className="content">
        <h3 className="title">{product.title}</h3>
        <p className="brand">{product.brand}</p>
        <p className="description">{product.description}</p>

        <div className="price-section">
          <span className="discounted-price">${discountedPrice}</span>
          <span className="original-price">${product.price}</span>
        </div>

        <div className="meta">
          <span>⭐ {product.rating}</span>
          <span>Stock: {product.stock}</span>
        </div>

        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;