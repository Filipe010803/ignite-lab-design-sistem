import { Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from './heading'

export default {
    title: 'Components/heading',
    component: Heading,
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

} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const larg: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustonComponent: StoryObj = {
    args: {
        asChild: true,
        childrem: (
            <h1>Testando</h1>
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
