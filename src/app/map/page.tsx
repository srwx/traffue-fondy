'use client'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useState } from 'react'

const MapPage = () => {
  const [viewState, setViewState] = useState({
    latitude: 13.7563, // Center on a Thai location
    longitude: 100.5018,
    zoom: 10,
  })

  const mapStyle = `mapbox://styles/mapbox/streets-v11?language=th`

  return (
    <div className="w-screen h-screen">
      <ReactMapGL
        style={{ width: '100%', height: '100%' }}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle={mapStyle}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      />
    </div>
  )
}

export default MapPage
