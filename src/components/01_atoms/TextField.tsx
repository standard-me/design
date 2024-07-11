import React, { useEffect, useState } from 'react'

type TextFieldType = 'text' | 'number' | 'password' | 'search' | 'tel' | 'url' | 'file'
export interface ITextFieldProps {
    id: string
    type: TextFieldType
    value?: string | number
    name: string
    className?: string
    placeholder?: string
    disabled?: boolean
    accept?: string
    onKeyUpEnter?: () => void
    onChangeInput: (
        event: React.KeyboardEvent | React.ChangeEvent,
        setState: React.Dispatch<React.SetStateAction<string>>
    ) => void
    setState: () => void // React.Dispatch<React.SetStateAction<string>>
}

const Input = ({
    id,
    type = 'text',
    value,
    name,
    className,
    placeholder,
    disabled = false,
    accept = '',
    onKeyUpEnter,
    onChangeInput,
    setState,
}: ITextFieldProps) => {
    const [text, setText] = useState('')
    // story book only
    useEffect(() => {
        setText('')
    }, [type])
    return (
        <input
            id={id}
            type={type}
            value={text ? text : value}
            name={name}
            className={`
                rounded-[5px]
                py-3 px-4 text-xl
                border-2 border-dark-gray 
                ${className}
                `}
            placeholder={placeholder}
            disabled={disabled}
            accept={accept}
            onKeyUp={(e) => {
                onChangeInput(e, setState)
                if (onKeyUpEnter && e.key === 'Enter') {
                    onKeyUpEnter()
                }
            }}
            onChange={(e) => {
                const { value } = e.target
                setText(value)
                if (type === 'file') {
                    onChangeInput(e, setState)
                    // console.log(e.target.files)
                }
            }}
            aria-label={`${type} 입력란`}
        />
    )
}

export default Input
