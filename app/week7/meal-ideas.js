'use client';

import { useState, useEffect } from 'react';
import styles from './MealIdeas.module.css'; // Make sure to create this CSS module file
function fetchMealIdeas(ingredient) {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  )
    .then((response) => response.json())
    .then((data) => data.meals);
}

// Assuming we have an endpoint to get the details of a meal, which includes ingredients
function fetchMealDetails(idMeal) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then((response) => response.json())
    .then((data) => data.meals[0]); // Assuming the API returns a meals array with one item
}

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useState(null);

  useEffect(() => {
    if (ingredient) {
      setIsLoading(true);
      fetchMealIdeas(ingredient)
        .then((meals) => {
          // Fetch details for each meal to get the ingredients
          return Promise.all(
            meals.map((meal) => fetchMealDetails(meal.idMeal))
          );
        })
        .then((mealDetails) => {
          setMeals(mealDetails);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Failed to fetch meals:', error);
          setError('Failed to load meal ideas.');
          setIsLoading(false);
        });
    }
  }, [ingredient]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.mealIdeas}>
      <h2 className={styles.heading}>Meal Ideas for {ingredient}</h2>
      <ul className={styles.mealList}>
        {meals.map((meal) => (
          <li key={meal.idMeal} className={styles.mealItem}>
            <h3 className={styles.mealName}>{meal.strMeal}</h3>
            <img
              src={meal.strMealThumb}
              alt={`Image of ${meal.strMeal}`}
              className={styles.mealImage}
            />
            <h4 className={styles.mealIngredientsHeading}>Ingredients</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
