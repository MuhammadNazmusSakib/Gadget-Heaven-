import React, { useEffect, useState } from 'react'
import { Contex } from './Contex'
import { auth } from '../Firebase/firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const DataProvider = ({ children, className }) => {

    const [cart, setCart] = useState([])
    const [user, setUser] = useState([])

    const addToCart = (id) => {
        setCart([...cart, id])
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('curent User: ', currentUser)
            setUser(currentUser)
        })

        return() => {
            unSubscribe()
        }
    }, [])

    const signOutUser = () => {
        return signOut(auth)
    }

    const firebaseInfo = {
        cart,
        addToCart,
        createUser,
        signInUser,
        user,
        signOutUser
    }

    return (
        <Contex.Provider value={{ firebaseInfo }}>
            <div className={className}>
                {children}
            </div>
        </Contex.Provider>
    )
}

export default DataProvider