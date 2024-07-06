
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseCard = ({ course, disabled,ButtonFooter }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="flex h-full w-full">
                <div className="relative w-1/2 md:w-1/3">
                    <div className="aspect-w-2 aspect-h-2">
                        <Image
                            src={course?.coverImage}
                            layout="fill"
                            objectFit="cover"
                            alt={course?.title}
                            className={`object-cover ${disabled && "filter grayscale"}`}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between p-8 w-1/2 md:w-2/3">
                    <div className="uppercase tracking-wide text-sm text-cyan-500 font-semibold">
                        {course?.type}
                    </div>
                    {disabled ? (
                        <span className="block mt-1 text-lg leading-tight font-medium text-black">
                            {course?.title}
                        </span>
                    ) : (
                        <Link href={`/courses/${course?.slug}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                            {course?.title}
                        </Link>
                    )}
                    <p className="mt-2 text-gray-500">
                        {course?.description}
                    </p>
                    {ButtonFooter && <div className="mt-4">{<ButtonFooter />}</div>}
                </div>
            </div>
        </div>
    );
};

export default CourseCard;


