import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfilesScreen() {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f8fafc" }}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <View className="w-10 h-10 items-center justify-center">
          <MaterialIcons name="rocket-launch" size={32} color="#33c55e" />
        </View>
        <View className="flex-1 items-center">
          <Text
            className="text-[10px] font-extrabold uppercase tracking-widest"
            style={{ color: "rgba(51, 197, 94, 0.6)" }}
          >
            HOUSEHOLD HUB
          </Text>
        </View>
        <View className="w-10 h-10 items-center justify-center">
          <MaterialIcons name="settings" size={24} color="#94a3b8" />
        </View>
      </View>

      {/* Main Content */}
      <View className="flex-1 items-center px-8 pt-6 pb-12">
        {/* Title Section */}
        <View className="items-center mb-12">
          <Text
            className="text-3xl font-extrabold mb-3 text-center"
            style={{ color: "#0F172A" }}
          >
            Who's using <Text style={{ color: "#33c55e" }}>TaskQuest</Text>?
          </Text>
          <Text className="text-base font-medium" style={{ color: "#64748b" }}>
            Pick your profile to start your adventure
          </Text>
        </View>

        {/* Profile Grid */}
        <View className="w-full max-w-sm" style={{ gap: 48 }}>
          {/* Row 1 */}
          <View className="flex-row justify-between">
            {/* Mom Profile */}
            <TouchableOpacity
              className="items-center"
              activeOpacity={0.7}
              onPress={() => router.push("/(tabs)/pin")}
            >
              <View
                className="relative mb-4"
                style={{ width: 112, height: 112 }}
              >
                <View
                  className="w-full h-full rounded-full overflow-hidden"
                  style={styles.profileShadow}
                >
                  <Image
                    source={{
                      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBRc58mVCFX4yGJmy0IRqEblRIOCfj8N-iX7jtvJ3182slvmUMAJ4JfeTBoy_wsgtPytJpVFtmvMB6hwHTW-rK7QhgYV0AefGF61SIduNbCBOodC01aFmdMTDU_WvO4Jh_5MFymsYubQbQ-HU4smnuO19ZmFzDH-9VbrdbjqSD5lybER0jpew3ZJJZaoLqIJ5XG-4es9ZySxAuC5_wPMcDYhWk8kXM1PdAZS8N3H6S8J1biTT5HUp5PsLl-_bTTYe3WCgxjMOPiw",
                    }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full"
                  style={styles.badgeShadow}
                >
                  <MaterialIcons name="lock" size={14} color="#33c55e" />
                </View>
              </View>
              <Text
                className="text-lg font-extrabold"
                style={{ color: "#33c55e" }}
              >
                Mom
              </Text>
              <Text
                className="text-[10px] font-bold uppercase tracking-widest mt-0.5"
                style={{ color: "#94a3b8" }}
              >
                MANAGER
              </Text>
            </TouchableOpacity>

            {/* Liam Profile */}
            <TouchableOpacity className="items-center" activeOpacity={0.7}>
              <View
                className="relative mb-4"
                style={{ width: 112, height: 112 }}
              >
                <View
                  className="w-full h-full rounded-full overflow-hidden"
                  style={styles.profileShadow}
                >
                  <Image
                    source={{
                      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhZjmkMnt-R0_8i-3VRkd-_abYhzBvI_pKSM88CLYDkvGW7fPmtxZ0nHWnlyp1iy2GorgKuh5O1-nki12rnE_50sxVQHZ1fmnyujtu2gMWanUoV81gIY9mgpHgvPr0AnFWTL6AxjKJ49Td6mcEGyXQgW3ck6hnSZJIU9bgJucXMlQAypgxre7sp_lrW3dE1ltYo5C5fhIJKb0PhK-EfYBjg920bifl27aNV8ZLoKSryqMu0beO78hM7SUeLcQ_4mRW04Zf2QiuVg",
                    }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#33c55e" }}
                >
                  <Text className="text-[9px] font-black text-white">
                    LVL 5
                  </Text>
                </View>
              </View>
              <Text
                className="text-lg font-extrabold"
                style={{ color: "#33c55e" }}
              >
                Liam
              </Text>
              <Text
                className="text-[10px] font-bold uppercase tracking-widest mt-0.5"
                style={{ color: "#94a3b8" }}
              >
                EXPLORER
              </Text>
            </TouchableOpacity>
          </View>

          {/* Row 2 */}
          <View className="flex-row justify-between">
            {/* Sophia Profile */}
            <TouchableOpacity className="items-center" activeOpacity={0.7}>
              <View
                className="relative mb-4"
                style={{ width: 112, height: 112 }}
              >
                <View
                  className="w-full h-full rounded-full overflow-hidden"
                  style={styles.profileShadow}
                >
                  <Image
                    source={{
                      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp6RcUYtKOiEnx8ncfmC08bkSqhRsEzAycRNyZaSAgv5XpVTg53Xrm15_IJYxrP4OpSpLj44j3EQOraKOxtVmoadjtY524sP1VvBbmqoHyLb8E7hvfvCjnKgOsVPob1-qYbycuuZuatX5ZKPD6VRSTrCpW1CGYcdui66OY6AdWYOnzSvCazTO4aUeT4vvQDk_j6mYxm0dDm9GgYhtxIYQ5C7Tb7ZIh5f9Inp2U0bt-VaXhuqJqm2XvkGn75Ljvr-hrdl0INaJwjQ",
                    }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#33c55e" }}
                >
                  <Text className="text-[9px] font-black text-white">
                    LVL 3
                  </Text>
                </View>
              </View>
              <Text
                className="text-lg font-extrabold"
                style={{ color: "#33c55e" }}
              >
                Sophia
              </Text>
              <Text
                className="text-[10px] font-bold uppercase tracking-widest mt-0.5"
                style={{ color: "#94a3b8" }}
              >
                QUESTER
              </Text>
            </TouchableOpacity>

            {/* Add New Profile */}
            <TouchableOpacity
              className="items-center"
              activeOpacity={0.7}
              onPress={() => router.push("/(tabs)/pin?mode=add-new")}
            >
              <View
                className="mb-4 rounded-full border-2 border-dashed items-center justify-center"
                style={{ width: 112, height: 112, borderColor: "#cbd5e1" }}
              >
                <MaterialIcons name="add-circle" size={48} color="#cbd5e1" />
              </View>
              <Text
                className="text-lg font-extrabold"
                style={{ color: "#94a3b8" }}
              >
                Add New
              </Text>
              <Text
                className="text-[10px] font-bold uppercase tracking-widest mt-0.5"
                style={{ color: "#94a3b8" }}
              >
                NEW ALLY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="px-8 pb-8 items-center" style={{ gap: 24 }}>
        {/* Manage Household Button */}
        <TouchableOpacity
          className="w-full max-w-[280px] h-14 rounded-2xl flex-row items-center justify-center"
          style={{
            backgroundColor: "#ffffff",
            borderWidth: 1,
            borderColor: "#e2e8f0",
          }}
          activeOpacity={0.9}
        >
          <MaterialIcons name="family-restroom" size={20} color="#33c55e" />
          <Text className="text-sm font-bold ml-3" style={{ color: "#33c55e" }}>
            Manage Household
          </Text>
        </TouchableOpacity>

        {/* Bottom Navigation */}
        <View className="flex-row items-center" style={{ gap: 48 }}>
          <Link href="/" asChild>
            <TouchableOpacity className="items-center">
              <MaterialIcons name="home" size={28} color="#33c55e" />
            </TouchableOpacity>
          </Link>
          <TouchableOpacity className="items-center">
            <MaterialIcons name="bar-chart" size={28} color="#94a3b8" />
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <MaterialIcons name="help-outline" size={28} color="#94a3b8" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileShadow: {
    shadowColor: "#33c55e",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 12.5,
    elevation: 8,
    borderWidth: 4,
    borderColor: "#ffffff",
  },
  badgeShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
