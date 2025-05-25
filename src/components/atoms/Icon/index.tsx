import React from 'react'
import { Icon as IconifyIcon } from '@iconify/react';

type IconProps = {
    icon: string
    classes?: string
}

export default function Icon (props: IconProps) {
  return (
    <IconifyIcon icon={props.icon} className={props.classes || ''} />
  )
}

