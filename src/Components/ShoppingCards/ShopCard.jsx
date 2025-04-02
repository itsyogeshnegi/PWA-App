import React from 'react'

const ShopCard = ({data}) => {
  return (
    <div className='h-auto w-64 border-2 border-black p-1'>
        <div>
            <img src={data?.image}/>
            <p>{data?.name}</p>
            <p>Rating : {data?.rating}/5</p>
            <p>Totoal Review : {data?.reviewCount}</p>
        </div>
    </div>
  )
}

export default ShopCard