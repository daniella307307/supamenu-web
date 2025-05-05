import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../screens/Sidebar";
import MenuItem from "../screens/MenuItem";
import AddNewItem from "../screens/AddNewItem";

function Menu() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
    if (isSearchVisible) setSearchQuery("");
  };

  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  const menuType = [
    { id: 1, category: "Drink" },
    { id: 2, category: "Starter" },
    { id: 3, category: "Appetizer" },
    { id: 4, category: "Dessert" },
    { id: 5, category: "Main" },
  ];

  // Mock menu data (replace with API call)
  const menu = [
    {
      id: 1,
      ingredients: "Kaffir, Lime Vodka, Lemongrass, Ginger, Citrus",
      dishName: "Tom Yummy",
      amount: "FRW 5,000",
      imageUrl: "https://i.pinimg.com/736x/05/29/b1/0529b19ea144e00f9ff9275bd8295586.jpg", // Use local asset
      category: "Drink",
    },
    {
      id: 2,
      ingredients: "Tomato, Basil, Mozzarella",
      dishName: "Caprese Salad",
      amount: "FRW 7,000",
      imageUrl: "https://i.pinimg.com/736x/bd/24/09/bd2409d7936eb07315d1c87a51a15d27.jpg",
      category: "Starter",
    },
    {
      id: 3,
      ingredients: "Shrimp, Garlic, Chili",
      dishName: "Shrimp Cocktail",
      amount: "FRW 8,000",
      imageUrl: "https://i.pinimg.com/736x/e3/53/be/e353beed1e20f55788a729e29a9576bd.jpg",
      category: "Appetizer",
    },
    {
      id: 4,
      ingredients: "Chocolate, Cream, Sugar",
      dishName: "Chocolate Mousse",
      amount: "FRW 6,000",
      imageUrl: "https://i.pinimg.com/736x/1f/5c/f1/1f5cf1fa8f1d4a3c4f5be4a20289f598.jpg",
      category: "Dessert",
    },
    {
      id: 5,
      ingredients: "Beef, Potatoes, Carrots",
      dishName: "Beef Stew",
      amount: "FRW 10,000",
      imageUrl: "https://i.pinimg.com/736x/41/9e/1d/419e1d94e885921082f35fb94b6f00a5.jpg",
      category: "Main",
    },
  ];

  const currentDate = new Date().toLocaleString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Filter menu items based on search query
  const filteredMenu = menu.filter((item) =>
    item.dishName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4">
        <div
          id="navbar"
          className={`bg-white flex justify-between items-center p-4 transition-all duration-300 ${
            isSearchVisible ? "h-20" : "h-16"
          }`}
        >
          <h1 className="text-gray-700 font-bold text-xl">Menu</h1>
          <div className="flex items-center gap-4">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for anything"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`border-gray-300 rounded-full p-2 w-full max-w-[20rem] transition-opacity duration-300 ${
                isSearchVisible ? "opacityắc 100" : "opacity-0 hidden"
              }`}
              aria-label="Search menu items"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="sm"
              className={`text-gray-500 cursor-pointer ${
                isSearchVisible ? "hidden" : ""
              }`}
              onClick={toggleSearch}
              aria-label="Toggle search"
            />
            <FontAwesomeIcon
              icon={faBell}
              size="sm"
              className={`text-gray-500 ${isSearchVisible ? "hidden" : ""}`}
              aria-label="Notifications"
            />
            <span className="text-gray-800">|</span>
            <span className="text-gray-800 text-sm">Jacques Kagabo</span>
            <img
              src="/images/profile.jpg" // Use local asset
              alt="User profile picture"
              className="rounded-full w-[30px] h-[30px]"
            />
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 p-4 mt-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-gray-800 font-bold text-lg">Menu</h2>
              <span className="text-gray-400 text-sm">as of {currentDate}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {menuType.map((item) => (
                <div
                  key={item.id}
                  className={`border border-orange-400 rounded-lg px-3 py-1 cursor-pointer transition-colors duration-200 ${
                    selectedCategory === item.category
                      ? "bg-orange-400 text-white"
                      : "text-orange-400 hover:bg-orange-400 hover:text-white"
                  }`}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === item.category ? null : item.category
                    )
                  }
                  role="button"
                  aria-label={`Filter by ${item.category}`}
                >
                  {item.category}
                </div>
              ))}
            </div>
          </div>
         <div className="flex items-start justify-between">
         <div className="mt-4">
            <MenuItem items={filteredMenu} selectedCategory={selectedCategory} />
          </div>
          <div className="mt-4">
            <AddNewItem/>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;