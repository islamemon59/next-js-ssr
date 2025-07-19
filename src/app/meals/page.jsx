"use client"

import React, { useEffect, useState } from "react";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data?.meals);
      return data?.meals || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);

  return (
    <div>
        <div><input className="border-2 p-2" value={search} onChange={(e) => setSearch(e.target.value)} type="text" /></div>
      {meals.map((singleMeal) => {
        return (
          <div>
            <h1>{singleMeal.strMeal}</h1>
            <h1>{singleMeal.strCategory}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default MealsPage;
