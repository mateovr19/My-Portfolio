import React from 'react'
import Title from '../../../atoms/Title/index'
import HorizontalLine from '../../../atoms/HorizontalLine/index'
import LanguagePercentage from '../../../molecules/LanguagePercentage/index'

export default function Languages() {
  return (
    <>
        <div className='flex flex-col mb-6 mt-6'>
            <div className='flex flex-col gap-6'>
                <Title title='Languages'></Title>
                <LanguagePercentage
                language='English'
                percentage={40}
                />
                <LanguagePercentage
                language='Spanish'
                percentage={100}
                />
            </div>
        </div>
        <HorizontalLine />
    </>
  )
}