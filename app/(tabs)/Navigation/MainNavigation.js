import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, Image, Text } from "react-native";
import {Colors} from '../../../assets/colors'
// Screens
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import Home from "../screens/Home";
import Plan from "../screens/Plan";
import Progress from "../screens/Progress";
import Profile from "../screens/Profile";
import WorkOutList from "../screens/WorkOutList";
import WorkOutAllList from "../screens/WorkOutAllList";
import NutritionAllList from "../screens/NutritionAllList";
import NutritionList from "../screens/NutritionList";
import Splash from "../screens/Splash";
import Index from "..";

// Components
import { HapticTab } from "@/components/HapticTab";
import BlurTabBarBackground from "@/components/ui/TabBarBackground.ios";

// Import image icons
import homeIcon from "../../../assets/images/Icons/home.png";
import profileIcon from "../../../assets/images/Icons/user.png";
import plan from "../../../assets/images/Icons/plan.png";
import progress from "../../../assets/images/Icons/progress.png";

// Create navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarButton: HapticTab,
        tabBarBackground: BlurTabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={homeIcon}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Colors.pulpur : "#BDBDBD", // You can adjust colors as needed
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.pulpur : "#BDBDBD",
                fontSize: 12,
              }}
            >
              Home
            </Text>
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Plan"
        component={Plan}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={plan}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Colors.pulpur : "#BDBDBD", // You can adjust colors as needed
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.pulpur : "#BDBDBD",
                fontSize: 12,
              }}
            >
              Plan
            </Text>
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={progress}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Colors.pulpur : "#BDBDBD", // You can adjust colors as needed
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.pulpur : "#BDBDBD",
                fontSize: 12,
              }}
            >
              Progress
            </Text>
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={profileIcon}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? Colors.pulpur : "#BDBDBD", // Adjust color on focus
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.pulpur : "#BDBDBD",
                fontSize: 12,
              }}
            >
              Home
            </Text>
          ),
          headerShown:false
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HomeTabs" component={TabNavigator} />
      <Stack.Screen name="WorkOutAllList" component={WorkOutAllList} />
      <Stack.Screen name="WorkOutList" component={WorkOutList} />
      <Stack.Screen name="NutritionAllList" component={NutritionAllList} />
      <Stack.Screen name="NutritionList" component={NutritionList} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
