import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealLists({ items }) {
  function renderMealHandler({ item }) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealHandler}
      />
    </View>
  );
}

export default MealLists;
