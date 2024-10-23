import { Button, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenue sur la page d'accueil !</Text>
      <Button
        title="Aller à la page Détails"
        onPress={() => router.push('../details')}
      />
    </View>
  );
}
