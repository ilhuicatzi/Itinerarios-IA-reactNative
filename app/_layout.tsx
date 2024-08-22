import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import CreateTripProvider from "@/contexts/CreteTripContext";

export default function RootLayout() {
  
  useFonts({
    outfit: require("@/assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("@/assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("@/assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <>
    <CreateTripProvider>
      <StatusBar style="inverted" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripProvider>
    </>
  );
}
