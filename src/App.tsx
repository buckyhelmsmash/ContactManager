import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import ContactListScreen from "./screens/ContactListScreen";



import ContactDetailScreen from "./screens/ContactDetailScreen";


export type RootParamsList = {
    ContactList: undefined,
    ContactDetail: {id: string}
}

const Stack = createNativeStackNavigator<RootParamsList>()

function App(): JSX.Element {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'ContactList'}>
            <Stack.Screen name={'ContactList'} component={ContactListScreen} options={{title: 'Contacts'}}/>
            <Stack.Screen name={'ContactDetail'} component={ContactDetailScreen} options={{title: 'Contact Details'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
