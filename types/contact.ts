export interface Contact {
    id: string;
    name: string;
    phoneNumber: string;
}

export interface ContactsState {
    contacts: Contact[];
}

export const initialState: ContactsState = {
    contacts: [],
};
