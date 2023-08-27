import {Text, View} from "react-native";
import {Button} from '@react-native-material/core';
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParamsList} from "../App";

type ContactListProps = NativeStackScreenProps<RootParamsList, 'ContactList'>

const ContactListScreen = ({navigation}: ContactListProps) => {
    return(
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
