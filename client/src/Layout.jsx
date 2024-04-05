import Footer from './pages/Footer'
import Header from './pages/Header'
import {Outlet} from "react-router-dom"

    //*********************************************************************************************************************************************************
    // give basic layout of the website
    //********************************************************************************************************************************************************* 

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen'> 
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
