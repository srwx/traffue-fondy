import { EventCardProps } from '@/components/EventCard'
import { MARKER_TYPE, mockMarkers } from '@/const/mockMarkers'
import { calculateDistance } from '@/utils/calculateDistance'
import {
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api'
import React, { useMemo, useState } from 'react'
import DirectionInput from './components/DirectionInput'
import { getMarkerTypeSvg } from '@/utils/getMarkerTypeSvg'
import MarkerPopup from './components/MarkerPopup'
import ProblemsDrawer from './components/ProblemsDrawer'

const bangkokCenter = {
  lat: 13.7564,
  lng: 100.5018,
}

type InfoWindowDataProps = EventCardProps & { id: string }

interface TrafficProblemPageProps {
  setInfoWindowData: React.Dispatch<
    React.SetStateAction<InfoWindowDataProps | null>
  >
  setIsInfoWindowOpen: React.Dispatch<React.SetStateAction<boolean>>
  routeCoordinates: {
    lat: number
    lng: number
  }[]
  selectedMarkerTypes: MARKER_TYPE[]
  setDirectionsResponse: React.Dispatch<
    React.SetStateAction<google.maps.DirectionsResult | null>
  >
  setRouteCoordinates: React.Dispatch<
    React.SetStateAction<
      {
        lat: number
        lng: number
      }[]
    >
  >
  setSelectedMarkerTypes: React.Dispatch<React.SetStateAction<MARKER_TYPE[]>>
  directionsResponse: google.maps.DirectionsResult | null
  isInfoWindowOpen: boolean
  infoWindowData: InfoWindowDataProps | null
  originPoint: google.maps.places.PlaceResult | null
  setOriginPoint: React.Dispatch<
    React.SetStateAction<google.maps.places.PlaceResult | null>
  >
  destinationPoint: google.maps.places.PlaceResult | null
  setDestinationPoint: React.Dispatch<
    React.SetStateAction<google.maps.places.PlaceResult | null>
  >
}

const TrafficProblemPage = ({
  setInfoWindowData,
  setIsInfoWindowOpen,
  routeCoordinates,
  selectedMarkerTypes,
  setDirectionsResponse,
  setRouteCoordinates,
  setSelectedMarkerTypes,
  directionsResponse,
  infoWindowData,
  isInfoWindowOpen,
  originPoint,
  setOriginPoint,
  destinationPoint,
  setDestinationPoint,
}: TrafficProblemPageProps) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ['places'],
  })

  const handleMarkerClick = (props: InfoWindowDataProps) => {
    setInfoWindowData(props)
    setIsInfoWindowOpen(true)
  }

  const thresholdDistance = 0.7 // Adjust the threshold distance as needed (in kilometers)

  const filteredMarkers = useMemo(() => {
    return mockMarkers.filter((marker) => {
      for (const point of routeCoordinates) {
        const distance = calculateDistance(
          marker.latitude,
          marker.longitude,
          point.lat,
          point.lng
        )
        if (distance <= thresholdDistance) {
          if (
            selectedMarkerTypes.includes(marker.type) ||
            !selectedMarkerTypes.length
          ) {
            return true // Marker is within the threshold distance of at least one point
          }
        }
      }
      return false // Marker is not within the threshold distance of any point
    })
  }, [routeCoordinates, selectedMarkerTypes])

  const filteredMockMarkers = useMemo(() => {
    if (selectedMarkerTypes.length === 0) return mockMarkers

    return mockMarkers.filter((marker) => {
      return selectedMarkerTypes.includes(marker.type)
    })
  }, [selectedMarkerTypes])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <>
      <DirectionInput
        setDirectionsResponse={setDirectionsResponse}
        setRouteCoordinates={setRouteCoordinates}
        selectedMarkerTypes={selectedMarkerTypes}
        setSelectedMarkerTypes={setSelectedMarkerTypes}
        originPoint={originPoint}
        setOriginPoint={setOriginPoint}
        destinationPoint={destinationPoint}
        setDestinationPoint={setDestinationPoint}
      />

      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '90%' }}
        center={bangkokCenter}
        zoom={11}
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
                icon={getMarkerTypeSvg(marker.type)}
                onClick={() => handleMarkerClick(marker)}
              >
                {isInfoWindowOpen && infoWindowData?.id === marker.id && (
                  <InfoWindow onCloseClick={() => setIsInfoWindowOpen(false)}>
                    <MarkerPopup {...marker} />
                  </InfoWindow>
                )}
              </Marker>
            ))
          : filteredMockMarkers.map((marker) => (
              <Marker
                key={marker.id}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                icon={getMarkerTypeSvg(marker.type)}
                onClick={() => handleMarkerClick(marker)}
              >
                {isInfoWindowOpen && infoWindowData?.id === marker.id && (
                  <InfoWindow onCloseClick={() => setIsInfoWindowOpen(false)}>
                    <MarkerPopup {...marker} />
                  </InfoWindow>
                )}
              </Marker>
            ))}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
      {directionsResponse && <ProblemsDrawer problemList={filteredMarkers} />}
    </>
  )
}

export default TrafficProblemPage
