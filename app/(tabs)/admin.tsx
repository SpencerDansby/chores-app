import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AdminDashboardScreen() {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f8fafc" }}>
      {/* Header */}
      <View
        className="flex-row items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: "#e6e2db", backgroundColor: "rgba(248, 247, 245, 0.8)" }}
      >
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            className="w-10 h-10 rounded-full items-center justify-center"
            style={{ backgroundColor: "rgba(244, 168, 37, 0.2)" }}
            onPress={() => router.push("/(tabs)/profiles")}
            activeOpacity={0.7}
          >
            <MaterialIcons name="arrow-back" size={24} color="#f4a825" />
          </TouchableOpacity>
          <View>
            <Text
              className="text-[10px] uppercase tracking-widest font-bold"
              style={{ color: "#8a7b60" }}
            >
              Household Admin
            </Text>
            <Text className="text-lg font-extrabold" style={{ color: "#181511" }}>
              TaskQuest Central
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="w-10 h-10 items-center justify-center relative">
            <MaterialIcons name="notifications" size={24} color="#181511" />
            <View
              className="absolute top-2 right-2 w-2 h-2 rounded-full"
              style={{ backgroundColor: "#ef4444", borderWidth: 2, borderColor: "#f8fafc" }}
            />
          </TouchableOpacity>
          <View
            className="w-10 h-10 rounded-full border-2 overflow-hidden"
            style={{ borderColor: "#f4a825" }}
          >
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2NzUAgb4A1HKn9u5TpW9o1DOvaUsEIiKS8tYjPn2IrpTVf6nI9hwwrDTjgJ0LgwiG_Eok5R-nL4CXZ5K0bHgBfaGQ4olaFEXHn0CPh3y0iPYRNYZ8pQ_m6ULj21OfmYrkK14iu_iSL5GWfze12pjgQfoFenZOefl9t1GuKf-fKmaK_xj-EFgOIAl2pApcSPNSjnaGR2glVvFAbL1mGuR3_10liTXlf_jg-Ednidp-pkfp71E4pknWcRJ3uTGItY0Aq3q_TZx-Pg",
              }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 py-4" showsVerticalScrollIndicator={false}>
        {/* Summary Cards */}
        <View className="flex-row gap-3 mb-6">
          <View
            className="flex-1 p-4 rounded-xl border"
            style={{ backgroundColor: "#ffffff", borderColor: "#e6e2db" }}
          >
            <Text className="text-xs font-medium mb-1" style={{ color: "#8a7b60" }}>
              Total Child Balances
            </Text>
            <Text className="text-2xl font-extrabold mb-2" style={{ color: "#181511" }}>
              $1,450.00
            </Text>
            <View className="flex-row items-center">
              <MaterialIcons name="trending-up" size={12} color="#22c55e" />
              <Text className="text-[10px] font-bold ml-1" style={{ color: "#22c55e" }}>
                +12% THIS MONTH
              </Text>
            </View>
          </View>
          <View
            className="flex-1 p-4 rounded-xl border"
            style={{ backgroundColor: "#ffffff", borderColor: "#e6e2db" }}
          >
            <Text className="text-xs font-medium mb-1" style={{ color: "#8a7b60" }}>
              Pending Payouts
            </Text>
            <Text className="text-2xl font-extrabold mb-2" style={{ color: "#181511" }}>
              $85.25
            </Text>
            <View className="flex-row items-center">
              <MaterialIcons name="timer" size={12} color="#f4a825" />
              <Text className="text-[10px] font-bold ml-1" style={{ color: "#f4a825" }}>
                6 TASKS WAITING
              </Text>
            </View>
          </View>
        </View>

        {/* Create Task */}
        <TouchableOpacity
          className="w-full py-4 rounded-full flex-row items-center justify-center mb-6"
          style={{
            backgroundColor: "#22c55e",
            shadowColor: "#22c55e",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 12,
            elevation: 6,
            gap: 10,
          }}
          onPress={() => router.push("/(tabs)/create-task")}
          activeOpacity={0.95}
        >
          <MaterialIcons name="add-circle" size={22} color="#ffffff" />
          <Text className="text-base font-extrabold" style={{ color: "#ffffff" }}>
            Create New Task
          </Text>
        </TouchableOpacity>

        {/* Child Ledger Section */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold tracking-tight" style={{ color: "#181511" }}>
              Child Ledger
            </Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <Text className="text-sm font-bold" style={{ color: "#f4a825" }}>
                Manage
              </Text>
              <MaterialIcons name="chevron-right" size={16} color="#f4a825" />
            </TouchableOpacity>
          </View>
          <View className="flex-row gap-4">
            {/* Liam Card */}
            <View
              className="flex-1 p-4 rounded-xl border items-center"
              style={{ backgroundColor: "#ffffff", borderColor: "#e6e2db" }}
            >
                <View className="relative mb-3">
                  <Image
                    source={{
                      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvJkaVoW4M2OpKQTy3yBeHB52lWUfovT1bXWYuYWMT37sGtAkF2wVeyS2EoULeq6c3jlV-5qFvLpSjlTXyh3fQHxa4vmkUZD0Q8z5MO_2q1sxqoJWFUhwsFZV9Q8nlXgVC1AgfY4qLwCfVl0a6QdsiyrRdt2hr7UgoDDliIiyilFJTYH8yOtYMFZHE9pICsSc8eDS4YICqjgHC-Bk3PpKOUtZF4Ffd-N1deMi76Jl6AXqXdJxjLCMOMgzJ-s7DoDIsxWkCXyFjfw",
                    }}
                    style={{ width: 64, height: 64, borderRadius: 9999 }}
                    resizeMode="cover"
                  />
                  <View
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2"
                    style={{ backgroundColor: "#22c55e", borderColor: "#ffffff" }}
                  />
                </View>
                <Text className="font-bold text-base mb-1" style={{ color: "#181511" }}>
                  Liam
                </Text>
                <Text className="text-lg font-extrabold mb-3" style={{ color: "#22c55e" }}>
                  $145.50
                </Text>
                <View className="w-full h-1 rounded-full mb-1" style={{ backgroundColor: "#e5e7eb" }}>
                  <View className="h-full rounded-full" style={{ backgroundColor: "#f4a825", width: "65%" }} />
                </View>
                <Text className="text-[10px] font-bold" style={{ color: "#8a7b60" }}>
                  65% OF GOAL
                </Text>
              </View>

            {/* Sophia Card */}
            <View
              className="flex-1 p-4 rounded-xl border items-center"
              style={{ backgroundColor: "#ffffff", borderColor: "#e6e2db" }}
            >
                <View className="relative mb-3">
                  <Image
                    source={{
                      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoK-NoACRUETu_o2JZkNZmG1kEneacG4eNqoaExu1yl3kzWygi_DGk14_zEN_8uVpzQmXmr4iMk4NQdKrrAO8nGb2PR4VInEE0Ype77SEfuIiTc36HRcjNMNvfBo26juZotC9vy8TR-nLJjKPTZNhN64YDRFDJNFXOSO3bzx8gTiaXThjNN7BGojaNzdKiXb6XiDLGwMPVXUGa2Pa6xPK4z6wzjnmjaRDjhWAuvyZ7Am_3S4aGub0xA8YFiNxTrbh9m7pL0TGOoQ",
                    }}
                    style={{ width: 64, height: 64, borderRadius: 9999 }}
                    resizeMode="cover"
                  />
                  <View
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2"
                    style={{ backgroundColor: "#22c55e", borderColor: "#ffffff" }}
                  />
                </View>
                <Text className="font-bold text-base mb-1" style={{ color: "#181511" }}>
                  Sophia
                </Text>
                <Text className="text-lg font-extrabold mb-3" style={{ color: "#22c55e" }}>
                  $230.25
                </Text>
                <View className="w-full h-1 rounded-full mb-1" style={{ backgroundColor: "#e5e7eb" }}>
                  <View className="h-full rounded-full" style={{ backgroundColor: "#f4a825", width: "90%" }} />
                </View>
                <Text className="text-[10px] font-bold" style={{ color: "#8a7b60" }}>
                  90% OF GOAL
                </Text>
              </View>
            </View>
          </View>
        {/* Child Ledger Section End */}

        {/* Approval Queue Section */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold tracking-tight" style={{ color: "#181511" }}>
              Approval Queue
            </Text>
            <View
              className="px-2 py-1 rounded-full"
              style={{ backgroundColor: "rgba(244, 168, 37, 0.2)" }}
            >
              <Text className="text-xs font-extrabold" style={{ color: "#f4a825" }}>
                3 PENDING
              </Text>
            </View>
          </View>
          <View style={{ gap: 12 }}>
            {/* Task 1 */}
            <View
              className="p-4 rounded-xl border"
              style={{ backgroundColor: "#ffffff", borderColor: "#e6e2db" }}
            >
              <View className="flex-row gap-4">
                <View
                  className="w-12 h-12 rounded-lg items-center justify-center"
                  style={{ backgroundColor: "#f0f9ff" }}
                >
                  <MaterialIcons name="flatware" size={24} color="#3b82f6" />
                </View>
                <View className="flex-1">
                  <View className="flex-row justify-between items-start mb-4">
                    <View>
                      <Text className="font-bold text-sm mb-1" style={{ color: "#181511" }}>
                        Empty Dishwasher
                      </Text>
                      <Text className="text-xs" style={{ color: "#8a7b60" }}>
                        Completed by <Text className="font-bold">Liam</Text> • 10m ago
                      </Text>
                    </View>
                    <Text className="text-sm font-extrabold" style={{ color: "#22c55e" }}>
                      +$2.00
                    </Text>
                  </View>
                  <View className="flex-row gap-2">
                    <TouchableOpacity
                      className="flex-1 py-2 rounded-full flex-row items-center justify-center gap-1"
                      style={{ backgroundColor: "#22c55e" }}
                      activeOpacity={0.8}
                    >
                      <MaterialIcons name="check-circle" size={16} color="#ffffff" />
                      <Text className="text-xs font-bold" style={{ color: "#ffffff" }}>
                        Approve
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className="flex-1 py-2 rounded-full border"
                      style={{ borderColor: "#e6e2db" }}
                      activeOpacity={0.8}
                    >
                      <Text className="text-xs font-bold text-center" style={{ color: "#8a7b60" }}>
                        Reject
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            {/* Task 2 */}
            <View
              className="p-4 rounded-xl border"
              style={{ backgroundColor: "#ffffff", borderColor: "#e6e2db" }}
            >
              <View className="flex-row gap-4">
                <View
                  className="w-12 h-12 rounded-lg items-center justify-center"
                  style={{ backgroundColor: "#fef2f2" }}
                >
                  <MaterialIcons name="cleaning-services" size={24} color="#ef4444" />
                </View>
                <View className="flex-1">
                  <View className="flex-row justify-between items-start mb-3">
                    <View>
                      <Text className="font-bold text-sm mb-1" style={{ color: "#181511" }}>
                        Sweep Kitchen Floor
                      </Text>
                      <Text className="text-xs mb-2" style={{ color: "#8a7b60" }}>
                        Completed by <Text className="font-bold">Sophia</Text> • 1h ago
                      </Text>
                      <TouchableOpacity
                        className="flex-row items-center gap-2 p-2 rounded-lg border border-dashed"
                        style={{ backgroundColor: "#f8fafc", borderColor: "#e6e2db" }}
                        activeOpacity={0.7}
                      >
                        <MaterialIcons name="image" size={14} color="#8a7b60" />
                        <Text className="text-[10px] font-bold" style={{ color: "#8a7b60" }}>
                          VIEW PHOTO PROOF
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text className="text-sm font-extrabold" style={{ color: "#22c55e" }}>
                      +$5.00
                    </Text>
                  </View>
                  <View className="flex-row gap-2">
                    <TouchableOpacity
                      className="flex-1 py-2 rounded-full flex-row items-center justify-center gap-1"
                      style={{ backgroundColor: "#22c55e" }}
                      activeOpacity={0.8}
                    >
                      <MaterialIcons name="check-circle" size={16} color="#ffffff" />
                      <Text className="text-xs font-bold" style={{ color: "#ffffff" }}>
                        Approve
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      className="flex-1 py-2 rounded-full border"
                      style={{ borderColor: "#e6e2db" }}
                      activeOpacity={0.8}
                    >
                      <Text className="text-xs font-bold text-center" style={{ color: "#8a7b60" }}>
                        Reject
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Managerial Activity Section */}
        <View className="mb-8">
          <Text className="text-xl font-bold tracking-tight mb-4" style={{ color: "#181511" }}>
            Managerial Activity
          </Text>
          <View
            className="rounded-xl border overflow-hidden"
            style={{ backgroundColor: "#ffffff", borderColor: "#e6e2db" }}
          >
            <View
              className="p-4 border-b flex-row items-center justify-between"
              style={{ borderColor: "#e6e2db" }}
            >
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="analytics" size={20} color="#f4a825" />
                <Text className="text-sm font-bold" style={{ color: "#181511" }}>
                  Weekly Performance
                </Text>
              </View>
              <Text className="text-[10px] font-bold" style={{ color: "#8a7b60" }}>
                AUG 12 - AUG 18
              </Text>
            </View>
            <View className="p-4" style={{ gap: 16 }}>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <View className="w-2 h-2 rounded-full" style={{ backgroundColor: "#f4a825" }} />
                  <Text className="text-sm" style={{ color: "#8a7b60" }}>
                    Tasks Assigned
                  </Text>
                </View>
                <Text className="font-bold" style={{ color: "#181511" }}>
                  24
                </Text>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <View className="w-2 h-2 rounded-full" style={{ backgroundColor: "#22c55e" }} />
                  <Text className="text-sm" style={{ color: "#8a7b60" }}>
                    Completion Rate
                  </Text>
                </View>
                <Text className="font-bold" style={{ color: "#181511" }}>
                  92%
                </Text>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <View className="w-2 h-2 rounded-full" style={{ backgroundColor: "#3b82f6" }} />
                  <Text className="text-sm" style={{ color: "#8a7b60" }}>
                    Total Rewards
                  </Text>
                </View>
                <Text className="font-bold" style={{ color: "#181511" }}>
                  $124.00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
