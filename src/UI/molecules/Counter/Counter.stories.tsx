import { Meta, StoryObj } from '@storybook/react'

import { getArray } from '../../../common/utils/getArray'

import { Counter } from './Counter'

const values = getArray(9, null).map((_, i) => i + 1)

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
