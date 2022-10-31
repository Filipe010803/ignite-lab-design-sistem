import { Meta, StoryObj} from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './textinput'

export default {
    title: 'Components/textinput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder = "Type your e-maill address" />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
            
        }
    }
        
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your e-mail adderess' />
    }
}