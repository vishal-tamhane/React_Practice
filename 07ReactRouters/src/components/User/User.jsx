import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams();
  return (
    <div className='relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0'>
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
            <div className='mt-8 overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-6 mr-2 bg-gray-100 sm:rounded-lg'>
                <h1 className='text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight'>
                    User : {userid}
                </h1>
                <p className='text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2'>
                    This is the user page.
                </p>
                </div>
            </div>
            </div>
     
    </div>
    </div>
  )
}

export default User
