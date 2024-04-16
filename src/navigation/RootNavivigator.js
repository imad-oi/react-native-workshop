import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ListTaskScreen from '../screens/ListTaskScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import Header from '../components/Header';
import { COLORS } from '../constants';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
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
            // headerTitle: () => <Header name="Login" />,
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
