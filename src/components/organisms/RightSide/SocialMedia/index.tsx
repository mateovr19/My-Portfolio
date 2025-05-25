import React from 'react'
import SocialMediaIcon from '../../../molecules/SocialMediaIcon/index'

export default function SocialMedia () {
  return (
    <div className='flex flex-row lg:flex-col gap-4'>
        <SocialMediaIcon
        icon='hugeicons:linkedin-02'
        iconClasses='text-white'
        link='https://www.linkedin.com/in/mateo-vel%C3%A1squez-rodr%C3%ADguez-aaa0b0246/'
        />
        <SocialMediaIcon
        icon='bytesize:github'
        iconClasses='text-white'
        link='https://github.com/mateovr19'
        />
    </div>
  )
}