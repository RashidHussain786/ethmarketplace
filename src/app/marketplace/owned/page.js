import Button from '@/components/UI/Common/Button'
import MarketHeader from '@/components/UI/Common/MarketHeader'
import Message from '@/components/UI/Common/Message'
import OrderCard from '@/components/UI/Order/OrderCard'

import React from 'react'

const page = () => {
  return (
    <>
    <div className='mt-20'>
      <MarketHeader/>
    </div>
    <section className="grid grid-cols-1">
        <OrderCard>
          <Message>
            My custom message!
          </Message>
          <Button>
            Watch the course
          </Button>
        </OrderCard>
    </section>
    </>
  )
}

export default page