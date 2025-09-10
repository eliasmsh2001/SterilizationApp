import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useSearchParams } from 'react-router'
import { deleteCart, getCartDetes } from '../../util/apis/cartAPIs'
import PrintIcon from '@mui/icons-material/Print'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import clsx from 'clsx'
import { PrintableMenu } from '../printableComponents/PrintableMenu'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import { cartActions } from '../../util/slicers/cartSlicer'
import { queryClient } from '../../util/apis/httpUrl'

export default function CartDetailsDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const cartId = useSelector((state) => state.dialog.cartId)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const exportSearchParams = () => {
    const params = Object.fromEntries(searchParams.entries())
    return params.id // Exported search parameters
  }

  const contentRef = useRef()
  const reactToPrintFn = useReactToPrint({
    contentRef
  })

  const { data } = useQuery({
    queryKey: ['cartDetails', cartId],
    queryFn: () => getCartDetes(cartId)
  })

  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
    setIsDeleting(false)
  }

  const { mutate } = useMutation({
    mutationKey: ['deleteCart'],
    mutationFn: deleteCart,
    onSuccess: () => {
      handleClose()
      queryClient.invalidateQueries({ queryKey: ['departmentDetails'] })
    }
  })

  return (
    <React.Fragment>
      <Dialog
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '800px!important'
          }
        }}
        open={open === 'cartDetails'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {isDeleting && (
            <div className=" absolute w-full h-full flex justify-center items-center z-30">
              <div className="bg-white h-44 p-4 shadow-2xl border-4 border-alert rounded-md">
                <h1 className="text-mainText font-bold my-4">هل أنت متأكد من مسح هذه القائمة؟</h1>
                <div className="flex justify-center items-center gap-4 my-6">
                  <button
                    onClick={() => setIsDeleting(false)}
                    className="bg-mainBlue min-w-24 text-white font-bold rounded-md hover:opacity-45 duration-200 py-2"
                  >
                    إلغاء
                  </button>
                  <button
                    onClick={() => mutate({ id: cartId })}
                    className="bg-alert min-w-24 text-white font-bold rounded-md hover:opacity-45 duration-200 py-2"
                  >
                    تأكيد
                  </button>
                </div>
              </div>
            </div>
          )}
          <section dir="rtl " className="relative min-h-[35rem] flex flex-col gap-8">
            <div className="hidden w-screen h-screen">
              <PrintableMenu data={data && data} thisRef={contentRef} />
            </div>
            <div className="absolute left-0 top-0 flex gap-4">
              <button
                onClick={reactToPrintFn}
                className="bg-unique rounded-full size-12 hover:scale-110 hover:opacity-80 duration-200"
              >
                <PrintIcon style={{ fill: 'white' }} />
              </button>
              <button
                onClick={() => setIsDeleting(true)}
                className="bg-alert rounded-full size-12 hover:scale-110 hover:opacity-80 duration-200"
              >
                <DeleteIcon style={{ fill: 'white' }} />
              </button>
              <button
                onClick={() => {
                  navigate(`/department/editMenu?id=${exportSearchParams()}`)
                  handleClose()
                  dispatch(cartActions.handleEditCart({ data: data, items: data.items }))
                }}
                className="bg-mainBlue rounded-full size-12 hover:scale-110 hover:opacity-80 duration-200"
              >
                <EditIcon style={{ fill: 'white' }} />
              </button>
            </div>
            <div dir="rtl" className="flex gap-4">
              <h1 className="bg-mainText text-white text-2xl font-bold min-w-24 text-center px-4 py-2 rounded-md">
                ID: {data?.id}
              </h1>
              <div className="flex gap-2 px-4 py-2 bg-mainText text-white rounded-md">
                <h1 className="text-xl font-bold ">{data?.day}</h1> -
                <h1 className="text-xl font-bold">{data?.date}</h1>
              </div>
              <h1 className="bg-mainText text-white text-2xl font-bold min-w-24 text-center px-4 py-2 rounded-md">
                {data?.department}
              </h1>
            </div>

            <div className="flex justify-center gap-10 text-base text-mainText font-bold">
              <h1 dir="rtl">حالة التعقيم: {data?.sterilazationState} </h1>
              <h1 dir="rtl">ساعة الخروج من الجهاز: {data?.machineLeavingTime} </h1>
              <h1 dir="rtl">ساعة الدخول الى الجهاز: {data?.machineEnteringTime} </h1>
            </div>

            <table dir="rtl" className="border-2 border-mainText w-[47rem] ">
              <thead className="bg-mainText text-white">
                <tr className="border-2 border-mainText text-[0.6rem]">
                  <th className="w-96 border-l-2">اسم الصنف</th>
                  <th className="w-16 border-l-2">العدد</th>
                  <th className="w-24 border-l-2">التاريخ</th>
                  <th className="w-24 border-l-2">وقت التسليم</th>
                  <th className="w-40 border-l-2">المستلم قبل التعقيم</th>
                  <th className="w-40 border-l-2">المسلم قبل التعقيم</th>
                  <th className="w-24">حالة الأداة</th>
                </tr>
              </thead>
              <tbody>
                {data?.items &&
                  data.items?.map((item, index) => (
                    <tr
                      key={item.id}
                      className={clsx(
                        'border-b-2 border-mainText text-xs  text-mainText font-bold',
                        {
                          ' bg-mainBlue/20': index % 2 === 0
                        }
                      )}
                    >
                      <td>{item?.name}</td>
                      <td>{item?.quantity}</td>
                      <td>{item?.date}</td>
                      <td>{item?.deliveringTime}</td>
                      <td>{item?.preSterilizationClient}</td>
                      <td>{item?.preSterilazationProvidor}</td>
                      <td>{item?.toolState}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
