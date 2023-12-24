import { memo, useMemo } from 'react'

import {
  Dialog,
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

export const HelpModal = memo(() => {
  const {
    current,
    modalContent: { title, message },
  } = useAppSelector(selectHelpModal)

  const dispatch = useAppDispatch()
  const handleClose = () => {
    dispatch(setCurrent(null))
  }

  const availableHelpModal = useMemo(
    () => getAvailableHelpModal(current),
    [current]
  )
  const handleChange = (_: any, checked: boolean) => {
    availableHelpModal.setValue(!checked)
  }
  const isAbalible = availableHelpModal.getValue()
  return (
    <Modal open={!!current && isAbalible} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        {Array.isArray(message) ? (
          message.map((el, index) => <Typography key={index}>{el}</Typography>)
        ) : (
          <Typography>{message}</Typography>
        )}
        <FormControlLabel
          label="Больше не показывать"
          control={<Checkbox onChange={handleChange} />}
        />
        <Button fullWidth={false} onClick={handleClose}>
          Ok
        </Button>
      </DialogContent>
    </Modal>
  )
})
