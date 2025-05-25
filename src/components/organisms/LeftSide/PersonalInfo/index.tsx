import React from 'react'

import Image from '../../../atoms/Image/index'
import Text from '../../../atoms/Text/index'
import HorizontalLine from '../../../atoms/HorizontalLine/index'
import AlignedText from '../../../molecules/AlignedText/index'

export default function PersonalInfo () {
  return (
    <>
      <div className='flex flex-col p-6 gap-6'>
        <Image
          src="/RoundedPhoto.png"
          alt='Mateo Velasquez Rodriguez'
          classes='rounded-full w-[240px] h-[240px] object-cover mx-auto shadow-lg'
        />
        <Text classes='text-center text-2xl font-semibold'>Mateo Velasquez R</Text>
        <Text classes="text-center text-2xl text-gray-400">Systems Engineering Student</Text>
      </div>
      <HorizontalLine />
      <div className='flex flex-col mb-6 mt-6'>
        <div className='flex flex-col gap-6'>
            <AlignedText
            leftText='Age:'
            rightText='27'
            />
            <AlignedText
            leftText='Residence:'
            rightText='Sabaneta, Antioquia'
            />
            <AlignedText
            leftText='Freelance:'
            rightText='No Available'
            rightTextClasses='text-red-500'
            />
        </div>
      </div>
      <HorizontalLine />
    </>
  )
}