import React from 'react'

type ButtonProps = {
    text: string;
    size?: string;
    classes?: string;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button 
        className={`px-4 py-2 bg-tertiary text-sm font-semibold text-white rounded-md ${props.classes} ${props.size} `}
        onClick={props.onClick}
    >
        {props.text}
    </button>
  )
}