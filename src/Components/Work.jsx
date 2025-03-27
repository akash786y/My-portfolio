import React from 'react'
import realestate from '../assets/realestate.jpg'
import gkquiz from '../assets/gk-quiz.png'
import Food from '../assets/Food-order.png'
import Jetflix from '../assets/image.png'
import Banking from '../assets/Banking.png'
import PlantWeed from '../assets/PlantWeed.png'
const Work = () => {
    return (
        <div name='work' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 h-full w-full flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='font-bold text-4xl text-gray-300 border-b-4 inline border-pink-600 '>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                    {[
                        { title: "Best-Eats", img: Food, visit: "https://akash786y.github.io/Food-order/", code: "https://github.com/akash786y/Food-order" },
                        { title: "Jetflix", img: Jetflix, visit: "https://jetflix-ten.vercel.app/", code: "https://github.com/akash786y/Jetflix" },
                        { title: "Banking App", img: Banking, code: "https://github.com/akash786y/Banking-app"},
                        { title: "Plant Weed Classification", img: PlantWeed, code: "https://github.com/akash786y/Plant-Weed-Classification"},
                        { title: "Snake Game", img: "https://opengameart.org/sites/default/files/preview_937.png", visit: "", code: "https://github.com/akash786y/SnakeGame" },
                        { title: "GK-Quiz", img: gkquiz, visit: "", code: "https://github.com/akash786y/GK_Quiz" },
                        { title: "Real Estate App", img: realestate, visit: "", code: "" },
                        { title: "ReactJS App", img: "", visit: "", code: "" },
                        { title: "ReactJS App", img: "", visit: "", code: "" },
                    ].map(({ title, img, visit, code }, index) => (
                        <div
                            key={index}
                            className="relative shadow-lg shadow-[#040c16] group rounded-lg overflow-hidden flex justify-center items-center bg-cover bg-center"
                            style={{ backgroundImage: `url(${img || "https://via.placeholder.com/300"})`, minHeight: "250px" }}
                        >
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                                <span className="text-2xl font-bold">{title}</span>
                                <div className="pt-4 flex gap-4">
                                    {visit && (
                                        <a href={visit} target="_blank" rel="noopener noreferrer">
                                            <button className="bg-white text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">Visit</button>
                                        </a>
                                    )}
                                    {code && (
                                        <a href={code} target="_blank" rel="noopener noreferrer">
                                            <button className="bg-white text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">Code</button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work