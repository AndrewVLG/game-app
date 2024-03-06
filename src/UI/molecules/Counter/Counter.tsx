import { FC, useState, useEffect, useRef, memo, useMemo, useCallback } from 'react'

import { Box } from '@mui/material'

import { UIColor } from '../../../app/appTheme'

import { Button } from '../../'

import { NumbersInsideCounter } from './NumberInsideCounter'
import { counterWindowStyle, counterWrapperStyle } from './counter.style'
import { _errorText, downText, upText } from './counter.const'

export type OnChangeProps<T> = { name: string | number; value: T }

interface Props {
  onChange?: (props: OnChangeProps<any>) => void
  values: Array<string | number>
  name: string | number
  defaultValue?: string | number
  color?: UIColor
}

const _blockHeight: number = 70
export const Counter: FC<Props> = memo(
  ({ onChange, values, name, defaultValue, color = 'red' }) => {
    const defaultValueIndex = useMemo(
      () => (defaultValue ? values.findIndex((el) => el === defaultValue) : 0),
      [defaultValue, values]
    )

    if (defaultValueIndex < 0) {
      throw new Error(_errorText)
    }
    const [index, setIndex] = useState<number>(-defaultValueIndex)
    const update = useRef<boolean>(false)

    const handlerUpClick = useCallback(() => {
      setIndex((prev) => prev - 1)
    }, [])

    const handlerDownClick = useCallback(() => {
      setIndex((prev) => prev + 1)
    }, [])

    useEffect(() => {
      if (!update.current) {
        update.current = true
        return
      }
      onChange && onChange({ name, value: values[Math.abs(index)] })
    }, [index, onChange, values, name])

    const upButtonIsDisabled = index === -(values.length - 1)
    const downButtonDisabled = !index
    const offset = index * _blockHeight
    return (
      <Box sx={counterWrapperStyle}>
        <Button
          color={color}
          disabled={upButtonIsDisabled}
          onClick={handlerUpClick}
        >
          {upText}
        </Button>
        <Box sx={counterWindowStyle}>
          <NumbersInsideCounter color={color} values={values} offset={offset} />
        </Box>
        <Button
          color={color}
          disabled={downButtonDisabled}
          onClick={handlerDownClick}
        >
          {downText}
        </Button>
      </Box>
    )
  }
)
