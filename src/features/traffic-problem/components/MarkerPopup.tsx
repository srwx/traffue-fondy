import { EventCardProps } from '@/components/EventCard'
import clsx from 'clsx'
import React from 'react'

type MarkerPopupProps = EventCardProps & { id: string }

const MarkerPopup = (props: MarkerPopupProps) => {
  const { date, eventName, time, locationName } = props

  return (
    <div
      className={clsx(
        'p-1 flex flex-col gap-y-[2px] font-ibmPlexSansThaiLooped'
      )}
    >
      <span className="text-black font-bold text-sm max-w-[250px] md:max-w-[500px] whitespace-nowrap text-ellipsis overflow-hidden">
        {eventName}
      </span>
      <p>
        <span className="text-[10px] text-[#8E8E8E]">สถานที่: </span>
        <span className="text-xs text-[#252525] font-medium">
          {locationName}
        </span>
      </p>
      <p>
        <span className="text-[10px] text-[#8E8E8E]">วันที่: </span>
        <span className="text-xs text-[#252525] font-medium">{date}</span>
      </p>
      <p>
        <span className="text-[10px] text-[#8E8E8E]">ช่วงเวลา: </span>
        <span className="text-xs text-[#252525] font-medium">{time}</span>
      </p>
    </div>
  )
}

export default MarkerPopup
