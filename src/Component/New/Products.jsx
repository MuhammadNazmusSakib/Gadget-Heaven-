import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import { Contex } from './ContexApi/Contex'

const Products = () => {

    const {addToCart} = useContext(Contex)

    const [products, setProducts] = useState([])
  
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                products.map(items =>
                    <div key={items.id} className='border border-slate-500 rounded-lg p-3'>
                        <div>
                            <img src={items.img} className='rounded-lg' />
                        </div>
                        <div className='flex place-content-between'>
                            <div>
                                <h2 className='font-bold my-2'>{items.name}</h2>
                                <p><span className='font-bold'>Price: </span>${items.price}</p>
                            </div>
                            <div className='mt-6'>
                                <button onClick={() => addToCart(items.id)} className="px-3 py-2 rounded-lg bg-green-500">Add To Cart</button>
                                {/* <Product cart={cart} /> */}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Products