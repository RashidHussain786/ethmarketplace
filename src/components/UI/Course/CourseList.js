import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseList = ({ courses ,children}) => {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
      {courses?.map((course,i) => children(course))}
    </section>
  )
}

export default CourseList