import React from "react";

interface ColumnContainerProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;
}

// Component for flexing childer in column-wise direction
const ColumnContainer: React.FC<ColumnContainerProps> = ({
  children,
  className = "",
  gap = "4",
}) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export default ColumnContainer;
