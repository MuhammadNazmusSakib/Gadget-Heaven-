import React, { useEffect } from 'react'
import BecomeASellerBanner from './BecomeASellerBanner';
import WhySellOnGadgetHeaven from './WhySellOnGadgetHeaven';


const BecomeASeller = () => {
    useEffect(() => {
        document.title = 'Become A Seller | Gadget Heaven';
    }, [])
    return (
        <div>
            <BecomeASellerBanner />
            <WhySellOnGadgetHeaven />
        </div>
    )
}

export default BecomeASeller