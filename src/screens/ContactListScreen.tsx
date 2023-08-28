import {FlatList, Text, View} from "react-native";
import {Box, Button, Flex, ListItem, Spacer, Surface} from '@react-native-material/core';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParamsList} from "../App";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useLayoutEffect} from "react";


type ContactListProps = NativeStackScreenProps<RootParamsList, 'ContactList'>

const ContactListScreen = ({navigation}: ContactListProps) => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const totalContacts = contacts.length;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: props => <Text className="text-black text-sm font-bold">{totalContacts} of 200</Text>
        });
    }, [navigation, totalContacts]);


    return (
        <Flex fill>
            <FlatList
                data={contacts}
                renderItem={({item}) => {
                    return(
                        <ListItem
                            title={item.name}
                            secondaryText={item.phoneNumber}
                        />
                    )
                }}
            />
            <Spacer/>
            <Surface
                elevation={6}
                category="medium"
                style={{ width: '100%', height: 100 }}
            >
                <Flex fill center>
                    <Button
                        title="Add Contact"
                        onPress={() => navigation.navigate('ContactAdd')}
                    />
                </Flex>
            </Surface>
        </Flex>
    )
}

export default ContactListScreen
