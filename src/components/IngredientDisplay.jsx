import { StyleSheet, View, Text } from "react-native";

const IngredientDisplay = ({ ingredients }) => {
    return (
        <View style={styles.ingredient}>
            <Text style={styles.ingredientText}>{ingredients}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ingredient: {
        flex: 1,
        marginBottom: 8,
        alignItems: 'center',
        backgroundColor: '#af8d78',
        padding: 10,
        borderRadius: 10,
    },
    ingredientText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center'
    }
})

export default IngredientDisplay;