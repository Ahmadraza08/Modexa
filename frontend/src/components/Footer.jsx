import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img src={assets.logo} className="mb-5 w-32" alt="" />
                    <p className="w-full md:w-2/3 text-gray-600">MODEXA INTERIOR is your trusted destination for modern and high-quality interior design solutions, including bedrooms, lounges, kitchens, offices, and bathrooms. We offer bespoke designs, premium materials, and expert craftsmanship. Visit our studio for a personalized consultation or explore our portfolio online for inspiration and project ideas. Elegance, functionality, and creativity — all in one place.</p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+92 310 2794546</li><li>modexainterior@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                {/* <hr className='fill-white'/> */}
                <p className="py-5 text-sm text-center border-t-1 border-gray-300">Copyright 2026 @modexainterior.com - All Right Reserved.</p>
            </div>
        </div>

    )
}

export default Footer