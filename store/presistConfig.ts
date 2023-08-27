// redux/persistConfig.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, PersistConfig,   } from 'redux-persist';
import contactsReducer from './contactSlice';
import {ContactsState} from "../types/contact";


export const serialize = (data: any) => {
    return JSON.stringify(data);
};

export const deserialize = (serializedData: string) => {
    return JSON.parse(serializedData);
};


const contactsPersistConfig: PersistConfig<ContactsState> = {
    key: 'contacts',
    storage: AsyncStorage,
};

export const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);
