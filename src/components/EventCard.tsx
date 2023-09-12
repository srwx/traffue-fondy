import Image from 'next/image'
import React from 'react'

export interface EventCardProps {
  eventName: string
  locationName: string
  date: string
  time: string
  latitude: number
  longitude: number
  type: string // TODO: now is path to svg, refactor to enum and mapper
}

const EventCard = (props: EventCardProps) => {
  const { eventName, locationName, date, time } = props

  return (
    <div className="flex flex-col gap-y-1 bg-white p-3 rounded-lg">
      <span className="font-bold text-xs text-black">{eventName}</span>
      <p className="text-xs text-black">
        <span className="text-[#8E8E8E]">สถานที่:</span> <b>{locationName}</b>
      </p>
      <p className="text-xs text-black">
        <span className="text-[#8E8E8E]">วัน-เวลา:</span> <b>{date}</b>
      </p>
      <p className="text-xs text-black">
        <span className="text-[#8E8E8E]">ช่วงเวลา</span> <b>{time}</b>
      </p>
    </div>
  )
}

export default EventCard
