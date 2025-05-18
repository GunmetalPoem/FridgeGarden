import React from "react";
import { Tabs } from "expo-router";
import { Home, Sprout } from "lucide-react-native";
import Colors from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.lightText,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopColor: Colors.border,
        },
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTitleStyle: {
          color: Colors.text,
          fontWeight: '600',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "My Fridge",
          tabBarLabel: "Fridge",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="garden"
        options={{
          title: "Garden Potential",
          tabBarLabel: "Garden",
          tabBarIcon: ({ color }) => <Sprout size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
