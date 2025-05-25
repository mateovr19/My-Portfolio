import React from 'react'
import NextImage from 'next/image'

type ImageProps = {
  src?: string
  alt?: string
  classes?: string
}

export default function Image (props: ImageProps) {
  return (
    <NextImage
      src={props.src || ''}
      alt={props.alt || ''}
      width={300}
      height={300}
      className={`${props.classes || ''}`}
    />
  )
}
