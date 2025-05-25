import React from 'react'
import Icon from '../../atoms/Icon/index'
import Text from '../../atoms/Text/index'

type IconTextProps = {
    icon: string
    iconClasses?: string
    text: string
}

export default function IconText (props: IconTextProps) {
  return (
    <div className='flex items-center w-10/12 mx-auto'>
        <Icon icon={props.icon} classes={`${props.iconClasses} mr-5`}/>
        <Text>{props.text}</Text>

    </div>
  )
}