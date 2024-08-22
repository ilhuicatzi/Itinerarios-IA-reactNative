import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "Mi Viaje",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen name="discover" 
      options={{
        tabBarLabel: "Descubrir",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="compass" color={color} size={size} />
        ),
      }}
      />
      <Tabs.Screen name="profile" 
      options={{
        tabBarLabel: "Perfil",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}
      />
    </Tabs>
  );
}
