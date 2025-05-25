import React from 'react'
import { CentralSide, LeftSide, RightSide } from '../components/Templates/index'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col lg:flex-row'>
      <LeftSide />
      <CentralSide />
      <RightSide />
    </main>
  )
}