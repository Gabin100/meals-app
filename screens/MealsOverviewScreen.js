import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const CatId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(CatId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitlte = CATEGORIES.find(
      (category) => category.id === CatId
    ).title;

    navigation.setOptions({
      title: categoryTitlte,
    });
  }, [CatId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
