import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";


export default function Root() {
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
