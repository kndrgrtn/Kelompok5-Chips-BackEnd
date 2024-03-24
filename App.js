import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './pages/Home';
import DetailPage from './pages/Detail';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';
import MyorderPage from './pages/Order';
import ProfilePage from './pages/Profile';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Homepage" component={Homepage}/>
        <Stack.Screen name="Detail" component={DetailPage}/>
        <Stack.Screen name="Cart" component={CartPage}/>
        <Stack.Screen name="Checkout" component={CheckoutPage}/>
        <Stack.Screen name="MyOrder" component={MyorderPage}/>
        <Stack.Screen name="Profile" component={ProfilePage}/>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="Register" component={RegisterPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}