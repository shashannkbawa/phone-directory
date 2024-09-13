import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from "../redux/ContactsSlice";
import { RootState } from "../redux/store";
import { areStringsTruthy } from "../utils";
import ColumnContainer from "./Containers/Column.Container";
import Text from "./Typography/Text";

// To bind modal to the app element
Modal.setAppElement("#root");

interface ModalProps {
  isEdit?: boolean;
  isOpen: boolean;
  handleClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({
  isEdit = false,
  isOpen,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");

  const [isError, setIsError] = useState(false);

  // Which of the contact is selected in contacts list
  const contactData = useSelector(
    (state: RootState) => state.contacts.selectedContact
  );

  // Check for if the Modal is opened in Edit mode
  // By default add the contact information to the states
  useEffect(() => {
    if (isEdit && contactData) {
      setId(contactData.id);
      setFirstName(contactData.firstName);
      setLastName(contactData.lastName);
      setStatus(contactData.status);
    }
  }, [contactData, isEdit]);

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //To check if the contact has valid values
    if (!areStringsTruthy(firstName, lastName)) {
      setIsError(true);
      return;
    }
    if (isEdit) {
      dispatch(updateContact({ id, firstName, lastName, status }));
    } else {
      const id = Number(Date.now().toString());
      dispatch(addContact({ id, firstName, lastName, status }));
    }
    setFirstName("");
    setLastName("");
    setStatus("active");
    setIsError(false);
    handleClose();
  };

  return (
    <div className=" absolute h-screen flex justify-center items-center ">
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsError(false);
          setFirstName("");
          setLastName("");
          setStatus("active");
          handleClose();
        }}
        className="bg-white p-6 rounded-md shadow-lg md: w-3/4   lg:mx-auto md:w-1/2 lg:w-1/2 mx-auto"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
      >
        <h2 className="text-3xl mb-1 font-bold">
          {isEdit ? "Edit Contact" : "Create Contact"}
        </h2>
        {!isEdit ? (
          <h5 className="text-sm font-bold text-gray-700 mb-4">
            Please enter all details
          </h5>
        ) : (
          <></>
        )}

        <div className="mb-4">
          <Text
            type="paragraph"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </Text>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <Text
            type="paragraph"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </Text>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Radio Buttons for Status */}
        <div className="mb-4">
          <Text type="paragraph" className="text-gray-700">
            Status
          </Text>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={(e) => setStatus(e.target.value)}
                className="form-radio text-blue-500"
              />
              <Text type="label" className="ml-2">
                Active
              </Text>
            </label>

            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={(e) => setStatus(e.target.value)}
                className="text-blue-500"
              />
              <Text type="label" className="ml-2">
                Inactive
              </Text>
            </label>
          </div>
        </div>

        {/* Close Button */}
        <ColumnContainer className="items-start justify-center">
          {isError ? (
            <Text type="label" className="text-red-700">
              Please enter the full name
            </Text>
          ) : (
            <></>
          )}
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            {isEdit ? "Save" : "Create New Contact"}
          </button>
        </ColumnContainer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
