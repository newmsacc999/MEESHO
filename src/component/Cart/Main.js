import React, { useState } from 'react'
import Data from '../../data/Main'
import { Link } from 'react-router-dom'

const Cart = () => {
    const [data, setdata] = useState(Data)
    const cart = { ...data[localStorage.id] }
    return (
        <div className="min-h-[75vh]">
            <div className="border border-slate-300 font-sans text-[13px] m-4 rounded text-slate-700">
                <ul className="pt-2">
                    <li className="border-b border-slate-200 py-2 px-4 mx-4">
                        <p className="text-[14px] font-bold">Cart Item</p>
                        <div className="flex justify-center items-center">
                            <img src={cart.image} alt="" className="h-24" />
                            <span>{cart.title}</span>
                        </div>
                    </li>
                    <li className="flex justify-between items-center border-b border-slate-200 py-2 px-4 mx-4"><span className="font-bold">Price:</span><span>₹{cart.price}.00</span></li>
                    <li className="flex justify-between items-center border-b border-slate-200 py-2 px-4 mx-4"><span className="font-bold">Quantity:</span><span>x{localStorage.qty ? localStorage.qty : 1}</span></li>
                    <li className="flex justify-between items-center border-b border-slate-200 py-2 px-4 mx-4"><span className="font-bold">Subtotal:</span><span>₹{localStorage.qty ? localStorage.qty * cart.price : cart.price}.00</span></li>
                    <li className="flex items-center bg-slate-100 pt-2 py-4  px-4">
                        <div className='w-2/3'>
                            <input className="border border-slate-400 h-9 w-full placeholder:italic placeholder:py-2 rounded pl-4" type="text" placeholder="Coupon Code" />
                        </div>
                        <div className="w-1/3">
                            <button className="uppercase text-center bg-[#9f2089] text-white py-2 px-2 text-[12px] font-semibold float-right rounded">Apply Coupon</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="border border-slate-500 font-sans text-[13px] m-4 rounded mt-16">
                <ul className="pt-2">
                    <li className="flex justify-between items-center border-b border-slate-400 py-2 px-4"><span className="font-bold">Subtotal:</span><span>₹{localStorage.qty ? localStorage.qty * cart.price : cart.price}.00</span></li>
                    <li className="flex justify-between items-center border-b border-slate-400 py-2 px-4 bg-slate-100"><span className="font-bold">Total:</span><span>₹{localStorage.qty ? localStorage.qty * cart.price : cart.price}.00</span></li>
                </ul>
            </div>
            <div className="px-4">
                <Link to="/payment" className="block uppercase text-center bg-[#9f2089] text-white py-2 px-2 text-md font-semibold w-full rounded">Proceed to Checkout</Link>

            </div>
        </div>
    )
}

export default Cart