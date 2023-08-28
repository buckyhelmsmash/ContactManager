import {Pressable, Text} from "react-native";
import {Button, Flex, HStack, ListItem, Spacer, Surface} from '@react-native-material/core';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParamsList} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useLayoutEffect} from "react";
import {SwipeListView} from "react-native-swipe-list-view";
import {deleteContact} from "../../store/contactSlice";


type ContactListProps = NativeStackScreenProps<RootParamsList, 'ContactList'>

const ContactListScreen = ({navigation}: ContactListProps) => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const totalContacts = contacts.length;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Text className="text-black text-sm font-bold">{totalContacts} of 200</Text>
        });
    }, [navigation, totalContacts]);

    const dispatch = useDispatch();
    return (
        <Flex fill>

            <SwipeListView
                data={contacts}
                renderItem={({item}) => {
                    return (
                        <ListItem
                            key={item.id}
                            title={item.name}
                            secondaryText={item.phoneNumber}
                        />
                    )
                }}
                renderHiddenItem={rowData => {
                    return (
                        <Flex fill justify={"end"} items={"center"} direction={'row'}>
                            <HStack>
                                <Pressable
                                    onPress={() => dispatch(deleteContact(rowData.item.id))}
                                    android_ripple={{
                                        color: 'slate'
                                    }}
                                    style={{width: 80, height: 80, backgroundColor: "firebrick"}}
                                >
                                    <Flex fill center>
                                        <Text>Remove</Text>
                                    </Flex>
                                </Pressable>
                                <Pressable
                                    onPress={() => navigation.navigate('ContactEdit', {id: rowData.item.id})}
                                    android_ripple={{
                                        color: 'slate'
                                    }}
                                    style={{width: 80, height: 80, backgroundColor: "darksalmon"}}
                                >
                                    <Flex fill center>
                                        <Text>Edit</Text>
                                    </Flex>
                                </Pressable>
                            </HStack>
                        </Flex>
                    )
                }}
                disableRightSwipe
                closeOnRowPress
                closeOnRowOpen
                closeOnRowBeginSwipe
                rightOpenValue={-160}

            />

            <Spacer/>
            <Surface
                elevation={6}
                category="medium"
                style={{width: '100%', height: 100}}
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
