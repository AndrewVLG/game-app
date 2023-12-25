import { useCallback, useEffect, useMemo, useRef } from 'react'

import { useAppDispatch } from '../../app/redux/store'
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
import { setCurrent } from '../../app/redux/helpModalSlice/helpModalSlice'
import { getAvailableHelpModal } from '../../common/utils/helpModal.utils'

import { startButtonText } from './rememberCardsPage.const'

const counterValues = getArray(8, null).map((_, i) => i + 1)

export const RememberCards = () => {
  const deckIdRef = useRef<string | null>(null)
  const dispatch = useAppDispatch()
  const availableHelpModal = useMemo(
    () => getAvailableHelpModal(RememberCards.name),
    []
  )
  const handleClickCounter = useCallback(
    ({ name, value }: OnChangeProps<number>) => {
      dispatch(setCount(value))
    },
    [dispatch]
  )
  const handleClickStart = useCallback(() => {
    if (deckIdRef.current) {
      dispatch(fetchDrawCards({ deck_id: deckIdRef.current }))
    } else {
      dispatch(fetchShuffleCards())
    }
    setTimeout(() => dispatch(asyncHash()), 4000)
  }, [])
  const handleRuleButton = useCallback(() => {
    availableHelpModal.setValue(RememberCards.name)
    dispatch(setCurrent(null))
    setTimeout(() => dispatch(setCurrent(RememberCards.name)), 100)
  }, [])

  useEffect(() => {
    deckIdRef.current = localStorage.getItem('deck')
    dispatch(setCurrent(RememberCards.name))
    availableHelpModal.setDefault(true)
  }, [])
  return (
    <div style={rememberCardsPageStyle}>
      <Cards />
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
        <Button variant="text" onClick={handleRuleButton}>
          Правила
        </Button>
      </Wrapper>
    </div>
  )
}
