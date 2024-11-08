// import React from 'react'
// import DataProvider from './ThemeProvider'
// import Navbar from './Navbar'

// const Root = () => {
//   return (
//     <DataProvider>
//         <Navbar/>
//     </DataProvider>
//   )
// }

// export default Root

import React from 'react'
import NavBar1 from './New/NavBar1'
import { Outlet } from 'react-router-dom'
import DataProvider from './New/ContexApi/DataProvider'

const Root = () => {
  return (
    <DataProvider className='w-11/12 mx-auto'>
      <NavBar1/>
      <Outlet/>
    </DataProvider>
  )
}

export default Root