import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

import { ShoppingCartContext } from "../../App";

const PlantCard = ({ name, image, price, description }) => {
  const { addToCart } = React.useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    addToCart({ name, image, price, description, quantity: 1 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    marginTop: 8,
  },
  addToCartButton: {
    backgroundColor: "#00aa00",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 8,
  },
  addToCartButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PlantCard;
