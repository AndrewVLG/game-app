import React from 'react'
import { AppTheme } from '../src/app/appTheme'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    (Story) => (
      <AppTheme>
        <Story />
      </AppTheme>
    ),
  ],
}

export default preview
