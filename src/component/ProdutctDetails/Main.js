import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import Data from '../../data/Main'
import Products from '../Products/Main';
import { useNavigate } from 'react-router-dom';
import BuyNowSvg from '../../assets/buynow.svg'

const ProductDetails = () => {
  const navigate = useNavigate()
  const [number, setnumber] = useState(1)
  const [data, setdata] = useState(Data)
  const [category, setcategory] = useState([])
  const [active, setactive] = useState("xs");

  const Increase = () => {
    setnumber(number + 1)
  }
  const Decrease = () => {
    if (number > 1) {
      setnumber(number - 1)
    }
  }
  useEffect(() => {
    localStorage.setItem("size", active)
  }, [active])
  useEffect(() => {
    const alldata = [...Data]
    // let arr = []
    // alldata.map((item) => {
    //   if (item.category === alldata[localStorage.id].category && item.id !== localStorage.id) {
    //     arr.push(item)
    //   }
    // })
    setcategory(alldata.slice(0, 4))
    localStorage.setItem("size", active)
    window.scroll(0, 0)
  }, [])

  const BuyNow = () => {
    localStorage.setItem("qty", number)
    localStorage.setItem("price", data[localStorage.id].price)
    navigate("/checkout")
  }
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mt-2"
      >
        {data[localStorage.id].slider.map((item) => (
          <SwiperSlide><img src={item} className="h-[300px] mx-auto" alt="" /></SwiperSlide>
        ))}
      </Swiper>

      <div className="px-2 border-b border-slate-200 pb-4">
        <h1 className="text-[13px] text-slate-400 mt-4 mb-2">{data[localStorage.id].title}</h1>
        <p className="my-1 text-[17px] font-bold font-sans">
          <span className="text-slate-800 text-[22px]">₹{data[localStorage.id].price}</span>
          <span className="text-gray-400 line-through ml-5">₹{data[localStorage.id].cancelprice}</span>
        </p>
        <div className="flex items-center mt-2">
          <div className="bg-[#038d63] px-[10px] py-[2px] rounded-full text-white flex items-center mr-2 text-[13px]">4.6<FaStar className="ml-1 mt-[-2px]" size={11} /></div>
          <div className="text-slate-400 text-[12px]">(5129)</div>
        </div>
        <div>
          <div className="bg-slate-100 text-slate-600 rounded-full text-[12px] w-fit px-2 py-[1px] mt-4"> Free delivery</div>
          <div className="fixed z-[999] bottom-0 left-0 w-full bg-white p-4 flex justify-between items-center border-t border-slate-400">
            <div className="flex items-center">
              <div className="font-sans mr-2 cursor-pointer" onClick={Decrease}><FaMinus size={12} className="text-[#9f2089]" /></div>
              <div className="rounded font-sans flex items-center justify-center w-16 h-10 border border-[#9f2089]">
                {number}
              </div>
              <div className="font-sans ml-2 cursor-pointer" onClick={Increase}><FaPlus size={12} className="text-[#9f2089]" /></div>
            </div>
            <button className="flex items-center bg-[#9f2089] text-white px-10 py-2 rounded" onClick={BuyNow}>
              <img src={BuyNowSvg} alt="" className="mr-1" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 py-1"></div>
      {/* <div className="bg-slate-100 py-2">
        <div className="bg-white">
          <div className="pt-2 pb-5">
            <div className="flex">
              <div
                onClick={() => setactive("xs")}
                className={`text-md font-semibold border rounded-full text-center mx-2 bg-white py-1 px-5 cursor-pointer w-min ${active === "xs" ? "border-[#9f2089] text-[#9f2089]" : "border-slate-400"}`}>XS</div>
              <div
                onClick={() => setactive("s")}
                className={`text-md font-semibold border rounded-full text-center mx-2 bg-white py-1 px-5 cursor-pointer w-min ${active === "s" ? "border-[#9f2089] text-[#9f2089]" : "border-slate-400"}`}>S</div>
              <div
                onClick={() => setactive("m")}
                className={`text-md font-semibold border rounded-full text-center mx-2 bg-white py-1 px-5 cursor-pointer w-min ${active === "m" ? "border-[#9f2089] text-[#9f2089]" : "border-slate-400"}`}>M</div>
              <div
                onClick={() => setactive("l")}
                className={`text-md font-semibold border rounded-full text-center mx-2 bg-white py-1 px-5 cursor-pointer w-min ${active === "l" ? "border-[#9f2089] text-[#9f2089]" : "border-slate-400"}`}>L</div>
              <div
                onClick={() => setactive("xl")}
                className={`text-md font-semibold border rounded-full text-center mx-2 bg-white py-1 px-5 cursor-pointer w-min ${active === "xl" ? "border-[#9f2089] text-[#9f2089]" : "border-slate-400"}`}>XL</div>
            </div>
            <div className="flex pt-2">

              <div
                onClick={() => setactive("xxl")}
                className={`text-md font-semibold border rounded-full text-center mx-2 bg-white py-1 px-5 cursor-pointer w-min ${active === "xxl" ? "border-[#9f2089] text-[#9f2089]" : "border-slate-400"}`}>XXL</div>
              <div
                onClick={() => setactive("3xl")}
                className={`text-md font-semibold border rounded-full text-center mx-2 bg-white py-1 px-5 cursor-pointer w-min ${active === "3xl" ? "border-[#9f2089] text-[#9f2089]" : "border-slate-400"}`}>3XL</div>
              <div
                onClick={() => setactive("4xl")}
                className={`text-md font-semibold border rounded-full text-center mx-2 bg-white py-1 px-5 cursor-pointer w-min ${active === "4xl" ? "border-[#9f2089] text-[#9f2089]" : "border-slate-400"}`}>4XL</div>
              <div
                onClick={() => setactive("5xl")}
                className={`text-md font-semibold border rounded-full text-center mx-2 bg-white py-1 px-5 cursor-pointer w-min ${active === "5xl" ? "border-[#9f2089] text-[#9f2089]" : "border-slate-400"}`}>5XL</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="my-4 px-4">
        {data[localStorage.id].highlight &&
          <img src={data[localStorage.id].highlight} alt="" />}
        {data[localStorage.id].rating &&
          < img src={data[localStorage.id].rating} alt="" />}
        {/* {data[localStorage.id].desc && data[localStorage.id].desc.map((item) => (
          <img src={item} alt="" className="w-full" />
        ))} */}
      </div>
      {/* <div className="border border-slate-200 w-full fixed bottom-0 bg-white z-[999]">
        <button className="bg-white text-black w-1/2" onClick={BuyNow}>
          Add to Cart
        </button>
        <button className="bg-[#fb641b] text-white py-4 w-1/2" onClick={BuyNow}>
          Buy Now
        </button>
      </div> */}
      {category &&
        <Products data={category} />
      }
    </div>
  )
}

export default ProductDetails