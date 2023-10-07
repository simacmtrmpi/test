import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhoneDetailsCard from "./PhoneDetailsCard";

const PhoneDetails = () => {
const [phones,setPhones] = useState({})
const [phone,setPhone] = useState({})




const {id} = useParams()

useEffect(()=>{
  axios.get('/phones.json').then(data=> setPhones(data.data))

},[])

useEffect(()=>{
  if(phones.length){
    const phone = phones.find(phone => phone.id === id)
    // console.log(phone)
    setPhone(phone)
  }
},[id,phones])




  return (
    <div>
      {
        <PhoneDetailsCard phone={phone}></PhoneDetailsCard>
      }
    </div>
  );
};

export default PhoneDetails;
