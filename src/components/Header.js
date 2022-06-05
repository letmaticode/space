import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import menu from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

export default function Header() {
    const { pathname } = useLocation()
    const [modalActive, setModalActive] = useState(false)

    const handleModal = () => {
        setModalActive(!modalActive)
    }

    return (
        <header className='h-[96px] p-6 w-full absolute flex items-center justify-between text-white md:justify-between md:mt-0 md:p-0 lg:mt-[40px]'>
            <Link to='/space'>
                <img className='w-[48px] md:ml-[48px] lg:ml-[48px]' src={logo}></img>
            </Link>
            <div className='hidden border-b-2 border-white border-opacity-25 w-[57vw] h-[1px] ml-16 md: lg:block'></div>
            <nav className={modalActive ?
                'transition-all duration-100 visible fixed overscroll-auto h-screen top-0 right-0 left-auto w-3/4 flex flex-col items-end bg-[rgb(255,255,255) backdrop-blur-xl z-10' :
                'invisible md:visible md:bg-[rgb(255,255,255,0.04)] md:backdrop-blur-3xl md:w-1/2 lg:visible lg:w-3/4 lg:bg-[rgb(255,255,255,0.04)] lg:flex lg:backdrop-blur-xl lg:h-24 lg:justify-center'
            }>
                <img onClick={handleModal} className='p-8 sm:hidden lg:hidden' src={close}>
                </img>
                <ul className='pl-6 py-10 items-center justify-evenly w-full md:flex md:py-0 lg:flex lg:py-0'>
                    <li className={pathname == '/' ? 'flex items-center py-8 border-r-4 lg:border-b-4 lg:border-r-0 md:border-b-4 md:border-r-0' : 'py-8 flex items-center hover:border-b-2 hover:border-opacity-50 hover:border-white'}>
                        <Link to='/space' onClick={() => {modalActive && handleModal()}} className='lg:text-xl font-barlow-condensed text-xl tracking-[0.2em] md:text-sm'>
                            <strong className='md:hidden lg:inline-block'>
                                00
                            </strong> HOME</Link>
                    </li>
                    <li className={pathname.includes('destination') ? 'flex items-center border-r-4 py-8 lg:border-b-4 lg:border-r-0 md:border-b-4 md:border-r-0' : 'py-8 flex items-center hover:border-b-2 hover:border-opacity-50 hover:border-white'}>
                        <Link to='/space/destination/moon' onClick={() => {modalActive && handleModal()}} className='lg:text-xl font-barlow-condensed text-xl tracking-[0.2em] md:text-sm'>
                            <strong className='md:hidden lg:inline-block'>
                                01
                            </strong> DESTINATION</Link>
                    </li>
                    <li className={pathname.includes('crew') ? 'flex items-center border-r-4 py-8 lg:border-b-4 lg:border-r-0 md:border-b-4 md:border-r-0' : 'py-8 flex items-center hover:border-b-2 hover:border-opacity-50 hover:border-white'}>
                        <Link to='/space/crew/douglas' onClick={() => {modalActive && handleModal()}} className='lg:text-xl font-barlow-condensed text-xl tracking-[0.2em] md:text-sm'>
                            <strong className='md:hidden lg:inline-block'>
                                02
                            </strong> CREW</Link>
                    </li>
                    <li className={pathname.includes('technology') ? ' flex items-center py-8 border-r-4 lg:border-b-4 lg:border-r-0 md:border-b-4 md:border-r-0' : 'py-8 flex items-center hover:border-b-2 hover:border-opacity-50 hover:border-white'}>
                        <Link to='/space/technology/launch' onClick={() => {modalActive && handleModal()}} className='lg:text-xl font-barlow-condensed text-xl tracking-[0.2em] md:text-sm'>
                            <strong className='md:hidden lg:inline-block'>
                                03
                            </strong> TECHNOLOGY</Link>
                    </li>
                </ul>
            </nav>
            {/* <div className='fixed top-0 right-0 w-3/4 h-screen bg-[rgb(255,255,255,0.04)] backdrop-blur-xl'>

            </div> */}
            <button className='md:hidden lg:hidden' onClick={handleModal}>
                <img src={menu} />
            </button>
        </header>
    )
}

<html>
    <img></img>
</html>