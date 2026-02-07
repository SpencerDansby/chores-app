import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PinScreen() {
  const { mode } = useLocalSearchParams<{ mode?: string }>();
  const [pin, setPin] = useState("");

  // Auto-navigate based on mode when PIN is complete
  useEffect(() => {
    if (pin.length === 4) {
      // Small delay to show the PIN completion visually
      const timer = setTimeout(() => {
        if (mode === "add-new") {
          router.push("/(tabs)/add-profile");
        } else {
          // Regular flow: navigate to admin dashboard
          router.push("/(tabs)/admin");
        }
        // Clear PIN after navigation
        setPin("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pin, mode]);

  // Clear PIN when component unmounts (navigating away)
  useEffect(() => {
    return () => {
      setPin("");
    };
  }, []);

  const handleNumberPress = (num: string) => {
    if (pin.length < 4) {
      setPin(pin + num);
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  const handleBack = () => {
    setPin("");
    router.back();
  };

  const handleBackToProfiles = () => {
    setPin("");
    router.push("/(tabs)/profiles");
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f8fafc" }}>
      {/* Top Navigation */}
      <View className="flex-row items-center px-6 pt-4">
        <TouchableOpacity
          className="w-10 h-10 rounded-full items-center justify-center"
          style={{ backgroundColor: "#ffffff" }}
          onPress={handleBack}
        >
          <MaterialIcons name="arrow-back" size={24} color="#181511" />
        </TouchableOpacity>
      </View>

      {/* Header / Identity */}
      <View className="items-center mt-2 px-6">
        <View className="relative mb-6">
          <View
            className="w-24 h-24 rounded-full p-1"
            style={{ borderWidth: 4, borderColor: "rgba(244, 168, 37, 0.2)" }}
          >
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnSqn2OzdRaBlT1jk4X9OQagqkwMCUTp-GJitvIQaFwiyS8MSJwr0ThpQ-GndcX5ngLIZ_U1h9mpKL-eYrEI0s8U7kStut5lHSftCc_LyLxNiuFmOQS9yy1rKTPbvTT6ad8z7F7LaqPOYyM6GZERv5aMBRL0ZUEgBF3rbtw8wDfKrVwD9kpHN55IGJpNUyVlmBVxVswwVoiUlNMzt4wYcslUfTOKWSJBR-bff8KZ_lSVwd1-xHXq_6Ts1ISxF8FeDB_1uPFVSMCw",
              }}
              style={{ width: "100%", height: "100%", borderRadius: 9999 }}
              resizeMode="cover"
            />
          </View>
          <View
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full items-center justify-center"
            style={{
              backgroundColor: "#f4a825",
              borderWidth: 2,
              borderColor: "#ffffff",
            }}
          >
            <MaterialIcons name="lock" size={14} color="#ffffff" />
          </View>
        </View>
        <Text className="text-2xl font-bold mb-2" style={{ color: "#181511" }}>
          Welcome back, Sarah
        </Text>
        <Text
          className="text-center max-w-[280px]"
          style={{ color: "#8a7b60" }}
        >
          Enter your 4-digit PIN to access administrative settings.
        </Text>
      </View>

      {/* Numeric Keypad */}
      <View className="flex-1 pb-12 px-8" style={{ justifyContent: "center" }}>
        {/* PIN Visual Indicators - Above Keypad */}
        <View
          className="flex-row justify-center items-center mb-6"
          style={{ gap: 24 }}
        >
          {[0, 1, 2, 3].map((index) => (
            <View
              key={index}
              className="w-4 h-4 rounded-full"
              style={
                index < pin.length
                  ? {
                      backgroundColor: "#f4a825",
                      shadowColor: "#f4a825",
                      shadowOffset: { width: 0, height: 0 },
                      shadowOpacity: 0.2,
                      shadowRadius: 8,
                      elevation: 4,
                    }
                  : { borderWidth: 2, borderColor: "#e6e2db" }
              }
            />
          ))}
        </View>
        <View className="max-w-sm mx-auto w-full" style={{ gap: 16 }}>
          {/* Row 1 */}
          <View className="flex-row justify-between" style={{ gap: 24 }}>
            {[1, 2, 3].map((num) => (
              <TouchableOpacity
                key={num}
                className="rounded-full items-center justify-center"
                style={{ backgroundColor: "#ffffff", width: 70, height: 70 }}
                onPress={() => handleNumberPress(num.toString())}
                activeOpacity={0.7}
              >
                <Text
                  className="text-xl font-bold"
                  style={{ color: "#181511" }}
                >
                  {num}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 2 */}
          <View className="flex-row justify-between" style={{ gap: 24 }}>
            {[4, 5, 6].map((num) => (
              <TouchableOpacity
                key={num}
                className="rounded-full items-center justify-center"
                style={{ backgroundColor: "#ffffff", width: 70, height: 70 }}
                onPress={() => handleNumberPress(num.toString())}
                activeOpacity={0.7}
              >
                <Text
                  className="text-xl font-bold"
                  style={{ color: "#181511" }}
                >
                  {num}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 3 */}
          <View className="flex-row justify-between" style={{ gap: 24 }}>
            {[7, 8, 9].map((num) => (
              <TouchableOpacity
                key={num}
                className="rounded-full items-center justify-center"
                style={{ backgroundColor: "#ffffff", width: 70, height: 70 }}
                onPress={() => handleNumberPress(num.toString())}
                activeOpacity={0.7}
              >
                <Text
                  className="text-xl font-bold"
                  style={{ color: "#181511" }}
                >
                  {num}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Row 4 */}
          <View className="flex-row justify-between items-center" style={{ gap: 24 }}>
            <View style={{ width: 70 }} />
            <TouchableOpacity
              className="rounded-full items-center justify-center"
              style={{ backgroundColor: "#ffffff", width: 65, height: 65 }}
              onPress={() => handleNumberPress("0")}
              activeOpacity={0.7}
            >
              <Text className="text-xl font-bold" style={{ color: "#181511" }}>
                0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="items-center justify-center"
              style={{ width: 70, height: 70 }}
              onPress={handleBackspace}
              activeOpacity={0.7}
            >
              <MaterialIcons name="backspace" size={24} color="#f4a825" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Secondary Actions */}
        <View className="mt-10 items-center" style={{ gap: 16 }}>
          <TouchableOpacity>
            <Text
              className="text-sm font-bold uppercase tracking-wide"
              style={{ color: "#f4a825" }}
            >
              FORGOT PIN?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row items-center px-6 py-3 rounded-full"
            style={{ backgroundColor: "rgba(230, 226, 219, 0.3)" }}
            onPress={handleBackToProfiles}
            activeOpacity={0.7}
          >
            <MaterialIcons name="group" size={20} color="#181511" />
            <Text
              className="text-sm font-semibold ml-2"
              style={{ color: "#181511" }}
            >
              Back to Profile Picker
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Indicator */}
      <View
        className="h-1.5 w-32 mx-auto mb-2 rounded-full"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      />
    </SafeAreaView>
  );
}
