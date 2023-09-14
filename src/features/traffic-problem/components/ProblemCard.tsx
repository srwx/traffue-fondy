import { EventCardProps } from '@/components/EventCard'
import { getMarkerType } from '@/utils/getMarkerType'
import React from 'react'

const ProblemCard = (props: EventCardProps & { id: string }) => {
  const { eventName, date, time, locationName, type } = props
  const markerComponent = getMarkerType(type)

  return (
    <div className="flex items-center gap-x-3 py-2">
      <div>{markerComponent}</div>

      <div className="flex flex-col">
        <span className="text-primary text-sm">{eventName}</span>
        <p className="text-[#7A7A7A] text-xs line-clamp-2 text-ellipsis">
          สถานที่: {locationName}
        </p>
        <p className="text-[#7A7A7A] text-xs">วันที่: {date}</p>
      </div>
    </div>
  )
}

export default ProblemCard
