import React from "react";
import ContactList from "../components/ContactsList";
import ColumnContainer from "../components/Containers/Column.Container";
import RowContainer from "../components/Containers/Row.Container";
import AddContactForm from "../components/CreateContactFrom";
import Text from "../components/Text";

const ContactsPage: React.FC = () => {
  return (
    <ColumnContainer className="p-4 mt-20">
      <RowContainer className=" justify-center">
        <Text type="heading" className="text-center md:w-1/2">
          Need a place to manage your contacts?
        </Text>
      </RowContainer>
      <AddContactForm />
      <ContactList />
    </ColumnContainer>
  );
};

export default ContactsPage;
