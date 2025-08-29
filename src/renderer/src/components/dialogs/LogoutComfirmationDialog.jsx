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

export default function LogoutComfirmationDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()
  const { logout } = useLogout()

  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
  }

  return (
    <React.Fragment>
      <Dialog
        open={open === 'logout'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-end font-bold text-mainText">
          {'تسجيل خروج'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            هل أنت متأكد من تسجيل الخروج؟
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="text-end font-bold text-mainText">
            إلغاء
          </Button>
          <Button
            onClick={() => {
              dispatch(dialogActions.hadleOpenDialog(''))
              logout()
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
