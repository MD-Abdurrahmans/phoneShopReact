import { useEffect, useState } from "react";
import Rating from "react-rating";
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
    <Rating 

emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
}
fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
 <path  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"  />
</svg>
}
                                initialRating={rating}
                                readonly
                            />
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
