import { Text, View } from "react-native";

function MealsDetailsScreen({ route }) {
  const mealID = route.params.mealId;
  return (
    <View>
      <Text>Meals Details Screen - {mealID} </Text>
    </View>
  );
}

export default MealsDetailsScreen;
