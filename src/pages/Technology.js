import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Technology() {
  const [launch, setLaunch] = useState({})
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024)
  const { id } = useParams()

  console.log(isDesktop)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024)
  }

  const fetchData = async () => {
    const data = await fetch('../data.json')
    const response = await data.json()
    const { technology } = response
    const getLaunch = technology.filter(launch => launch.name.toLowerCase().includes(id))

    if (getLaunch.length > 1 && id === 'spaceport') {
      const [spacePort, spaceCapsule] = getLaunch
      return spacePort
    } else if (id === 'space') {
      const [spacePort, spaceCapsule] = getLaunch
      return spaceCapsule
    }

    const [launch] = getLaunch
    return launch
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)

    const getData = async () => {
      const dataFromLocal = await fetchData()
      setLaunch(dataFromLocal)
    }

    getData()

    return () => window.removeEventListener('resize', updateMedia)
  }, [id])
  return (
    <main className='bg-cover bg-technology-mobile flex flex-col min-h-screen sm:bg-technology-tablet lg:bg-technology-desktop' >

      <h1 className='mt-20 py-6 text-white text-center text-lg font-barlow-condensed tracking-[2.7px] md:ml-[38.5px] md:text-left lg:text-3xl lg:ml-[166.5px] lg:mt-32 lg:p-12 lg:text-left'>
        <span className='text-gray-500 font-bold'>03</span> SPACE LAUNCH 101
      </h1>

      <article className='min-h-[75vh] text-white flex flex-col justify-evenly items-center w-full md:min-h-0 md:block md:items-start lg:flex-row-reverse lg:justify-between lg:min-h-0 lg:flex lg:items-center'>

        <aside className=''>
          <img className={isDesktop ? 'hidden' : 'md:w-screen'} src={Object.keys(launch).length && launch.images.landscape} />
          <img className={isDesktop ? 'lg:h-[60vh]' : 'hidden'} src={(Object.keys(launch).length && isDesktop) && launch.images.portrait} />
        </aside>

        <nav className='md:my-16 lg:ml-[166.5px] lg:px-12 lg:order-1'>
          <ul className='flex justify-between md:px-72 lg:flex-col lg:h-96 lg:px-0'>
            <li className={id.includes('launch') ?
              'md:w-[60px] md:h-[60px] mx-2 font-bellefair text-3xl w-10 h-10 rounded-full flex justify-center items-center border-[1px] bg-white text-black lg:h-20 lg:w-20' :
              'md:w-[60px] md:h-[60px] mx-2 font-bellefair text-3xl w-10 h-10 rounded-full flex justify-center items-center border-[1px] border-white border-opacity-50 hover:border-opacity-100 lg:h-20 lg:w-20'}>
              <Link className='p-8' to='/technology/launch'>1</Link>
            </li>
            <li className={id === 'spaceport' ?
              'md:w-[60px] md:h-[60px] mx-2 font-bellefair text-3xl w-10 h-10 rounded-full flex justify-center items-center border-[1px] bg-white text-black lg:h-20 lg:w-20' :
              'md:w-[60px] md:h-[60px] mx-2 font-bellefair text-3xl w-10 h-10 rounded-full flex justify-center items-center border-[1px] border-white border-opacity-50 hover:border-opacity-100 lg:h-20 lg:w-20'}>
              <Link className='p-8' to='/technology/spaceport'>2</Link>
            </li>
            <li className={id == 'space' ?
              'md:w-[60px] md:h-[60px] mx-2 font-bellefair text-3xl w-10 h-10 rounded-full flex justify-center items-center border-[1px] bg-white text-black lg:h-20 lg:w-20' :
              'md:w-[60px] md:h-[60px] mx-2 font-bellefair text-3xl w-10 h-10 rounded-full flex justify-center items-center border-[1px] border-white border-opacity-50 hover:border-opacity-100 lg:h-20 lg:w-20'}>
              <Link className='p-8' to='/technology/space'>3</Link>
            </li>
          </ul>
        </nav>

        <section className='flex flex-col lg:px-20 lg:mr-56 lg:min-w-[40vw] lg:min-h-[40vh]'>
          <p className='font-barlow-condensed text-[16px] text-center tracking-widest text-[#D0D6F9] lg:text-left'>
            THE TERMINOLOGY...
          </p>
          <h2 className='font-bellefair text-white text-2xl text-center md:py-6 md:text-[40px] lg:text-6xl lg:py-8 lg:text-left'>
            {Object.keys(launch).length && launch.name.toUpperCase()}
          </h2>
          <p className='text-[#D0D6F9] text-center text-sm w-80 min-h-[120px] my-4 md:w-full md:px-44 lg:w-[444px] lg:text-[18px] lg:leading-loose lg:text-left lg:my-2 lg:px-0'>
            {Object.keys(launch).length && launch.description}
          </p>
        </section>



      </article>

    </main>
  )
}
