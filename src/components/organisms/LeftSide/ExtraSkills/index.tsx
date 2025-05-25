import React from 'react'
import Title from '../../../atoms/Title/index'
import HorizontalLine from '../../../atoms/HorizontalLine/index'
import IconText from '../../../molecules/IconText/index'

export default function ExtraSkills () {
  return (
    <>
        <div className='flex flex-col mb-6 mt-6'>
            <div className='flex flex-col gap-6'>
                <Title title='Extra Skills'></Title>
                <IconText
                icon='ri:team-fill'
                iconClasses='text-tertiary text-3xl'
                text='Excellent teamwork'
                />
                <IconText
                icon='mdi:run-fast'
                iconClasses='text-tertiary text-3xl'
                text='Agile methodologies'
                />
                <IconText
                icon='heroicons-solid:light-bulb'
                iconClasses='text-tertiary text-3xl'
                text='Easy adaption'
                />
            </div>
        </div>
        <HorizontalLine />
    </>
  )
}