import React from 'react'

const Card = () => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg text-white  my-20 ">
                <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4 bg-gray-900">
                   
                    <div className="flex justify-between">

                        <div className="flex flex-col">
                            <p className="font-semibold opacity-90 my-2">Ordabasy</p>
                            <p className="font-semibold opacity-90">Astana</p>
                        </div>
                        <div className="flex flex-col text-center ps-4 border-l-2 border-black">
                            <p className="font-semibold my-2">20:30</p>
                            <button className='bg-black text-sm p-1 rounded-sm px-3'>Watch</button>
                        </div>
                    </div>

                </div>
                <hr className="border-black"/>
                <div className="px-6 py-4  bg-gray-900 flex justify-between">
                    <p className='text-sm'>OneFootball</p>
                    <p className='text-sm'>Free To Watch</p>
                </div>
            </div>
        </>
    )
}

export default Card