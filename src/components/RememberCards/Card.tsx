import { FC, memo, useEffect, useRef } from 'react'

import { styled } from '@mui/material'
import gsap from 'gsap'

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
    const ref = useRef<HTMLImageElement | null>(null)
    const handleClick = () => {
      onClick && onClick(image)
    }
    const style = {
          position: 'relative',
          boxShadow: '4px 4px 8px 9px rgba(34, 60, 80, 0.2)',
        }
  useEffect(() => {
    const ctx = gsap.context(() => {
      if(active) {
        gsap.to(ref.current, { y: '100%', duration: 0.5 })
      } else {
        gsap.to(ref.current, { y: 0, duration: 0.5 })
      }
    })
    return () => ctx.kill()
  }, [active])
    return (
      <Img
      ref={ref}
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
