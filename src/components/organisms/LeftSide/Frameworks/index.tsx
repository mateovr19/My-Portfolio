import React from 'react'
import Title from '../../../atoms/Title/index'
import HorizontalLine from '../../../atoms/HorizontalLine/index'
import LanguagePercentage from '../../../molecules/LanguagePercentage/index'

export default function ProgrammingLanguages () {
  return (
    <>
        <div className='flex flex-col mb-6 mt-6'>
            <div className='flex flex-col gap-6'>
                <Title title='Frameworks'></Title>
                <LanguagePercentage
                language='ExpressJs'
                percentage={70}
                />
                <LanguagePercentage
                language='GraphQL'
                percentage={40}
                />
                <LanguagePercentage
                language='Spring Boot'
                percentage={30}
                />
                <LanguagePercentage
                language='ReactJs'
                percentage={40}
                />
            </div>
        </div>
        <HorizontalLine />
    </>
  )
}