import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function RestoProfile3() {
  const items =[
    {
      id:1,
      name:"Drink"
    },
    {
      id:2,
      name:"Starter"
    },
    {
      id:3,
      name:"Appetizer"
    },
    {
      id:4,
      name:"Dessert"
    },
    {
      id:5,
      name:"main"
    }
  ]
  return (
    <div className='shadow-lg rounded-lg p-6'>
      <div>
        <div className='flex justify-between items-center'>
           {
            items.map((item)=>(
              <span key={item.id} className='bg-white rounded-lg border border-orange-400 p-2 flex-wrap text-orange-400 font-semibold w-[6em] text-center hover:bg-orange-400 hover:text-white'>{item.name}</span>
            ))
           }
        </div>
        <form className='flex flex-col gap-4 mt-4'>
        <label htmlFor="name" className='text-gray-800 font-bold text-lg'>Name</label>
        <input type='text' placeholder='Menu Name' name='name' className='outline-none border-b border-gray-400'/>
        <label htmlFor="price" className='text-gray-800 font-bold text-lg'>Price</label>
        <input type='number' placeholder='RWF' name='price' className='outline-none border-b border-gray-400'/>
        <label htmlFor='desc' className='text-gray-800 font-bold text-lg'>Menu description</label>
        <input type='text' placeholder='ingredients' name='desc' className='outline-none border-b border-gray-400'/>
        <label htmlFor='image' className='text-gray-800 font-bold text-lg'>Image</label>
        <input type='file' className='outline-none border-b border-gray-400'/>
        <div className='flex justify-center items-center gap-6'>
        <button type='submit' className='border border-orange-400 rounded-lg p-2'>Add more</button>
        <FontAwesomeIcon icon={faPlus} size='lg' className='text-orange-400'/>
        </div>
        </form>
        
      </div>
    </div>
  );
}

export default RestoProfile3;
