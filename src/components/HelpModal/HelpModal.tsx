import { memo, useCallback, useMemo } from 'react'

import {
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Typography,
} from '@mui/material'

import { selectHelpModal } from '../../app/redux/helpModalSlice/selectors'
import { useAppDispatch, useAppSelector } from '../../app/redux/store'
import { setCurrent } from '../../app/redux/helpModalSlice/helpModalSlice'
import { Button, Modal, Checkbox } from '../../UI'
import { getAvailableHelpModal } from '../../common/utils/helpModal.utils'

import { rules } from './helpModal.const'
import { checkboxStyle } from './helpModal.style'

const getRule = () => {
  let current: string | null = null
  return (value: string | null) => {
    if (value) {
      current = value
    }
    return rules.find((el) => el.name === current)
  }
}
const get = getRule()

export const HelpModal = memo(() => {
  const { current } = useAppSelector(selectHelpModal)
  const dispatch = useAppDispatch()
  
  const handleClose = useCallback(() => {
    dispatch(setCurrent(null))
  }, [])

  const availableHelpModal = useMemo(
    () => getAvailableHelpModal(current),
    [current]
  )

  const handleChange = useCallback((_: any, checked: boolean) => {
    availableHelpModal.setValue(!checked)
  }, [availableHelpModal])

  const rule = useMemo(() => get(current), [current])
  const isOpen = availableHelpModal.getValue()

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <DialogTitle>{rule?.title}</DialogTitle>
      <DialogContent dividers>
        {rule && Array.isArray(rule.message) ? (
          rule.message.map((el, index) => (
            <Typography key={index}>{el}</Typography>
          ))
        ) : (
          <Typography>{rule?.message}</Typography>
        )}
        <FormControlLabel
          label="Больше не показывать"
          control={<Checkbox sx={checkboxStyle} onChange={handleChange} />}
        />
        <Button fullWidth={false} onClick={handleClose}>
          Ok
        </Button>
      </DialogContent>
    </Modal>
  )
})
