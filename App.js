import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { APPS } from './src/data/apps';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#F2F2F7' },
          headerShadowVisible: false,
          headerTintColor: '#007AFF',
          headerTitleStyle: { color: '#000' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Apps' }} />

        {APPS.map((app) => (
          <Stack.Screen
            key={app.id}
            name={app.screen}
            component={DetailScreen}
            initialParams={{ title: app.title, message: app.message, icon: app.icon }}
            options={{ title: app.title }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
