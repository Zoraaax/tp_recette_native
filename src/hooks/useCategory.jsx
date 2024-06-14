import { useEffect, useState } from "react";
import { CATEGORIES } from "../data/data";

const useCategory = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(CATEGORIES);
    }, []);

    return categories;
}

export default useCategory;