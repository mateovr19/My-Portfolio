import React from 'react'

type DataRangeProps = {
    initial: string
    final: string
}
export default function DataRange (props: DataRangeProps) {
  return (
    <div className='w-48 h-fit rounded-sm items-center bg-tertiary transition-all duration-500 hover:scale-125'>
        <p className='flex justify-center items-center text-xs text-white'>{props.initial} - {props.final}</p>
    </div>
  )
}