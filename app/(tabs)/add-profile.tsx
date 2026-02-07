import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AVATARS = [
  {
    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB00TisheBbMRDxYX_LGfPD1-llREUj5Sr2x-9D7dUmmLIHbMq-tvtTIf_rwnd5-stKWhCK91ycHn_26yJs6ME54GyVs9-Sxe9zfQ0KD_uycXSxShfLoFRiyOZDcFBDb0_z7MxlA9PsyxtbQHWG6UxK3a2gOINff0qKvQPBPFsQkgcDrxXFrUzAwUN0wLHQnDq1rsy36__9aN_oUgg0pAWCkeC_LUg-t6vGwQp6Qwt1v_yNZM2_1uwjMvoUt1INQ_TdctCxQtX0Kw",
    alt: "Fun cartoon character with glasses and smile",
  },
  {
    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRsaQ_JpvoGr3_hM-Pq2xsz_J_CDGjOpoS9-32VFty0kavOIVtWwMyfqVNHzaxBRr3A9-fIyPPYtCt5fHPHjkM-av9oh1yOExCGSQLMjL9AMQ4N9EkPsKcatfMc26w63m994dZTYrt5C3uz5wpz4pBrnTaMpfkjZaFBQRvvYAp7o7T3qJJ_K4XGau2SWC2xAEF7txWF9Y781VUMru3OrrImCWgmG3Vw7CI8k4cGE0Mcune0pphKHvb2QK5-K2fWeuEjAHYxPOHuQ",
    alt: "Playful cartoon character with purple hair",
  },
  {
    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu1z2O9N45GyDATkvn5j597_gOgZM5CBTOBoGkvFUJHc3TNLrfpvYxVO1vaybLpxnBYlWbwRVEaLq5hqS3byM9EBtbBNUeOJxWbkf-XZHClbCOY112UBkC6_BL82Mh-Ng5jMMz8iqvKCAJFdRKCXyaRqCFN0lMjR7xEMIXO2n_JBxFHGDaf-8Us3F9pElQ5nsjjkz4fKFqCwsXelF0a-nfAbqIyiq5r-2yZ4wKoiRNkIrye0JAODzhObHofogDtqOzAz8pSMMUjQ",
    alt: "Smiling kid character with blue cap",
  },
  {
    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6V5L1IMdmWwDCS-TBtmtD1bqNSxtrthGXyIzqdy49Q_HoweDvzClhj261BaE1_gwcFL5N8Nf6gzSsu0jYqdW6Y5mWvYecVWimnnnZQg8p3lw3Mb-wQyJtzL1gYzsDghn52HTB7WO6SoxKraQMMwNwmjpk1dtGdUy1TjfSW3SeWKhp_wS7neheXPDxeQxGrVSZmafCiYiBsmHLBjrly8NwhfamVksjVumyxIK19HCHmtXGuJaEQyAesYs4AgdSCH-EB55zyhq3Dw",
    alt: "Friendly avatar with pink headband",
  },
  {
    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhthEvQYbHWGoFoAURlwLApBtEptZlz1E18FnVI2M56CbZYeqvpzg6ujjR55Rsg-E6HNkiYStvuxrg9rpDhyB6mTmBQyQ3UcAiWYit0saoKjJ08s2hGllkWcitlwkquccBR0t6KCOic2z7y4nWKUp3JrbMZ8135QDdJzI-2YK_02a2pUsByaoSgFxxI1-URSvVWabj_Ql_fMkppiPQeGmu954xTvomsk6nWLCYm29Ud0DOY3TV7cTgIctD0egNQ3NelwdSKh9-CA",
    alt: "Hipster character with beard and hat",
  },
];

export default function AddProfileScreen() {
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [profileName, setProfileName] = useState("");
  const [profileType, setProfileType] = useState<"child" | "parent">("child");

  const handleCreateProfile = () => {
    if (profileName.trim()) {
      // TODO: Save profile data
      router.push("/(tabs)/profiles");
    }
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f8fafc" }}>
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back-ios-new" size={24} color="#181511" />
        </TouchableOpacity>
        <Text className="text-lg font-bold tracking-tight" style={{ color: "#181511" }}>
          Add Family Profile
        </Text>
        <View className="w-10" />
      </View>

      <ScrollView
        className="flex-1 px-6 py-4"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar Selection Section */}
        <View className="mb-8">
          <View className="items-center mb-6">
            <Text
              className="text-sm font-bold uppercase tracking-widest mb-2"
              style={{ color: "#33c55e" }}
            >
              CHOOSE AN AVATAR
            </Text>
            <Text className="text-xs" style={{ color: "#64748b" }}>
              Pick a fun character for your profile
            </Text>
          </View>

          {/* Avatar Grid */}
          <View className="flex-row flex-wrap justify-center" style={{ gap: 16 }}>
            {AVATARS.map((avatar, index) => (
              <TouchableOpacity
                key={index}
                className="relative"
                style={{ width: 100, height: 100 }}
                onPress={() => setSelectedAvatar(index)}
                activeOpacity={0.7}
              >
                <View
                  className="w-full h-full rounded-full p-1"
                  style={{
                    borderWidth: selectedAvatar === index ? 2 : 2,
                    borderColor: selectedAvatar === index ? "#33c55e" : "transparent",
                    backgroundColor: "#ffffff",
                    shadowColor: selectedAvatar === index ? "#33c55e" : "transparent",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: selectedAvatar === index ? 0.2 : 0,
                    shadowRadius: selectedAvatar === index ? 8 : 0,
                    elevation: selectedAvatar === index ? 4 : 0,
                  }}
                >
                  <Image
                    source={{ uri: avatar.uri }}
                    style={{ width: "100%", height: "100%", borderRadius: 9999 }}
                    resizeMode="cover"
                  />
                </View>
                {selectedAvatar === index && (
                  <View
                    className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5"
                    style={{
                      borderWidth: 2,
                      borderColor: "#ffffff",
                    }}
                  >
                    <View
                      className="rounded-full items-center justify-center"
                      style={{
                        backgroundColor: "#33c55e",
                        width: 20,
                        height: 20,
                      }}
                    >
                      <MaterialIcons name="check" size={12} color="#ffffff" />
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            ))}
            {/* Add New Avatar Option */}
            <TouchableOpacity
              className="relative"
              style={{ width: 100, height: 100 }}
              activeOpacity={0.7}
            >
              <View
                className="w-full h-full rounded-full border-2 border-transparent bg-white items-center justify-center"
                style={{
                  borderColor: "#cbd5e1",
                }}
              >
                <MaterialIcons name="add" size={32} color="#94a3b8" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Name Input */}
        <View className="mb-6">
          <Text className="text-sm font-semibold mb-2 ml-1" style={{ color: "#0F172A" }}>
            Profile Name
          </Text>
          <TextInput
            className="w-full h-14 px-5 rounded-xl border"
            style={[
              styles.input,
              {
                backgroundColor: "#ffffff",
                borderColor: "#e2e8f0",
              },
            ]}
            placeholder="e.g. Charlie"
            placeholderTextColor="#94a3b8"
            value={profileName}
            onChangeText={setProfileName}
            autoCapitalize="words"
          />
        </View>

        {/* Profile Type Selection */}
        <View className="mb-6">
          <Text className="text-sm font-semibold mb-3 ml-1" style={{ color: "#0F172A" }}>
            Profile Type
          </Text>
          <View
            className="flex-row p-1 rounded-xl"
            style={{ backgroundColor: "#e2e8f0", gap: 4 }}
          >
            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center gap-2 py-3 rounded-lg"
              style={{
                backgroundColor: profileType === "child" ? "#ffffff" : "transparent",
                shadowColor: profileType === "child" ? "#000" : "transparent",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: profileType === "child" ? 0.05 : 0,
                shadowRadius: 2,
                elevation: profileType === "child" ? 1 : 0,
              }}
              onPress={() => setProfileType("child")}
              activeOpacity={0.7}
            >
              <MaterialIcons
                name="child-care"
                size={20}
                color={profileType === "child" ? "#181511" : "#64748b"}
              />
              <Text
                className="font-semibold"
                style={{ color: profileType === "child" ? "#181511" : "#64748b" }}
              >
                Child
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center gap-2 py-3 rounded-lg"
              style={{
                backgroundColor: profileType === "parent" ? "#ffffff" : "transparent",
                shadowColor: profileType === "parent" ? "#000" : "transparent",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: profileType === "parent" ? 0.05 : 0,
                shadowRadius: 2,
                elevation: profileType === "parent" ? 1 : 0,
              }}
              onPress={() => setProfileType("parent")}
              activeOpacity={0.7}
            >
              <MaterialIcons
                name="person"
                size={20}
                color={profileType === "parent" ? "#181511" : "#64748b"}
              />
              <Text
                className="font-semibold"
                style={{ color: profileType === "parent" ? "#181511" : "#64748b" }}
              >
                Parent
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-start gap-2 mt-2 px-1">
            <MaterialIcons name="info" size={18} color="#33c55e" />
            <Text className="text-xs leading-relaxed flex-1" style={{ color: "#64748b" }}>
              Child profiles can complete tasks to earn allowances and rewards. Parents can manage
              chores and finances.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer - Create Profile Button */}
      <View className="px-6 py-6 border-t" style={{ borderColor: "#e2e8f0", backgroundColor: "#f8fafc" }}>
        <TouchableOpacity
          className="w-full h-14 rounded-xl flex-row items-center justify-center gap-2"
          style={{
            backgroundColor: profileName.trim() ? "#33c55e" : "#cbd5e1",
            shadowColor: profileName.trim() ? "#33c55e" : "transparent",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: profileName.trim() ? 0.2 : 0,
            shadowRadius: 8,
            elevation: profileName.trim() ? 4 : 0,
          }}
          onPress={handleCreateProfile}
          disabled={!profileName.trim()}
          activeOpacity={0.9}
        >
          <Text
            className="font-bold text-lg"
            style={{ color: profileName.trim() ? "#ffffff" : "#94a3b8" }}
          >
            Create Profile
          </Text>
          <MaterialIcons
            name="rocket-launch"
            size={20}
            color={profileName.trim() ? "#ffffff" : "#94a3b8"}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
});
