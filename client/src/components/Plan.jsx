import React from 'react'
import {PricingTable} from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>
      <div className='text-center'>
         <h2 className='text-slate-700 text-[42px]'>Choose Your Plan</h2>
         <p className='text-gray-500 max-w-12 inset-x-auto'>start or free and scale up as you grow</p>
      </div>

      <div className='text-gray-500 max-w-lg mx-auto'>
        <PricingTable />
      </div>

    </div>
  )
}

export default Plan