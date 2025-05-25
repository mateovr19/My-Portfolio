import React from 'react'
import Percentage from '../../atoms/Percentage/index'
import AlignedText from '../AlignedText/index'

type LanguagePercentageProps = {
    language: string
    percentage: number
}

export default function LanguagePercentage (props: LanguagePercentageProps) {
  return (
    <>
        <AlignedText
        leftText={props.language}
        rightText={`${props.percentage}%`}
        />
        <Percentage
        percentage={props.percentage}
        />
    </>
  )
}