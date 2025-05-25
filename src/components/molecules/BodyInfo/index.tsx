import React from 'react';

interface IndexProps {
    title: string,
    info: string,
}

export default function Section ({ title, info }: IndexProps) {
  return (
        <div className='flex flex-col items-start justify-center text-black bg-primary shadow-md  w-full h-full p-6'>
            <h1 className='text-2xl font-inter font-bold lg:text-2xl mb-4'>{title}</h1>
            <h3 className='text-lg font-inter text-black lg:text-lg leading-relaxed text-justify'>{info}</h3>
        </div>
  );
};