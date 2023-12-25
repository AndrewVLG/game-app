import { memo, useRef } from 'react'

import {
  selectCardsOnCanvas,
  selectPick,
} from '../../app/redux/cardsSlice/selectors'
import { Card as C } from '../../common/dto/cards.dto'
import { useAppSelector } from '../../app/redux/store'

import { Card } from './Card'
import { cardsBlockStyle } from './rememberCardsPage.style'
import { useCardMove } from './useCardMove'

export const Cards = memo(() => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pos = useCardMove(wrapperRef)
  const cards = useAppSelector(selectCardsOnCanvas)
  const pick = useAppSelector(selectPick)

  const items = cards.map((card) => {
    const name = getCardName(card)
    const image = card.image ? card.image : ''
    const isActive = card.code === pick
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
