import { StyleSheet, View, Text } from "react-native";

const StepsDisplay = ({ steps }) => {
    return (
        <View style={styles.steps}>
            <Text style={styles.stepsText}>{steps}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    steps: {
        flex: 1,
        marginBottom: 8,
        alignItems: 'center',
        backgroundColor: '#af8d78',
        padding: 10,
        borderRadius: 10,
    },
    stepsText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center'
    }
})

export default StepsDisplay;