import React, { useEffect, useState } from 'react'

type Props = {}

function APIComponent({}: Props) {
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
  return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>
}

export default APIComponent
