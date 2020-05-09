/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#191920',
                    },
                    headerTintColor: '#fff',

                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen name="Home" component={Main} />
                <Stack.Screen
                    screenOptions={{ headerBackTitleVisible: false }}
                    name="Cart"
                    component={Cart}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
