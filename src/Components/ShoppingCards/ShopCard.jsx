import React from 'react'

const ShopCard = ({data}) => {
  return (
    <div className='h-auto w-64 border-2 border-black p-1 rounded-lg'>
        <div>
            <img className='rounded-lg' src={data?.image}/>
        </div>
            <p>{data?.name}</p>
            <p>Rating : {data?.rating}/5</p>
            <p>Totoal Review : {data?.reviewCount}</p>
    </div>
  )
}

export default ShopCard