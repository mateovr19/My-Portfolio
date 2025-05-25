import React from 'react'
import PersonalInfo from '../../organisms/LeftSide/PersonalInfo/index'
import Languages from '../../organisms/LeftSide/Languages/index'
import ProgrammingLanguages from '../../organisms/LeftSide/ProgrammingLanguages/index'
import Frameworks from '../../organisms/LeftSide/Frameworks/index'
import ExtraSkills from '../../organisms/LeftSide/ExtraSkills/index'

export default function Home() {
  return (
    <section className='w-full bg-white lg:w-fit'>
      <PersonalInfo />
      <Languages />
      <ProgrammingLanguages />
      <Frameworks />
      <ExtraSkills />
    </section>
  )
}