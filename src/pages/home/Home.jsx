import { useLoaderData } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Phones from "../../components/phones/Phones";


export default function Home() {

    const phones = useLoaderData();

  
  return (
    <div>
         <Banner></Banner>
         <Phones  phones={phones} ></Phones>

    </div>
  )
}
