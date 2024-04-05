import { MapContainer } from "react-leaflet/MapContainer"
import { useEffect, useState } from "react"
import { mapInfo } from "../../mock/map-info"
import { LatLngTuple } from "leaflet"
import { Marker, TileLayer } from "react-leaflet"

const MOSCOW_COORD: LatLngTuple = [55.751244, 37.618423]

const Map = () => {
  const data = mapInfo
  const [currentLocation, setCurrentLocation] = useState<LatLngTuple | null>(null)
  
  const success: PositionCallback = ({ coords }) => {
    const { latitude, longitude } = coords
    const position: LatLngTuple = [latitude, longitude]

    setCurrentLocation(position)
  }

  const error: PositionErrorCallback = ({ message }) => {
    console.log(message)
  }

  useEffect(() => {
    if (!currentLocation) {
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true
      })
    }
  }, [currentLocation])

  return (
    <MapContainer center={currentLocation || MOSCOW_COORD}  attributionControl={false} scrollWheelZoom={false} zoom={9} maxZoom={18}  minZoom={5} style={{ height: '100%'}}>
      <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
      {data.features.map((item, index) => (
        <Marker key={index} position={item.geometry.coordinates as LatLngTuple} />
      ))}
    </MapContainer>
  )
}

export default Map