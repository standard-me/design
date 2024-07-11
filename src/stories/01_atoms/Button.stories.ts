import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '../../components/01_atoms/Button'

const meta = {
    title: 'atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: 'text',
            description: '버튼의 표기 이름',
        },
        type: {
            control: 'select',
            description: '버튼 유형 타입',
        },
        color: {
            control: 'select',
            description: '버튼 색상',
        },
        reverse: {
            control: 'boolean',
            description: '버튼 반전',
        },
    },

    args: { onClickButton: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        text: 'Button',
        type: 'basic',
        color: 'basic',
        reverse: false,
    },
}
