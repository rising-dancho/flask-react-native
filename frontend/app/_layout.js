import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: 'Article', // Set a global default title
        headerShown: false, // Show or hide the header globally
      }}
    />
  );
}
