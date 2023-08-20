import React from 'react'

type Props = {
  items: {
    name: string
    href: string
  }[]
}

function Sidebar({ items }: Props) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.href}>
          <a role="navigation" href={item.href}>
            {item.name}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
