import React from "react";

interface ColumnContainerProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;
}

// Component for flexing childer in column-wise direction
// TODO: Need to test gap functionality
const ColumnContainer: React.FC<ColumnContainerProps> = ({
  children,
  className = "",
  gap = "4",
}) => {
  return (
    <div className={`flex flex-col gap-y-${gap} ${className}`}>{children}</div>
  );
};

export default ColumnContainer;
