import React from 'react';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TopNavigationBar navigation={navigation} />

      <View>
        <Text style={{
          color: "green",
          fontSize: 20
        }}>Welcome to Plant Store!</Text>
        <Text>Your one-stop shop for all your plant needs.</Text>
      </View>

      <Button
        title="Browse Categories"
        onPress={() => navigation.navigate('NavigationPanel')}
      />
    </View>
  );
};

export default HomeScreen;