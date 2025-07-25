import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useSignup } from '../../hooks/UseSignup'
import clsx from 'clsx'

export default function AddNewUserDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [authority, setAuthority] = React.useState('user')
  const inputStyle = `w-44 h-8 border-2 border-stone-300 outline-0 focus:border-mainBlue px-2 `

  const { signup, error, isLoading, setError } = useSignup()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(username, password, authority)
  }

  const handleClose = () => {
    setPassword('')
    setUsername('')
    setError(false)
    dispatch(dialogActions.handleAddNewUser(''))
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

  return (
    <React.Fragment>
      <Dialog
        open={open === 'newUser'}
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
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 items-end">
              <label className="text-xs font-bold text-mainText" htmlFor="password">
                كلمة المرور
              </label>
              <input
                className={inputStyle}
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-wrap max-w-[13rem] text-center text-xs font-bold text-alert">
                {error}
              </p>
            )}
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
            <div className="flex gap-4 justify-center items-center py-6">
              <button
                onClick={handleClose}
                className="bg-alert text-white w-16 py-2 rounded-md hover:opacity-45 duration-200"
                type="button"
              >
                إلغاء
              </button>
              <button
                className={clsx(
                  'bg-mainBlue text-white w-16 py-2 rounded-md  hover:opacity-45 duration-200'
                )}
              >
                تسجيل
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
