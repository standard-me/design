import type { Meta, StoryObj } from '@storybook/react'
import Label from '../components/01_atoms/Label'

const meta = {
    title: 'atoms/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: '라벨의 이름',
            defaultValue: 'LABEL',
        },
        htmlFor: {
            control: 'text',
            description: '라벨의 for 속성',
            defaultValue: '',
        },
        className: {
            control: 'text',
            description: '라벨의 className 속성',
            defaultValue: '',
        },
    },
    args: {
        //onClick: fn()
    },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'TEXT',
        htmlFor: '',
        className: '',
    },
}
