import GoogleMapReact from 'google-map-react'
import './Map.css'
const Map = ({center, zoom}) => {
  return (
    <div className='map'>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyApp-tbo0DjJGkv7qJyYr8Cbgetv1uJ_3Y' }}
        defaultCenter={ center }
        defaultZoom={ zoom }
        />
    </div>
  )
}


Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map