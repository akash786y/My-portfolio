import React from 'react'
import HTML from '../assets/html.png'
import AWS from '../assets/aws.png'
import FireBase from '../assets/firebase.png'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import react from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
    return (
        <div name='skills' className='bg-[#0a192f] w-full h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 h-full w-full flex flex-col justify-center'>
                <div>
                    <p className='font-bold text-4xl inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={HTML} alt='img' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={react} alt='img' />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Javascript} alt='img' />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Tailwind} alt='img' />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Node} alt='img' />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={Github} alt='img' />
                        <p className='my-4'>Github</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills   