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
import { addNewDepartment } from '../../util/apis/departmentsAPIs'
import { queryClient } from '../../util/apis/httpUrl'

export default function NewDepartmentDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()
  const { logout } = useLogout()
  const [inputValue, setInputValue] = React.useState('')

  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
  }

  const { mutate } = useMutation({
    mutationKey: ['newDepartment'],
    mutationFn: addNewDepartment,
    onSuccess: () => {
      dispatch(dialogActions.hadleOpenDialog(''))
      queryClient.invalidateQueries({ queryKey: ['departments'] })
      setInputValue('')
    }
  })

  return (
    <React.Fragment>
      <Dialog
        open={open === 'newDepartment'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-end font-bold text-mainText">
          {'أضف قسم جديد'}
        </DialogTitle>
        <DialogContent>
          <div>
            <div className="flex flex-col gap-1 items-end">
              <label htmlFor="depName">اسم القسم</label>
              <input
                value={inputValue}
                className="outline-0 border-2 border-mainText rounded-md p-2"
                type="text"
                name="depName"
                placeholder="اكتب..."
                dir="rtl"
                onChange={(event) => setInputValue(event.target.value)}
              />
            </div>
            <div className="flex justify-center gap-4 my-4">
              <button
                onClick={() => mutate({ name: inputValue })}
                className="bg-mainBlue text-white font-bold py-2 w-24 rounded-md hover:scale-105 hover:opacity-50 duration-200"
              >
                تأكيد
              </button>
              <button
                onClick={handleClose}
                className="bg-alert text-white font-bold py-2 w-24 rounded-md hover:scale-105 hover:opacity-50 duration-200"
              >
                إلغاء
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
