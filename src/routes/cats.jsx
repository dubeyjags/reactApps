import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/cats')({
  component: RouteComponent,
})

function RouteComponent() {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/cats/cat/random");
        const data = await response.json();
        const catData = data.data;
        console.log("Correct data:", catData);
        setCat(catData);
        console.log("Fetched cat:", cat);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cat:", error);
        setLoading(false);
      }
    };

    fetchCat();
  }, []);

  return (
    <div className="cats">
      {loading && <div className="loading">Loading...</div>}
      <h1>Cat</h1>
      <div className="cards">
      <img src={cat.image} alt={cat.name} className="cat-image" />

      <div className="cat-content">
        <h2 className="cat-name">{cat.name}</h2>
        <p className="origin">{cat.origin}</p>

        <p className="description">{cat.description}</p>

        <div className="info">
          <span>🐾 Life: {cat.life_span} yrs</span>
          <span>⚖️ Weight: {cat?.weight?.metric} kg</span>
        </div>

        <div className="temperament">
          {/* {cat.temperament.split(", ").map((temp, i) => (
            <span key={i} className="tag">
              {temp}
            </span>
          ))} */}
        </div>

        <div className="ratings">
          <p>❤️ Affection: {cat.affection_level}/5</p>
          <p>🧠 Intelligence: {cat.intelligence}/5</p>
          <p>⚡ Energy: {cat.energy_level}/5</p>
          <p>🐶 Dog Friendly: {cat.dog_friendly}/5</p>
        </div>

        <a
          href={cat.wikipedia_url}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Learn More
        </a>
      </div>
    </div>
    </div>
  )
}
