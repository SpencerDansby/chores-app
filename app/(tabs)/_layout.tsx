import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null, // This removes it from the tab bar
          tabBarStyle: { display: "none" }, // Hide tab bar on this screen
        }}
      />
      <Tabs.Screen
        name="profiles"
        options={{
          href: null, // Hide from tab bar
          tabBarStyle: { display: "none" }, // Hide tab bar on this screen
        }}
      />
      <Tabs.Screen
        name="pin"
        options={{
          href: null, // Hide from tab bar
          tabBarStyle: { display: "none" }, // Hide tab bar on this screen
        }}
      />
      <Tabs.Screen
        name="add-profile"
        options={{
          href: null, // Hide from tab bar
          tabBarStyle: { display: "none" }, // Hide tab bar on this screen
        }}
      />
      <Tabs.Screen
        name="admin"
        options={{
          href: null, // Hide from tab bar
          tabBarStyle: { display: "none" }, // Hide tab bar on this screen
        }}
      />
      <Tabs.Screen
        name="create-task"
        options={{
          href: null, // Hide from tab bar
          tabBarStyle: { display: "none" }, // Hide tab bar on this screen
        }}
      />
      <Tabs.Screen
        name="select-icon"
        options={{
          href: null, // Hide from tab bar
          tabBarStyle: { display: "none" }, // Hide tab bar on this screen
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
