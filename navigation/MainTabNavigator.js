import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// Import Assets
import TabBarIcon from '../components/TabBarIcon';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import DataScreen from '../screens/DataScreen';
import ElementsScreen from '../screens/ElementsScreen';
import PluginsScreen from '../screens/PluginsScreen'
import SettingsScreen from '../screens/SettingsScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


// Initialise each Button
// Home
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-clipboard`
          : 'md-clipboard'
      }
    />
  ),
};

HomeStack.path = '';


// Data
const DataStack = createStackNavigator(
  {
    Data: DataScreen
  },
  config
)

DataStack.navigationOptions = {
  tabBarLabel: 'Data',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-journal`
          : 'md-journal'
      }
    />
  )
}

DataStack.path = ''

// Elements
const ElementsStack = createStackNavigator(
  {
    Elements: ElementsScreen
  },
  config
)

ElementsStack.navigationOptions = {
  tabBarLabel: 'Elements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-archive`
          : 'md-archive'
      }
    />
  )
}

ElementsStack.path = '';

// Plugins
const PluginsStack = createStackNavigator(
  {
    Plugins: PluginsScreen
  },
  config
)

PluginsStack.navigationOptions = {
  tabBarLabel: 'Plugins',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-paper`
          : 'md-paper'
      }
    />
  )
}

PluginsStack.path = '';

// Settings
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


// Create the Navigator
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  DataStack,
  ElementsStack,
  PluginsStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
