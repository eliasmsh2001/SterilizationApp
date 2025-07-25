const handleClose = () => {}
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useMutation } from '@tanstack/react-query'
import { editUser } from '../../util/apis/UserAPIs'
import { queryClient } from '../../util/apis/httpUrl'

export default function EditUserDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const user = useSelector((state) => state.dialog.userId)
  const dispatch = useDispatch()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [authority, setAuthority] = React.useState('user')
  const [error, setError] = React.useState(null)
  const [confirmPassword, setConfirmPassword] = React.useState('user')
  const inputStyle = `w-44 h-8 border-2 border-stone-300 outline-0 focus:border-mainBlue px-2 `

  const handleClose = () => {
    dispatch(dialogActions.handleDeleteUser({ userId: null, dialog: '' }))
  }
  const { mutate } = useMutation({
    mutationKey: ['user'],
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      handleClose()
      setError(null)
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // await signup(username, password, authority)
    // dispatch(dialogActions.handleAddNewUser(''))
    if (password.length > 0 && confirmPassword.length > 0 && password !== confirmPassword) {
      setError('كلمات المرور لا تتشابه')
      return
    }

    mutate({ username, password, authority, confirmPassword, userId: user.id })
  }

  const radioBtns = [
    {
      key: 2,
      value: 'user'
    },
    {
      key: 3,
      value: 'admin'
    }
  ]

  React.useEffect(() => {
    if (user) {
      setAuthority(user.authority)
      setUsername(user.username)
    }
  }, [user])

  return (
    <React.Fragment>
      <Dialog
        open={open === 'editUser'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className="text-mainBlue font-bold mb-6 text-end">مستخدم جديد</h1>
            <div className="flex flex-col gap-1 items-end">
              <label className="text-xs font-bold text-mainText" htmlFor="username">
                اسم المستخدم
              </label>
              <input
                className={inputStyle}
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 items-end">
              <label className="text-xs font-bold text-mainText" htmlFor="password">
                كلمة المرور جديدة
              </label>
              <input
                className={inputStyle}
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 items-end">
              <label className="text-xs font-bold text-mainText" htmlFor="confirmPassword">
                تأكيد كلمة المرور
              </label>
              <input
                className={inputStyle}
                type="password"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-4 justify-center">
              {radioBtns.map((item) => (
                <div className="flex gap-1 items-center justify-center" key={item.key}>
                  <label
                    htmlFor={item.value}
                    className="cursor-pointer text-xs font-bold text-mainText"
                  >
                    {item.value}
                  </label>
                  <input
                    type="radio"
                    id={item.value}
                    value={item.value}
                    onChange={(event) => setAuthority(event.target.value)}
                    checked={authority === item.value}
                  />
                </div>
              ))}
            </div>
            {error && <div className="text-center text-alert text-sm font-bold">{error}</div>}
            <div className="flex gap-4 justify-center items-center py-6">
              <button
                onClick={handleClose}
                className="bg-alert text-white w-16 py-2 rounded-md hover:opacity-45 duration-200"
                type="button"
              >
                إلغاء
              </button>
              <button className="bg-mainBlue text-white w-16 py-2 rounded-md  hover:opacity-45 duration-200">
                تأكيد
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
