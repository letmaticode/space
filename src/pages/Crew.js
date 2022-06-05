import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Crew() {
  const [person, setPerson] = useState({})
  const { id } = useParams()

  console.log(person.images)

  const fetchData = async () => {
    const data = await fetch('../data.json')
    console.log(data)
    const response = await data.json()
    const { crew } = response
    const getPerson = crew.filter(person => person.name.toLowerCase().includes(id))
    const [person] = getPerson

    return person
  }

  useEffect(() => {
    const getData = async () => {
      const dataFromLocal = await fetchData()
      setPerson(dataFromLocal)
    }

    getData()

  }, [id])
  return (
    <main className='bg-cover flex flex-col items-center min-h-screen bg-crew-mobile sm:bg-crew-tablet md:justify-between lg:bg-crew-desktop md:items-start lg:items-start'>

      <h1 className='mt-20 py-6 text-white text-center text-lg font-barlow-condensed tracking-[2.7px] md:ml-[38.5px] lg:text-3xl lg:ml-[166.5px] lg:mt-32 lg:p-12'>
        <span className='text-gray-500 font-bold'>02</span> MEET YOUR CREW
      </h1>

      <section className='min-h-[80vh] flex flex-col items-center justify-evenly md:justify-between md:min-h-[85vh] md:flex-col-reverse md:w-full lg:flex-row-reverse lg:w-4/5 lg:min-h-[70vh]'>

        <aside className='w-[327px] h-[223px] flex justify-center border-b-2 border-[#383B4B] md:border-b-0 md:h-[53vh] md:w-[50vw] lg:border-b-0 lg:h-[73vh] lg:w-[41vw] lg lg:block'>
          <img className='w-[160px] h-[221px] md:h-full md:w-full lg:w-full lg:h-full' src={Object.keys(person).length && person.images.png} />
        </aside>

        <article className='w-full flex flex-col items-center md:flex-col-reverse lg:ml-[166.5px] lg:pb-24 lg:px-12 lg:items-start lg:w-full lg:flex-col-reverse'>
          <nav className=''>
            <ul className='flex justify-between w-36 my-6 lg:w-36'>
              <li>
                <Link className={id.includes('douglas') ?
                  'w-[15px] h-[15px] block bg-white rounded-full' :
                  'w-[15px] h-[15px] block bg-white opacity-[0.17] rounded-full hover:opacity-50'} to='/crew/douglas'></Link>
              </li>
              <li>
                <Link className={id.includes('mark') ?
                  'w-[15px] h-[15px] block bg-white rounded-full' :
                  'w-[15px] h-[15px] block bg-white opacity-[0.17] rounded-full hover:opacity-50'} to='/crew/mark'></Link>
              </li>
              <li>
                <Link className={id.includes('victor') ?
                  'w-[15px] h-[15px] block bg-white rounded-full' :
                  'w-[15px] h-[15px] block bg-white opacity-[0.17] rounded-full hover:opacity-50'} to='/crew/victor'></Link>
              </li>
              <li>
                <Link className={id.includes('anousheh') ?
                  'w-[15px] h-[15px] block bg-white rounded-full' :
                  'w-[15px] h-[15px] block bg-white opacity-[0.17] rounded-full hover:opacity-50'} to='/crew/anousheh'></Link>
              </li>
            </ul>
          </nav>

          <section>
            <p className='font-bellefair text-white text-opacity-50 text-center md:text-2xl lg:text-3xl lg:text-left'>
              {Object.keys(person).length && person.role.toUpperCase()}
            </p>

            <h2 className='font-bellefair text-white text-2xl text-center md:text-4xl lg:text-6xl lg:py-8'>
              {Object.keys(person).length && person.name.toUpperCase()}
            </h2>

            <p className='text-[#D0D6F9] text-center text-sm w-80 min-h-[120px] my-4 md:min-h-[144px] md:text-lg md:w-[458px] lg:w-[444px] lg:text-left lg:text-lg lg:min-h-[140px]'>
              {Object.keys(person).length && person.bio}
            </p>
          </section>

        </article>

      </section>



    </main>
  )
}
