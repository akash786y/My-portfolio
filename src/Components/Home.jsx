import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full'> {/*mx-auto*/}
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Akash Yadav</h1>
                <h2 className='text-3xl sm:text-5xl text-[#8892b0]'>I am a full stack developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I am full-stack developer, specialized in
                    building responsive full stack
                    web-applications.</p>
                <div>
                    <Link to='work' duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>

                            {/* <Link smooth={true} duration={500}> */}
                                View Work
                            {/* </Link> */}

                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight size={20} className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home