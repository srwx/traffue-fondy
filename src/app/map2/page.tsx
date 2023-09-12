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

  const startPointRef = useRef<HTMLInputElement>(null)
  const endPointRef = useRef<HTMLInputElement>(null)

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ['places'],
  })

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

    console.log('routeCoordinates', routeCoordinates)

    console.log('simplified', simplified)

    setDirectionsResponse(result)
    setDistance(result.routes[0].legs[0].distance?.text || '-')
    setDuration(result.routes[0].legs[0].duration?.text || '-')
  }, [routeCoordinates])

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
      {directionsResponse && (
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <button className="absolute p-2 bottom-[2%] right-[30%] bg-primary text-white rounded-full">
              กดเพื่อดูปัญหาจราจร
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40 z-10" />
            <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-20">
              <div className="pt-4 bg-[#F6F6F6] rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
              </div>
              <div
                className={clsx(
                  'relative',
                  'w-full bg-[#F6F6F6] z-10',
                  'flex flex-col gap-y-[10px] py-3 px-4 pb-36'
                )}
              >
                <span>TODO: ปัญหาที่เจอระหว่างทาง</span>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </div>
  )
}

export default MapPageV2
