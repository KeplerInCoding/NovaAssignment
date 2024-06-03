import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='fixed top-0 w-screen'>
        <div className='flex place-content-between gap-10 p-4 md:px-10 px-5 items-center'>
            <div className='flex gap-1'>
                <div className='h-3 w-3 bg-black rounded-full'></div>
                <div className='h-3 w-3 bg-black rounded-full'></div>
            </div>
            <div className='flex items-center place-content-between md:w-1/3 w-60'>
                <div>EN</div>
                <Link to="/contact-us">
                    <div className='flex gap-1'>
                        <div>CONTACT US</div>
                        <div><i class="fa-solid fa-up-right-from-square"></i></div>
                    </div>
                </Link>
                
                <button>
                    <div className='flex flex-col gap-2 '>
                        <div className='h-[2px] w-12 bg-black'></div>
                        <div className='h-[2px] w-12 bg-black'></div>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header