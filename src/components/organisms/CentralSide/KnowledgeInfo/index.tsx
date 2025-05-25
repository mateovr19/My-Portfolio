import React from 'react'
import KnowledgeCard from '../../../molecules/KnowledgeCard/index'
import Title from '../../../atoms/Title/index'
import Text from '../../../atoms/Text/index'

export default function KnowledgeInfo () {
  return (
    <div className='w-full items-center'>
        <div className='mx-auto items-center w-1/2 mb-14'>
            <Title title= 'My Knowledge' size='text-3xl' classes='text-secondary font-bold mb-6'/>
            <Text classes='text-gray-500 text-center text-justify'>I have experience working with Node.js and Express.js 
            for building RESTful APIs, and I use AWS to deploy and manage cloud-based applications. On the frontend,
            I develop responsive interfaces using React.js and Tailwind CSS. Additionally, I work with both relational
            and non-relational databases, including SQL and MongoDB.</Text>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-2 lg:mx-5 gap-5'>
            <KnowledgeCard 
            icon='fontisto:aws'
            title='Amazon Web Services'
            text='Lambda, S3, ECS Fargate, CloudFormation, Cognito, Athena, EKS'
            />
            <KnowledgeCard 
            icon='mdi:nodejs'
            title='Backend Development'
            text='Building RESTful APIs using Node.js, Express.js and Java Spring Boot'
            />
            <KnowledgeCard 
            icon='mdi:react'
            title='Frontend Development'
            text='UI creation using React.js and Tailwind CSS for responsive and accessible interfaces'
            />
            <KnowledgeCard 
            icon='mdi:database'
            title='Databases'
            text='Comfortable working with SQL and MongoDB, handling both relational and non-relational data'
            />
            <KnowledgeCard 
            icon='mdi:tools'
            title='Software Engineering'
            text='Knowledge of software architecture, clean code practices, and Agile methodologies using Scrum'
            />
            <KnowledgeCard 
            icon='mdi:github'
            title='CI/CD & GitHub Actions'
            text=' Automating builds and deployments using GitHub Actions and Vercel integrations'
            />
        </div>

    </div>
  )
}