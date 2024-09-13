import ColumnContainer from "../Containers/Column.Container";
import RowContainer from "../Containers/Row.Container";
import Text from "../Typography/Text";

interface DataCardProps {
  title: string;
  className: string;
  count?: number;
}
const DataCard: React.FC<DataCardProps> = ({ title, className, count }) => {
  return (
    <ColumnContainer className={`w-full ${className} rounded-md p-5 my-5`}>
      <RowContainer className="justify-start ">
        <Text type="subheading" className="font-bold text-white">
          {title}
        </Text>
      </RowContainer>
      <RowContainer className="md:justify-end">
        <Text type="heading" className="md:text-4xl lg:text-7xl text-white">
          {(function () {
            if (typeof count === "number") {
              if (count >= 1000000000) {
                return (count / 1000000000).toFixed(1) + "B"; // Converting to billions
              } else if (count >= 1000000) {
                return (count / 1000000).toFixed(1) + "M"; // Converting to millions
              } else if (count >= 1000) {
                return (count / 1000).toFixed(1) + "k"; // Converting to thousands
              }
              return count.toString(); // Less than 1k, showing normal number
            }
          })()}
        </Text>
      </RowContainer>
    </ColumnContainer>
  );
};

export default DataCard;
