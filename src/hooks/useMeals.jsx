import { useState, useEffect } from "react";
import { MEALS } from "../data/data";

const useMeals = (categoryId) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const filteredMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));
        setMeals(filteredMeals);
    }, [])

    return meals;
}

export default useMeals;