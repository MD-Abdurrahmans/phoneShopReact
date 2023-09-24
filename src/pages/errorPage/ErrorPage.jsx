import { Link } from "react-router-dom";


export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
       <h1 className="text-center text-5xl text-red-600">OoooPs! Not Fount</h1><br/>
       
         <Link to='/'>
         <button className="btn bg-black text-white">Go Home</button>
         </Link>
    </div>
  )
}
