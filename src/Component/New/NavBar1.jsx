import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Contex } from './ContexApi/Contex'

const NavBar1 = () => {

    const { cart } = useContext(Contex)
    return (
        <div className='flex place-content-between items-center my-5'>
            <div className='text-3xl font-bold'>
                <h1>Gadget Heaven</h1>
            </div>
            <div>
                <Link to="/">
                    <button className="px-3 py-2 rounded-lg hover:bg-green-500">Home</button>
                </Link>
                <Link to="/dashboard">
                    <button className="px-3 py-2 rounded-lg hover:bg-green-500">Dashboard</button>
                </Link>
                <Link to="/statistics">
                    <button className="px-3 py-2 rounded-lg hover:bg-green-500">Statistics</button>
                </Link>
            </div>
            <div className='relative rounded-full bg-slate-300 p-3'>
                {/* Badge to show cart length */}
                <span className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5'>
                    {cart.length}
                </span>
                <BsCart4 className='text-2xl font-bold' />
            </div>

        </div>
    )
}

export default NavBar1