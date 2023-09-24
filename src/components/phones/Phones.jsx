import PhonesCard from "../phonesCard/PhonesCard";


export default function Phones({phones}) {
   
  return (
  <div className="mt-12">
      <h1 className="text-center text-4xl text-green-500">Phones</h1>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" >
      {
        phones?.map(phone=><PhonesCard key={phone.id} phone={phone} ></PhonesCard>)
      }
    </div>
  </div>
  )
}
