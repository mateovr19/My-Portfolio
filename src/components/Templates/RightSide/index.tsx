import React from 'react'
import SocialMedia from '../../organisms/RightSide/SocialMedia/index'
import Title from '../../atoms/Title/index'

export default function Home() {
  return (
    <section className='flex flex-row lg:flex-col items-center justify-center gap-6 lg:mt-8 bg-white p-2 lg:justify-start'>
      <Title title='Links' classes='hidden lg:block font-bold'></Title>
      <SocialMedia />
    </section>
  )
}