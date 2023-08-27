import {Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParamsList} from "../App";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {useLayoutEffect} from "react";

type ContactDetailProps = NativeStackScreenProps<RootParamsList, 'ContactDetail'>


const ContactDetail = ({route, navigation}: ContactDetailProps) => {
    const contactID = route.params.id

    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const totalContacts = contacts.length;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: props => <Text className="text-black text-sm font-bold">{totalContacts} of 200</Text>
        });
    }, [navigation]);

    return(
        <View>
            <Text>Contact Detail</Text>
            <Text>Contact ID: {contactID}</Text>
        </View>
    )
}

export default ContactDetail
