import React from 'react'
import DataRange from '../../atoms/DataRange/index'
import Title from '../../atoms/Title/index'
import Text from '../../atoms/Text/index'

type EducationCardProps = {
    title: string
    type: string
    initial: string
    final: string
    text: string
    description: string
}

export default function EducationJobCard (props: EducationCardProps) {
  return (
    <div className='flex flex-col w-fit lg:flex-row justify-around lg:gap-6 bg-white'>
      <div className='flex flex-col p-8 gap-4'>
        <Title title={props.title} classes='font-semibold text-left' />
        <div className='flex items-center lg:justify-between gap-4'>
          <Text>{props.text}</Text>
          <DataRange initial={props.initial} final={props.final}/>
        </div>
      </div>
      <div className='flex flex-col justify-center p-8 gap-4'>
        <Title title={props.type} classes='font-semibold text-left' />
        <Text classes='text-gray-500 text-justify'>
          {props.description}
        </Text>
      </div>

    </div>
  )
}