'use client'
import React, { useEffect } from 'react'

const TempPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://af98-1-47-152-85.ngrok-free.app/hello', {
        method: 'GET',
        headers: new Headers({
          'ngrok-skip-browser-warning': '69420',
        }),
      })
      console.log('res', res)
      const resJson = await res.json()
      console.log('resJson', resJson)
    }

    fetchData()
  }, [])

  return <div>TempPage</div>
}

export default TempPage
