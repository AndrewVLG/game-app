import { useCallback, useEffect, useRef } from 'react'

import { useAppDispatch, useAppSelector } from '../../app/redux/store'
import {
  asyncHash,
  fetchDrawCards,
  fetchShuffleCards,
  setCount,
} from '../../app/redux/cardsSlice'
import { getArray } from '../../common/utils/getArray'
import { rememberCardsPageStyle } from '../../components/RememberCards/rememberCardsPage.style'
import { Counter, OnChangeProps } from '../../UI/molecules/Counter/Counter'
import { Cards } from '../../components/RememberCards/Cards'
import { Wrapper } from '../../components/RememberCards'
import { Button } from '../../UI'

import { emptyCard, startButtonText } from './rememberCardsPage.const'

const counterValues = getArray(8, null).map((_, i) => i + 1)

export const RememberCards = () => {
  const deckIdRef = useRef<string | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const { cardsOnCanvas, isLoading, count, pick } = useAppSelector(
    (store) => store.cards
  )

  const handleClickCounter = useCallback(
    ({ name, value }: OnChangeProps<number>) => {
      dispatch(setCount(value))
    },
    [dispatch]
  )

  const handleClickStart = () => {
    if (deckIdRef.current) {
      dispatch(fetchDrawCards({ deck_id: deckIdRef.current }))
      setTimeout(() => dispatch(asyncHash(count)), 4000)
      return
    }
    dispatch(fetchShuffleCards({ count }))
    setTimeout(() => dispatch(asyncHash(count)), 4000)
  }

  useEffect(() => {
    deckIdRef.current = localStorage.getItem('deck')
  }, [dispatch])

  const cards = isLoading
    ? getArray(count, emptyCard).map((card) => ({
        ...card,
        code: String(Math.random() * Math.random()),
      }))
    : cardsOnCanvas
  return (
    <div ref={pageRef} style={rememberCardsPageStyle}>
      <Cards active={pick} cards={cards} />
      <Wrapper>
        <Counter
          name="counter"
          values={counterValues}
          onChange={handleClickCounter}
          color="red"
          defaultValue={5}
        />
        <Button dataTestId="start-button" onClick={handleClickStart}>
          {startButtonText}
        </Button>
      </Wrapper>
    </div>
  )
}
