

import React from 'react'
import ActiveLink from './ActiveLink'

const Breadcrumbs = ({items}) => {

  return (
    <nav aria-label="breadcrumb">
    <ol className="flex leading-none text-cyan-600 divide-x divide-cyan-400">
    { items.map((item, i) =>
          <li
            key={item.href}
            className={`${i == 0 ? "pr-4" : "px-4"} font-medium text-white hover:text-gray-500`}>
            <ActiveLink href={item.href}>
                {item.value}
            </ActiveLink>
          </li>
        )}
    </ol>
  </nav>
  )
}

export default Breadcrumbs