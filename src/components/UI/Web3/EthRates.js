import Image from 'next/image'
import React from 'react'
import useEthPrice, { COURSE_PRICE } from '@/components/Hooks/useEthPrice'
const EthRates = () => {
  const {eth} = useEthPrice();
  return (
    <div className="grid grid-cols-4 pt-6">
        <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md">
            <span className="text-2xl font-bold flex items-center">
              <Image height={35} alt="eth-img" width={35} src="/small-eth.webp"/>
              (ETH) = {eth.data}$
            </span>
            <p className="text-xl text-gray-500">Current eth Price</p>
        </div>
        </div>
        <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md">
            <span className="text-2xl font-bold flex items-center">
              <Image height={35} alt="eth-img" width={35} src="/small-eth.webp"/>
               {eth.perItem} = {COURSE_PRICE}$
            </span>
            <p className="text-xl text-gray-500">Price per course</p>
        </div>
        </div>
    </div>
  )
}

export default EthRates