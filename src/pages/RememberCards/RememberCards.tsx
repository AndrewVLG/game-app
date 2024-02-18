import { memo, useCallback, useEffect, useMemo, useRef } from 'react'

import { Box } from '@mui/material'

import { useAppDispatch, useAppSelector } from '../../app/redux/store'
import { asyncHash, setCount } from '../../app/redux/cardsSlice'
import { getArray } from '../../common/utils/getArray'
import { rememberCardsPageStyle } from '../../components/RememberCards/rememberCardsPage.style'
import { Counter, OnChangeProps } from '../../UI/molecules/Counter/Counter'
import { Cards } from '../../components/RememberCards/Cards'
import { Wrapper } from '../../components/RememberCards'
import { Button } from '../../UI'
import { setCurrent } from '../../app/redux/helpModalSlice/helpModalSlice'
import { getCards, getShuffledCards } from '../../app/redux/cardsSlice/actions'
import { selectDeckId } from '../../app/redux/cardsSlice/selectors'
import { getAvailableHelpModal } from '../../common/utils/helpModal.utils'

import { startButtonText } from './rememberCardsPage.const'
import {
  bottomContainerStyle,
  buttonStyle,
  topContainerStyle,
} from './rememberCards.style'

const counterValues = getArray(8, null).map((_, i) => i + 1)

export const RememberCards = memo(() => {
  const deckId = useAppSelector(selectDeckId)
  const deckIdRef = useRef<string | null>(null)
  const dispatch = useAppDispatch()
  const availableHelpModal = useMemo(
    () => getAvailableHelpModal(RememberCards.displayName as string),
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
      dispatch(getCards(deckIdRef.current))
    } else {
      dispatch(getShuffledCards())
    }
    setTimeout(() => dispatch(asyncHash()), 4000)
  }, [])

  const handleRuleButton = useCallback(() => {
    availableHelpModal.setValue(RememberCards.displayName)
    dispatch(setCurrent(null))
    setTimeout(
      () => dispatch(setCurrent(RememberCards.displayName as string)),
      100
    )
  }, [])

  useEffect(() => {
    deckIdRef.current = localStorage.getItem('deck')
  }, [deckId])

  useEffect(() => {
    dispatch(setCurrent(RememberCards.displayName as string))
    availableHelpModal.setDefault(true)
  }, [])
  return (
    <Box sx={rememberCardsPageStyle}>
      <Cards />
      <Wrapper>
        <Box sx={topContainerStyle}>
          <Counter
            name="counter"
            values={counterValues}
            onChange={handleClickCounter}
            color="red"
            defaultValue={5}
          />
        </Box>
        <Box sx={bottomContainerStyle}>
          <Button
            style={buttonStyle}
            dataTestId="start-button"
            onClick={handleClickStart}
          >
            {startButtonText}
          </Button>
          <Button style={buttonStyle} variant="text" onClick={handleRuleButton}>
            Правила
          </Button>
        </Box>
      </Wrapper>
    </Box>
  )
})

RememberCards.displayName = 'RememberCards'
