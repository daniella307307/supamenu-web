import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faHourglass3, faMagnifyingGlass, faPersonMilitaryRifle, faUserEdit, faUtensils} from '@fortawesome/free-solid-svg-icons';
function Home() {
    const handleClick = () => {
        const input = document.querySelector('input[type="text"]');
        if (input) {
            input.classList.toggle('hidden');
            input.focus();
        }
        const icon = document.querySelector('.fa-magnifying-glass');
        if (icon) {
            icon.classList.toggle('hidden');
        }
        const bellIcon = document.querySelector('.fa-bell');
        if (bellIcon) {
            bellIcon.classList.toggle('hidden');
        }
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('w-full');
            navbar.classList.toggle('h-20');
        }
    }
  return (
    <div className='bg-white h-screen w-screen text-black font-[Nunito]'>
      <div id= "navbar" className='flex justify-between items-center bg-black p-4 w-full h-20'>
         <div className=''>
            <h2 className='text-white font-semibold text-2xl'>Supa<span className='text-orange-400'>Menu</span></h2>
         </div>
         <div className='flex items-center gap-4'>
            <input type="text" placeholder='Search' className='hidden border border-gray-800 text-white rounded-4xl p-2 w-90' />
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white' size="x" onClick={handleClick}/>
            <div className='relative inline-block text-center border-2 justify-between items-center'>
            <FontAwesomeIcon icon={faBell} className='text-white' size="x" />
            <span className='absolute bg-blue-200 text-red-500 left-2 rounded-full w-[10px] h-[10px] text-[7px] font-bold'>3</span>
            </div>
            <span className='text-white'>|</span>
            <div className='flex items-center gap-2'>
                <span className='text-white font-light text-sm'>Jacques Kagabo</span>
                <img src='https://i.pinimg.com/736x/a4/0c/91/a40c9137f94d7fa20fba408c5d871171.jpg' className='rounded-full w-[30px] h-[30px]'/>
            </div>
         </div>
      </div>
      <div className='bg-black p-4 items-center justify-center flex flex-col gap-4'>
         <h2 className='text-white font-bold text-2xl'>Register your restaurant on SupaMenu</h2>
         <span className='text-white  font-semibold'>for free and get more revenue</span>
         <div className='flex  justify-between items-center gap-4'>
            <div className='bg-orange-400 text-white p-2 rounded-lg hover:bg-orange-500 hover:cursor-pointer min-h[2em] min-w-[200px]  text-center'><a href='/register'>Register your Restaurant</a></div>
            <button className='bg-gray-700 text-white font-semibold rounded-lg p-2 px-4 hover:border-blue-200 hover:border hover:cursor-pointer'> <a href='/login'>Restaurant already registered? Signin</a></button>
         </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4  p-4 w-full'>
        <h2 className='font-semibold text-center text-xl m-2 font-[Nunito]'>How it Works</h2>
        <div className='flex justify-between items-center w-full h-full '>
           <div className='flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-lg w-[200px] h-[200px]'>
            <FontAwesomeIcon icon={faUserEdit} className='text-orange-400' size="2x" />
            <h2 className='text-center font-semibold text-lg'>Step 1</h2>
              <h2 className='text-center text-sm text-gray-400 '>Register your restaurant</h2>
           </div>
           <div className='flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-lg w-[200px] h-[200px]'>
            <FontAwesomeIcon icon={faUtensils} className='text-orange-400' size="2x" />
            <h2 className='text-center font-semibold text-lg'>Step 2</h2>
              <h2 className='text-center text-sm text-gray-400 '>Create restaurant profile and create menu items</h2>
           </div>
           <div className='flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-lg shadow-lg w-[200px] h-[200px]'>
            <FontAwesomeIcon icon={faHourglass3} className='text-orange-400' size="2x" />
            <h2 className='text-center font-semibold text-lg'>Step 1</h2>
              <h2 className='text-center text-sm text-gray-400 '>Register your restaurant</h2>
           </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
