import { Pressable, StyleSheet, Text } from "react-native"

const CategoryCard = ({ category, navigation }) => {

    const redirectToMealsCategory = (categoryId) => {
        navigation.navigate('Meals', { categoryId });
    }

    return (
        <Pressable style={[styles.container, {backgroundColor: category.color }]} onPress={() => redirectToMealsCategory(category.id)}>
            <Text style={styles.text}>{category.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        paddingVertical: 50,
        width: '100%',
        borderRadius: 10,
        elevation: 5
    },
    text: {
        color: '#1E1E1E',
        fontSize: 20,
        fontWeight: 'medium'
    }
})

export default CategoryCard;