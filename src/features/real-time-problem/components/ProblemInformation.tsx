import { AiProblemDetectionProps } from '@/const/mockAiProblemDetection'
import { InfoRoundedIcon, InfoSquareIcon } from '@/icons'
import { getAiProblemDetectionIcon } from '@/utils/getAiProblemDetectionIcon'
import clsx from 'clsx'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import VideoPlayer from './VdoPlayer'

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
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       'https://2cf9-2405-9800-b640-8523-1c9d-264b-aaf5-9b16.ngrok-free.app/result/text',
  //       {
  //         method: 'GET',
  //         headers: new Headers({
  //           'ngrok-skip-browser-warning': '69420',
  //         }),
  //       }
  //     )
  //     console.log('res', res)
  //     const resJson = await res.json()
  //     console.log('resJson', resJson.result)
  //   }

  //   fetchData()
  // }, [])

  return (
    <div className="w-full flex flex-col gap-y-6 mt-4">
      {/* <!-- Camera section --> */}
      <div className="flex flex-col gap-y-3">
        <div
          className={clsx(
            'w-[382px] min-h-[250px] h-max rounded',
            'flex justify-center items-center',
            'bg-[#ebebeb]',
            'mx-auto'
          )}
        >
          {cameraVdoUrl ? (
            <VideoPlayer
              videoId={cameraVdoUrl}
              isError={isError}
              isLoading={isLoading}
              setIsError={setIsError}
              setIsLoading={setIsLoading}
            />
          ) : (
            <div className="flex items-center gap-x-2">
              <InfoRoundedIcon />
              <span className="text-[#B1B1B1] text-sm">ไม่มีข้อมูล</span>
            </div>
          )}
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
        {isLoading ? (
          <span className="text-primary">กำลังโหลดภาพจากกล้อง...</span>
        ) : isError ? (
          <span className="text-secondary">ไม่สามารถโหลดภาพจากกล้องได้</span>
        ) : cameraVdoUrl ? (
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
        ) : (
          <div className="flex justify-center items-center gap-x-2 bg-white border-[#ECECEC] border-[1px] rounded-lg py-3">
            <InfoRoundedIcon />
            <span className="text-[#B1B1B1] text-sm">ไม่มีข้อมูล</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProblemInformation
