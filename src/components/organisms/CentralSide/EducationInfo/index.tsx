import React from 'react'
import Title from '../../../atoms/Title/index'
import Text from '../../../atoms/Text/index'
import EducationJobCard from '../../../molecules/EducationJobCard/index'
import HorizontalLine from '../../../atoms/HorizontalLine/index'

export default function EducationInfo () {
  return (
    <div className='w-full items-center'>
        <div className='mx-auto items-center w-1/2 mb-14'>
            <Title title='My Education' size='text-3xl' classes='text-secondary font-bold mb-6'/>
            <Text classes='text-gray-500 text-center text-justify'>I am currently pursuing a degree
            in Systems Engineering at the University of Antioquia. My academic training has provided
            me with strong foundations in software development, algorithms, databases, and cloud
            computing. Throughout my studies, I have complemented my learning with real-world projects
            and teamwork using agile methodologies.</Text>
        </div>
        <div className='bg-white mx-2 lg:mx-5'>
            <EducationJobCard
              title='University of Antioquia'
              text='Student'
              initial='February 2022'
              final='Present'
              type='Systems Engineering'
              description='The undergraduate program at the University of Antioquia trains professionals
              in programming, databases, networks, software architecture, artificial intelligence,
              data analysis, and cloud computing. It also fosters logical thinking, complex
              problem-solving, and collaborative work through agile methodologies and real-world
              projects.'
            />
            <HorizontalLine />
            <EducationJobCard
            title='University of Antioquia'
            text='Student'
            initial='February 2019'
            final='March 2019'
            type='Excel Course as a Simulation Tool in Engineering'
            description='Course focused on process automation in engineering
            through the use of functions and VBA (Visual Basic for Applications).'
            />
            <HorizontalLine />
            <EducationJobCard
            title='University of Antioquia'
            text='Student'
            initial='July 2020'
            final='November 2020'
            type='Introductory Course to Python with Engineering Applications'
            description='Introductory Python course focused on basic functions,
            loops, conditionals, and process logic applied to engineering.'
            />
        </div>
    </div>
    
  )
}