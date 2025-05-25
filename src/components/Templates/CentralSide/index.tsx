import React from 'react'
import MainInfo from '../../organisms/CentralSide/MainInfo/index'
import KnowledgeInfo from '../../organisms/CentralSide/KnowledgeInfo/index'
import EducationInfo from '../../organisms/CentralSide/EducationInfo/index'
import JobInfo from '../../organisms/CentralSide/JobInfo/index'
import PortfolioInfo from '../../organisms/CentralSide/PortfolioInfo/index'
import Text from '../../atoms/Text/index'

export default function Home() {
  return (
    <section className='flex w-full flex-grow flex-col gap-12 bg-primary'>
      <MainInfo />
      <KnowledgeInfo />
      <EducationInfo />
      <JobInfo />
      <PortfolioInfo />
      <footer className="bg-white py-1 text-center lg:mx-5">
        <Text classes="text-lg">2025. All Rights Reserved. </Text>
      </footer>
    </section>
  )
}