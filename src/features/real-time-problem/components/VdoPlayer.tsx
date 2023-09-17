import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  videoId: string
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  isError: boolean
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
}

const VideoPlayer = ({
  videoId,
  isError,
  isLoading,
  setIsError,
  setIsLoading,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const fetchVdo = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_AI_URL}/result/vdo/${videoId}`,
          {
            method: 'GET',
            headers: new Headers({
              'ngrok-skip-browser-warning': '69420',
            }),
          }
        )
        const blob = await response.blob()
        const videoUrl = URL.createObjectURL(blob)

        if (videoRef.current) {
          // Set the src and autoplay if videoRef exists
          videoRef.current.src = videoUrl
          videoRef.current.play()
        }
      } catch (err) {
        console.log(err)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchVdo()
  }, [setIsError, setIsLoading, videoId])

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <span className="text-primary">กำลังโหลดภาพจากกล้อง...</span>
        </div>
      )}
      {isError && (
        <div className="w-full h-full flex justify-center items-center">
          <span className="text-secondary">ไม่สามารถโหลดภาพจากกล้องได้</span>
        </div>
      )}
      <video
        className={clsx({ hidden: isLoading || isError })}
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
    </div>
  )
}

export default VideoPlayer
