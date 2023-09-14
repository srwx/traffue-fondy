import Input from '@/components/Input'
import { PinIcon, SearchIcon } from '@/icons'
import { simplifyRoute } from '@/utils/simplifyRoute'
import { Autocomplete } from '@react-google-maps/api'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import SelectedMarkerTypeButtons from './SelectedMarkerTypeButtons'
import { MARKER_TYPE } from '@/const/mockMarkers'

interface DirectionInputProps {
  setDirectionsResponse: React.Dispatch<
    React.SetStateAction<google.maps.DirectionsResult | null>
  >
  setDistance: React.Dispatch<React.SetStateAction<string>>
  setDuration: React.Dispatch<React.SetStateAction<string>>
  setRouteCoordinates: React.Dispatch<
    React.SetStateAction<
      {
        lat: number
        lng: number
      }[]
    >
  >
  selectedMarkerTypes: MARKER_TYPE[]
  setSelectedMarkerTypes: React.Dispatch<React.SetStateAction<MARKER_TYPE[]>>
}

const DirectionInput = (props: DirectionInputProps) => {
  const {
    setDirectionsResponse,
    setDistance,
    setDuration,
    setRouteCoordinates,
    selectedMarkerTypes,
    setSelectedMarkerTypes,
  } = props

  const [originPoint, setOriginPoint] =
    useState<google.maps.places.PlaceResult | null>(null)
  const [destinationPoint, setDestinationPoint] =
    useState<google.maps.places.PlaceResult | null>(null)

  const originAutocomplete = useRef<google.maps.places.Autocomplete | null>(
    null
  )
  const destinationAutocomplete =
    useRef<google.maps.places.Autocomplete | null>(null)

  useEffect(() => {
    const calculateRoute = async () => {
      const directionsService = new google.maps.DirectionsService()
      const result = await directionsService.route({
        origin: {
          lat: originPoint?.geometry?.location?.lat() || 0,
          lng: originPoint?.geometry?.location?.lng() || 0,
        },
        destination: {
          lat: destinationPoint?.geometry?.location?.lat() || 0,
          lng: destinationPoint?.geometry?.location?.lng() || 0,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      })

      const tempRoute: { lat: number; lng: number }[] = []
      result.routes[0].legs.forEach((leg) => {
        leg.steps.forEach((step) => {
          step.path.forEach((point) => {
            tempRoute.push({
              lat: point.lat(),
              lng: point.lng(),
            })
          })
        })
      })

      const simplified = simplifyRoute(tempRoute, 0.001)
      setRouteCoordinates(simplified)

      setDirectionsResponse(result)
      setDistance(result.routes[0].legs[0].distance?.text || '-')
      setDuration(result.routes[0].legs[0].duration?.text || '-')
    }

    if (!originPoint || !destinationPoint) return

    calculateRoute()
  }, [
    destinationPoint,
    originPoint,
    setDirectionsResponse,
    setDistance,
    setDuration,
    setRouteCoordinates,
  ])

  return (
    <div
      className={clsx(
        'relative',
        'w-full bg-[#F6F6F6] z-10',
        'flex flex-col gap-y-[10px] py-3 px-4'
      )}
    >
      <div className="absolute border-l-[2px] border-dotted border-[#CACACA] h-[42px] top-[67px] left-[24px]" />
      <span className="text-sm font-medium text-primary">
        เส้นทางที่ต้องการเดินทาง
      </span>
      <div className="flex gap-x-1 w-full">
        <PinIcon />
        <div className="flex flex-col gap-y-1 w-full">
          <span className="text-sm text-[#7A7A7A]">ตำแหน่งที่ตั้งของคุณ</span>
          <Autocomplete
            onLoad={(autocomplete) => {
              originAutocomplete.current = autocomplete
            }}
            onPlaceChanged={() => {
              if (originAutocomplete.current) {
                const place = originAutocomplete.current.getPlace()
                setOriginPoint(place)
              }
            }}
          >
            <Input
              placeholder="พิมพ์ตำแหน่งที่ตั้งของคุณ"
              leftIcon={<SearchIcon />}
            />
          </Autocomplete>
        </div>
      </div>
      <div className="flex gap-x-1 w-full">
        <PinIcon stroke="#F94A00" />
        <div className="flex flex-col gap-y-1 w-full">
          <span className="text-sm text-[#7A7A7A]">ไปยัง</span>
          <Autocomplete
            onLoad={(autocomplete) =>
              (destinationAutocomplete.current = autocomplete)
            }
            onPlaceChanged={() => {
              if (destinationAutocomplete.current) {
                const place = destinationAutocomplete.current.getPlace()
                setDestinationPoint(place)
              }
            }}
          >
            <Input placeholder="พิมพ์จุดหมายของคุณ" leftIcon={<SearchIcon />} />
          </Autocomplete>
        </div>
      </div>

      <hr className="border-t-[0.5px] border-[#DFDFDF]" />

      <SelectedMarkerTypeButtons
        selectedMarkerTypes={selectedMarkerTypes}
        setSelectedMarkerTypes={setSelectedMarkerTypes}
      />
    </div>
  )
}

export default DirectionInput
