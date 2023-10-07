import axios from "axios";
import { useEffect, useState } from "react";


const useGetPhones = () => {
    const [phones,setPhones]=useState()

    useEffect(()=>{
        axios.get('/phones.json').then(data => setPhones(data.data))
    },[])

    return [phones]
}
export default useGetPhones;