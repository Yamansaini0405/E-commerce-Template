import React from 'react'
import CartImg from '../../assets/cartImg.webp'

function AddToCard() {
  return (
    <div className='mt-24 main flex w-[90%] m-auto items- justify-start'>
        <div className='  w-[70%] m-auto h-[50vh] space-y-4 shadow-xl pt-6'>
            <img src={CartImg} alt="" className='h-[45%] m-auto '/>
            <h3 className='text-lg text-center mt-6'>Missing cart items?</h3>
            <button className='font-semibold rounded-xl px-3 py-2 bg-orange-600 text-white block m-auto'>Add Items</button>

        </div>
        <div className='  w-[28%] m-auto py-6 space-y-4 shadow-xl pt-'>
           <h3 className='text-lg text-gray-500 font-semibold px-8 border-b-1 border-gray-200 pb-2'>PRICE DETAILS</h3>
           <div className='flex justify-between items-center px-8 '>
           <div className="pricing_details space-y-3">
            <p>Price (0 items)</p>
            <p>Discount</p>
            <p>Delivery Charges</p>
           </div>
            <div className="pricing_value space-y-3">
                <p>₹XXXXXX</p>
                <p>-₹XXXX</p>
                <p>-<span className='line-through'>XX</span>₹XX</p>
            </div>
           </div>
           <hr className='border-1 border-dashed w-[80%] m-auto border-gray-400 '/>
           <div className='px-8 m-auto flex justify-between items-center py-4'>
            <p className='text-xl font-semibold'>Total Amount</p>
            <p>₹XXXXXX</p>
           </div>
           <hr className='border-1 border-dashed w-[80%] m-auto border-gray-400 '/>
           <span className='px-8 '>You will save ₹XXXXX on this order</span>

        </div>
    </div>
  )
}

export default AddToCard