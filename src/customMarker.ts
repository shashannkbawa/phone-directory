import L from 'leaflet';

// Define a custom icon for Leaflet
const customIcon = new L.Icon({
    iconUrl: require('./custom_marker.svg'),
    iconRetinaUrl: require('./custom_marker.svg'),
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

// Export the custom icon
export { customIcon };
