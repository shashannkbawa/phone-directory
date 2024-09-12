import React, { useState } from "react";
import CovidLineChart from "../components/Chart";
import ColumnContainer from "../components/Containers/Column.Container";
import RowContainer from "../components/Containers/Row.Container";
import CovidMap from "../components/Map";
import Text from "../components/Text";

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"chart" | "map">("chart");

  const handleTabClick = (tab: "chart" | "map") => {
    setActiveTab(tab);
  };

  return (
    <ColumnContainer className="p-4">
      <Text type="subheading" className="text-2xl mb-4">
        COVID-19 Dashboard
      </Text>

      {/* Tab Buttons */}
      <RowContainer className="flex mb-4 w-full justify-center mx-12">
        <button
          className={`px-4 py-2 w-2/6 mr-2 rounded-full ${
            activeTab === "chart" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("chart")}
        >
          <Text type="label">Chart</Text>
        </button>
        <button
          className={`px-4 py-2 w-2/6 rounded-full ${
            activeTab === "map" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("map")}
        >
          <Text type="label">Map</Text>
        </button>
      </RowContainer>

      {/* Rendering Tab Content */}
      {activeTab === "chart" && (
        <ColumnContainer className="mb-8">
          <Text type="subheading" className="font-semibold mb-2">
            Cases Over Time
          </Text>
          <CovidLineChart />
        </ColumnContainer>
      )}

      {activeTab === "map" && (
        <div>
          <Text type="subheading" className="font-semibold mb-2">
            COVID-19 Cases by Country
          </Text>
          <CovidMap />
        </div>
      )}
    </ColumnContainer>
  );
};

export default DashboardPage;
