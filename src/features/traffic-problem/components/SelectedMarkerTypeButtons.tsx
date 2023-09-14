import { MARKER_TYPE } from '@/const/mockMarkers'
import { CheckCircle } from '@/icons'
import clsx from 'clsx'
import React from 'react'

interface SelectedMarkerTypeButtonsProps {
  selectedMarkerTypes: MARKER_TYPE[]
  setSelectedMarkerTypes: React.Dispatch<React.SetStateAction<MARKER_TYPE[]>>
}

const SelectedMarkerTypeButtons = ({
  selectedMarkerTypes,
  setSelectedMarkerTypes,
}: SelectedMarkerTypeButtonsProps) => {
  const isSelectedAll = selectedMarkerTypes.length === 0
  const isSelectedAccident = selectedMarkerTypes.includes(MARKER_TYPE.ACCIDENT)
  const isSelectedConstruction = selectedMarkerTypes.includes(
    MARKER_TYPE.CONSTRUCTION
  )
  const isSelectedEvent = selectedMarkerTypes.includes(MARKER_TYPE.EVENT)
  const isSelectedDelayed = selectedMarkerTypes.includes(MARKER_TYPE.DELAYED)

  return (
    <div className="w-full overflow-scroll scrollbar-hide flex gap-x-2 whitespace-nowrap">
      <button
        className={clsx(
          'rounded-md px-3 py-1 flex items-center gap-x-2 text-sm',
          {
            'text-[#FFF7F2] font-medium bg-primary': isSelectedAll,
            'text-[#969696] bg-[#EFEFEF]': !isSelectedAll,
          }
        )}
        onClick={() => setSelectedMarkerTypes([])}
      >
        {isSelectedAll && <CheckCircle />}
        <span>ทั้งหมด</span>
      </button>
      <button
        className={clsx(
          'rounded-md px-3 py-1 flex items-center gap-x-2 text-sm',
          {
            'text-[#FFF7F2] font-medium bg-primary': isSelectedAccident,
            'text-[#969696] bg-[#EFEFEF]': !isSelectedAccident,
          }
        )}
        onClick={() => {
          setSelectedMarkerTypes((prev) => {
            if (prev.includes(MARKER_TYPE.ACCIDENT)) {
              return prev.filter((type) => type !== MARKER_TYPE.ACCIDENT)
            } else {
              return [...prev, MARKER_TYPE.ACCIDENT]
            }
          })
        }}
      >
        {isSelectedAccident && <CheckCircle />}
        <span>อุบัติเหตุ</span>
      </button>
      <button
        className={clsx(
          'rounded-md px-3 py-1 flex items-center gap-x-2 text-sm',
          {
            'text-[#FFF7F2] font-medium bg-primary': isSelectedEvent,
            'text-[#969696] bg-[#EFEFEF]': !isSelectedEvent,
          }
        )}
        onClick={() => {
          setSelectedMarkerTypes((prev) => {
            if (prev.includes(MARKER_TYPE.EVENT)) {
              return prev.filter((type) => type !== MARKER_TYPE.EVENT)
            } else {
              return [...prev, MARKER_TYPE.EVENT]
            }
          })
        }}
      >
        {isSelectedEvent && <CheckCircle />}
        <span>กิจกรรม</span>
      </button>
      <button
        className={clsx(
          'rounded-md px-3 py-1 flex items-center gap-x-2 text-sm',
          {
            'text-[#FFF7F2] font-medium bg-primary': isSelectedConstruction,
            'text-[#969696] bg-[#EFEFEF]': !isSelectedConstruction,
          }
        )}
        onClick={() => {
          setSelectedMarkerTypes((prev) => {
            if (prev.includes(MARKER_TYPE.CONSTRUCTION)) {
              return prev.filter((type) => type !== MARKER_TYPE.CONSTRUCTION)
            } else {
              return [...prev, MARKER_TYPE.CONSTRUCTION]
            }
          })
        }}
      >
        {isSelectedConstruction && <CheckCircle />}
        <span>ปิดถนน/ซ่อมถนน</span>
      </button>
      <button
        className={clsx(
          'rounded-md px-3 py-1 flex items-center gap-x-2 text-sm',
          {
            'text-[#FFF7F2] font-medium bg-primary': isSelectedDelayed,
            'text-[#969696] bg-[#EFEFEF]': !isSelectedDelayed,
          }
        )}
        onClick={() => {
          setSelectedMarkerTypes((prev) => {
            if (prev.includes(MARKER_TYPE.DELAYED)) {
              return prev.filter((type) => type !== MARKER_TYPE.DELAYED)
            } else {
              return [...prev, MARKER_TYPE.DELAYED]
            }
          })
        }}
      >
        {isSelectedDelayed && <CheckCircle />}
        <span>รถเก็บขยะ</span>
      </button>
    </div>
  )
}

export default SelectedMarkerTypeButtons
