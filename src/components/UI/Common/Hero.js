import React from 'react'

const Hero = () => {
  return (
    <section className="lg:2/6 text-left py-20">
      <div className="text-6xl font-semibold text-cyan-500 leading-none">Grow your career as a developer</div>
      <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">Learn programming and web development the easy way! Get unlimited access to all of our courses.</div>
      <div className="mt-5 sm:mt-8 flex lg:justify-start">
        <div className="rounded-md shadow">
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10">
            Get started
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero