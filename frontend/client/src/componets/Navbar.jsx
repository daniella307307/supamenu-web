import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faBell } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='bg-white h-16 w-screen text-black p-4 flex justify-between items-center shadow-md'>
      <h1 className='font-bold text-2xl'>Supa<span className='text-orange-400'>Menu</span></h1>
      <div className='flex items-center gap-4'>
        <input type="text" placeholder='Search' className=' hidden border border-gray-800 text-black rounded-full p-2 w-64' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-black cursor-pointer' size="x" onClick={() => {
          const input = document.querySelector('input[type="text"]');
          if (input) {
            input.classList.toggle('hidden');
            input.focus();
          }
        }} />
        <div className='relative inline-block text-center justify-between items-center'>
          <FontAwesomeIcon icon={faBell} className='text-black' size="x" />
          <span className='absolute bg-blue-200 text-red-500 left-2 rounded-full w-[10px] h-[10px] text-[7px] font-bold'>3</span>
        </div>
        <span className='text-black'>|</span>
        <div className='flex items-center gap-2'>
          <span className='text-black font-light text-sm'>Jacques Kagabo</span>
          <img src='https://i.pinimg.com/736x/a4/0c/91/a40c9137f94d7fa20fba408c5d871171.jpg' className='rounded-full w-[30px] h-[30px]' alt="User Profile" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
