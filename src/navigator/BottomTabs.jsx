import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screen/Home';
import Calendar from '../screen/Calendar';
import Library from '../screen/Library';
import Profile from '../screen/Profile';

const Tab = createBottomTabNavigator();
const tabScreen = [
  {
    name: 'HOME',
    component: Home,
    options: {
      tabBarIcon: ({color}) => (
        <AntDesign name="home" size={20} color={color} />
      ),
      tabBarActiveTintColor: 'black',
    },
  },
  {
    name: 'CALENDAR',
    component: Calendar,
    options: {
      tabBarIcon: ({color}) => (
        <AntDesign name="calendar" size={20} color={color} />
      ),
      tabBarActiveTintColor: 'black',
    },
  },
  {
    name: 'LIBRARY',
    component: Library,
    options: {
      tabBarIcon: ({color}) => (
        <Ionicons name="ios-library-outline" size={20} color={color} />
      ),
      tabBarActiveTintColor: 'black',
    },
  },
  {
    name: 'PROFILE',
    component: Profile,
    options: {
      tabBarIcon: ({color}) => (
        <Ionicons name="person-outline" size={20} color={color} />
      ),
      tabBarActiveTintColor: 'black',
    },
  },
];

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      {tabScreen.map(el => {
        return (
          <Tab.Screen
            key={el.name}
            name={el.name}
            component={el.component}
            options={el.options}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;
