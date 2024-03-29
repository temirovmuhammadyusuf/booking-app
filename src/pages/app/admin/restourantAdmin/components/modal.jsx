import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../../../../Api";

const ItemListNew = ({ closeModal, addItem }) => {
  const [itemid, setitemid] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    // Asinxron funksiya yaratamiz
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}itemlist/`);
        const id = response.data.length
        setitemid(id)
      } catch (error) {
        console.error('Xatolik yuz berdi:', error);
      }
    };

    // Yaratilgan asinxron funksiyani chaqiramiz
    fetchData();
  }, []);

  const [item, setItem] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!item.name|| !item.quantity || !item.price || !item.description || !item.category) {
      alert("Iltimos, barcha maydonlarni to'ldiring."); // Agar maydonlar to'liq to'ldirilmagan bo'lsa, xabar chiqaradi
      return; // Funktsiyani shu yerda to'xtatamiz
    }
    const newItem = { ...item, "id": itemsCount + 1 }; // Yangi `id`ni hisoblash
    addItem(newItem);
    closeModal();
  };


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-10 mx-auto p-5 border w-2/6 shadow-lg animate rounded-md bg-white">
        <div className="mt-8">
          <label htmlFor="name">Item name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Item Name"
            className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={item.name}
            onChange={handleChange}
          />
          <label htmlFor="quantity">Item quantity</label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            place
            holder="Item Quantity"
            className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={item.quantity}
            onChange={handleChange}
          />
          <label htmlFor="price">Item price</label>
          <input
            id="price"
            type="number"
            name="price"
            placeholder="Item Price"
            className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={item.price}
            onChange={handleChange}
          />
          <label htmlFor="description">Item description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Item Description"
            rows="4"
            className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={item.description}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="category">Item category</label>
          <select
            id="category"
            name="category"
            className="mt-1 mb-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={item.category}
            onChange={handleChange}
          >
            <option selected disabled>Select Category</option>
            <option value="Coffee drinks">Coffee drinks</option>
            <option value="Main dishes">Main dishes</option>
            <option value="Snacks">Snacks</option>
            <option value="Soft drinks">Soft drinks</option>
            <option value="Alcoholic drinks">Alcoholic drinks</option>
          </select>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-orange-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-orange-600 focus:outline-none"
          >
            Save
          </button>
        </div>
        <div className="absolute flex justify-between w-full top-0 right-0 px-4 py-3">
          Add new item
          <svg onClick={closeModal} className="cursor-pointer fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M16.2 1.8l-7.2 7.2 7.2 7.2-1.4 1.4-7.2-7.2-7.2 7.2-1.4-1.4 7.2-7.2-7.2-7.2 1.4-1.4 7.2 7.2 7.2-7.2 1.4 1.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ItemListNew;
