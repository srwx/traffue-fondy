'use client'
import React, { useEffect } from 'react'

const TempPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://2cf9-2405-9800-b640-8523-1c9d-264b-aaf5-9b16.ngrok-free.app/result/text',
        {
          method: 'GET',
          headers: new Headers({
            'ngrok-skip-browser-warning': '69420',
          }),
        }
      )
      console.log('res', res)
      const resJson = await res.json()
      console.log('resJson', resJson)
    }

    fetchData()
  }, [])

  return <div>TempPage</div>
}

export default TempPage
