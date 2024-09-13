import React, { useState } from "react";
import RowContainer from "./Containers/Row.Container";
import ModalComponent from "./Modal";
import Text from "./Typography/Text";

// Add contact area Component
const AddContactForm: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    // dispatch(openModal());
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    // dispatch(openModal());
    setModalOpen(false);
  };

  return (
    <RowContainer className="h-24 mt-10 border-solid border-0.5 border-gray-100 justify-center">
      {/* It opens Modal to create contact */}
      <button
        onClick={handleOpenModal}
        className="h-[50px] px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        <Text type="label"> Create Contact</Text>
      </button>
      {/* Create Contact Modal */}
      <ModalComponent isOpen={isModalOpen} handleClose={handleCloseModal} />
    </RowContainer>
  );
};

export default AddContactForm;
