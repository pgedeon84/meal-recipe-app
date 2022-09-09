// import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealLists from "../components/MealLists/MealLists";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Favorite Meals yet!</Text>
      </View>
    );
  }

  return <MealLists items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
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
