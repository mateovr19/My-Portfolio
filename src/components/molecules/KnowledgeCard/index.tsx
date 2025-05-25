import React from 'react'
import Icon from '../../atoms/Icon/index'
import Text from '../../atoms/Text/index'
import Title from '../../atoms/Title/index'

type KnowledgeCardProps = {
    icon: string
    title: string
    text: string
}

export default function KnowledgeCard (props: KnowledgeCardProps) {
  return (
    <div className='flex flex-col items-center p-8 bg-white text-justify shadow-md hover:scale-95 cursor-pointer transition-all duration-100'>
        <Icon icon={props.icon} classes='text-6xl text-tertiary'/>
        <Title title={props.title} classes='my-3 font-semibold'/>
        <Text classes='text-gray-500'>{props.text}</Text>
    </div>
  )
}