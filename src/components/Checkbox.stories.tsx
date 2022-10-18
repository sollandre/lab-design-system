import { Checkbox, CheckboxProps } from './Checkbox'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex gap-3 items-center'>
          {Story()}
          <Text size='sm' >Lembrar de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {}