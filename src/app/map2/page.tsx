'use client'
import React, { useCallback, useRef, useState } from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { mockMarkers } from '@/const/mockMarkers'
import { PinIcon, SearchIcon, TraffueFondyIcon } from '@/icons'
import Tabs from '@/components/Tabs'
import clsx from 'clsx'
import Input from '@/components/Input'
import { simplifyRoute } from '@/utils/simplifyRoute'
import { Drawer } from 'vaul'
import { calculateDistance } from '@/utils/calculateDistance'
import DirectionInput from '@/features/traffic-problem/components/DirectionInput'
import ProblemsDrawer from '@/features/traffic-problem/components/ProblemsDrawer'

const bangkokCenter = {
  lat: 13.7564,
  lng: 100.5018,
}

const MapPageV2 = () => {
  const [isSelectedTitle1, setIsSelectedTitle1] = useState(true)
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [routeCoordinates, setRouteCoordinates] = useState<
    { lat: number; lng: number }[]
  >([])

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ['places'],
  })

  const thresholdDistance = 2 // Adjust the threshold distance as needed (in kilometers)

  const filteredMarkers = mockMarkers.filter((marker) => {
    for (const point of routeCoordinates) {
      const distance = calculateDistance(
        marker.latitude,
        marker.longitude,
        point.lat,
        point.lng
      )
      if (distance <= thresholdDistance) {
        return true // Marker is within the threshold distance of at least one point
      }
    }
    return false // Marker is not within the threshold distance of any point
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center relative">
      <div className="py-2">
        <TraffueFondyIcon width={80} height={40} />
      </div>
      <Tabs
        title1="ปัญหาจราจรทั่วไป"
        title2="ดูปัญหาเรียลไทม์"
        isSelectedTitle1={isSelectedTitle1}
        onClickTitle1={() => setIsSelectedTitle1(true)}
        onClickTitle2={() => setIsSelectedTitle1(false)}
      />

      <DirectionInput
        setDirectionsResponse={setDirectionsResponse}
        setDistance={setDistance}
        setDuration={setDuration}
        setRouteCoordinates={setRouteCoordinates}
      />

      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '90%' }}
        center={bangkokCenter}
        zoom={15}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: false,
          fullscreenControl: false,
        }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {directionsResponse
          ? filteredMarkers.map((marker) => (
              <Marker
                key={marker.id}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                icon={marker.type}
              />
            ))
          : mockMarkers.map((marker) => (
              <Marker
                key={marker.id}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                icon={marker.type}
              />
            ))}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
      {directionsResponse && <ProblemsDrawer />}
    </div>
  )
}

export default MapPageV2
