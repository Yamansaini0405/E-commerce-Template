import React from 'react'

function CategoryCard({image, disc}) {
  return (
    <div className='main'>
        <div className="inline-block border-2 p-3 rounded-3xl border-gray-400">
            <div className="image h-[15rem] w-[12rem] p-">
                <img src={image} alt="" className='w-full h-full rounded-3xl'/>
            </div>
            <p  className='disc text-gray-600 font-semibold text-center text-lg mt-2'>{disc}</p>
        </div>
    </div>
  )
}

export default CategoryCard