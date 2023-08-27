import {Text, View} from "react-native";
import {Button} from '@react-native-material/core';
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
    }, [navigation]);


    return (
        <View>
            <Text className={"text-red-700"}>Contact List</Text>
            <Button
                title={'Detail'}
                onPress={() => navigation.navigate("ContactDetail", {id: "123"})}
            />
        </View>
    )
}

export default ContactListScreen
