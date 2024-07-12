import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
type SizeType = 'small' | 'medium' | 'large'
type ColorType = 'basic' | 'soda' | 'banila' | 'hot-pink' | 'pink'

export interface ICheckBoxProps {
    checked: boolean
    size: SizeType
    color: ColorType
    fillComponent: IconType
    emptyComponent: IconType
}

const CheckBox = (props: ICheckBoxProps) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(props.checked)
    }, [props])
    const checkBoxSize = {
        small: '',
        medium: 'w-6 h-6',
        large: 'w-12 h-12',
    }
    const colorType = {
        basic: 'text-dark-gray',
        soda: 'text-soda',
        banila: 'text-banila',
        'hot-pink': 'text-hot-pink',
        pink: 'text-pink',
    }
    return (
        <>
            {checked ? (
                <props.fillComponent className={`${checkBoxSize[props.size]} ${colorType[props.color]}`} />
            ) : (
                <props.emptyComponent className={`${checkBoxSize[props.size]} ${colorType[props.color]}`} />
            )}
        </>
    )
}

export default CheckBox
