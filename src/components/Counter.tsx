import React, { useState } from 'react'

type Props = {}

const Counter: React.FunctionComponent = (props: Props) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Add One </button>
      <div role="contentinfo">Count is {count}</div>
    </div>
  )
}

export default Counter
