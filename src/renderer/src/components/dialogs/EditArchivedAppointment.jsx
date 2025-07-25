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
import GenderSelectbox from '../ReuseableComponents/GenderSelectbox'
import ClinicSelectionField from '../EssentialComponents/ClinicSelectionField'
import DoctorSelectionField from '../EssentialComponents/DoctorSelectionField'
import { addNewDoctor, getAllDocs } from '../../util/apis/doctorsAPIs'
import { useMutation, useQuery } from '@tanstack/react-query'
import { queryClient } from '../../util/apis/httpUrl'
import clsx from 'clsx'
import {
  addNewAppointment,
  editArchivedAppointment,
  getAllArea
} from '../../util/apis/appointmentsApis'

const EditArchivedAppointment = () => {
  const appointment = useSelector((state) => state.dialog.appointmentId)
  const [chosenDoctor, setChosenDoctor] = React.useState(appointment?.doctorName)
  const [chosenClinic, setChosenClinic] = React.useState(appointment?.clinicName)
  const [areaValue, setAreaValue] = React.useState(appointment?.address)
  const [error, setError] = React.useState(null)
  const [btnIsDisabled, setbtnIsDisabled] = React.useState(false)
  const open = useSelector((state) => state.dialog.dialog)
  const dispatch = useDispatch()

  const inputStyle = `border-2 border-stone-400 rounded-lg p-2 text-mainText font-bold outline-0 focus:border-secondaryText`

  const handleClose = () => {
    dispatch(dialogActions.handleCloseEditArchived())
    setbtnIsDisabled(false)
  }

  React.useEffect(() => {
    setChosenDoctor(appointment?.doctorName)
    setChosenClinic(appointment?.clinicName)
    setAreaValue(appointment?.address)
  }, [appointment])

  const { mutate: editAppointment } = useMutation({
    mutationFn: editArchivedAppointment,
    mutationKey: ['appointments'],
    onSuccess: (data) => {
      dispatch(dialogActions.handleCloseEditArchived())
      queryClient.invalidateQueries({ queryKey: ['archivedAppointments', 'appointments'] })
      queryClient.refetchQueries()
      setbtnIsDisabled(false)
    },
    onError: () => {
      setbtnIsDisabled(false)
      setError('قم بالتأكد من إدخال جميع البيانات')
    }
  })

  const { mutate: addDoc } = useMutation({
    mutationFn: addNewDoctor,
    mutationKey: ['doctors'],
    refetchInterval: 100,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['clinics', 'doctors'] })
      setChosenDoctor(data.name)
    }
  })

  const { data } = useQuery({
    queryKey: ['clinics', 'doctors', chosenClinic],
    queryFn: ({ signal }) => getAllDocs({ signal, clinic: chosenClinic }),
    refetchInterval: 100
  })

  const { data: areas } = useQuery({
    queryKey: ['areas', areaValue],
    queryFn: ({ signal }) => getAllArea({ signal, area: areaValue }),
    refetchInterval: 100
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    // if (!gender) {
    //   setError('!!تأكد من تحديد الجنس')
    //   return
    // }
    // if (!chosenClinic) {
    //   setError('!!تأكد من تحديد العيادة')
    //   return
    // }
    // if (!chosenDoctor) {
    //   setError('!!تأكد من تحديد الدكتور/ة')
    //   return
    // }

    setbtnIsDisabled(true)
    editAppointment({ itemId: appointment.id, data, chosenClinic, chosenDoctor })
  }
  return (
    <React.Fragment>
      <Dialog
        open={open === 'editArchived'}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'تعديل الموعد'}</DialogTitle>
        <DialogContent>
          <form className=" flex flex-col items-center gap-10 relative" onSubmit={handleSubmit}>
            <h1 className="absolute -top-20 right-20 text-white bg-secondaryText text-2xl font-extrabold py-2 w-44 rounded-lg text-center pointer-events-none">
              موعد جديد
            </h1>
            <section className="flex flex-col gap-4">
              <div className="flex flex-row-reverse gap-2 items-end ">
                <label htmlFor="name" className="text-mainText text-sm font-bold">
                  الإسم الرباعي
                </label>
                :<h1 className="text-stone-500 font-bold">{appointment?.name}</h1>
              </div>
              <div className="flex flex-row-reverse gap-2 items-end ">
                <label htmlFor="name" className="text-mainText text-sm font-bold">
                  العمر
                </label>
                :<h1 className="text-stone-500 font-bold">{appointment?.age}</h1>
              </div>
              <div className="flex flex-row-reverse gap-2 items-end ">
                <label htmlFor="name" className="text-mainText text-sm font-bold">
                  الجنس
                </label>
                :<h1 className="text-stone-500 font-bold">{appointment?.gender}</h1>
              </div>

              <div className="flex flex-col items-end relative">
                <label htmlFor="address" className="text-mainText text-sm font-bold">
                  عنوان السكن
                </label>
                <input
                  onChange={(event) => setAreaValue(event.target.value)}
                  value={areaValue}
                  id="address"
                  placeholder={appointment?.address}
                  name="address"
                  className={`${inputStyle} w-72`}
                  type="text"
                  dir="rtl"
                />
                {areas && areas.length > 0 && (
                  <div className="absolute top-16 bg-white z-10 shadow-md shadow-black rounded-xl text-mainText w-full flex flex-col items-end py-2 max-h-52 overflow-y-scroll">
                    {areas.map((item) => (
                      <button
                        className="w-full hover:bg-slate-200 py-1 px-4"
                        type="button"
                        key={item.id}
                        onClick={() => setAreaValue(item.name)}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </section>
            <section className="flex flex-col gap-4 py-4">
              <ClinicSelectionField chosenClinic={chosenClinic} setChosenClinic={setChosenClinic} />
              <div className={clsx({ 'opacity-40 pointer-events-none': chosenClinic === '' })}>
                <DoctorSelectionField
                  addDoc={addDoc}
                  doctors={data?.doctor}
                  chosenDoctor={chosenDoctor}
                  setChosenDoctor={setChosenDoctor}
                />
              </div>
            </section>

            <div className="flex justify-center items-center flex-col gap-3">
              <h1 className="text-lg text-alert">{error}</h1>
              <button
                type="submit"
                className={clsx(
                  'bg-secondaryText text-white font-bold w-72 py-2 rounded-md hover:opacity-55 duration-200',
                  {
                    'pointer-events-none opacity-45': btnIsDisabled,
                    'pointer-events-auto opacity-100': !btnIsDisabled
                  }
                )}
              >
                تأكيد الموعد
              </button>
              <button
                type="button"
                onClick={handleClose}
                className={clsx(
                  'bg-alert text-white font-bold w-72 py-2 rounded-md hover:opacity-55 duration-200'
                )}
              >
                إلغاء
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  )
}

export default EditArchivedAppointment
