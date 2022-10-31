import { Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './text'

export default {
    title: 'Components/text',
    component: Text,
    args: {
        children: 'Hello Word',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const larg: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustonComponent: StoryObj = {
    args: {
        asChild: true,
        childrem: (
            <p>Testando</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true,
            }
            
        }
    }
}
