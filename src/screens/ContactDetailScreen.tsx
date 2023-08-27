import {Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParamsList} from "../App";

type ContactDetailProps = NativeStackScreenProps<RootParamsList, 'ContactDetail'>


const ContactDetail = ({route}: ContactDetailProps) => {
    const contactID = route.params.id

    return(
        <View>
            <Text>Contact Detail</Text>
            <Text>Contact ID: {contactID}</Text>
        </View>
    )
}

export default ContactDetail
