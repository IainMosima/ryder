import { Stack } from "expo-router";
import "react-native-reanimated";

const layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default layout;
