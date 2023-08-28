import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParamsList} from "../App";
import {Button, Flex, Spacer, Surface, Text, TextInput} from "@react-native-material/core";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {editContact} from "../../store/contactSlice";
import {RootState} from "../../store/store";

type FormData = {
    name: string;
    phoneNumber: string;
};


type ContactEditProps = NativeStackScreenProps<RootParamsList, 'ContactEdit'>

const ContactEditScreen = ({route, navigation}: ContactEditProps) => {
    const contactID = route.params.id
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const selectedContact = contacts.find(contact => contact.id === contactID);

    const dispatch = useDispatch();
    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        defaultValues: {
            name: selectedContact?.name,
            phoneNumber: selectedContact?.phoneNumber
        }
    });
    const onSubmit = handleSubmit(data => {
        console.log("🌍 data", data)
        dispatch(editContact({
            id: contactID,
            name: data.name,
            phoneNumber: data.phoneNumber
        }));
        navigation.goBack()
    })

    return (
        <Flex fill>
            <Flex style={{margin: 16}}>
                <Controller
                    name={"name"}
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            label="Name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.name && <Text style={{color: 'red'}}>Name is required.</Text>}
            </Flex>
            <Flex style={{margin: 16}}>
                <Controller
                    name={"phoneNumber"}
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            label="Phone Number"
                            keyboardType="phone-pad"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.phoneNumber && <Text style={{color: 'red'}}>Phone number is required.</Text>}
            </Flex>
            <Spacer/>
            <Surface
                elevation={6}
                category="medium"
                style={{width: '100%', height: 100}}
            >
                <Flex fill center>
                    <Button
                        title="Save Contact"
                        onPress={onSubmit}
                    />
                </Flex>
            </Surface>
        </Flex>
    );
};

export default ContactEditScreen
