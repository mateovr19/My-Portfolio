import React from 'react'
import Popup from 'reactjs-popup'

type PopUpProps = {
    closePopUp: () => void
    open: boolean
    text: string
    children: React.ReactNode
}

export default function PopUp (props: PopUpProps) {
  return (
    <Popup open={props.open} closeOnDocumentClick onClose={props.closePopUp}>
        <div className="w-fit mx-2 rounded-lg bg-tertiary px-8 lg:max-w-3xl">
                <div className='flex w-full justify-end'>
                    <a className="cursor-pointer close text-white text-3xl py-2 " onClick={props.closePopUp}>
                        &times;
                    </a>
                </div>
                <p className="text-justify text-base text-white">
                    {props.text}
                </p>
                {props.children}
            </div>
    </Popup>
  )
}