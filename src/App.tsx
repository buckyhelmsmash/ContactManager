import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '../store/store';
import {Text} from "react-native";
import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailScreen from "./screens/ContactDetailScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


export type RootParamsList = {
    ContactList: undefined,
    ContactDetail: { id: string }
}

const Stack = createNativeStackNavigator<RootParamsList>()

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={'ContactList'}
                        screenOptions={{
                            headerRight: props => {
                                return(
                                    <Text className={"text-black text-sm font-bold"}>0 of 200</Text>
                                )
                            }
                        }}
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
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
