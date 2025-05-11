import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { State, City } from "country-state-city";
import CheckoutBar from '../../assets/checkoutbar.PNG'
import { FaArrowLeft } from 'react-icons/fa6';

const Checkout = () => {
  const [pay, setPay] = useState(false)
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [hnumber, setHnumber] = useState("");
  const [vname, setVname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handelclick = () => {
    const dataset =
      fname.length === 0 ||
      phone.length === 0 ||
      pincode.length === 0 ||
      hnumber.length === 0 ||
      vname.length === 0;
    if (dataset) {
      setError(" All Field Is Required, Please Fill This");
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    setState(State.getStatesOfCountry("IN"));
  }, [])

  return (
    <div className="font-sans min-h-[75vh]">
    
      <div>
      <Link to="/" className="px-4 mt-4 font-bold flex items-center"><FaArrowLeft className="mr-2"/> Add Delivery Address</Link>
        {/* <div className="bg-white py-1">
        <h1 className=" text-[14px] mt-1 mb-2 font-semibold mx-4 w-fit">Add Delivery Address</h1>
        </div> */}
        <div className="px-4">
          <div className="text-center mt-4 text-xl text-red-600">{error}</div>
          <div className=" mx-auto sm:px-6 lg:px-60 lg:py-16 sm:py-6 mt-5 ">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="fname"
                  className=" border border-gray-300 text-gray-900 text-sm rounded w-full p-2.5"
                  placeholder="Full Name (Required)*"
                  required
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className=" border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
                  placeholder="Mobile Number (Required)*"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="company"
                  name="pincode"
                  className=" border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
                  placeholder="Pin Code (Required)*"
                  required
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <div>
                <select
                  className="form-select border border-gray-300 text-gray-900 rounded text-sm block w-full p-2.5"
                  onChange={(e) => {
                  }}
                >
                  <option value="India">India </option>
                </select>
              </div>
              <div>
                <select
                  className="form-select border border-gray-300 text-gray-900 rounded text-sm block w-full p-2.5"
                  onChange={(e) => {
                    setCity(City.getCitiesOfState("IN", e.target.value));
                  }}
                >
                  <option selected>State (Required)*</option>
                  {state.map((item, index) => (
                    <option value={item.isoCode}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  className="form-select border border-gray-300 text-gray-900 rounded text-sm block w-full p-2.5"
                  aria-label="Default select example"
                >
                  <option selected>City (Required)*</option>
                  {city.map((item, index) => (
                    <option> {item.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  name="hnumber"
                  className=" border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
                  placeholder="Flat, House no, Building, Company"
                  required
                  onChange={(e) => setHnumber(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="vname"
                  className=" border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5"
                  placeholder="Area, Colony, Street, Sector, Village"
                  required
                  onChange={(e) => setVname(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center mt-5">
              <button className="uppercase text-center bg-[#9f2089] text-white py-3 px-6 mt-2 text-sm font-semibold w-full" onClick={() => navigate("/cart")}>Save Address</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Checkout