import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NAVIGATION} from '../constants';
import {TabBarIcon} from '../components/TabBarIcon';
import {Screen2} from '../screens/Screen2/Screen2';
import {Screen3} from '../screens/Screen3/Screen3';
import { Home } from '../screens';

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={NAVIGATION.bottomTabNavigator}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
}

function BottomTabNavigator() {
  const {colors}: any = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={NAVIGATION.home}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.activeTab,
        tabBarInactiveTintColor: colors.inactiveTab,
        tabBarIcon: ({color}) => (
          <TabBarIcon color={color} routeName={route.name} />
        ),
      })}
      tabBarOptions={{
        showIcon: false,
        style: {
          borderTopWidth: 0.5,
        },
      }}>
      <Tab.Screen
        name={NAVIGATION.homeNav}
        component={Home}
        options={{headerShown: false, title: 'Home'}}
      />
      <Tab.Screen
        options={{headerShown: false, title: 'Screen 2'}}
        name={NAVIGATION.Screen2}
        component={Screen2}
      />
      <Tab.Screen
        options={{headerShown: false, title: 'Screen 3'}}
        name={NAVIGATION.Screen3}
        component={Screen3}
      />
    </Tab.Navigator>
  );
}
