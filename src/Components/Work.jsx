import React from 'react'
import realestate from '../assets/realestate.jpg'
import Food from '../assets/Food-order.png'

const Work = () => {
    return (
        <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 h-full w-full flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='font-bold text-4xl text-gray-300 border-b-4 inline border-pink-600 '>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

        {/* container for projects */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4' >
                    <div style={{backgroundImage:`url(${Food})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-white text-2xl font-bold tracking-wider'>
                                Food order(front-end)
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://akash786y.github.io/Food-order/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                                </a>
                                <a href="https://github.com/akash786y/Food-order">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${realestate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-white text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${realestate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-white text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${realestate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-white text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${realestate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-white text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${realestate})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-white text-2xl font-bold tracking-wider'>
                                ReactJS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work