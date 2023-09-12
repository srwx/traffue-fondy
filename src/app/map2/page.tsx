'use client'
import React, { useCallback, useRef, useState } from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from '@react-google-maps/api'
import { mockMarkers } from '@/const/mockMarkers'
import { PinIcon, SearchIcon, TraffueFondyIcon } from '@/icons'
import Tabs from '@/components/Tabs'
import clsx from 'clsx'
import Input from '@/components/Input'

const bangkokCenter = {
  lat: 13.7564,
  lng: 100.5018,
}

const MapPageV2 = () => {
  const [isSelectedTitle1, setIsSelectedTitle1] = useState(true)
  const startPointRef = useRef<HTMLInputElement>(null)
  const endPointRef = useRef<HTMLInputElement>(null)

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ['places'],
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
