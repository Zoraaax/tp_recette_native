import useCategory from "../hooks/useCategory";
import CategoryCard from "../components/CategoryCard";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Category = () => {

    const categories = useCategory();
    const navigation = useNavigation()

    return (
        <FlatList 
            data={categories}
            keyExtractor={category => category.id.toString()}
            renderItem={({ item }) => <CategoryCard category={item} navigation={navigation} />}
            columnWrapperStyle={styles.row}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        marginVertical: 10,
    }
})

export default Category;