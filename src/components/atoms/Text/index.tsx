import React from 'react'

type TextProps = {
    classes?: string
    children: React.ReactNode
}

export default function Text (props: TextProps) {
    const classNames = `${props.classes || ''}`
    return (
        <p className={classNames}>
            {props.children}
        </p>
    )
}