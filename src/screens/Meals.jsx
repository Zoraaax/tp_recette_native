import { FlatList, StyleSheet } from "react-native";
import useMeals from "../hooks/useMeals";
import MealsCard from "../components/MealsCard";
import { useRoute } from "@react-navigation/native";

const Meals = () => {

    const route = useRoute();
    const { categoryId } = route.params
    const meals = useMeals(categoryId);

    return (
        <FlatList
            data={meals}
            keyExtractor={meal => meal.id.toString()}
            renderItem={({ item }) => <MealsCard meals={item} />}
            numColumns={1}
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

export default Meals;