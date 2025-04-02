import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { recipesApi } from '../../Constants/Utils';
import ShopCard from '../../Components/ShoppingCards/ShopCard';


const Home = () => {
    const [resData, setResData] = useState([]);

    const fetching = async () => {
        try {
            const res = await axios.get(recipesApi)
            setResData(res?.data?.recipes)
            console.log(res?.data?.recipes)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetching();
    },[])
  return (
    <div className='h-auto w-full p-5 flex justify-center items-center gap-3 flex-wrap'>
        {resData && resData.map((item,idx) => (
            <ShopCard key={item.id} data={item}/>
        ))}
    </div>
  )
}

export default Home