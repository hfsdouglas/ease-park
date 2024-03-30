import Login from "@/screens/Login";

import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.screen}>
      <SafeAreaProvider>
        <Login />
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
      width: '100%',
      height: '100%',
  }
});