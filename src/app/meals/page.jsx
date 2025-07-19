import Link from "next/link";
import MealSearchInput from "./Components/MealSearchInput";

export const metadata = {
  title: "All Meals",
  description: "Trying to learning NextJs as best as we can",
};

const MealsPage = async ({ searchParams }) => {
  const query = await searchParams;
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      // setMeals(data?.meals);
      return data?.meals || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  // useEffect(() => {
  //   fetchMeals();
  // }, [search]);

  return (
    <div>
      <div>
        {/* <input
          className="border-2 p-2 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        /> */}
        <MealSearchInput />
      </div>
      {meals.map((singleMeal) => {
        return (
          <div key={singleMeal.idMeal}>
            <h1>{singleMeal.strMeal}</h1>
            <h1>{singleMeal.strCategory}</h1>
            <Link href={`/meals/${singleMeal.idMeal}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default MealsPage;
