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
import { selectCardsOnCanvas } from '../../app/redux/cardsSlice/selectors'
import { setCurrent, setModalContent } from '../../app/redux/helpModalSlice/helpModalSlice'
import { getAvailableHelpModal } from '../../common/utils/helpModal.utils'

import { startButtonText } from './rememberCardsPage.const'
import { rules } from './rememberCards.const'

const counterValues = getArray(8, null).map((_, i) => i + 1)

const availableHelpModal = getAvailableHelpModal()

export const RememberCards = () => {
  const deckIdRef = useRef<string | null>(null)
  const dispatch = useAppDispatch()
  const cards = useAppSelector(selectCardsOnCanvas)

  const handleClickCounter = useCallback(
    ({ name, value }: OnChangeProps<number>) => {
      dispatch(setCount(value))
    },
    [dispatch]
  )

  const handleClickStart = useCallback(() => {
    if (deckIdRef.current) {
      dispatch(fetchDrawCards({ deck_id: deckIdRef.current }))
      setTimeout(() => dispatch(asyncHash()), 4000)
      return
    }
    dispatch(fetchShuffleCards())
    setTimeout(() => dispatch(asyncHash()), 4000)
  }, [])

  useEffect(() => {
    deckIdRef.current = localStorage.getItem('deck')
    dispatch(setModalContent({title: 'Запомни карты', message: rules}))
    dispatch(setCurrent(RememberCards.name))
    availableHelpModal.setDefault(RememberCards.name, true)
  }, [])
  return (
    <div style={rememberCardsPageStyle}>
      <Cards cards={cards} />
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
