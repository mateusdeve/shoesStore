import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import store from './store';
import NavigationService from './services/navigation';

import Routes from './routes';

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content" backgroundColor="#1e1e20" />
            <Routes
                ref={(navigatorRef) =>
                    NavigationService.setNavigator(navigatorRef)
                }
            />
        </Provider>
    );
}
