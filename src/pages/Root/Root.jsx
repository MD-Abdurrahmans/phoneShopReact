import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import { useEffect } from "react";


export default function Root() {

const loc= useLocation();

 console.log(loc)
useEffect(()=>{

    loc.pathname;
    document.title = `phone ${loc.pathname.replace('/','-')}`

},[loc.pathname])


  return (
    <div className="max-w-[1300px] mx-auto">
         <Navbar></Navbar>
       
         <div className="min-h-screen">
         <Outlet></Outlet>
         </div>
   
        <Footer></Footer>
    </div>
  )
}
