import React, { useState } from "react";
import DataCard from "../components/Cards/DataCard";
import CovidLineChart from "../components/Chart";
import ColumnContainer from "../components/Containers/Column.Container";
import RowContainer from "../components/Containers/Row.Container";
import CovidMap from "../components/Map";
import Text from "../components/Typography/Text";
import { useCovidData } from "../hooks/useCovidData";

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"chart" | "map">("chart");

  const { globalData } = useCovidData();

  const handleTabClick = (tab: "chart" | "map") => {
    setActiveTab(tab);
  };

  const casesNumberInDigits = Array.from(String(globalData?.cases), Number) ?? [
    0,
  ];
  return (
    <ColumnContainer className="p-4">
      <Text type="heading" className=" ml-10 md:ml-0 mb-4">
        COVID-19 Dashboard
      </Text>
      <ColumnContainer className="items-center">
        <Text type="heading">Total Cases all over the world</Text>
        <RowContainer className="gap-1 mt-5">
          {casesNumberInDigits.map((num: number) => {
            return (
              <ColumnContainer className="  justify-center items-center h-12 w-8 border-solid border-2 border-gray-600 bg-gray-800 rounded">
                <Text type="paragraph" className="font-bold text-white">
                  {num || 0}
                </Text>
              </ColumnContainer>
            );
          })}
        </RowContainer>
      </ColumnContainer>
      <div className=" h-full lg:flex grid-cols-1 lg:gap-4 my-5 lg:mx-20">
        <DataCard
          title="Active"
          className="bg-green-400"
          count={globalData?.active}
        />
        <DataCard
          title="Deaths"
          className="bg-[#F32013]/80"
          count={globalData?.deaths}
        />
        <DataCard
          title="Recovered"
          className="bg-sky-400"
          count={globalData?.recovered}
        />
      </div>
      {/* Tab Buttons */}
      <RowContainer className="flex md:mt-10 mb-4 w-full justify-center md:mx-12">
        <button
          className={`px-4 py-2 md:h-12 w-1/2 md:w-2/6 mr-2 rounded-full ${
            activeTab === "chart" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("chart")}
        >
          <Text type="label">Chart</Text>
        </button>
        <button
          className={`px-4 py-2 md:h-12  w-1/2 md:w-2/6 rounded-full ${
            activeTab === "map" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("map")}
        >
          <Text type="label">Map</Text>
        </button>
      </RowContainer>

      {/* Rendering Tab Content */}
      {activeTab === "chart" && (
        <ColumnContainer className=" mb-8">
          <Text type="subheading" className="font-semibold mb-2">
            Cases Over Time
          </Text>
          <CovidLineChart />
        </ColumnContainer>
      )}

      {activeTab === "map" && (
        <ColumnContainer>
          <Text type="subheading" className="font-semibold mb-2">
            COVID-19 Cases by Country
          </Text>
          <CovidMap />
        </ColumnContainer>
      )}
    </ColumnContainer>
  );
};

export default DashboardPage;
