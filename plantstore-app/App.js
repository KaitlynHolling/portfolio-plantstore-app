import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import NavigationPanel from "./src/screens/NavigationPanel";
import CartScreen from "./src/screens/CartScreen";
import PlantsForSaleScreen from "./src/screens/PlantsForSale";

const Drawer = createDrawerNavigator();

export const ShoppingCartContext = React.createContext();

export default function App() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (plant) => {
    const plantIndex = cart.findIndex((item) => item.plant.name === plant.name);

    if (plantIndex >= 0) {
      const newCart = [...cart];
      newCart[plantIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { plant, quantity: 1 }]);
    }
  };

  // TODO: Fix this function, it's not filtering anything at the moment
  const removeFromCart = (plant) => {
    setCart(cart.filter((item) => item.plant.name !== plant.name));
  };

  const incrementQuantity = (plant) => {
    const plantIndex = cart.findIndex((item) => item.plant.name === plant.name);

    if (plantIndex >= 0) {
      const newCart = [...cart];
      newCart[plantIndex].quantity += 1;
      setCart(newCart);
    }
  };

  const decrementQuantity = (plant) => {
    const plantIndex = cart.findIndex((item) => item.plant.name === plant.name);

    if (plantIndex >= 0) {
      const newCart = [...cart];

      if (newCart[plantIndex].quantity > 1) {
        newCart[plantIndex].quantity -= 1;
      } else {
        newCart.splice(plantIndex, 1);
      }

      setCart(newCart);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        emptyCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="NavigationPanel" component={NavigationPanel} />
          <Drawer.Screen name="Cart" component={CartScreen} />
          <Drawer.Screen name="PlantsForSale" component={PlantsForSaleScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ShoppingCartContext.Provider>
  );
}
