"use client";

import { useWalletInfo } from '@/components/Hooks/web3Hooks';
import Button from '@/components/UI/Common/Button';
import MarketHeader from '@/components/UI/Common/MarketHeader';
import CourseCard from '@/components/UI/Course/CourseCard';
import CourseList from '@/components/UI/Course/CourseList'
import OrderModal from '@/components/UI/Order/OrderModal';
import { getAllCourses } from '@/content/cources/fetcher';
import React, { useState } from 'react'

const page = () => {
  const { data: courses } = getAllCourses();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const {canPurchaseCourse} = useWalletInfo();
 

  return (
    <>
      <div className='mt-20'>
      <MarketHeader/>
      </div>
      <CourseList courses={courses}>
        {course => 
          <CourseCard 
              disabled = {!canPurchaseCourse} 
              key={course.id} 
              course={course}   
              ButtonFooter={() =>   
                < Button 
                    disabled = {!canPurchaseCourse} 
                    onClick={()=> setSelectedCourse(course)}>
                      Purchase
                </Button>
              } 
          />}
      </CourseList>

      <OrderModal course = {selectedCourse} onClose={()=> setSelectedCourse(null)}/>
    </>
  )
}

export default page