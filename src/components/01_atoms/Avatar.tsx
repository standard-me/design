// import React from 'react'
type SizeType = 'small' | 'medium' | 'large'
export interface IAvatarProps {
    src: string
    alt: string
    size?: SizeType
}
const Avatar = ({ src, alt, size = 'medium' }: IAvatarProps) => {
    const imageSize = {
        small: 'w-[50px] h-[50px]',
        medium: 'w-[80px] h-[80px]',
        large: 'w-[110px] h-[110px]',
    }
    return (
        <div className={`${imageSize[size]} rounded-full overflow-hidden`}>
            <img className="object-cover w-full h-full" src={src} alt={alt} />
        </div>
    )
}

export default Avatar
