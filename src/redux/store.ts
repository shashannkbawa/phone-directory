import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './ContactsSlice';
import modalReducer from './ModalSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
