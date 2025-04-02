import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { quotesApi, recipesApi } from '../../Constants/Utils';
import ShopCard from '../../Components/ShoppingCards/ShopCard';
import QuotestCard from '../../Components/Quotes/QuotestCard';


const Home = () => {
    const [resData, setResData] = useState([]);

    const fetching = async () => {
        try {
            const res = await axios.get(quotesApi)
            setResData(res?.data?.quotes)
            console.log(res?.data?.quotes)
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
            <QuotestCard key={item.id} data={item}/>
        ))}
    </div>
  )
}

export default Home