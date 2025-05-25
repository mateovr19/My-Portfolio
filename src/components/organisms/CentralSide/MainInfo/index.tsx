'use client';
import React from 'react'
import Button from "../../../atoms/Button/index";
import PopUp from "../../../molecules/PopUp/index"
import Image from '../../../atoms/Image/index';
import { useState } from "react";

const contactMeOnClick = () => {
  window.open('mailto:mateo19v@gmail.com', '_blank')
}

export default function MainInfo() {
  const [open, setOpen] = useState(false);
  const closePopUp = () => setOpen(false);

  return (
    <main className='mx-2 flex flex-col items-center justify-center bg-white shadow-md lg:flex-row lg:mx-5 p-5 lg:p-0 lg:mt-0'>
      <section className='p-8'>
        <h1 className="text-4xl font-bold text-secondary">I&apos;m Mateo Velásquez Rodríguez</h1>
        <h1 className="text-4xl font-bold text-secondary">
          <span className="text-tertiary">Software </span>
          Developer
        </h1>
        <h2 className='text-gray-400 mt-6 text-justify'> 
          Engineering student, focused on the technological field. I am an innovative person capable
          of generating strategies and solutions that enable growth and modernization across
          different platforms. I am characterized by being a disciplined young individual in both my
          studies and responsibilities, adapting easily
        </h2>
        <Button
          text="HIRE ME ➜"
          size="w-36 h-12"
          classes="hover:bg-violet-400 hover:duration-500 cursor-pointer mt-8 mb-2 text-lg"
          onClick={() => {
            setOpen(true);
          }}
        />
        <PopUp open={open} closePopUp={closePopUp} text='I enjoy fullstack development and have 
        extensive experience working in teams. You’ll find in me a great teammate—empathetic and
        collaborative. Additionally, I am a dedicated and responsible person, eager to demonstrate
        my abilities.'>
          <div className="flex justify-center py-4">
            <Button
              text="CONTACT ME ➜"
              size="w-36"
              classes="hover:bg-violet-400 hover:duration-500 cursor-pointer mt-10 text-lg shadow-md shadow-white/100" 
              onClick={contactMeOnClick}
            />
          </div>
        </PopUp>
      </section>
      <section className="hidden lg:flex flex-col justify-end h-full">
        <Image
        src='/MainInfo.png'
        alt='Mateo Velasquez Rodriguez'
        classes="block mx-auto"
        />
      </section>
    </main>
  );
}