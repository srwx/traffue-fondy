'use client'
import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { mockMarkers } from '@/const/mockMarkers'

const bangkokCenter = {
  lat: 13.7564,
  lng: 100.5018,
}

const MapPageV2 = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  })

  const [map, setMap] = useState<google.maps.Map | null>(null)

  const onLoad = useCallback((map: google.maps.Map) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(bangkokCenter)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null)
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-screen h-screen">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={bangkokCenter}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: false,
          fullscreenControl: false,
        }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {mockMarkers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            icon={marker.type}
          />
        ))}
      </GoogleMap>
    </div>
  )
}

export default MapPageV2
