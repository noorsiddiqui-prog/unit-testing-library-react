import React from 'react'

type Props = {
  name: string
}

const Person = ({ name }: Props) => {
  return <div role="contentinfo">Name is {name}</div>
}

export default Person
