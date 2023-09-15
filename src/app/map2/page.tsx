'use client'
import React, { useState } from 'react'
import { MARKER_TYPE } from '@/const/mockMarkers'
import Tabs from '@/components/Tabs'
import { EventCardProps } from '@/components/EventCard'
import TrafficProblemPage from '@/features/traffic-problem/TrafficProblemPage'
import RealTimeProblemPage from '@/features/traffic-problem/RealTimeProblemPage'
import Navbar from '@/components/Navbar'

type InfoWindowDataProps = EventCardProps & { id: string }

const MapPageV2 = () => {
  const [isSelectedTitle1, setIsSelectedTitle1] = useState(true)
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null)
  const [routeCoordinates, setRouteCoordinates] = useState<
    { lat: number; lng: number }[]
  >([])
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false)
  const [infoWindowData, setInfoWindowData] =
    useState<InfoWindowDataProps | null>(null)
  const [selectedMarkerTypes, setSelectedMarkerTypes] = useState<MARKER_TYPE[]>(
    []
  )
  const [originPoint, setOriginPoint] =
    useState<google.maps.places.PlaceResult | null>(null)
  const [destinationPoint, setDestinationPoint] =
    useState<google.maps.places.PlaceResult | null>(null)

  return (
    <div className="w-screen h-screen max-h-[100dvh] overflow-y-hidden flex flex-col items-center relative">
      <Navbar />
      <Tabs
        title1="ปัญหาจราจรทั่วไป"
        title2="ดูปัญหาเรียลไทม์"
        isSelectedTitle1={isSelectedTitle1}
        onClickTitle1={() => setIsSelectedTitle1(true)}
        onClickTitle2={() => setIsSelectedTitle1(false)}
      />
      {isSelectedTitle1 ? (
        <TrafficProblemPage
          directionsResponse={directionsResponse}
          infoWindowData={infoWindowData}
          isInfoWindowOpen={isInfoWindowOpen}
          routeCoordinates={routeCoordinates}
          selectedMarkerTypes={selectedMarkerTypes}
          setDirectionsResponse={setDirectionsResponse}
          setInfoWindowData={setInfoWindowData}
          setIsInfoWindowOpen={setIsInfoWindowOpen}
          setRouteCoordinates={setRouteCoordinates}
          setSelectedMarkerTypes={setSelectedMarkerTypes}
          originPoint={originPoint}
          setOriginPoint={setOriginPoint}
          destinationPoint={destinationPoint}
          setDestinationPoint={setDestinationPoint}
        />
      ) : (
        <RealTimeProblemPage />
      )}
    </div>
  )
}

export default MapPageV2
