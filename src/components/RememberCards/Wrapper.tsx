import { PropsWithChildren, FC } from 'react'

import { Box, Stack, SxProps } from '@mui/material'

const style: SxProps = {
  display: 'grid',
  gridTemplateColumns: '0.7fr 1.3fr',
  gridTemplateRows: '1.1fr 0.9fr',
  height: '280px',
  width: '250px',
  borderRadius: '6px',
  position: 'absolute',
  bottom: '50px',
  right: '50px',
  padding: '10px',
}
const stackStyle: SxProps = {
  width: 'fit-content',
}

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={style}>
        {children}
    </Box>
  )
}
