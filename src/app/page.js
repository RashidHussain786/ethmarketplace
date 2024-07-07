"use client";

import Breadcrumbs from "@/components/UI/Common/Breadcrumbs";
import Button from "@/components/UI/Common/Button";
import Hero from "@/components/UI/Common/Hero";
import Message from "@/components/UI/Common/Message";
import CourseCard from "@/components/UI/Course/CourseCard";
import CourseList from "@/components/UI/Course/CourseList";
import OrderCard from "@/components/UI/Order/OrderCard";
import EthRates from "@/components/UI/Web3/EthRates";
import { getAllCourses } from "@/content/cources/fetcher";

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

export default function Home() {
  const { data: courses } = getAllCourses();
  return (
    <>
      <Hero />
      <EthRates/>
      <div className='flex flex-row-reverse py-6 px-4 sm:px-6 lg:px-6'>
      <Breadcrumbs items ={LINKS}/>
      </div>
      <OrderCard>
          <Message>
            My custom message!
          </Message>
          <Button>
            Watch the course
          </Button>
        </OrderCard>
      <CourseList courses={courses}>
        {course => <CourseCard key={course.id} course={course}/>}
      </CourseList>
    </>
  );
}
