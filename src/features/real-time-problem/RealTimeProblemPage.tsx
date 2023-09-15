import DropdownSelection from '@/components/primitives/Dropdown/Dropdown'
import { cameraList } from '@/const/cameraList'
import React, { useState } from 'react'
import ProblemInformation from './components/ProblemInformation'
import { mockAiProblemDetection } from '@/const/mockAiProblemDetection'

const RealTimeProblemPage = () => {
  const [selectedCamera, setSelectedCamera] = useState('')

  const onSelectCamera = (cameraName: string) => {
    setSelectedCamera(cameraName)
  }

  return (
    <div className="relative mx-auto px-4 py-5 z-10">
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
      {selectedCamera && (
        <ProblemInformation
          cameraLocation={selectedCamera}
          cameraName={selectedCamera}
          aiDetectedData={mockAiProblemDetection}
        />
      )}
    </div>
  )
}

export default RealTimeProblemPage
