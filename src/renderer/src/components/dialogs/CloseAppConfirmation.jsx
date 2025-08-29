import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useLogout } from '../../hooks/UseLogout'

export default function CloseAppConfirmation() {
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()
  const { logout } = useLogout()

  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
  }

  return (
    <React.Fragment>
      <Dialog
        open={open === 'exit'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-end font-bold text-mainText">
          {'إغلاق البرنامج'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            هل أنت متأكد من إغلاق البرنامج؟
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>إلغاء</Button>
          <Button
            onClick={() => {
              logout()
              window.close()
            }}
            autoFocus
          >
            تأكيد
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
