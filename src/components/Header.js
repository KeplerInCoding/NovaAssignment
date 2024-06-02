import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-0 w-screen'>
        <div className='flex place-content-between p-4 px-10 items-center'>
            <div className='flex gap-2'>
                <div className='h-4 w-4 bg-black rounded-full'></div>
                <div className='h-4 w-4 bg-black rounded-full'></div>
            </div>
            <div className='flex items-center gap-20'>
                <div>EN</div>
                <div>CONTACT US</div>
                <div className='flex flex-col gap-2 '>
                    <div className='h-1 w-14 bg-black'></div>
                    <div className='h-1 w-14 bg-black'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header