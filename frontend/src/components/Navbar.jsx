import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-black'>
      <h1
  onClick={() => navigate('/')}
  className="text-2xl font-bold cursor-pointer font-poppins tracking-wide"
>
  MediConnect
</h1>

      <ul className='md:flex items-start gap-5 font-semibold hidden text-black'>
        {['/', '/doctors', '/about', '/contact'].map((path, idx) => (
          <NavLink key={idx} to={path}>
            <li className='py-1 hover:underline underline-offset-4'>
              {path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}
            </li>
          </NavLink>
        ))}
      </ul>

      <div className='flex items-center gap-4'>
        {token && userData ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 h-8 rounded-full object-cover' src={userData.image} alt="user" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-black z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-white border border-black rounded-md shadow-md flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('/my-profile')} className='hover:underline cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:underline cursor-pointer'>My Appointments</p>
                <p onClick={logout} className='hover:underline cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-black text-white px-6 py-2 rounded-full font-normal hidden md:block transition-all hover:bg-gray-900'
          >
            Create account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="menu" />

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-white z-30 transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex justify-between items-center px-5 py-6 border-b border-black'>
            <img src={assets.logo} className='w-32' alt="logo" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-6 cursor-pointer' alt="close" />
          </div>
          <ul className='flex flex-col items-start gap-4 px-6 py-5 text-lg font-medium text-black'>
            {['/', '/doctors', '/about', '/contact'].map((path, idx) => (
              <NavLink key={idx} onClick={() => setShowMenu(false)} to={path}>
                <p className='py-2 border-b border-gray-300 w-full'>{path === '/' ? 'HOME' : path.replace('/', '').toUpperCase()}</p>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
