"use client";

import React from 'react'
import WalletBar from '../Web3/WalletBar'
import EthRates from '../Web3/EthRates'
import Breadcrumbs from './Breadcrumbs'

export const LINKS = [{
    href: "/marketplace",
    value: "Buy"
  }, {
    href: "/marketplace/owned",
    value: "My Courses"
  }, {
    href: "/marketplace/managed",
    value: "Manage Courses"
  }]

const MarketHeader = () => {
    return (
        <>
        <WalletBar />
        <EthRates />
        <div className='flex flex-row-reverse py-6 px-4 sm:px-6 lg:px-6'>
            <Breadcrumbs items={LINKS}/>
        </div>
        </>
    )
}

export default MarketHeader