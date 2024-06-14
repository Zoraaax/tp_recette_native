import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

const MealsCard = ({ meals }) => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('AboutMeal', { mealId: meals.id })
    }

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <Image source={{ uri: meals.imageUrl }} style={styles.image} onError={(e) => console.log(e.nativeEvent.error)} />
            <Text style={styles.text}>{meals.title}</Text>
            <View style={styles.details}>
                <Text style={styles.details.text}>{meals.duration} min</Text>
                <Text style={styles.details.text}>{meals.complexity}</Text>
                <Text style={styles.details.text}>{meals.affordability}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5,
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    text: {
        color: '#1E1E1E',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10
    },
    details: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        alignItems: 'center',
        text: {
            color: '#1E1E1E',
            fontSize: 14,
            fontWeight: 'medium'
        }
    }
});

export default MealsCard;
