import { useEffect, useState } from "react";
import { Link,  useLoaderData, useParams } from "react-router-dom"

import swal from 'sweetalert';
export default function Favorites() {

    const [phone,setPhone] = useState([]);
    const  paramsId = useParams();
    const phones = useLoaderData();



    // console.log(phone)



    const { id, image, phone_name, brand_name, price, rating } = phone || {};


 useEffect(()=>{

    const getPhone =  phones.find(phone=> phone.id == paramsId.id  );
 
    setPhone(getPhone)
 },[paramsId.id])


 const handleAddCart=()=>{

    //  const getCart = JSON.parse(localStorage.getItem('tube'));
    //  console.log(getCart)

    //  localStorage.setItem('tube',JSON.stringify([{name:'rahman'},{home:'chy'}]))

    const addFavorites =[];

    const favorites = JSON.parse(localStorage.getItem('favorites'));

     if(!favorites){

         addFavorites.push(phone);
         localStorage.setItem('favorites',JSON.stringify(addFavorites))
         swal("Wow", "your cart Added ", "Successfully");


     }else{
         
         const me = favorites.find(fa=>fa.id === phone.id)

          if(!me){
            swal("Greate!", "Next cart Added ", "Successfully");
            addFavorites.push(...favorites,phone)
            localStorage.setItem('favorites',JSON.stringify(addFavorites))

          }else{
            
       
 
            swal("Oops!", "Card already exist", "error");
         
          }
         
     
     }

 }

  return (
   <div>
     <div className="flex justify-center items-center min-h-screen  ">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      {phone_name}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {brand_name}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
     {rating}
    </p>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
     $ {price}
    </p>
    <a className="inline-block" href="#">
    
    <Link  to={`/carts`} >
    <button

     onClick={()=>handleAddCart(id)}
        className="bg-purple-700 text-white btn border-0"
        type="button"
      >
        Add To Cart
       
      </button>
    </Link>
    </a>
  </div>
</div>
    </div>
   </div>
  )
}
