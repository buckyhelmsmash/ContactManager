import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootParamsList} from "../App";
import {Button, Flex, Spacer, Surface, Text, TextInput} from "@react-native-material/core";
import {Controller, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addContact} from "../../store/contactSlice";

type FormData = {
    name: string;
    phoneNumber: string;
};


type ContactAddProps = NativeStackScreenProps<RootParamsList, 'ContactAdd'>

const ContactAddScreen = ({navigation}: ContactAddProps) => {
    const dispatch = useDispatch();
    const {control, handleSubmit, formState: {errors}} = useForm<FormData>();
    const onSubmit = handleSubmit(data => {
        console.log("🌍 data", data)
        dispatch(addContact({
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

export default ContactAddScreen
