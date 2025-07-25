import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>
        <div>
        <h2 className='mb-5 text-2xl font-bold text-black tracking-wide'>
  MediConnect
</h2>
<p className='w-full md:w-2/3 text-gray-600 leading-6'>
    MediConnect is a modern platform to book doctor appointments instantly and securely. Trusted healthcare at your fingertips.
  </p>

        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 89463 66793</li>
            <li>support@mediconnect.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Mediconnect.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
