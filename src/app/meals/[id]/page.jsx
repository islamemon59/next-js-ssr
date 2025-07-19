const fetchMeals = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    // setMeals(data?.meals);
    return data?.meals || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export async function generateMetadata({ params }) {
  const p = await params;

  // fetch post information
  const [singleMeal] = await fetchMeals(p.id);
  console.log(singleMeal);
  return {
    title: singleMeal?.strMeal,
    description: singleMeal?.strInstructions,
  };
}

const SingleMeal = async ({ params }) => {
  const p = await params;

  const [singleMeal] = await fetchMeals(p.id);

  return <div>
    <p>{singleMeal.strMeal}</p>
  </div>;
};

export default SingleMeal;
