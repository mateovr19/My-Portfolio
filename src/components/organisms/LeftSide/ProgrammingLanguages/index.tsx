import React from 'react'
import Title from '../../../atoms/Title/index'
import HorizontalLine from '../../../atoms/HorizontalLine/index'
import LanguagePercentage from '../../../molecules/LanguagePercentage/index'

export default function ProgrammingLanguages () {
  return (
    <>
        <div className='flex flex-col mb-6 mt-6'>
            <div className='flex flex-col gap-6'>
                <Title title='Programming Languages'></Title>
                <LanguagePercentage
                language='NodeJs'
                percentage={70}
                />
                <LanguagePercentage
                language='JavaScript'
                percentage={50}
                />
                <LanguagePercentage
                language='Java'
                percentage={30}
                />
                <LanguagePercentage
                language='Python'
                percentage={40}
                />
                <LanguagePercentage
                language='MySQL'
                percentage={60}
                />
                <LanguagePercentage
                language='MongoDB'
                percentage={40}
                />
                <LanguagePercentage
                language='HTML'
                percentage={60}
                />
            </div>
        </div>
        <HorizontalLine />
    </>
  )
}