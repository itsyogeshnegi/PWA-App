import React from 'react'

const QuotestCard = ({data}) => {
  return (
    <div className='h-auto w-[100%] bg-slate-200 px-2 rounded-md'>
        <p>{data?.quote}</p>
        <b>Author - {data?.author}</b>
    </div>
  )
}

export default QuotestCard