import React from 'react'

type ImageProps = {
  src?: string
  alt?: string
  classes?: string
}

export default function Image (props: ImageProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={`${props.classes || ''}`}
    />
  )
}
