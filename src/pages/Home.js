import React from 'react'
import { Link } from 'react-router-dom'
import explore from '../assets/explore.svg'

export default function Home() {
  return (
    <main className='bg-cover flex flex-col min-h-screen bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop'>

      <article className='min-h-screen flex flex-col justify-evenly items-center w-screen lg:justify-between lg:flex-row lg: lg:px-36 lg:items-end'>

        <section className='mt-20 flex flex-col justify-between items-center lg:w-[30vw] lg:mt-80 lg:items-start lg:mb-28'>
          <p className='text-[#D0D6F9] py-2 font-barlow-condensed tracking-[2.7px] text-lg lg:text-3xl lg:tracking-widest'>
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className='text-white py-4 font-bellefair tracking-widest text-7xl md:text-[150px]'>
            SPACE
          </p>
          <p className='text-[#D0D6F9] py-2 px-4 text-center text-sm font-barlow md:px-40 md:text-lg lg:w-[450px] lg:px-0 lg:text-xl lg:text-left'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </section>

        <aside className='px-20 rounded-full transition-all duration-700 md:mt-40 lg:p-24 lg:mb-8 hover:bg-white hover:bg-opacity-20'>
          <Link to='destination/moon'>
            <img className='w-36 md:w-60 lg:w-72' src={explore} />
          </Link>
        </aside>
      </article>

    </main>
  )
}