import React from 'react';

function Card() {
  const metrics = [
    {
      id: 1,
      category: "Restaurant",
      desc: "View details",
      items: [
        { id: 1, name: "Sole Luna", price: 46000 },
        { id: 2, name: "Soy", price: 12000 },
      ],
    },
    {
      id: 2,
      category: "Hotels",
      desc: "View details",
      items: [
        { id: 1, name: "Park Inn", price: 46000 },
        { id: 2, name: "M Hotel", price: 12000 },
      ],
    },
    {
      id: 3,
      category: "Pubs",
      desc: "View details",
      items: [
        { id: 1, name: "Sundowner", price: 46000 },
        { id: 2, name: "Gate N10", price: 12000 },
      ],
    },
    {
      id: 4,
      category: "Cafes",
      desc: "View details",
      items: [
        { id: 1, name: "Aroma", price: 46000 },
        { id: 2, name: "Patisserie Royale", price: 12000 },
      ],
    },
  ];

  const formatPrice = (price) =>
    price.toLocaleString('en-RW', {
      style: 'currency',
      currency: 'RWF',
      minimumFractionDigits: 0,
    });

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4 w-full max-w-screen-lg mx-auto'>
      {metrics.map((item) => {
        const totalSales = item.items.reduce((sum, curr) => sum + curr.price, 0);

        return (
          <div
            key={item.id}
            className='bg-white border border-gray-200 shadow-sm rounded-lg p-5 hover:shadow-md transition-shadow'
          >
            <div className='flex justify-between items-start mb-4'>
              <div>
                <h3 className='text-xl font-semibold text-gray-800'>{item.category}</h3>
                <span className='text-sm text-gray-500'>Sales</span>
              </div>
              <div className='text-right'>
                <p className='text-orange-500 text-sm cursor-pointer hover:underline'>
                  {item.desc}
                </p>
                <p className='text-sm text-gray-700 mt-1'>
                  Total Sales: <strong>{formatPrice(totalSales)}</strong>
                </p>
              </div>
            </div>
            <ul className='space-y-2'>
              {item.items.map((subItem) => (
                <li
                  key={`${item.id}-${subItem.id}`}
                  className='flex justify-between text-sm text-gray-700'
                >
                  <span>{subItem.name}</span>
                  <span>{formatPrice(subItem.price)}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
