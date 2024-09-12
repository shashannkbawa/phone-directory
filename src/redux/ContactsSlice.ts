import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TYPES
export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactsState {
  contacts: Contact[];
  selectedContact? : Contact;
}

// Initial state of reducer
const initialState: ContactsState = {
  contacts: [],
  selectedContact: undefined,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // To create new contact , payload contains Contact object
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload);
    },
    // To delete contact , payload contains Contact id
    deleteContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    // To store contact information, payload contains Contact object
    selectedContact(state, action: PayloadAction<any>) {
      state.selectedContact = action.payload;
    },
    // To update contact , payload contains Contact object
    updateContact(state, action: PayloadAction<Contact>) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
  },
});

// ACTIONS
export const { addContact, deleteContact, updateContact,selectedContact } = contactSlice.actions;

// REDUCER
export default contactSlice.reducer;
