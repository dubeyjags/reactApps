import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import JokeCard from '../components/JokeCard';

export const Route = createFileRoute('/jokes')({
  component: RouteComponent,
})

function RouteComponent() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomjokes"
        );
        const data = await response.json();

        const jokesData = data.data.data;

        console.log("Correct data:", jokesData);

        setJokes(jokesData);
        console.log("Fetched jokes:", jokes);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching jokes:", error);
        setLoading(false);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div>
      {loading && <div className='loading'>Loading...</div>}
      <h1>Jokes</h1>
      <div className='jokes'> {jokes.map((joke) => (
         <JokeCard key={joke.id} joke={joke} />
        ))}</div>
      {/* <JokeCard jokes={jokes} /> */}
    </div>
  )
}
