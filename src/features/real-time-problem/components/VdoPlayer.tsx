import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  videoId: string
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchVdo = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `https://2cf9-2405-9800-b640-8523-1c9d-264b-aaf5-9b16.ngrok-free.app/result/vdo/${videoId}`,
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
  }, [videoId])

  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <span className="text-primary">Loading...</span>
        </div>
      )}
      {isError && (
        <div className="w-full h-full flex justify-center items-center">
          <span className="text-secondary">Failed to fetch VDO.</span>
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
