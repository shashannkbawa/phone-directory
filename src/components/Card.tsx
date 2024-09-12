import React from "react";
import { Contact } from "../redux/ContactsSlice";
import ColumnContainer from "./Containers/Column.Container";
import RowContainer from "./Containers/Row.Container";

// import
// interface Contact {
//     firstName: string;
//     lastName: string;
//     status: string;
// }

interface ContactCardProps {
  contact: Contact;
  onView: (contact: Contact) => void;
  onEdit: (contact: Contact) => void;
  onDelete: (id: number) => void;
}

// Card Component for Contact
const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <ColumnContainer className=" relative max-w-sm w-full lg:max-w-full lg:flex items-center shadow-md rounded-lg border border-gray-200 p-4 mb-4 border-solid border-1 boder-[#D8BFD8]">
      <img src="./user_image.png" className="h-[150px] w-[150px] mt-5 " />
      <div className="w-full ">
        {/* Contact Name */}
        <h2 className="text-xl text-center mt-5 font-semibold text-gray-900 mb-2">
          {contact.firstName} {contact.lastName}
        </h2>

        {/* Contact Status icon top-right */}
        <RowContainer
          className={`text-gray-700 absolute top-2 right-2 items-center rounded-full border-solid border ${
            contact.status == "active" ? "border-[#6EC531]" : "border-[#FF0000]"
          } justify-around w-20`}
        >
          <div
            className={`w-4 h-4 rounded-full ${
              contact.status == "active" ? "bg-[#6EC531]" : "bg-[#FF0000]"
            } `}
          ></div>
          <h4
            className={`${
              contact.status == "active" ? "text-[#6EC531]" : "text-[#FF0000]"
            } `}
          >
            {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
          </h4>
          {/* {status} */}
        </RowContainer>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => onView(contact)}
            className="px-4 py-2 bg-white text-gray border-2 border-blue rounded-md hover:bg-gray-100"
          >
            View
          </button>
          <button
            onClick={() => onEdit(contact)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(contact.id)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </ColumnContainer>
  );
};

export default ContactCard;
