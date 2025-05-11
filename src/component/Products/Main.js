import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Trusted from '../../assets/trusted.PNG'
import { FaStar } from 'react-icons/fa6'

const Products = ({ data }) => {
  const [items, setItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    console.log('first')
    // Function to fetch data from the local JSON file
    const fetchData = () => {
      try {
        console.log(data)
        // Simulate fetching data from a local JSON file
        if (data) {
          const newItems = data.slice(startIndex, startIndex + 10);
          setItems((prevItems) => [...prevItems, ...newItems]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch initial data
    fetchData();
  }, [startIndex]);

  const navigate = useNavigate()
  const openProduct = (i) => {
    localStorage.setItem("id", i)
    navigate("/product-details")
  }


  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // Load next set of items when scrolled to the bottom
      setStartIndex((prevIndex) => prevIndex + 10);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="mx-0 grid grid-cols-2 text-sm mt-0 gap-0 bg-white">
      {items && items.map((item, index) => (
        <div className="border border-slate-200 p-3 relative" key={item.id} onClick={() => openProduct(index)}>
          <div className="h-[175px] flex items-center justify-center">
            <img src={item.image} onClick={() => openProduct(index)} className="max-h-[180px] mx-auto" alt="" />
          </div>
          <p className="mt-2 text-[12px] font-normal whitespace-nowrap overflow-hidden text-ellipsis" onClick={() => openProduct(index)}>{item.title}</p>
          <p className="mt-2 flex items-center">
            <span className="text-[16px]">₹{item.price}</span>
            <span className="text-gray-400 line-through ml-2 text-[12px] mr-3">₹{item.cancelprice}</span>
            <span className="text-slate-700 font-normal text-[12px]">95% Off</span>
          </p>
          <div className="bg-slate-100 text-slate-600 rounded-full text-[12px] w-fit px-2 py-[1px] mt-2"> Free delivery</div>
          <div className="flex items-center justify-between mt-2 text-[13px]">
            <div className="flex items-center">
              <div className="bg-[#038d63] px-[5px] py-[2px] rounded-full text-white flex items-center mr-2">4.6<FaStar className="ml-1 mt-[-2px]" size={11} /></div>
              <div className="text-slate-400 text-[12px]">(5129)</div>
            </div>
            <img src={Trusted} alt="" className="h-[22px]" />
          </div>
          {/* <div className="flex items-center mt-2 text-[17px]"><div className="mr-3 bg-lime-600 px-2 rounded text-white text-sm flex items-center">4.6<FaStar className="ml-1 mt-[-2px]" size={11} /></div> <div className="text-gray-500 text-sm">5129 Ratings</div></div> */}
          {/* <button onClick={() => openProduct(index)} className="uppercase w-full text-center bg-black text-white py-2 mt-2">Buy Now</button> */}
        </div>))}
    </div>
  )
}

export default Products