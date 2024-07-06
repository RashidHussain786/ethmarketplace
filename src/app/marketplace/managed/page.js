import MarketHeader from '@/components/UI/Common/MarketHeader'
import OrderCard from '@/components/UI/Order/OrderCard'

import React from 'react'

const page = () => {
    return (
        <>
        <div className='mt-20'>
            <MarketHeader />
        </div>
        <section className="grid grid-cols-1">
            <OrderCard />
        </section>
        </>
    )
}

export default page