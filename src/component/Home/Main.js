import React, { useEffect, useState } from 'react'
import Products from '../Products/Main';
import Data from '../../data/Main'
import Slider from '../Slider/Main'
import Poster1 from '../../assets/baners/Poster1.webp'
import BannerSlide from '../BannelSlide/Main';
import { FaClock } from 'react-icons/fa6';

const Home = () => {
  const [data, setdata] = useState(Data)
  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;


  return (
    <div className="mt-3 bg-slate-100">
      <div className="flex items-center justify-between py-1 px-4 bg-slate-100">
        <div>
          <div className="text-slate-700">Deals of the day</div>
          <div className="text-slate-700 flex items-center"><FaClock className="mr-1" />{minutes}:{remainingSeconds}</div>
        </div>
        <div className="rounded-md shadow text-red-500 border border-slate-100 w-fit px-2 py-1 bg-white">Sale is Live</div>
      </div>
      <div className="px-4 py-2 bg-white">
        <Slider />
      </div>
      <div className="bg-white py-2 mt-2">
        <BannerSlide />
      </div>
      <img src={Poster1} alt="" className="mt-2 w-full bg-white py-2" />
      {/* <div className="border-2 border-slate-600 flex text-sm p-1 m-4 font-semibold">
        <button className={`w-1/2 py-2 ${gender && "text-white bg-black"} transition-all duration-300`} onClick={() => setgender(true)}>
          MEN
        </button>
        <button className={`w-1/2 py-2 ${!gender && "text-white bg-black"} transition-all duration-300`} onClick={() => setgender(false)}>
          WOMEN
        </button>
      </div> */}
      {/* {gender ?
        <Products data={data} /> :
        <Products data={women} />} */}
        <div className="bg-white mt-2 py-2 px-4 font-semibold">Products For You</div>
      <Products data={data} />
      <div className="bg-white py-2 mt-2">
        <BannerSlide />
      </div>
    </div>
  )
}

export default Home