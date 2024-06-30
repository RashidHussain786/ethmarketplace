"use client";

import { useAccount, useNetwork } from '@/components/Hooks/web3Hooks';
import Button from '@/components/UI/Common/Button';
import Modal from '@/components/UI/Common/Modal';
import CourseCard from '@/components/UI/Course/CourseCard';
import CourseList from '@/components/UI/Course/CourseList'
import OrderModal from '@/components/UI/Order/OrderModal';
import WalletBar from '@/components/UI/Web3/WalletBar'
import { getAllCourses } from '@/content/cources/fetcher';
import React, { useState } from 'react'

const page = () => {
  const { data: courses } = getAllCourses();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { account } = useAccount();
  const { network } = useNetwork();
  return (
    <>
      <div className='mt-20 mb-8'>
        <WalletBar
          address={account.data}
          network={{ data: network.data, target: network.target, isSupported: network.isSupported, hasInitialResponse: network.hasInitialResponse }}
        />
      </div>
      <CourseList courses={courses}>
        {course => <CourseCard key={course.id} course={course} ButtonFooter={() =>< Button onClick={()=> setSelectedCourse(course)}>Purchase</Button>} />}
      </CourseList>

      <OrderModal course = {selectedCourse} onClose={()=> setSelectedCourse(null)}/>
    </>
  )
}

export default page