import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { Contex } from './ContexApi/Contex'

const NavBar1 = () => {

    const bgBtn = () => {
        const location = useLocation()
        if (location.pathname === "/becomeASeller") {
            return 'bg-orange-600 text-white'
        }
    }

    const { firebaseInfo } = useContext(Contex)
    const {cart, user, signOutUser} = firebaseInfo

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log('sign out successfully!')
        })
        .catch(error => {
            console.log('Error:', error.message)
        })
    }

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
                <Link to="/becomeASeller">
                    <button className={`${bgBtn()} px-3 py-2 rounded-lg hover:bg-orange-600`}>Become A Seller</button>
                </Link>
            </div>
            {
                user && (
                    <div className='ml-5'>
                        <button className='px-3 py-2 rounded-lg bg-orange-600'>{user.email}</button>
                        <button onClick={handleSignOut} className='px-3 py-2 rounded-lg bg-orange-600 ml-5'>Log Out</button>
                    </div>
                )
            }
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