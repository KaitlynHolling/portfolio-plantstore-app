import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import TopNavigationBar from '../components/TopNavigationBar';
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

const CartScreen = ({ navigation }) => {
  const { cart, emptyCart, incrementQuantity, decrementQuantity } = useContext(ShoppingCartContext);

  const renderCartItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.plant.name}</ListItem.Title>
        <ListItem.Subtitle>{item.plant.description}</ListItem.Subtitle>
        <Text>Price: ${item.plant.price}</Text>
      </ListItem.Content>
      <View>
        <TouchableOpacity onPress={() => decrementQuantity(item.plant)} disabled={item.quantity === 1}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity onPress={() => incrementQuantity(item.plant)}>
          <Text>+</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => removeFromCart(item.plant)}>
          <Text>Remove</Text>
        </TouchableOpacity> */}
      </View>
    </ListItem>
  );

  const totalCost = cart.reduce((sum, item) => sum + item.plant.price * item.quantity, 0);

  return (
    <View>
      <TopNavigationBar navigation={navigation} />

      <Text>Your Cart:</Text>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.plant.name}
        />
      ) : (
        <Text>Your cart is empty.</Text>
      )}

      {cart.length > 0 && (
        <View>
          <Text>Total: ${totalCost.toFixed(2)}</Text>
          <Button
            title="Checkout"
            style={{ marginTop: 10 }}
            onPress={() => alert('Proceeding to Checkout...')}
          />
          <Button
            title="Empty Cart"
            style={{ marginTop: 20 }}
            onPress={emptyCart}
          />
        </View>
      )}
    </View>
  );
};

export default CartScreen;
