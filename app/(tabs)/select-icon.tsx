import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IconOption {
  name: keyof typeof MaterialIcons.glyphMap;
  label: string;
  color: string;
}

const iconOptions: IconOption[] = [
  { name: "cleaning-services", label: "Broom", color: "#22c55e" },
  { name: "local-laundry-service", label: "Laundry", color: "#3b82f6" },
  { name: "flatware", label: "Dishes", color: "#f97316" },
  { name: "grass", label: "Mower", color: "#10b981" },
  { name: "pets", label: "Pet Bowl", color: "#a855f7" },
  { name: "delete", label: "Trash", color: "#f87171" },
  { name: "shopping-cart", label: "Grocery", color: "#f59e0b" },
  { name: "auto-stories", label: "Homework", color: "#6366f1" },
  { name: "water-drop", label: "Watering", color: "#14b8a6" },
  { name: "vacuum", label: "Vacuum", color: "#eab308" },
  { name: "child-care", label: "Babysit", color: "#ec4899" },
  { name: "directions-car", label: "Car Wash", color: "#64748b" },
];

export default function SelectIconScreen() {
  const params = useLocalSearchParams();
  const currentIcon = (params.icon as keyof typeof MaterialIcons.glyphMap) || "cleaning-services";
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof MaterialIcons.glyphMap>(currentIcon);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIcons = iconOptions.filter((icon) =>
    icon.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDone = () => {
    router.push(`/(tabs)/create-task?selectedIcon=${selectedIcon}`);
  };

  const handleClose = () => {
    // Navigate back to create-task page using router.back()
    // This properly closes the modal and returns to the previous screen
    router.back();
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
      <TouchableOpacity
        className="flex-1"
        activeOpacity={1}
        onPress={handleClose}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Close modal"
        style={{ pointerEvents: "auto" }}
      >
        <View className="flex-1" style={{ pointerEvents: "none" }} />
      </TouchableOpacity>

      {/* Bottom Sheet */}
      <View
        className="bg-white rounded-t-[40px]"
        style={{ 
          maxHeight: "90%", 
          backgroundColor: "#ffffff",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          elevation: 24,
        }}
        accessible={true}
        accessibilityViewIsModal={true}
      >
        {/* Handle */}
        <View className="h-8 w-full items-center justify-center pt-2">
          <View className="h-1.5 w-12 rounded-full" style={{ backgroundColor: "#e5e7eb" }} />
        </View>

        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-2">
          <Text className="text-2xl font-bold tracking-tight flex-1" style={{ color: "#1c160d" }}>
            Select Task Icon
          </Text>
          <TouchableOpacity onPress={handleClose} activeOpacity={0.7}>
            <MaterialIcons name="close" size={24} color="#9ca3af" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="px-6 py-4">
          <View
            className="flex-row items-center rounded-full h-14"
            style={{ backgroundColor: "#f3f4f6" }}
          >
            <View className="pl-5">
              <MaterialIcons name="search" size={24} color="#9ca3af" />
            </View>
            <TextInput
              className="flex-1 px-4 text-base font-medium"
              style={{ color: "#181511" }}
              placeholder="Search chores..."
              placeholderTextColor="#9ca3af"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Icon Grid */}
        <ScrollView
          className="flex-1 px-6 pb-4"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 16 }}
        >
          <View className="flex-row flex-wrap" style={{ gap: 16 }}>
            {filteredIcons.map((icon) => {
              const isSelected = selectedIcon === icon.name;
              return (
                <TouchableOpacity
                  key={icon.name}
                  className="items-center"
                  style={{ width: "22%", gap: 8 }}
                  onPress={() => setSelectedIcon(icon.name)}
                  activeOpacity={0.7}
                >
                  <View
                    className="w-full aspect-square rounded-2xl items-center justify-center border-4"
                    style={{
                      backgroundColor: isSelected ? `${icon.color}15` : "#f9fafb",
                      borderColor: isSelected ? "#22c55e" : "transparent",
                      shadowColor: isSelected ? "#22c55e" : "transparent",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: isSelected ? 0.2 : 0,
                      shadowRadius: 8,
                      elevation: isSelected ? 4 : 0,
                    }}
                  >
                    <MaterialIcons name={icon.name} size={36} color={icon.color} />
                    {isSelected && (
                      <View
                        className="absolute -top-1 -right-1 rounded-full items-center justify-center"
                        style={{
                          backgroundColor: "#22c55e",
                          width: 20,
                          height: 20,
                        }}
                      >
                        <MaterialIcons name="check" size={12} color="#ffffff" />
                      </View>
                    )}
                  </View>
                  <Text
                    className="text-xs font-semibold text-center"
                    style={{ color: isSelected ? "#22c55e" : "#6b7280" }}
                  >
                    {icon.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {/* Done Button */}
        <View className="px-6 py-6 border-t" style={{ borderColor: "#e5e7eb" }}>
          <TouchableOpacity
            className="w-full h-16 rounded-full items-center justify-center"
            style={{
              backgroundColor: "#22c55e",
              shadowColor: "#22c55e",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 8,
            }}
            onPress={handleDone}
            activeOpacity={0.95}
          >
            <Text className="text-xl font-bold" style={{ color: "#ffffff" }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
