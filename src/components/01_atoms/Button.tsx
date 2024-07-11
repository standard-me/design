import React from 'react'
type buttonType = 'basic' | 'text' | 'link'
type colorType = 'basic' | 'soda' | 'banila' | 'hot-pink' | 'pink'

export interface IButtonProps {
    text: string
    type?: buttonType
    onClick: React.MouseEventHandler<HTMLButtonElement>
    color: colorType
    reverse?: boolean
}

const Button = ({ text, type = 'basic', color, reverse = false, onClick }: IButtonProps) => {
    const buttonType = {
        basic: '',
        text: 'border-transparent bg-transparent',
        link: 'border-transparent bg-transparent underline',
    }
    const colorType = {
        basic: reverse ? 'border-dark-gray bg-dark-gray text-white' : 'border-dark-gray text-dark-gray',
        soda: reverse ? 'border-soda bg-soda text-white' : 'border-soda text-soda',
        banila: reverse ? 'border-banila bg-banila text-white' : 'border-banila text-banila',
        'hot-pink': reverse ? 'border-hot-pink bg-hot-pink text-white' : 'border-hot-pink text-hot-pink',
        pink: reverse ? 'border-pink bg-pink text-white' : 'border-pink text-pink',
    }
    return (
        <button
            className={`
                        px-4 py-2 
                        w-full
                        rounded-[5px] box-border border-2 
                        ${buttonType[type]} 
                        ${colorType[color]}
                      `}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
