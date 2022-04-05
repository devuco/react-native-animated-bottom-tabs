import * as React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from 'react-native-animated-bottom-tabs';

export default function App() {
  const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  };
  const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  };
  const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  };

  const TabNavigator = createBottomTabNavigator();

  const Tabs = () => {
    return (
      <TabNavigator.Navigator tabBar={(props) => <TabBar {...props} />}>
        <TabNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={require('../assets/home.png')}
                style={styles.icon}
              />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={require('../assets/home.png')}
                style={styles.icon}
              />
            ),
          }}
        />
        <TabNavigator.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                source={require('../assets/home.png')}
                style={styles.icon}
              />
            ),
          }}
        />
      </TabNavigator.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { height: 20, width: 20, tintColor: 'white' },
});
