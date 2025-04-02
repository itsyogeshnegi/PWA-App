import React from 'react'

const Header = () => {
  return (
    <div className='h-20 w-full bg-teal-400 flex justify-between items-center p-2'>
        <img src='/appLogo.png' className='h-[70%]'/>
        <h4 className='text-white font-bold'>Daily - Quotes</h4>
    </div>
  )
}

export default Header