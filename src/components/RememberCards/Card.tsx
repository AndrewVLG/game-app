import { FC, memo } from 'react'

import { styled } from '@mui/material'

const Img = styled('img')({
  width: '12rem',
  cursor: 'pointer',
  margin: '3px',
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.6)',
  transition: 'transform 0.1s, box-shadow 0.1s',
  borderRadius: '1rem',
})

interface Props {
  image: string
  name: string
  onClick?: (value?: string) => void
  active?: boolean
  left: string
  code: string
}
export const Card: FC<Props> = memo(
  ({ image, onClick, name, active, left, code }) => {
    const handleClick = () => {
      onClick && onClick(image)
    }
    const style = active
      ? {
          transform: 'translate(0, 100%)',
          left,
          position: 'relative',
          boxShadow: '4px 4px 8px 9px rgba(34, 60, 80, 0.2)',
        }
      : {}
    return (
      <Img
        data-code={code}
        data-testid="card"
        sx={style}
        src={image}
        alt={name}
        onClick={handleClick}
      />
    )
  }
)
