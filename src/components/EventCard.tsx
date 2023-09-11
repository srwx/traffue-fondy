import Image from 'next/image'
import React from 'react'

export interface EventCardProps {
  eventName: string
  locationName: string
  date: string
  image?: string
  latitude: number
  longitude: number
}

const EventCard = (props: EventCardProps) => {
  const { eventName, locationName, date, image } = props

  return (
    <div className="flex flex-col gap-y-2 bg-white p-3 rounded-lg">
      {image && (
        <div className="w-full h-full max-h-[100px] rounded-lg">
          <Image src={image} alt="event" fill className="rounded-lg" />
        </div>
      )}
      <span className="font-bold text-xs md:text-sm text-black">
        {eventName}
      </span>
      <p className="text-xs md:text-sm text-black">
        สถานที่: <b>{locationName}</b>
      </p>
      <p className="text-xs md:text-sm text-black">
        วัน-เวลา: <b>{date}</b>
      </p>
    </div>
  )
}

export default EventCard
