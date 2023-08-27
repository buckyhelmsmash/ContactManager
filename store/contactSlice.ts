// src/redux/contactsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {Contact, initialState} from "../types/contact";



const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            if (state.contacts.length >= 200) {
                return state; // Max contacts limit reached
            }
            const newContact = { ...action.payload, id: nanoid(5) };
            state.contacts.push(newContact);
        },
        editContact: (state, action: PayloadAction<Contact>) => {
            const editedContact = action.payload;
            const index = state.contacts.findIndex(contact => contact.id === editedContact.id);
            if (index !== -1) {
                state.contacts[index] = editedContact;
            }
        },
        deleteContact: (state, action: PayloadAction<string>) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
