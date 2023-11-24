import { PropsWithChildren, FC } from 'react'

import { Box, Stack, SxProps } from '@mui/material'

const style: SxProps = {
  height: '40vh',
  width: '50vw',
  border: '2px solid red',
  borderRadius: '6px',
  position: 'absolute',
  bottom: '5px',
  right: '5px',
  padding: '10px',
}
const stackStyle: SxProps = {
  width: 'fit-content',
}

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={style}>
      <Stack sx={stackStyle} spacing={1}>
        {children}
      </Stack>
    </Box>
  )
}
