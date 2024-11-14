// import React from 'react';
// import { Link } from 'react-router-dom';

// const BecomeASellerBanner = () => {
//   return (
//     <div className="bg-orange-600 text-white py-16 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
//         {/* Left Side: Seller Information */}
//         <div className="space-y-4">
//           <h2 className="text-5xl font-bold mb-10">Become A Gadget Heaven Seller Today!</h2>
//           <p className="text-lg">
//             Create a Gadget Heaven seller account now and reach millions of customers!
//           </p>
//         </div>
        
//         {/* Right Side: Login Form */}
//         <div className="bg-white text-gray-800 px-6 py-16 rounded-2xl shadow-lg">
//           <h3 className="text-2xl font-semibold mb-4 text-center">Login with Password</h3>
          
//           {/* Login Form */}
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Mobile/Email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <button
//               type="submit"
//               className="w-full py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300"
//             >
//               Login
//             </button>
//           </form>
          
         
//           <div className="mt-4 flex flex-col text-end text-sm text-blue-500">
//             <p className="hover:underline cursor-pointer">Reset password</p>
//             <Link to="/becomeASeller/createANewAccount"><p className="hover:underline cursor-pointer">Create a new account</p></Link>
//             <p className="disabled:pointer-events-none">Register as Global Seller</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BecomeASellerBanner;


import React, { useContext, useState } from 'react';
import { Contex } from './ContexApi/Contex'

const BecomeASellerBanner = () => {
  // State to control whether the form is for creating a new account or logging in
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const {firebaseInfo } = useContext(Contex)
  const { createUser, signInUser } = firebaseInfo

  const handleRegistration = (event) => {
    event.preventDefault()
    const name =  event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    console.log(name, email, password)

    // createUser
    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log('Error:', error.message)
    })
  }

  const handleLogin = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    console.log(email, password)

    // signInUser
    signInUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log('Error:', error.message)
    })
  }



  return (
    <div className="bg-orange-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Seller Information */}
        <div className="space-y-4">
          <h2 className="text-5xl font-bold mb-10">Become A Gadget Heaven Seller Today!</h2>
          <p className="text-lg">
            Create a Gadget Heaven seller account now and reach millions of customers!
          </p>
        </div>
        
        {/* Right Side: Conditional Forms */}
        <div className="bg-white text-gray-800 px-6 py-16 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            {isCreatingAccount ? 'Create a New Account' : 'Login with Password'}
          </h3>
          
          {/* Conditional Form */}
          {isCreatingAccount ? (
            // Registration Form
            <form onSubmit={handleRegistration} className="space-y-4">
              <input
                type="text"
                name='name'
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                name='email'
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="password"
                name='password'
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              >
                Create Account
              </button>
            </form>
          ) : (
            // Login Form
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                name='email'
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="password"
                name='password'
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300"
              >
                Login
              </button>
            </form>
          )}
          
          {/* Links Section */}
          <div className="mt-4 flex flex-col text-end text-sm text-blue-500">
            <p className="hover:underline cursor-pointer">Reset password</p>
            {/* Toggle between Login and Create Account */}
            <p
              onClick={() => setIsCreatingAccount(!isCreatingAccount)}
              className="hover:underline cursor-pointer"
            >
              {isCreatingAccount ? 'Back to Login' : 'Create a new account'}
            </p>
            <p className="disabled:pointer-events-none">Register as Global Seller</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeASellerBanner;
