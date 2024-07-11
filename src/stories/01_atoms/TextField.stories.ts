import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import TextField from '../../components/01_atoms/TextField'

const meta = {
    title: 'atoms/TextField',
    component: TextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: 'text',
            description: '인풋의 id 속성',
        },
        type: {
            control: 'radio',
            options: ['text', 'number', 'password', 'search', 'tel', 'url', 'file'],
            description: '인풋의 type 속성',
        },
        value: {
            control: 'text',
            description: '인풋의 value 속성',
        },
        name: {
            control: 'text',
            description: '인풋의 name 속성',
        },
        className: {
            control: 'text',
            description: '인풋의 className 속성',
        },
        placeholder: {
            control: 'text',
            description: '인풋의 placeholder 속성',
        },
        disabled: {
            control: 'boolean',
            description: '인풋의 disabled 속성',
        },
        accept: {
            control: 'text',
            description: '인풋의 accept 속성',
        },
        onKeyUpEnter: {
            description: '인풋의 엔터 키 입력 시 동작하는 상위 컴포넌트의 함수',
        },
        onChangeInput: {
            description: '인풋의 키보드 입력 시 동작하는 상위 컴포넌트의 함수',
        },
        setState: {
            description: '상위 컴포넌트의 setState 함수',
        },
    },

    args: { onKeyUpEnter: fn(), onChangeInput: fn(), setState: fn() },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        id: 'id',
        type: 'text',
        value: '',
        name: '',
        className: '',
        placeholder: '입력하세요.',
        disabled: false,
        accept: '',
    },
}
