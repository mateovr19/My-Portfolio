import React from 'react'
import Title from '../../../atoms/Title/index'
import Text from '../../../atoms/Text/index'
import PortfolioCard from '../../../molecules/PortfolioCard/index'

export default function PortfolioInfo () {
  return (
    <div className='w-full items-center'>
        <div className='mx-auto items-center w-1/2 mb-14'>
            <Title title='My Portfolio' size='text-3xl' classes='text-secondary font-bold mb-6'/>
            <Text classes='text-gray-500 text-center text-justify'>The following cards represent the projects
            I have worked on and various developments in both frontend and backend.</Text>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-2 lg:mx-5 gap-5'>
            <PortfolioCard
            icon='ix:project-scenarios'
            title='APi Rest - Parking'
            text='REST API that includes a CRUD system for managing a parking lot,
            handling motorcycles and cars with a set capacity limit and internal validations.'
            url='https://github.com/matheovr/Express-parqueadero'
            />
            <PortfolioCard
            icon='material-symbols:web'
            title='Web - Computer Parts'
            text='Visual application that provides information about the components of a CPU tower.'
            url='https://github.com/matheovr/Web'
            />
            <PortfolioCard
            icon='streamline:web-solid'
            title='Events app in Medellin'
            text='Event management app for Medellín, featuring user and admin authentication.
            Admins can create events, and users can browse and join them.'
            url='https://github.com/mateovr19/Vive-Medellin?tab=readme-ov-file'
            />
        </div>
    </div>
    
  )
}