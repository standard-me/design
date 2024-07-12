import type { Meta, StoryObj } from '@storybook/react'
import CheckBox from '../../components/01_atoms/CheckBox'
import { AiFillCheckSquare, AiOutlineBorder } from 'react-icons/ai'
const meta = {
    title: 'atoms/CheckBox',
    component: CheckBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        checked: {
            control: 'boolean',
            description: '체크 여부',
        },
        size: {
            control: 'radio',
            description: '체크박스 크기',
            options: ['small', 'medium', 'large'],
        },
        color: {
            control: 'select',
            description: '체크박스 색상',
        },
        fillComponent: { control: 'radio', description: '체크 상태 아이콘 컴포넌트' },
        emptyComponent: { control: 'radio', description: '체크 해제 상태 아이콘 컴포넌트' },
    },
    args: {
        //onClick: fn()
    },
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        checked: false,
        size: 'small',
        color: 'basic',
        fillComponent: AiFillCheckSquare,
        emptyComponent: AiOutlineBorder,
    },
}
