import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import GpayIcon from "../../assets/googlepayicon.svg";
import lastone from "../../assets/lastone.svg";
import lasttwo from "../../assets/lasttwo.jpg";
import PaymentSVG from "../../assets/payment.svg";
import PaytmIcon from "../../assets/paytm_icon.svg";
import PhonepeIcon from "../../assets/phonepeicon.svg";
import Qr from "../../assets/qr.png";
import Whatsappicon from "../../assets/whatspp_pay.svg";
import Data from '../../data/Main';

const Payment = () => {
    const upi = "netc.34161fa820328aa2cac75ba0@mairtel"
    const [time, settime] = useState();
    const [qrcode, setqrcode] = useState(false);
    const [data, setdata] = useState(Data)
    const [price, setprice] = useState(data[localStorage.id].price)
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        if (seconds > 0) {
            const countdownInterval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [seconds]);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    useEffect(() => {
        setInterval(() => {
            var d = new Date();
            var seconds = d.getMinutes() * 60 + d.getSeconds();
            var fiveMin = 60 * 20;
            var timeleft = fiveMin - (seconds % fiveMin);
            var result = parseInt(timeleft / 60) + ":" + (timeleft % 60);
            settime(result);
        }, 500);
    }, []);
    useEffect(() => {
        if (localStorage.qty && localStorage.price) {
            const pricenew = localStorage.qty * localStorage.price
            setprice(pricenew)
        }
    }, [])


    const handelclick = () => {

        navigate("/");

    };
    const Phonepayclick = () => {
        const url = "phonepe://pay?pa=" + upi + "&pn=Flipkart&am=" + price + "&tr=H2MkMGf5olejI&mc=8931&cu=INR&tn=Flipkart"
        window.location.href = url;
    }
    const qropner = () => {
        setSeconds(120)
        setqrcode(true)
    }

    return (
        <div className="bg-gray-200 font-sans">
            <img src={PaymentSVG} alt="" className="w-full" />
            {qrcode && <div className="absolute left-0 top-0 bg-white w-full h-full flex justify-center items-center">
                <div className="absolute top-5 right-5 font-bold text-2xl" onClick={() => setqrcode(false)}>x</div>
                <div className="text-center">
                    {price &&
                        <div>
                            <QRCode
                                size={256}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value={`upi://pay?pa=${upi}&pn=Shop&purpose=00&am=${price}`}
                                viewBox={`0 0 256 256`}
                            />
                        </div>}
                    <div className="mt-5"><p>
                        Time Remaining: {minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds} minutes
                    </p></div>
                    <div>
                        <button
                            onClick={() => handelclick()}
                            className=" bg-orange-600 text-white w-40 h-12 text-whitefont-bold py-2 mt-5 px-4 border  rounded"
                        >
                            Continue
                        </button>
                        <div className="mt-5 underline text-lg" onClick={() => setqrcode(false)}>Exit</div>
                    </div>
                </div>
            </div>}
            <div>


                <div className="text-center py-2 bg-white">
                    {" "}
                    <span className="text-2xl font-semibold">Offer ends in : </span>{" "}
                    <span className="text-2xl text-orange-600	">{time}</span>
                </div>

                <div className="py-1 px-2 mt-1 ">
                    <div className="flex space-x-4 bg-white border border-gray-300 w-full p-2">
                        {price && price > 0 &&
                            <ul className="w-full">
                                <li className="w-full my-2">
                                    <div className="flex items-center justify-center py-2 w-full font-sans">
                                        <span className="text-[16px] font-semibold mr-2">Total Payable Amount:</span> ₹{price}
                                    </div>
                                </li>
                                <li className="w-full my-2" onClick={Phonepayclick}>
                                    <a href="#" className="flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full">
                                        <img src={GpayIcon} className="w-10" alt="" />
                                        <span className="ml-3 text-[14px]">Google Pay</span>
                                    </a>
                                </li>
                                <li className="w-full my-2" onClick={Phonepayclick}>
                                    <a href="#" className="flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full">
                                        <img src={PaytmIcon} className="w-10" alt="" />
                                        <span className="ml-3 text-[14px]">Paytm</span>
                                    </a>
                                </li>
                                <li className="w-full my-2" onClick={Phonepayclick}>
                                    <a href="#" className="flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full">
                                        <img src={PhonepeIcon} className="w-10" alt="" />
                                        <span className="ml-3 text-[14px]">PhonePe</span>
                                    </a>
                                </li>
                                <li className="w-full my-2" onClick={Phonepayclick}>
                                    <a href="#" className="flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full">
                                        <img src={Whatsappicon} className="w-10" alt="" />
                                        <span className="ml-3 text-[14px]">Whatsapp Pay</span>
                                    </a>
                                </li>
                                <li className="w-full my-2" onClick={qropner}>
                                    <a href="#" className="flex items-center border border-slate-200 py-2 px-6 rounded-xl w-full">
                                        <img src={Qr} className="w-10" alt="" />
                                        <span className="ml-3 text-[14px]">QR Code</span>
                                    </a>
                                </li>
                            </ul>}
                    </div>
                </div>
                <div className="">
                    <h2 className="text-3xl py-2 px-2 text-center">Order Summary</h2>
                </div>
                <div className="py-1 px-2 ">
                    <div className="flex space-x-4  bg-white border border-gray-300 w-full   p-2">
                        <div className="flex items-center">
                            <img className="w-96  " src={data[localStorage.id].image} alt="" />
                        </div>
                        <div>
                            <span className="text-gray-500 font-bold">
                                ₹{data[localStorage.id].price}
                            </span>{" "}
                            <span className="line-through text-gray-500">₹{data[localStorage.id].cancelprice}</span>
                            <h1 className="text-clip overflow-hidden   text-gray-500">
                                {data[localStorage.id].title}
                            </h1>
                            <h1 className="text-gray-500">Quantity : {localStorage.getItem("qty")}</h1>
                            <h1 className="text-gray-500">Size : {localStorage.getItem("size")}</h1>
                        </div>
                    </div>
                </div>
                <div className="py-2 px-2 ">
                    <div className="flex space-x-4  bg-white border border-gray-300 w-full   p-2">
                        <span className="font-light  text-gray-500">PRICE DETAILS</span>
                    </div>
                    <div className="   bg-white border border-gray-300 w-full   p-1">
                        <div>
                            <span className="font-light   px-2">Price ({localStorage.getItem("qty")} item) </span>
                            <span className="font-light float-right px-2  ">
                                ₹{price && price}
                            </span>
                        </div>
                        <div className="mb-1">
                            <span className="font-light   px-2">Delivery Charges</span>
                            <span className="font-light  float-right px-2  ">Free</span>
                        </div>
                        <div className="flex-grow border-t border-gray-400"></div>
                        <div className="m-1 order-total">
                            <span className="font-light   px-2">Amount Payable</span>
                            <span className="font-light float-right px-1 woocommerce-Price-amount ">
                                ₹{price && price}{" "}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <img src={lasttwo} alt="" />
                    </div>
                    <div>
                        <img className="w-full" src={lastone} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
