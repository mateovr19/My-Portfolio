import React from 'react'

type PercentageProps = {
    percentage: number
}

export default function Percentage(props: PercentageProps) {
  return (
    <div className='rounded border-4 border-double w-10/12 mx-auto border-tertiary bg-white'>
        <div className='h-0.5 rounded border-none  bg-tertiary'
             style={{ width: `${props.percentage}%`}}
        ></div>

    </div>
  )
}