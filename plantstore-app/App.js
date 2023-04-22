import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import NavigationPanel from "./src/screens/NavigationPanel";
import CartScreen from "./src/screens/CartScreen";
import PlantsForSaleScreen from "./src/screens/PlantsForSale";
import { ShoppingCartProvider } from "./src/contexts/ShoppingCartContext";

const Drawer = createDrawerNavigator();

export default function App() {
 
  return (
    <ShoppingCartProvider>
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
    </ShoppingCartProvider>
  );
}
