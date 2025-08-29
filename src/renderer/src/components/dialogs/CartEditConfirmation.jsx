import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../util/apis/httpUrl'
import { useNavigate, useSearchParams } from 'react-router'
import { addNewCart, editCart } from '../../util/apis/cartAPIs'
import { cartActions } from '../../util/slicers/cartSlicer'

export default function CartEditConfirmation() {
  const open = useSelector((state) => state.dialog.dialog)
  const cartData = useSelector((state) => state.cart.cartData)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const [error, setError] = React.useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const exportSearchParams = () => {
    const params = Object.fromEntries(searchParams.entries())
    return params.id // Exported search parameters
  }

  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
    setError(null)
  }

  const { mutate } = useMutation({
    mutationKey: ['editCart'],
    mutationFn: editCart,
    onSuccess: () => {
      dispatch(dialogActions.hadleOpenDialog(''))
      queryClient.invalidateQueries({ queryKey: ['cartDetails'] })
      dispatch(cartActions.handleFinishingCart())
      navigate(`/department?id=${exportSearchParams()}`)
    },
    onError: (error) => {
      setError(error.message)
    }
  })

  return (
    <React.Fragment>
      <Dialog
        open={open === 'editCartConfirmation'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-end font-bold text-mainText">
          {'تأكيد الإنهاء'}
        </DialogTitle>
        <DialogContent>
          <div>
            {!error && (
              <h1 dir="rtl" className="text-mainText font-bold ">
                هل أنت متأكد من إنهاء هذه العملية؟
              </h1>
            )}
            {error && (
              <div className="flex flex-col items-center gap-5">
                <h1 className="text-alert text-center font-bold ">{error}</h1>
                <button
                  onClick={handleClose}
                  className="bg-mainBlue text-white font-bold py-2 w-24 rounded-md hover:scale-105 hover:opacity-50 duration-200"
                >
                  حسنا
                </button>
              </div>
            )}
            {!error && (
              <div className="flex justify-center gap-4 my-4">
                <button
                  onClick={() => mutate({ cartData, cartItems, cartId: cartData.id })}
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
            )}
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
