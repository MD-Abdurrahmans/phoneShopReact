import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import PhonesCard from "../../components/phonesCard/PhonesCard";



export default function Carts() {
    const [phone,setAllphone] = useState();
    const [notFound,setNotfound] = useState(false) 
    const [isShow,setIsShow] = useState(false);
    const [l,setL] = useState(false);
//  const cartId =useParams();
//  const dataCarts = useLoaderData();
//  console.log(cartId)




//  console.log(items)
 useEffect(()=>{
  const items =JSON.parse(localStorage.getItem('favorites'));
     if(items){
        setAllphone(items);
       if(items.length>3){
         setL(true)
       }else{
        setL(false)
       }
     }
     

 },[phone])

const handleRemove=()=>{


  localStorage.removeItem('favorites')
  setAllphone('');
  setNotfound(true)
}


  return (
    <div>
        
  {notFound? <p className="text-3xl text-red-600 justify-center items-center flex min-h-screen" >Not Found</p>:
  
  <div>
     
  <div>
    <button onClick={()=>handleRemove()} className="btn bg-red-600 text-white">Delete</button>
  </div>
 <div className="grid gap-8 md:grid-cols-2 ">
 {
      isShow? 
      phone?.map(phone=>  <PhonesCard key={phone.id} phone={phone} ></PhonesCard>  ):
      phone?.slice(0,2).map(phone=>  <PhonesCard key={phone.id} phone={phone} ></PhonesCard>  )
   } 

 
 </div>
 {

   l? 
   
   <div className="flex justify-center items-center mt-4 mb-3">
   <button onClick={()=>setIsShow(!isShow)}  className="btn bg-purple-600 text-white">{isShow?'Show Less':'Show More'}</button>
   </div> 
   :''

 }
 
 </div>
  }




    </div>
  )
}
