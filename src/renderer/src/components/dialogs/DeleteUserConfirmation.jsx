const handleClose = () => {}
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
import { useMutation } from '@tanstack/react-query'
import { deleteUser } from '../../util/apis/UserAPIs'
import { queryClient } from '../../util/apis/httpUrl'

export default function DeleteUserConfirmation() {
  const open = useSelector((state) => state.dialog.dialog)
  const userId = useSelector((state) => state.dialog.userId)
  const dispatch = useDispatch()
  const [isSuccess, setIsSuccess] = React.useState(false)

  const { mutate } = useMutation({
    mutationKey: ['users'],
    mutationFn: deleteUser,
    onSuccess: () => {
      setIsSuccess(true)
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })

  const handleClose = () => {
    setIsSuccess(false)
    dispatch(dialogActions.handleDeleteUser({ dialog: '', userId: null }))
  }

  return (
    <React.Fragment>
      <Dialog
        open={open === 'deleteUser'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'هل أنت متأكد من مسح هذا المستخم؟'}</DialogTitle>
        <DialogContent>
          {!isSuccess && (
            <DialogContentText id="alert-dialog-description">
              لا يمكن استرجاع البيانات بعد المسح
            </DialogContentText>
          )}
          {isSuccess && (
            <div className="text-mainBlue font-bold text-xl flex flex-col gap-2">
              <h1>!تم المسح بنجاح</h1>
              <button
                className="bg-mainBlue text-white font-bold w-24 px-4 py-2 rounded-full"
                onClick={handleClose}
              >
                حسناً
              </button>
            </div>
          )}
        </DialogContent>

        {!isSuccess && (
          <div className="flex gap-4 p-4">
            <button
              onClick={handleClose}
              className="bg-mainBlue text-white font-bold w-24 px-4 py-2 rounded-full"
            >
              إلغاء
            </button>
            <button
              onClick={() => {
                mutate(userId)
              }}
              className="bg-alert text-white font-bold w-24 px-4 py-2 rounded-full"
            >
              تأكيد
            </button>
          </div>
        )}
      </Dialog>
    </React.Fragment>
  )
}
