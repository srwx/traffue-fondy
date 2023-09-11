'use client'
import ReactMapGL, {
  Marker,
  GeolocateControl,
  Layer,
  Source,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useState } from 'react'
import { PinIcon } from '@/icons'
import PopOver from '@/components/primitives/PopOver/PopOver'
import EventCard from '@/components/EventCard'
import { mockMarkers } from '@/const/mockMarkers'

// Define your coordinates for point 1 and point 2
const origin = [100.42299142464563, 13.68789281762804] // Home
const destination = [100.43412126697393, 13.711950701853867] // Seacon bangkae

const MapPage = () => {
  const [viewState, setViewState] = useState({
    latitude: 13.7564, // Center on a Thai location
    longitude: 100.5018,
    zoom: 10,
  })

  const [route, setRoute] = useState(null)

  const mapStyle = `mapbox://styles/mapbox/streets-v12?language=th`

  useEffect(() => {
    async function fetchDirections() {
      const origin = '100.42299142464563,13.68789281762804' // Replace with your origin coordinates
      const destination = '100.43412126697393,13.711950701853867' // Replace with your destination coordinates

      try {
        const response = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${origin};${destination}?geometries=geojson&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()

        const routeData = data.routes[0].geometry

        setRoute(routeData)
      } catch (error) {
        console.error('Error fetching directions:', error)
      }
    }

    fetchDirections()
  }, [])

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
    <div className="w-screen h-screen relative">
      <>
        <ReactMapGL
          style={{ width: '100%', height: '100%' }}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          mapStyle={mapStyle}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          {route && (
            <Source id="route" type="geojson" data={route}>
              <Layer
                id="route-layer"
                type="line"
                source="route"
                paint={{
                  'line-color': 'blue',
                  'line-width': 4,
                }}
              />
            </Source>
          )}
          {renderMarkers()}
        </ReactMapGL>
      </>
    </div>
  )
}

export default MapPage
