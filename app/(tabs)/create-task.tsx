import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateTaskScreen() {
  const params = useLocalSearchParams();
  const [taskName, setTaskName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [reward, setReward] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof MaterialIcons.glyphMap>("cleaning-services");

  useEffect(() => {
    if (params.selectedIcon) {
      setSelectedIcon(params.selectedIcon as keyof typeof MaterialIcons.glyphMap);
    }
  }, [params.selectedIcon]);


  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f8fafc" }}>
      {/* Header */}
      <View
        className="flex-row items-center justify-between px-4 py-4 border-b"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderColor: "#e6e2db",
        }}
      >
        <TouchableOpacity onPress={() => router.replace("/(tabs)/admin")} activeOpacity={0.7}>
          <Text className="text-base font-medium" style={{ color: "#f4a825" }}>
            Cancel
          </Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold tracking-tight" style={{ color: "#181511" }}>
          Create New Task
        </Text>
        <View style={{ width: 60 }} />
      </View>

      {/* Main Content */}
      <ScrollView
        className="flex-1 px-6 py-6"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 32 }}>
          {/* Icon Selection Section */}
          <View className="items-center" style={{ gap: 12 }}>
            <TouchableOpacity
              className="items-center justify-center rounded-full border-4"
              style={{
                width: 120,
                height: 120,
                backgroundColor: "#ffffff",
                borderColor: "rgba(244, 168, 37, 0.2)",
              }}
              activeOpacity={0.95}
              onPress={() => router.push(`/(tabs)/select-icon?icon=${selectedIcon}`)}
            >
              <MaterialIcons name={selectedIcon} size={56} color="#f4a825" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push(`/(tabs)/select-icon?icon=${selectedIcon}`)}
              activeOpacity={0.7}
            >
              <View className="items-center">
                <Text className="text-xl font-bold tracking-tight" style={{ color: "#181511" }}>
                  Select Task Icon
                </Text>
                <Text className="text-sm font-medium uppercase tracking-widest mt-1" style={{ color: "#f4a825" }}>
                  Tap to change
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Form Section */}
          <View style={{ gap: 20 }}>
            {/* Task Name */}
            <View style={{ gap: 8 }}>
              <Text className="text-sm font-semibold ml-2" style={{ color: "#181511" }}>
                Task Name
              </Text>
              <TextInput
                className="w-full px-6 py-4 text-base rounded-full border"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#e6e2db",
                  color: "#181511",
                }}
                placeholder="e.g. Wash the Dishes"
                placeholderTextColor="rgba(156, 126, 73, 0.6)"
                value={taskName}
                onChangeText={setTaskName}
              />
            </View>

            {/* Instructions */}
            <View style={{ gap: 8 }}>
              <Text className="text-sm font-semibold ml-2" style={{ color: "#181511" }}>
                Instructions
              </Text>
              <TextInput
                className="w-full px-6 py-4 text-base rounded-xl border"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#e6e2db",
                  color: "#181511",
                  minHeight: 100,
                }}
                placeholder="Describe the task instructions..."
                placeholderTextColor="rgba(156, 126, 73, 0.6)"
                value={instructions}
                onChangeText={setInstructions}
                multiline
                textAlignVertical="top"
              />
            </View>

            {/* Reward Amount */}
            <View style={{ gap: 8 }}>
              <Text className="text-sm font-semibold ml-2" style={{ color: "#181511" }}>
                Reward Amount
              </Text>
              <View className="relative w-full">
                <TextInput
                  className="w-full px-6 py-4 text-2xl font-bold rounded-full border"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#e6e2db",
                    color: "#181511",
                    paddingLeft: 40,
                  }}
                  placeholder="0.00"
                  placeholderTextColor="rgba(156, 126, 73, 0.4)"
                  value={reward}
                  onChangeText={setReward}
                  keyboardType="decimal-pad"
                />
                <View
                  className="absolute left-6 items-center justify-center"
                  style={{ top: 0, bottom: 0, zIndex: 10 }}
                >
                  <Text className="text-lg font-bold" style={{ color: "#f4a825" }}>
                    $
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Publish Button */}
      <View
        className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-4"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <TouchableOpacity
          className="w-full py-4 rounded-full flex-row items-center justify-center"
          style={{
            backgroundColor: "#33c55e",
            shadowColor: "#33c55e",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 12,
            elevation: 8,
            gap: 12,
          }}
          activeOpacity={0.95}
        >
          <MaterialIcons name="rocket-launch" size={24} color="#ffffff" />
          <Text className="text-lg font-bold" style={{ color: "#ffffff" }}>
            Publish Task
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
