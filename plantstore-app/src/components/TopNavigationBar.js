import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Header, Icon } from "react-native-elements";
import { ShoppingCartContext } from "../../App";

const TopNavigationBar = ({ navigation }) => {
  const { cart } = useContext(ShoppingCartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Header
      leftComponent={
        <Icon name="menu" onPress={() => navigation.toggleDrawer()} />
      }
      centerComponent={{ text: "Plant Store", style: { color: "#fff" } }}
      rightComponent={
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {cart.length > 0 && <Text>{totalItems}</Text>}
          <Icon
            name="shopping-cart"
            onPress={() => navigation.navigate("Cart")}
          />
        </View>
      }
      containerStyle={{
        backgroundColor: "#3D9970",
        justifyContent: "space-around",
      }}
    />
  );
};

export default TopNavigationBar;
