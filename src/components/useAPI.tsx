import React, { useEffect, useState } from 'react'

function useAPI() {
  const [data, setData] = useState<{ name: string }>()
  useEffect(() => {
    let isMount = true
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        if (isMount) {
          setData(data)
        }
      })
    return () => {
      isMount = false // component mount clean up function
    }
  }, [])
  return data
}

export default useAPI
