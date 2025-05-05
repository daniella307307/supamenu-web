import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function AddNewItem() {
  return (
    <div className='min-w-[500px] shadow-lg p-4 rounded-lg'>
      <h1 className='text-gray-800 font-bold text-xl'>Add Item</h1>
      <form>
        <div className='flex items-center justify-between'>
          <input
            type="text"
            placeholder='Create new Menu item'
            className='outline-none text-gray-400 p-2 border-b w-[90%]'
          />
          <button className='bg-gray-200 rounded-lg p-[1px]' type="submit">
            <FontAwesomeIcon icon={faPlus} className='text-gray-400' size='lg' />
          </button>
        </div>
        
        <div className='mt-4 flex flex-col gap-4'>
          <div>
          <input type='radio' value="dessert" name='category' id='dessert' />
          <label htmlFor='dessert' className='text-gray-600 ml-4'>Dessert</label>
          </div>

          <div>
          <input type='radio' value="main" name='category' id='main' />
          <label htmlFor='main' className='text-gray-600 ml-4'>Main</label>
          </div>

          <div>
          <input type='radio' value="drink" name='category' id='drink' />
          <label htmlFor='drink' className='text-gray-600 ml-4'>Drink</label>
          </div>

          <div>
          <input type='radio' value="appetizer" name='category' id='appetizer' />
          <label htmlFor='appetizer' className='text-gray-600 ml-4'>Appetizer</label>
          </div>

          <div>
          <input type='radio' value="starter" name='category' id='starter' />
          <label htmlFor='starter' className='text-gray-600 ml-4'>Starter</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddNewItem;
