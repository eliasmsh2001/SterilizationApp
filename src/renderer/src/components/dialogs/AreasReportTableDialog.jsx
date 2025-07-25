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
import clsx from 'clsx'
import { useReactToPrint } from 'react-to-print'

export default function AreasReportTableDialog() {
  const open = useSelector((state) => state.dialog.dialog)
  const data = useSelector((state) => state.dialog.areasData)
  const dispatch = useDispatch()
  const { logout } = useLogout()

  const handleClose = () => {
    dispatch(dialogActions.hadleOpenDialog(''))
  }

  const chunkArray = (array, chunkSize) => {
    if (!array) {
      return
    }
    const result = []
    for (let i = 0; i < array?.length; i += chunkSize) {
      result.push(array?.slice(i, i + chunkSize))
    }
    return result
  }
  const dataChunks = chunkArray(data, 30)
  const contentRef = React.useRef()

  const reactToPrintFn = useReactToPrint({ contentRef })

  return (
    <React.Fragment>
      <Dialog
        open={open === 'areasTable'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Confirm Logout'}</DialogTitle>
        <DialogContent>
          <div className="max-h-[30rem] overflow-y-scroll px-8">
            <table className=" border-4 border-mainBlue">
              <thead className="bg-mainBlue text-white font-bold">
                <tr>
                  <th className="w-16 border-r-2">عدد </th>
                  <th className="w-64">المنطقة</th>
                  {/* <th className="w-10 border-r-2 border-l-2">الرقم</th> */}
                </tr>
              </thead>
              <tbody className="bg-mainBlue/20">
                {data &&
                  data?.map((item, index) => (
                    <tr key={index} className={clsx({ 'bg-stone-100': index % 2 != 0 })}>
                      <td className="text-center text-mainText font-bold">
                        {item.totalAppointments}
                      </td>
                      <td className="text-center text-mainText font-bold">{item.name}</td>
                      {/* <td className="text-center text-mainText font-bold">{index}</td> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="pt-6 flex gap-2">
            <button
              onClick={reactToPrintFn}
              className="text-white font-bold bg-mainBlue py-1 px-4 rounded-md hover:opacity-45 duration-200"
            >
              طباعة
            </button>
            <button
              onClick={handleClose}
              className="text-white font-bold bg-alert py-1 px-4 rounded-md hover:opacity-45 duration-200"
            >
              إغلاق
            </button>
          </div>
        </DialogContent>

        <div className="hidden">
          <div
            ref={contentRef}
            className="flex gap-4 h-full w-full flex-row-reverse flex-wrap justify-center items-center"
          >
            {dataChunks?.map((chunk, tableIndex) => (
              <>
                <div key={`table-${tableIndex}`} className=" border rounded-lg overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-200 border-4 border-mainBlue break-inside-avoid">
                    <thead className="bg-gray-50">
                      <tr className="bg-mainBlue text-white">
                        <th className="px-4 py-1 text-left">العدد</th>
                        <th className="px-4 py-1 text-left">المنطقة</th>
                        <th className="px-4 py-1 text-left">ر.ت</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 break-inside-avoid-page">
                      {chunk?.map((item, index) => (
                        <>
                          <tr
                            key={`row-${tableIndex}-${index}`}
                            className={clsx('', { 'bg-stone-200': index % 2 != 0 })}
                          >
                            <td className="px-4 py-1 whitespace-nowrap">
                              {item.totalAppointments}
                            </td>
                            <td className="px-4 py-1 whitespace-nowrap">{item.name}</td>
                            <td className="px-4 py-1 whitespace-nowrap">{item.itemId}</td>
                          </tr>
                          <tr className={clsx('', { 'break-after-page': index === 30 })}></tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ))}
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  )
}
