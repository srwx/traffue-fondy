import DropdownSelection from '@/components/primitives/Dropdown/Dropdown'
import { cameraList } from '@/const/cameraList'
import React, { useMemo, useState } from 'react'

const RealTimeProblemPage = () => {
  const [selectedCamera, setSelectedCamera] = useState('')

  const onSelectCamera = (cameraName: string) => {
    setSelectedCamera(cameraName)
  }

  return (
    <div className="relative mx-auto px-4 py-5">
      <div className="w-full flex flex-col gap-y-3">
        <span className="text-sm text-primary font-medium">
          เลือกจุดติดตั้งกล้อง
        </span>
        <DropdownSelection
          placeholder="เลือกจุดติดตั้งกล้อง"
          selectedMemu={selectedCamera}
          onSelectMenu={onSelectCamera}
          menuList={cameraList}
        />
      </div>
    </div>
  )
}

export default RealTimeProblemPage
