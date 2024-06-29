import Breadcrumbs from "@/components/UI/Common/Breadcrumbs";
import Hero from "@/components/UI/Common/Hero";
import CourseCard from "@/components/UI/Course/CourseCard";
import CourseList from "@/components/UI/Course/CourseList";
import OrderCard from "@/components/UI/Order/OrderCard";
import EthRates from "@/components/UI/Web3/EthRates";
import WalletBar from "@/components/UI/Web3/WalletBar";
import { getAllCourses } from "@/content/cources/fetcher";
import Image from "next/image";

export default function Home() {
  const { data: courses } = getAllCourses();
  return (
    <>
      <Hero />
      <Breadcrumbs />
      {/* <WalletBar /> */}
      <EthRates />
      <OrderCard />
      <CourseList courses={courses}>
        {course => <CourseCard key={course.id} course={course}/>}
      </CourseList>
    </>
  );
}
