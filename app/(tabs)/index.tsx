import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f8fafc" }}>
      {/* Background decorative icons */}
      <View className="absolute inset-0" style={{ pointerEvents: "none" }}>
        <MaterialIcons
          name="cleaning-services"
          size={64}
          color="#33c55e"
          style={[
            styles.iconFloat,
            { top: 40, left: 40, transform: [{ rotate: "12deg" }] },
          ]}
        />
        <MaterialIcons
          name="cleaning-services"
          size={48}
          color="#33c55e"
          style={[
            styles.iconFloat,
            { top: "25%", right: -10, transform: [{ rotate: "-12deg" }] },
          ]}
        />
        <MaterialIcons
          name="grass"
          size={80}
          color="#33c55e"
          style={[
            styles.iconFloat,
            { bottom: "25%", left: -20, transform: [{ rotate: "45deg" }] },
          ]}
        />
        <MaterialIcons
          name="payments"
          size={48}
          color="#33c55e"
          style={[
            styles.iconFloat,
            { bottom: 40, right: 40, transform: [{ rotate: "-6deg" }] },
          ]}
        />
        <MaterialIcons
          name="auto-fix-high"
          size={40}
          color="#33c55e"
          style={[styles.iconFloat, { top: "50%", left: "33%", opacity: 0.05 }]}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo Section */}
        <View className="items-center mb-12">
          <View
            className="items-center justify-center p-5 mb-6 rounded-[2rem]"
            style={{ backgroundColor: "rgba(51, 197, 94, 0.1)" }}
          >
            <MaterialIcons
              name="account-balance-wallet"
              size={48}
              color="#33c55e"
            />
          </View>
          <Text
            className="text-4xl font-extrabold mb-3"
            style={{ color: "#0F172A", letterSpacing: -0.5 }}
          >
            TaskQuest
          </Text>
          <Text className="text-lg" style={{ color: "#64748b" }}>
            Financial literacy starts at home.
          </Text>
        </View>

        {/* Input Fields */}
        <View className="w-full" style={{ gap: 16 }}>
          {/* Admin Email Input */}
          <View className="relative">
            <View
              className="absolute left-0"
              style={{
                top: 0,
                bottom: 0,
                paddingLeft: 16,
                justifyContent: "center",
              }}
            >
              <MaterialIcons
                name="admin-panel-settings"
                size={24}
                color="#94a3b8"
              />
            </View>
            <TextInput
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl"
              style={styles.input}
              placeholder="Admin Email"
              placeholderTextColor="#94a3b8"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Password Input */}
          <View className="relative">
            <View
              className="absolute left-0"
              style={{
                top: 0,
                bottom: 0,
                paddingLeft: 16,
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="lock" size={24} color="#94a3b8" />
            </View>
            <TextInput
              className="w-full pl-12 pr-12 py-4 bg-white rounded-2xl"
              style={styles.input}
              placeholder="Secret Password"
              placeholderTextColor="#94a3b8"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Pressable
              className="absolute right-0"
              style={{
                top: 0,
                bottom: 0,
                paddingRight: 16,
                justifyContent: "center",
              }}
              onPress={() => setShowPassword(!showPassword)}
            >
              <MaterialIcons
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#94a3b8"
              />
            </Pressable>
          </View>

          {/* Forgot Password Link */}
          <View className="flex-row justify-end" style={{ paddingTop: 4 }}>
            <Pressable>
              <Text className="text-sm font-bold" style={{ color: "#33c55e" }}>
                Forgot Password?
              </Text>
            </Pressable>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            className="w-full py-5 rounded-2xl mt-6"
            style={styles.button}
            activeOpacity={0.9}
            onPress={() => router.push("/(tabs)/profiles")}
          >
            <Text
              className="text-lg uppercase font-extrabold text-center"
              style={{ color: "#ffffff", letterSpacing: 1 }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* Create Account Link */}
        <View className="mt-12 items-center">
          <Text className="font-medium" style={{ color: "#64748b" }}>
            New Household?{" "}
            <Pressable>
              <Text
                className="font-bold"
                style={{ color: "#33c55e", textDecorationLine: "underline" }}
              >
                Create Account
              </Text>
            </Pressable>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconFloat: {
    position: "absolute",
    opacity: 0.12,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    maxWidth: 448,
    width: "100%",
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  button: {
    backgroundColor: "#33c55e",
    shadowColor: "#33c55e",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
});
