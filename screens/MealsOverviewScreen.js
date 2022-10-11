import { Text, View, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen() {
  return (
    <View style={styles.conainer}>
      <Text>Meals overview Screen</Text>
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
