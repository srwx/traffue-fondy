import { AiProblemDetectionProps } from '@/const/mockAiProblemDetection'
import { InfoSquareIcon } from '@/icons'
import { getAiProblemDetectionIcon } from '@/utils/getAiProblemDetectionIcon'
import clsx from 'clsx'
import dayjs from 'dayjs'
import React from 'react'
import buddhistEra from 'dayjs/plugin/buddhistEra'

dayjs.locale('th')
dayjs.extend(buddhistEra)

interface ProblemInformationProps {
  cameraName: string
  cameraLocation: string
  aiDetectedData: AiProblemDetectionProps[]
  cameraVdoUrl?: string
}

const ProblemInformation = ({
  cameraName,
  cameraLocation,
  aiDetectedData,
  cameraVdoUrl,
}: ProblemInformationProps) => {
  const currentDate = dayjs().format('D MMMM YYYY')

  return (
    <div className="w-full flex flex-col gap-y-6 mt-4">
      {/* <!-- Camera section --> */}
      <div className="flex flex-col gap-y-3">
        <div
          className={clsx(
            'w-full h-[244px] rounded',
            'flex justify-center items-center',
            'bg-[#ebebeb]'
          )}
        >
          <span className="text-sm text-primary">
            🚧 TODO: VDO from camera with AI detection
          </span>
        </div>
        <div className="flex items-center gap-x-3">
          <InfoSquareIcon />
          <span className="text-primary text-xs">
            ที่ตั้ง: {cameraLocation}
          </span>
        </div>
      </div>

      {/* <!-- Problem list section --> */}
      <div className="flex flex-col gap-y-3">
        <span className="text-primary text-sm font-medium">
          ปัญหาที่พบในเส้นทาง
        </span>
        <div className="flex flex-col bg-white rounded-lg border-[1px] border-[#ECECEC] px-3 [&>*:not(:last-child)]:border-b-[1px]">
          {aiDetectedData.map((problem) => (
            <div key={problem.id} className="flex items-center gap-x-3 py-3">
              <>{getAiProblemDetectionIcon(problem.type)}</>
              <div className="flex flex-col gap-y-1">
                <span className="text-primary text-sm">{problem.name}</span>
                <span className="text-[#7A7A7A] text-xs">
                  วันเวลา: {currentDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProblemInformation
