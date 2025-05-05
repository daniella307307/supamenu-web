import React from "react";

function MenuItem({ items, selectedCategory }) {
  // Filter items based on selected category (mock category matching)
  const filteredItems = selectedCategory
    ? items.filter((item) =>
        item.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : items;

  return (
    <div className="bg-gray-100 rounded-lg border-gray-200 flex flex-col gap-4 p-4">
      {filteredItems.length ? (
        filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center gap-4"
          >
            <img
              src={item.imageUrl}
              alt={`${item.dishName} dish`}
              className="h-[100px] w-[100px] object-cover rounded-lg"
              loading="lazy"
            />
            <div className="flex flex-col gap-2">
              <span className="text-gray-500 font-bold">{item.ingredients}</span>
              <span className="text-gray-400">{item.dishName}</span>
              <span className="text-gray-400">{item.amount}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-center">No items in this category</p>
      )}
    </div>
  );
}

export default MenuItem;