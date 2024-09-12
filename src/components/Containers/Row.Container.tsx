import React from "react";

interface RowContainerProps {
  children: React.ReactNode;
  className?: string;
  gap?: string;
}

// Component for flexing children in row-wise direction
const RowContainer: React.FC<RowContainerProps> = ({
  children,
  className = "",
  gap = "4",
}) => {
  return (
    <div className={`flex flex-row gap-${gap} ${className}`}>{children}</div>
  );
};

export default RowContainer;
