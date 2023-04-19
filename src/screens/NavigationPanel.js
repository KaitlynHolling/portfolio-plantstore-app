import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import TopNavigationBar from "../components/TopNavigationBar";

const categories = [
  "Pet-Friendly Plants",
  "Indoor Tropical Plants",
  "Cacti and Succulents",
  "Air Plants",
  "Flowering Plants",
  "Aquatic Plants",
  "Outdoor Plants",
  "Sale",
  "FAQ",
  "Contact Us",
];

const NavigationPanel = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopNavigationBar navigation={navigation} />
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryButton}
          onPress={() => {
            navigation.closeDrawer();
            console.log(`Navigating to ${category}`);

            if(category === "FAQ" || category === "Contact Us" | category === "Sale") {
              navigation.navigate("Home"); // Replace with the appropriate screen
            } else {
              navigation.navigate("PlantsForSale", { category });
            }
          }}
        >
          <Text style={styles.categoryButtonText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D9970",
  },
  categoryButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
  },
  categoryButtonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default NavigationPanel;
