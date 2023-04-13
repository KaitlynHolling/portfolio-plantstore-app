## Plant Store React Native App

Let's make a new React Native Expo app called Plant Store. 


## Requirements
The requirements for this project:
Create ONE (1) new React Native project using React Native Elements and React Navigation (using Expo). It should include at least 3 screens and three new components.

Remember, a screen is a set of components visible on the screen. A screen is not the same set of components with different values with a different file name.

Create a partial implementation of an e-commerce app, which might include a form for collecting info on selling an item (e.g. Amazon marketplace, or eBay) and mock up of sales listings. Think
simple.

We will be making a Plant Store app.

"For the 3 screens I was thinking a home screen, then a navigation page, and the cart page, but am open to changing them if you think something else would be better"

"I was thinking it would be a navigation page would be more like a navigation side panel I suppose, the user would hit a navigation icon and it would open the navigation panel over the homepage. For the navigation I was thinking we just put some placeholder categories that don't actually have to work, but categories like "Pet-Friendly Plants". "Indoor Tropical Plants", "Cacti and Succulents", "Air Plants", "Flowering Plants", "Aquatic Plants", "Outdoor Plants", "Sale", "FAQ", & "Contact Us" to show its a navigation panel. And then also for the user to easily navigate through the app I wanted to make sure there was a top navigation bar, that can include the navigation panel, and that has a home, cart, and back button that always shows for quick access."


## Dev Log
```bash
npx create-expo-app plant-store

npx expo install react-native-elements react-native-vector-icons react-navigation react-navigation-stack @react-navigation/native @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# To run on web
npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
```

* Create a `/src` folder and `/src/components` and `/src/screens` folders
* Create a `HomeScreen.js` file in `/src/screens`
* Create a `NavigationPanel.js` file in `/src/screens`
* Create a `CartScreen.js` file in `/src/screens`
* Create a `TopNavigationBar.js` file in `/src/components`
* Create a `PlantCard.js` file in `/src/components`

Add the following code to `App.js`

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';
import NavigationPanel from './src/screens/NavigationPanel';
import CartScreen from './src/screens/CartScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="NavigationPanel" component={NavigationPanel} />
        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

