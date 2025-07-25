import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { useDispatch, useSelector } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
// import EditIcon from '@mui/icons-material/Edit'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'
import DeleteIcon from '@mui/icons-material/Delete'
import { useMutation } from '@tanstack/react-query'
import { deleteAppointment } from '../../util/apis/appointmentsApis'
import { queryClient } from '../../util/apis/httpUrl'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import PrintableCard from '../printableComponents/PrintableCard'

export default function AppontmentDetails() {
  const open = useSelector((state) => state.dialog.dialog)
  const item = useSelector((state) => state.dialog.appointment)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const dispatch = useDispatch()
  const contentRef = useRef(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    pageStyle: `@page {
      size: A6;
      margin: 0;
    }`
  })

  const handleClose = () => {
    dispatch(dialogActions.handleCloseAppointmentDatails())
  }

  const { mutate } = useMutation({
    mutationFn: deleteAppointment,
    mutationKey: ['appointments'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] })
      setIsDeleting(false)
      dispatch(dialogActions.handleCloseAppointmentDatails())
    }
  })

  const buttons = [
    // {
    //   key: 1,
    //   title: <EditIcon style={{ fill: 'white' }} />,
    //   function: null,
    //   style: `bg-mainBlue size-10`
    // },
    {
      key: 2,
      title: <LocalPrintshopIcon style={{ fill: 'white' }} />,
      function: reactToPrintFn,
      style: `bg-unique size-10`
    },
    {
      key: 3,
      title: <DeleteIcon style={{ fill: 'white' }} />,
      function: () => setIsDeleting(true),
      style: `bg-alert size-10`
    }
  ]

  return (
    <React.Fragment>
      <Dialog
        open={open === 'appointmentDetails'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ width: 500 }}>
          <DialogContentText id="alert-dialog-description"></DialogContentText>

          {!isDeleting && (
            <div className="absolute top-0 right-0 flex flex-col">
              {buttons.map((btn) => (
                <button key={btn.key} className={btn.style} onClick={btn.function}>
                  {' '}
                  {btn.title}
                </button>
              ))}
            </div>
          )}

          <div className="flex  justify-center gap-4">
            <div className="text-2xl text-mainBlue font-extrabold flex flex-col items-center mb-6">
              <h1>{item?.name}</h1>
              <div className="flex justify-center gap-2">
                <h1 className="flex flex-row-reverse">
                  {item?.age} <span>عام</span>
                </h1>
                -<h1>{item?.gender}</h1>
              </div>
            </div>
            <span className="bg-mainBlue text-white rounded-full flex items-center justify-center size-12 text-center text-xl font-extrabold">
              {item?.appointmentNum}
            </span>
          </div>

          {!isDeleting && (
            <section className="flex flex-col gap-3">
              <div className="flex gap-3 items-center justify-center text-sm">
                <h1 className="text-stone-500 font-semibold">
                  {item?.address ? item?.address : 'غير معروف'}
                </h1>
                <h1 className="text-mainText font-bold">:العنوان</h1>
              </div>
              <div className="flex gap-3 items-center justify-center text-sm">
                <h1 className="text-stone-500 font-semibold">
                  {item?.phoneNumber ? item?.phoneNumber : 'غير معروف'}
                </h1>
                <h1 className="text-mainText font-bold">:رقم الهاتف</h1>
              </div>
              <div className="flex gap-3 items-center justify-center text-sm">
                <h1 className="text-stone-500 font-semibold">
                  {item?.clinicName ? item?.clinicName : 'غير معروف'}
                </h1>
                <h1 className="text-mainText font-bold">:العيادة</h1>
              </div>
              <div className="flex gap-3 items-center justify-center text-sm">
                <h1 className="text-stone-500 font-semibold">
                  {item?.doctorName ? item?.doctorName : 'غير معروف'}
                </h1>
                <h1 className="text-mainText font-bold">:الدكتور</h1>
              </div>
              <div className="flex gap-3 items-center justify-center text-sm">
                <h1 className="text-stone-500 font-semibold">
                  {item?.period ? item?.period : 'غير معروف'}
                </h1>
                <h1 className="text-mainText font-bold">:الفترة</h1>
              </div>
              <div className="flex gap-3 items-center justify-center text-sm">
                <h1 className="text-stone-500 font-semibold">
                  {item?.time ? item?.time : 'غير معروف'}
                </h1>
                <h1 className="text-stone-500 font-semibold">
                  {item?.date ? item?.date : 'غير معروف'}
                </h1>
                <h1 className="text-stone-500 font-semibold">
                  {item?.day ? item?.day : 'غير معروف'}
                </h1>
                <h1 className="text-mainText font-bold">:التوقيت</h1>
              </div>
            </section>
          )}

          {isDeleting && (
            <section className="flex flex-col justify-center items-center gap-5 py-8">
              <h1 className="text-lg text-mainText font-bold">هل أنت متأكد من مسح هذاالموعد؟</h1>
              <div className="flex gap-10">
                <button
                  onClick={() => mutate({ id: item.id })}
                  className="bg-alert rounded-md py-2 w-16 text-white font-bold hover:opacity-55 duration-200"
                >
                  تأكيد
                </button>
                <button
                  onClick={() => {
                    setIsDeleting(false)
                    dispatch(dialogActions.handleCloseAppointmentDatails())
                  }}
                  className="text-secondaryText font-bold text-lg w-16 py-2 hover:bg-secondaryText/20 duration-200"
                >
                  إلغاء
                </button>
              </div>
            </section>
          )}

          <div className="hidden">
            <PrintableCard contentRef={contentRef} item={item} />
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}
