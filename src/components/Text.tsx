import React from "react";

interface TextProps {
  type: "heading" | "subheading" | "paragraph" | "label";
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ type, children, className }) => {
  let baseClass = "font-poppins";

  switch (type) {
    case "heading":
      baseClass = "text-4xl font-bold";
      break;
    case "subheading":
      baseClass = "text-2xl";
      break;
    case "paragraph":
      baseClass = "text-xl";
      break;
    case "label":
      baseClass = "text-sm font-medium";
      break;
    default:
      baseClass = "text-base";
  }

  return <p className={`${baseClass} ${className}`}>{children}</p>;
};

export default Text;
