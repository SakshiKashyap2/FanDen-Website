import React from 'react'
import pic from '/workspaces/FanDen-Website/src/components/assests/eventspics.jpg';
const Card = () => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg text-white  my-20 ">
                <img className="w-full" src={pic} alt="Sunset in the mountains" />
                <div className="px-6 py-4 bg-gray-900">
                   
                    <div >

                        <div>
                            <p className="font-semibold opacity-90 my-2">Mancity  vs InterMilan-FanDen India-Champions League Finals</p>
                            
                        </div>
                        <div className="flex flex-col text-center ps-4 border-l-2 border-black">
                            <p className="font-semibold my-2">12:00</p>
                            <button className='bg-black text-sm p-1 rounded-sm px-3'>Book Ticket</button>
                        </div>
                    </div>

                </div>
                <hr className="border-black"/>
                <div className="px-6 py-4  bg-gray-900 flex justify-between">
                    <p className='text-sm'>Venue: BBC Sports Lounge,Thane-11th June</p>
                    
                </div>
            </div>
        </>
    )
}

export default Card