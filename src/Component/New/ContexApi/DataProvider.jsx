import React, { useState } from 'react'
import { Contex } from './Contex'

const DataProvider = ({ children, className }) => {

    const [cart, setCart] = useState([])

    const addToCart = (id) => {
        setCart([...cart, id])
    }

    return (
        <Contex.Provider value={{ cart, addToCart }}>
            <div className={className}>
                {children}
            </div>
        </Contex.Provider>
    )
}

export default DataProvider