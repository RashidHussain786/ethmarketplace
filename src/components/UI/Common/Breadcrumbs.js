import React from 'react'

const Breadcrumbs = () => {
  return (
    <nav aria-label="breadcrumb" className="mb-4">
    <ol className="flex leading-none text-cyan-600 divide-x divide-cyan-400">
      <li className="pr-4"><a href="#">Buy</a></li>
      <li className="px-4"><a href="#">My Orders</a></li>
      <li className="px-4"><a href="#">All Orders</a></li>
    </ol>
  </nav>
  )
}

export default Breadcrumbs