import { memo, useMemo } from 'react'

import {
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Theme,
  Typography,
} from '@mui/material'

import { selectHelpModal } from '../../app/redux/helpModalSlice/selectors'
import { useAppDispatch, useAppSelector } from '../../app/redux/store'
import { setCurrent } from '../../app/redux/helpModalSlice/helpModalSlice'
import { Button, Modal, Checkbox } from '../../UI'
import { getAvailableHelpModal } from '../../common/utils/helpModal.utils'

import { rules } from './helpModal.const'

const checkboxStyle = (theme: Theme) => ({ color: theme.palette.common.white })

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
  const handleClose = () => {
    dispatch(setCurrent(null))
  }

  const availableHelpModal = useMemo(
    () => getAvailableHelpModal(current),
    [current]
  )
  const handleChange = (_: any, checked: boolean) => {
    availableHelpModal.setState(!checked)
  }
  const rule = useMemo(() => get(current), [current])
  const isOpen = availableHelpModal.getState()

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
