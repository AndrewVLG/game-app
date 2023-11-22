import { Meta, StoryObj } from '@storybook/react'

import { getArray } from '../../../utils/getArray'

import { Counter } from './Counter'

const values = getArray(9, 1, (_, i) => i + 1)

const meta: Meta<typeof Counter> = {
  title: 'Counter',
  component: Counter,
  args: {
    name: 'Counter',
    values,
  },
}

export default meta

type Story = StoryObj<typeof Counter>

export const Primary: Story = {
  args: {},
}
