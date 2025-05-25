import React from 'react'
import Text from '../../atoms/Text/index'

type AlignedTextProps = {
    leftText: string
    leftTextClasses?: string
    rightText: string
    rightTextClasses?: string
}
export default function AlignedText (props: AlignedTextProps) {
  return (
    <div className='flex justify-between w-10/12 mx-auto'>
        <Text classes={`text-left ${props.leftTextClasses || ''}`}>{props.leftText}</Text>
        <Text classes={`text-right ${props.rightTextClasses || ''}`}>{props.rightText}</Text>
    </div>
  )
}