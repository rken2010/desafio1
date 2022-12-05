import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import TaskNavigation from './TaskNavigation';
import StartTask from '../screens/StartTask';
import EndTask from '../screens/EndTask';

 const TaskTabNavigation = () => {
    const BottomTabs = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <BottomTabs.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          }}
        >
          <BottomTabs.Screen
            name="Home"
            component={TaskNavigation}
            options={{
              tabBarIcon: ({ focus }) => (
                <View style={styles.item}>
                  <Ionicons name="home" size={20} color='black'/>
                  <Text>Home</Text>
                </View>
              ),
            }}
          />
          <BottomTabs.Screen
            name="Start"
            component={StartTask}
            options={{
              tabBarIcon: ({ focus }) => (
                <View style={styles.item}>
                  <Ionicons name="alarm" size={20} color='black'/>
                  <Text>Start</Text>
                </View>
              ),
            }}
          />
          <BottomTabs.Screen
            name="Finish"
            component={EndTask}
            options={{
              tabBarIcon: ({ focus }) => (
                <View style={styles.item}>
                  <Ionicons name="checkmark-circle-outline" size={20} color='black'/>
                  <Text>Finish</Text>
                </View>
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    );
  };
  
  const styles = StyleSheet.create({
    tabBar: {
      shadowColor: "#7f5df0",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 0.5,
      elevation: 5,
      position: "absolute",
      bottom: 25,
      left: 20,
      right: 20,
      borderRadius: 15,
      height: 90,
    },
    item: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  export default TaskTabNavigation