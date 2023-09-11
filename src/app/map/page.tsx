'use client'
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useState } from 'react'
import { PinIcon } from '@/icons'
import PopOver from '@/components/primitives/PopOver/PopOver'
import EventCard, { EventCardProps } from '@/components/EventCard'

// Define your custom markers as an array of objects with latitude and longitude
const customMarkers: Array<EventCardProps & { id: number }> = [
  {
    id: 1,
    latitude: 13.757112993789578,
    longitude: 100.50195707266758,
    locationName: 'อนุเสาวรีย์ประชาธิปไตย',
    date: '20 กันยายน 2566, 13.00-16.00',
    eventName: 'วิ่งรอบอนุเสาวรีย์ประชาธิปไตย',
  },
  {
    id: 2,
    latitude: 13.75358676850294,
    longitude: 100.50421733753426,
    locationName: 'วัดเทพธิดาราม',
    date: '25 กันยายน 2566, 08.00-12.00',
    eventName: 'ทำบุญเสริมดวง',
  },
  {
    id: 3,
    latitude: 13.747281945047954,
    longitude: 100.50224307600162,
    locationName: 'MRT สามยอด',
    date: '30 กันยายน 2566, 08.00-12.00',
    eventName: 'พิธีเปิดรถไฟฟ้าสายสีน้ำเงิน สถานีสามยอด',
  },
]

const MapPage = () => {
  const [viewState, setViewState] = useState({
    latitude: 13.7564, // Center on a Thai location
    longitude: 100.5018,
    zoom: 10,
  })

  const mapStyle = `mapbox://styles/mapbox/streets-v12?language=th`

  // Function to dynamically render markers based on the zoom level
  const renderMarkers = () => {
    const zoom = viewState.zoom

    return customMarkers.map((marker) => (
      <Marker
        key={marker.id}
        latitude={marker.latitude}
        longitude={marker.longitude}
      >
        <div className="w-10 h-10">
          <PopOver popContent={<EventCard {...marker} />}>
            <PinIcon />
          </PopOver>
        </div>
      </Marker>
    ))
  }

  return (
    <div className="w-screen h-screen">
      <>
        <ReactMapGL
          style={{ width: '100%', height: '100%' }}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle={mapStyle}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        >
          <div className="bg-black w-10 h-10"></div>
          {renderMarkers()}
        </ReactMapGL>
      </>
    </div>
  )
}

export default MapPage
