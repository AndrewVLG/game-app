import { FC, memo, useRef } from 'react'
import { useSelector } from 'react-redux'

import { selectPick } from '../../app/redux/cardsSlice/selectors'
import { Card as C } from '../../common/dto/cards.dto'

import { Card } from './Card'
import { cardsBlockStyle } from './rememberCardsPage.style'
import { useCardMove } from './useCardMove'

interface Props {
  cards: Array<C>
}

export const Cards: FC<Props> = memo(({ cards }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pos = useCardMove(wrapperRef)
  const pick = useSelector(selectPick)

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
