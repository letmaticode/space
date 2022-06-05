import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Destination() {
    const [space, setSpace] = useState({})
    const { id } = useParams()

    const fetchData = async () => {
        const data = await fetch('../data.json')
        const response = await data.json()
        const { destinations } = response
        const getDestiny = destinations.filter(destination => destination.name.toLowerCase() === id)
        const [destiny] = getDestiny

        return destiny
    }

    useEffect(() => {
        const getData = async () => {
            const dataFromLocal = await fetchData()
            setSpace(dataFromLocal)
        }

        getData()

    }, [id])

    return (
        <main className='bg-cover flex flex-col min-h-screen bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop'>
            <h1 className='mt-20 py-6 text-white text-center text-lg font-barlow-condensed tracking-[2.7px] md:ml-[38.5px] md:text-left lg:text-3xl lg:ml-[166.5px] lg:mt-32 lg:p-12 lg:text-left'>
                <span className='text-gray-500 font-bold'>01</span> PICK YOUR DESTINATION
            </h1>

            <article className='text-white flex flex-col items-center justify-around w-screen lg:flex-row'>
                <section>
                    <img className='w-44 lg:py-12 md:w-[300px] lg:w-[444px]' src={Object.keys(space).length && space.images.png} />
                </section>

                <aside className='flex flex-col items-center lg:w-[445px] lg:items-start'>
                    <nav className='w-2/3 py-8 md:w-[285.5px]'>
                        <ul className='flex justify-between h-10 font-barlow-condensed text-xl text-[#D0D6F9]'>
                            <li className={space.name == 'Moon' ? 'border-b-4' : 'hover:border-b-4 hover:border-opacity-50 hover:border-white'}>
                                <Link to='/destination/moon' className='tracking-widest'>MOON</Link>
                            </li>
                            <li className={space.name == 'Mars' ? 'border-b-4' : 'hover:border-b-4 hover:border-opacity-50 hover:border-white'}>
                                <Link to='/destination/mars' className='tracking-widest'>MARS</Link>
                            </li>
                            <li className={space.name == 'Europa' ? 'border-b-4' : 'hover:border-b-4 hover:border-opacity-50 hover:border-white'}>
                                <Link to='/destination/europa' className='tracking-widest'>EUROPA</Link>
                            </li>
                            <li className={space.name == 'Titan' ? 'border-b-4' : 'hover:border-b-4 hover:border-opacity-50 hover:border-white'}>
                                <Link to='/destination/titan' className='tracking-widest'>TITAN</Link>
                            </li>
                        </ul>
                    </nav>

                    <h2 className='text-6xl font-bellefair md:text-[100px]'>
                        {space.name && space.name.toUpperCase()}
                    </h2>

                    <p className='font-barlow text-sm px-8 text-center min-h-[100px] text-[#D0D6F9] md:px-20 md:text-lg lg:text-left lg:text-xl lg:px-0 lg:min-h-[140px]'>
                    {/* className='text-[#D0D6F9] text-center text-sm w-80 min-h-[120px] my-4 lg:w-[444px] */}
                        {Object.keys(space).length && space.description}
                    </p>

                    <div className='border-[1px] my-6 w-4/5 border-[#383B4B] lg:w-full'>
                    </div>

                    <section className='flex flex-col w-full items-center md:flex-row'>
                        <article className='w-1/2 mb-6'>
                            <h2 className='font-barlow-condensed text-[#D0D6F9] text-center tracking-widest lg:text-left'>
                                AVG. DISTANCE
                            </h2>

                            <p className='font-bellefair text-3xl text-center lg:text-left'>
                                {Object.keys(space).length && space.distance.toUpperCase()}
                            </p>
                        </article>
                        <article className='w-1/2 mb-6'>
                            <h2 className='font-barlow-condensed text-[#D0D6F9] tracking-widest text-center lg:text-left'>
                                EST. TRAVEL TIME
                            </h2>

                            <p className='font-bellefair text-3xl text-center lg:text-left'>
                                {Object.keys(space).length && space.travel.toUpperCase()}
                            </p>
                        </article>
                    </section>

                </aside>
            </article>


        </main>
    )
}
