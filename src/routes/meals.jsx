import { createFileRoute } from '@tanstack/react-router'
import {  useEffect, useState } from 'react';
import MealCard from '../components/MealCard.jsx';

export const Route = createFileRoute('/meals')({
  component: RouteComponent,
})

function RouteComponent() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/meals');
        const data = await response.json();
        const mealsData = data.data.data;
        console.log('Correct data:', mealsData);
        setMeals(mealsData);
        console.log('Fetched meals:', meals);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meals:', error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div>
      {loading && <div className="loading"></div>}
      <h1>Meals</h1>
      <div className="meals">
        {meals && meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  )
}
