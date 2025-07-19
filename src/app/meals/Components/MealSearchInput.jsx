"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealSearchInput = () => {

//   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter()
  const pathName = usePathname()
  useEffect(() => {
    const searchQuery = {search};
    const urlQueryParam = new URLSearchParams(searchQuery)
    const url = `${pathName}?${urlQueryParam}`
    router.push(url)
  }, [search]);

  return (
    <div>
      <input
        className="border-2 p-2 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default MealSearchInput;
