import Modal from '@/components/UI/Common/Modal'
import CourseHero from '@/components/UI/Course/CourseHero'
import KeyPoint from '@/components/UI/Course/KeyPoint'
import Curriculum from '@/components/UI/Course/curriculum'
import { getAllCourses } from '@/content/cources/fetcher'

import React from 'react'

const Courses = ({params}) => { 
    const {data} = getAllCourses();
    const filterCourse = data.find((course)=> course.slug === params.slug);
      return (
         <>
         <div className='py-6'> 
         <CourseHero title = {filterCourse.title} description ={filterCourse.description} image = {filterCourse.coverImage}/>
         </div>
         <KeyPoint points = {filterCourse.wsl}/>
         <Curriculum locked ={true}/>
         <Modal/>
         </>
  )
}

export default Courses