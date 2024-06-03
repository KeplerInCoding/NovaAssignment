import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='fixed top-0 w-screen'>
        <div className='flex place-content-between gap-10 p-4 px-10 items-center'>
            <div className='flex gap-2'>
                <div className='h-4 w-4 bg-black rounded-full'></div>
                <div className='h-4 w-4 bg-black rounded-full'></div>
            </div>
            <div className='flex items-center gap-20'>
                <div>EN</div>
                <Link to="/contact-us">
                    <div className='flex gap-2'>
                        <div>CONTACT US</div>
                        <div><i class="fa-solid fa-up-right-from-square"></i></div>
                    </div>
                </Link>
                
                <button>
                    <div className='flex flex-col gap-2 '>
                        <div className='h-1 w-14 bg-black'></div>
                        <div className='h-1 w-14 bg-black'></div>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header