import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";

import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const displayedFavoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (displayedFavoriteMeals.length === 0) {
    return (
      <View style={styles.rootConainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={displayedFavoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootConainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
