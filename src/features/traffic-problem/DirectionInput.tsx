import Input from '@/components/Input'
import { PinIcon, SearchIcon } from '@/icons'
import { simplifyRoute } from '@/utils/simplifyRoute'
import { Autocomplete } from '@react-google-maps/api'
import clsx from 'clsx'
import React, { useCallback, useRef } from 'react'

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
}

const DirectionInput = (props: DirectionInputProps) => {
  const {
    setDirectionsResponse,
    setDistance,
    setDuration,
    setRouteCoordinates,
  } = props

  const startPointRef = useRef<HTMLInputElement>(null)
  const endPointRef = useRef<HTMLInputElement>(null)

  const calculateRoute = useCallback(async () => {
    if (!startPointRef.current?.value || !endPointRef.current?.value) return

    const directionsService = new google.maps.DirectionsService()
    const result = await directionsService.route({
      origin: startPointRef.current.value,
      destination: endPointRef.current.value,
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
  }, [setDirectionsResponse, setDistance, setDuration, setRouteCoordinates])

  return (
    <div
      className={clsx(
        //   'absolute bottom-0 left-0',
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
          <Autocomplete>
            <Input
              ref={startPointRef}
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
          <Autocomplete>
            <Input
              ref={endPointRef}
              placeholder="พิมพ์จุดหมายของคุณ"
              leftIcon={<SearchIcon />}
            />
          </Autocomplete>
        </div>
      </div>
      <button
        className="w-full py-2 rounded-lg text-center bg-primary text-white"
        onClick={calculateRoute}
      >
        คำนวนระยะทาง
      </button>
    </div>
  )
}

export default DirectionInput
