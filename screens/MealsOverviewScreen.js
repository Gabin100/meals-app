import { Text, View, StyleSheet, FlatList } from "react-native";

import MealItem from "../components/MealItem";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const CatId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(CatId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.conainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    padding: 16,
  },
});
