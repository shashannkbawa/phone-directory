import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectedContact } from "../redux/ContactsSlice";
import { closeModal, openModal } from "../redux/ModalSlice";
import { RootState } from "../redux/store";
import ContactCard from "./Cards/ContactCard";
import ColumnContainer from "./Containers/Column.Container";
import ModalComponent from "./Modal";
import Text from "./Typography/Text";

//Component for displaying contact list in grid view
//
const ContactList: React.FC = () => {
  const { contacts, contact } = useSelector((state: RootState) => ({
    contacts: state.contacts.contacts,
    contact: state.contacts.selectedContact,
  }));

  const dispatch = useDispatch();

  // Visibility state for two modal
  // one for edit and other for view
  const [isModalOpen, setModalOpen] = useState(false);
  const [isView, setView] = useState(false);

  //HANDLER FUNCTIONS

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleView = (contact: any) => {
    dispatch(selectedContact(contact));
    setView(true);
  };

  const handleEdit = (contact: any) => {
    dispatch(selectedContact(contact));
    dispatch(openModal());
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setView(false);
    dispatch(closeModal());
  };

  return (
    <ColumnContainer className="md:mx-10">
      <Text type="heading" className="mb-4">
        Contacts List
      </Text>
      <ColumnContainer className=" border-2 border-gray border-solid h-[560px] w-full overflow-y-scroll scroll-smooth rounded ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-5 my-5">
          {/* Edit Contact Modal */}
          <ModalComponent
            isEdit={true}
            isOpen={isModalOpen}
            handleClose={handleCloseModal}
          />
          {/* View Contact Modal */}
          <Modal
            isOpen={isView}
            onRequestClose={handleCloseModal}
            className="bg-white p-6 rounded-md shadow-lg w-96 mx-auto"
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
          >
            <ColumnContainer className=" relative max-w-sm w-full lg:max-w-full lg:flex items-center shadow-md rounded-lg border border-gray-200 p-4 mb-4 border-solid border-1 boder-[#D8BFD8]">
              {/* Default User Icon */}
              <img
                src="./user_image.png"
                className="h-[150px] w-[150px] mt-5 "
              />
              <div className="w-full ">
                <h2 className="text-xl text-center mt-5 font-semibold text-gray-900 mb-2">
                  {contact?.firstName} {contact?.lastName}
                </h2>

                <Text type="label" className="mt-10">
                  Status : {contact?.status.toUpperCase()}
                </Text>
              </div>
            </ColumnContainer>
          </Modal>

          {/* Listing Contacts */}
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              contact={contact}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          ))}
        </div>
        {/* If No Contacts found scenario */}
        {contacts.length == 0 && (
          <ColumnContainer className=" items-center">
            <img src="./empty_contacts.jpg" height={200} width={300} />
            <Text type="heading" className=" text-gray-700">
              Sorry
            </Text>
            <Text
              type="paragraph"
              className="text-center font-semibold mt-5 text-gray-700"
            >
              We couldn't find any Contacts. Start by creating new contacts
            </Text>
          </ColumnContainer>
        )}
      </ColumnContainer>
    </ColumnContainer>
  );
};

export default ContactList;
