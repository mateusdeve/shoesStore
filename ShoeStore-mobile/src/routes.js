/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Header from './components/header';
import color from './styles/color';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: ({ navigation }) => <Header {...navigation} />,
                    cardStyle: {
                        backgroundColor: color.dark,
                    },
                    headerStyle: {
                        height: 80,
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
