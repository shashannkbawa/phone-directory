import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useCovidData } from "../hooks/useCovidData";
import ColumnContainer from "./Containers/Column.Container";
import RowContainer from "./Containers/Row.Container";
import Text from "./Text";

// Setting up the marker icons manually
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Marker for countries
const HoverableMarker: React.FC<any> = ({ country, position }) => {
  const popupRef = useRef<any>(null); // Ref to control the popup

  //TODO:
  // Handler Functions
  // const handleMouseOver = () => {
  //
  // };

  return (
    <Marker
      position={position}
      // icon={customIcon}
      // eventHandlers={{
      //   mouseover: handleMouseOver,
      //   // mouseout: handleMouseOut,
      // }}
    >
      {/* Pop up for cases details on button click */}
      <Popup ref={popupRef} autoPan={true} closeButton={false}>
        <ColumnContainer gap="1" className="w-[300px] h-full items-center">
          <Text type="subheading" className="font-bold my-2">
            {country.country}
          </Text>
          <ColumnContainer className="items-center">
            <Text type="paragraph" className="font-bold my-2 text-gray-500">
              Cases
            </Text>
            <Text type="paragraph" className="text-gray-500">
              {country.cases}
            </Text>
          </ColumnContainer>
          <RowContainer className="justify-around w-full">
            <ColumnContainer className="items-center">
              <Text type="paragraph" className="font-bold my-2 text-green-500">
                Active
              </Text>
              <Text type="paragraph" className="text-green-500">
                {country.active}
              </Text>
            </ColumnContainer>
            <ColumnContainer className="items-center">
              <Text type="paragraph" className="font-bold my-2 text-red-500">
                Deaths
              </Text>
              <Text type="paragraph" className="text-red-500">
                {country.deaths}
              </Text>
            </ColumnContainer>
          </RowContainer>
          <Text type="label">Recovered: {country.recovered}</Text>
        </ColumnContainer>
      </Popup>
    </Marker>
  );
};

// Map Component
const CovidMap: React.FC = () => {
  // Getting country information from hooks
  const { countryData, isLoadingCountries, isErrorCountries } = useCovidData();

  if (isLoadingCountries) {
    return <div>Loading country data...</div>;
  }

  if (isErrorCountries || !countryData) {
    return <div>Error loading country data</div>;
  }

  return (
    <ColumnContainer>
      <Text type="label">Click on markers for details</Text>
      {/* Map Container start */}
      <MapContainer
        center={[23.25, 77.41]} // Lat lng of Bhopal
        zoom={5} // Country level zoom factor
        style={{ height: "700px", width: "100%" }} //TODO: Check responsiveness
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* To Show markers for each country */}
        {countryData.map((country) => (
          <HoverableMarker
            key={country.country}
            country={country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          />
        ))}
      </MapContainer>
    </ColumnContainer>
  );
};

export default CovidMap;
