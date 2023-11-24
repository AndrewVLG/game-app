import { FC, memo, useRef } from 'react'

import { Card as C } from '../../common/dto/cards.dto'

import { Card } from './Card'
import { cardsBlockStyle } from './rememberCardsPage.style'
import { useCardMove } from './useCardMove'

interface Props {
  cards: Array<C>
  active: string | null
}

export const Cards: FC<Props> = memo(({ cards, active }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pos = useCardMove(wrapperRef)

  const items = cards.map((card) => {
    const name = getCardName(card)
    const image = card.image ? card.image : ''
    const isActive = card.code === active
    return (
      <Card
        code={card.code}
        left={`${pos}px`}
        active={isActive}
        name={name}
        image={image}
        key={card.code}
      />
    )
  })

  return (
    <div ref={wrapperRef} style={cardsBlockStyle}>
      {items}
    </div>
  )
})

function getCardName({ code, value, suit }: C) {
  return Number.isNaN(+code) ? `${value} ${suit}` : ''
}
