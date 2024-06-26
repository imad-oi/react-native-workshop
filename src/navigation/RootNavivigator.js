import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { COLORS } from '../constants';
import AddTaskScreen from '../screens/AddTaskScreen';
import ListTaskScreen from '../screens/ListTaskScreen';
import LoginScreen from '../screens/LoginScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"  // Pour définir l'écran de démarrage
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        options={
          {
            // headerTitle: () => <Header name="Login Screen" />,
            // headerStyle: {
            //   backgroundColor: '#4c00b0',
            //   height: 120,
            // },
          }
        }
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="Tasks" component={ListTaskScreen} />
      <Stack.Screen name="New Task" component={AddTaskScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
