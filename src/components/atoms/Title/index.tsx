import React from 'react'

type TitleProps = {
    title: string
    size?: string
    classes?: string
}

export default function Title (props: TitleProps) {
  return (
    <h2
        className={`${props.size || 'text-xl'} text-center ${props.classes || ''}`}
    >
        {props.title}
    </h2>
  )
}