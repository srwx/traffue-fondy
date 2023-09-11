'use client'
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useState } from 'react'
import { PinIcon } from '@/icons'
import PopOver from '@/components/primitives/PopOver/PopOver'
import EventCard from '@/components/EventCard'
import { mockMarkers } from '@/const/mockMarkers'

const MapPage = () => {
  const [viewState, setViewState] = useState({
    latitude: 13.7564, // Center on a Thai location
    longitude: 100.5018,
    zoom: 10,
  })

  const mapStyle = `mapbox://styles/mapbox/streets-v12?language=th`

  // TODO: dynamically render markers based on the zoom level
  const renderMarkers = () => {
    const zoom = viewState.zoom

    return mockMarkers.map((marker) => (
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
