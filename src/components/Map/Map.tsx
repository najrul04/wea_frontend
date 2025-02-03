import GoogleMapReact from 'google-map-react';
import './Map.css';
import LocationMarker from '../LocationMarker/LocationMarker';

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const Map: React.FC<Partial<MapProps>> = ({ center, zoom }) => {
  const googleApi = import.meta.env.VITE_GOOGLE_API;

  console.log('Google API Key: ', googleApi);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApi }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center?.lat} lng={center?.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
