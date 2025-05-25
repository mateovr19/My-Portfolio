import React from 'react'
import Title from '../../../atoms/Title/index'
import Text from '../../../atoms/Text/index'
import EducationJobCard from '../../../molecules/EducationJobCard/index'
import HorizontalLine from '../../../atoms/HorizontalLine/index'

export default function JobInfo () {
  return (
    <div className='w-full items-center'>
        <div className='mx-auto items-center w-1/2 mb-14'>
            <Title title='My Work Experience' size='text-3xl' classes='text-secondary font-bold mb-6'/>
            <Text classes='text-gray-500 text-center text-justify'>This is the work experience I have gained
            during my third semester of Systems Engineering. I have been involved in tasks ranging from Excel
            data management and database handling to web development, working collaboratively in teams using
            agile methodologies such as Scrum.</Text>
        </div>
        <div className='bg-white mx-2 lg:mx-5'>
            <EducationJobCard
              title='New Inntech S.A.S'
              text='Employee'
              initial='Marzo 2024'
              final='Present'
              type='Backend Software Developer'
              description='Backend Software Developer specialized in building RESTful APIs
              with JSON responses and cloud solutions using AWS (S3, Cognito, Athena), 
              ORM Sequelize . Skilled in agile methodologies with Scrum in Azure DevOps
              and advanced Git for version control. Contributed to the development of an
              application for product purchasing at a national and international level with Nutresa,
              featuring user authentication and registration, order and purchase management,
              navigation structures, administration of collections and customer clusters,
              as well as operational reports, among other functionalities.'
            />
            <HorizontalLine />
            <EducationJobCard
            title='RST Asociados S.A.S'
            text='Employee'
            initial='March 2023'
            final='February 2024'
            type='Database Analyst'
            description='Systems Assistant, management of large volume of databases, 
            database crosses, correspondence crosses in the Excel tool and automation of information,
            creation of functions in BVA for process automation'
            />
            <HorizontalLine />
            <EducationJobCard
            title='University of Antioquia'
            text='Employee'
            initial='February 2023'
            final='March 2023'
            type='Systems Assistant'
            description='Database organization in Excel, data analysis, and construction of pivot
            tables. Proficient in office tools and familiar with OneDrive management.'
            />
        </div>
    </div>
    
  )
}