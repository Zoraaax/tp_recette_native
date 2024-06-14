import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MEALS } from '../data/data';
import IngredientDisplay from '../components/IngredientDisplay';

const AboutMeal = () => {
    const route = useRoute();
    const { mealId } = route.params;
    
    const meal = MEALS.find(m => m.id === mealId);

    if (!meal) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Meal not found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
            <View style={styles.detail}>
                <Text style={styles.detail.text}>{meal.duration}mn</Text>
                <Text style={styles.detail.text}>{meal.complexity}</Text>
                <Text style={styles.detail.text}>{meal.affordability}</Text>
            </View>
            <Text style={styles.ingredientsTitle}>Steps</Text>
            <View style={styles.line}></View>
            <FlatList
                data={meal.steps}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <IngredientDisplay ingredients={item} />}
                style={{ width: '85%' }}
            />
            <Text style={styles.ingredientsTitle}>Ingredients</Text>
            <View style={styles.line}></View>
            <FlatList 
                data={meal.ingredients}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <IngredientDisplay ingredients={item} />}
                style={{ width: '85%' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 16
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'black'
    },
    detail: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 12,
        text: {
            fontSize: 18,
            color: 'black',
        }
    },
    ingredientsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
        color: '#af8d78'
    },
    errorText: {
        fontSize: 20,
        color: 'red'
    },
    line: {
        width: '85%',
        height: 3,
        backgroundColor: '#af8d78',
        marginVertical: 8
    }
});

export default AboutMeal;
