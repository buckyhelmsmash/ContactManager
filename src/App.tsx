import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '../store/store';
import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailScreen from "./screens/ContactDetailScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ContactAddScreen from "./screens/ContactAddScreen";
import 'react-native-get-random-values'
import ContactEditScreen from "./screens/ContactEditScreen";


export type RootParamsList = {
    ContactList: undefined,
    ContactDetail: { id: string },
    ContactAdd: undefined,
    ContactEdit: { id: string}
}

const Stack = createNativeStackNavigator<RootParamsList>()

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={'ContactList'}
                    >
                        <Stack.Screen
                            name={'ContactList'}
                            component={ContactListScreen}
                            options={{title: 'Contacts'}}
                        />
                        <Stack.Screen
                            name={'ContactDetail'}
                            component={ContactDetailScreen}
                            options={{title: 'Contact Details'}}
                        />
                        <Stack.Screen
                            name={'ContactAdd'}
                            component={ContactAddScreen}
                            options={{title: 'Add Contact'}}
                        />
                        <Stack.Screen
                            name={'ContactEdit'}
                            component={ContactEditScreen}
                            options={{title: 'Edit Contact'}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
