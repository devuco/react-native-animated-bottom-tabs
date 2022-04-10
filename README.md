# react-native-animated-bottom-tabs

An animated bottom tabbar for react-native-bottom-tabs

## Installation

```sh
npm install react-native-animated-bottom-tabs
or
yarn add react-native-animated-bottom-tabs
```

## Usage

```js
import TabBar from 'react-native-animated-bottom-tabs';

// ...

<TabNavigator.Navigator
  tabBar={(props) => (
    <TabBar
      {...props} //<-Add Tabbar and pass props
    />
  )}
>
  <TabNavigator.Screen
    name="Home"
    component={HomeScreen}
    options={{
      headerShown: false,
      tabBarIcon: () => (
        <Image source={require('../assets/home.png')} style={styles.icon} />
      ),
    }}
  />
  <TabNavigator.Screen
    name="Settings"
    component={SettingsScreen}
    options={{
      headerShown: false,
      tabBarIcon: () => (
        <Image source={require('../assets/settings.png')} style={styles.icon} />
      ),
    }}
  />
  <TabNavigator.Screen
    name="Profile"
    component={ProfileScreen}
    options={{
      headerShown: false,
      tabBarIcon: () => (
        <Image source={require('../assets/profile.png')} style={styles.icon} />
      ),
    }}
  />
</TabNavigator.Navigator>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { height: 20, width: 20, tintColor: 'white' },
});
```

## Props

| Prop                  | Type      | Default | Description                                                            |
| --------------------- | --------- | ------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------- |
| position              | "Fixed"   | "Float" | "Float"                                                                | "Fixed" - Tab bar is fixed to bottom, "Float" - Tab bar is floating |
| tabBarStyle           | ViewProps | -       | Style for Tab bar                                                      |
| activeContainerStyle  | ViewProps | -       | Style for Active Cell                                                  |
| reverseLabelSelection | Boolean   | false   | if true, the icon is shown on selected and text is shown on unselected |
| labelStyle            | TextProps | -       | Style for Label                                                        |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
