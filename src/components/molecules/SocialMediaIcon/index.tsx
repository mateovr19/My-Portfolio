import React from 'react'
import Icon from '../../atoms/Icon/index'

type SocialMediaIconProps = {
    icon: string
    iconClasses?: string
    link: string
}

export default function SocialMediaIcon (props: SocialMediaIconProps) {
  return (
    <a
      href={props.link}
      className='flex items-center justify-center rounded-full bg-tertiary p-2 hover:bg-violet-400 hover:transition-colors hover:duration-1000'
    >
        <Icon
        icon={props.icon}
        classes={`text-4xl ${props.iconClasses || ''}`}
        />

    </a>
  )
}