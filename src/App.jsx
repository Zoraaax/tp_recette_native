import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./screens/Category";
import Meals from "./screens/Meals";
import AboutMeal from "./screens/AboutMeal";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen 
        name="Categories" 
        component={Category} 
        options={{
          title: "Mes Categories",
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Meals"
        component={Meals}
        options={{
          title: "Mes Repas",
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen 
        name="AboutMeal"
        component={AboutMeal}
        options={{
          title: "A propos du repas",
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;