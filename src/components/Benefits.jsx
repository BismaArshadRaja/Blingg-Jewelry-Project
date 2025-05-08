import React from 'react'
import { benefit } from '../utils/objectData/benefitdata'

function Benefits() {
  return (
    <div>
          <div className='flex flex-start justify-between p-7'>
            {benefit .map((item) => (
              <div key={item.id} className='flex flex-col items-start space-y-2'>
              <div className='flex items-start space-x-4'>
                 <img
                  src={item.image}
                  alt={item.title}
                  className='w-6 h-6 object-cover'
                />
                <p className='w-[200px] h-auto text-sm font-semibold'>{item.title}</p>
                </div>
                <p className='text-xs text-slate-900 pl-10 w-[200px] h-auto'>{item.description}</p>
                </div>
            ))}
          </div>
    </div>
  )
}

export default Benefits;