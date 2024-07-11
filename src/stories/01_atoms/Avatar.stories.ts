import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '../../components/01_atoms/Avatar'

const meta = {
    title: 'atoms/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: 'text',
            description: '이미지의 src 속성 (경로)',
        },
        alt: {
            control: 'text',
            description: '이미지의 alt 속성 (대체 텍스트)',
        },
        size: {
            control: 'radio',
            description: '이미지를 감싸는 태그의 크기',
            options: ['small', 'medium', 'large'],
        },
    },
    args: {
        //onClick: fn()
    },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        src: 'https://velog.velcdn.com/images/completed1991/profile/715a3976-dad4-4600-bf72-75c1e48a91ec/image.jpg',
        alt: '대체 텍스트',
    },
}
