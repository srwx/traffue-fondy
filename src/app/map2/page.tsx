'use client'
import React, { useMemo, useState } from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
  InfoWindow,
} from '@react-google-maps/api'
import { MARKER_TYPE, mockMarkers } from '@/const/mockMarkers'
import { TraffueFondyIcon } from '@/icons'
import Tabs from '@/components/Tabs'
import { calculateDistance } from '@/utils/calculateDistance'
import DirectionInput from '@/features/traffic-problem/components/DirectionInput'
import ProblemsDrawer from '@/features/traffic-problem/components/ProblemsDrawer'
import { EventCardProps } from '@/components/EventCard'
import MarkerPopup from '@/features/traffic-problem/components/MarkerPopup'
import { getMarkerTypeSvg } from '@/utils/getMarkerTypeSvg'
import TrafficProblemPage from '@/features/traffic-problem/TrafficProblemPage'

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
      <div className="py-1">
        <TraffueFondyIcon width={130} height={40} />
      </div>
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
        <div>TODO</div>
      )}
    </div>
  )
}

export default MapPageV2
