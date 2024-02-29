import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './pages/Home';
import DetailPage from './pages/Detail';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Homepage" component={Homepage}/>
        <Stack.Screen name="Detail" component={DetailPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}