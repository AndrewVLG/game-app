import { FC } from 'react'

import { Box } from '@mui/material'

import { UIColor } from '../../../app/appTheme'

import { getNumbersInsideCounterStyle } from './counter.style'

interface Props {
  offset: number
  values: Array<number | string>
  color: UIColor
}

export const NumbersInsideCounter: FC<Props> = ({ offset, values, color }) => {
  const style = getNumbersInsideCounterStyle(offset, color)
  return (
    <Box sx={style}>
      {values.map((value, index) => (
        <Box
          sx={{
            height: '70px',
            width: '70px',
          }}
          key={index}
        >
          {value}
        </Box>
      ))}
    </Box>
  )
}
