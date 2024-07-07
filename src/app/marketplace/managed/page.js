import Button from '@/components/UI/Common/Button'
import MarketHeader from '@/components/UI/Common/MarketHeader'
import CourseFilter from '@/components/UI/Course/CourseFilter'
import OrderCard from '@/components/UI/Order/OrderCard'

import React from 'react'

const page = () => {
    return (
        <>
        <div className='mt-20'>
            <MarketHeader />
            <CourseFilter />
        </div>
        <section className="grid grid-cols-1">
        <OrderCard>
          <div className="flex mr-2 relative rounded-md">
            <input
              type="text"
              name="account"
              id="account"
              className="w-96 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-l-md"
              placeholder="0x2341ab..." />
            <Button className='text-white bg-cyan-600 hover:bg-cyan-700 rounded-r-md'>
              Verify
            </Button>
          </div>
        </OrderCard>
        </section>
        </>
    )
}

export default page