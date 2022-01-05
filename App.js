import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ExplorerScreen from "./screens/ExploreScreen";
import ActivityScreen from "./screens/ActivityScreen";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor='white'
        barStyle={{
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 25,
          elevation: 0,
          overflow: "hidden",
          borderRadius: 15,
          height: 70,
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarColor: "#ff7f50",
            tabBarIcon: ({ color }) => (
              <Icon name='ios-home' color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name='Exp'
          component={ExplorerScreen}
          options={{
            tabBarLabel: "Explorer",
            tabBarColor: "#ff7f50",
            tabBarIcon: ({ color }) => (
              <Icon name='ios-search' color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarColor: "#ff7f50",
            tabBarIcon: ({ color }) => (
              <Icon name='ios-settings' color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name='Activity'
          component={ActivityScreen}
          options={{
            tabBarLabel: "Activity",
            tabBarColor: "#ff7f50",
            tabBarIcon: ({ color }) => (
              <Icon name='ios-heart' color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarColor: "#ff7f50",
            tabBarIcon: ({ color }) => (
              <Icon name='ios-person' color={color} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
