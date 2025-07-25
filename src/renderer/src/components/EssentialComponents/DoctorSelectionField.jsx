import React, { useRef, useState } from 'react'
import DoctorSelectionBox from '../ReuseableComponents/DoctorSelectionBox'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import clsx from 'clsx'
import { useMutation, useQuery } from '@tanstack/react-query'
import ClinicSelectbox from '../ReuseableComponents/ClinicSelectbox'
import { getAllClinics } from '../../util/apis/clinicsAPIs'
import { addNewDoctor } from '../../util/apis/doctorsAPIs'
import { queryClient } from '../../util/apis/httpUrl'

const DoctorSelectionField = ({ doctors, chosenDoctor, setChosenDoctor, addDoc }) => {
  const [isAddDoctor, setIsAddDoctor] = useState(false)
  const [chosenClinic, setChosenClinic] = React.useState('')
  const [isError, setIsError] = useState(false)

  const inputRef = useRef()

  const {
    data: clinics,
    isError: clinicsIsError,
    error: clinicsError,
    refetch
  } = useQuery({ queryKey: ['clinics'], queryFn: getAllClinics, refetchInterval: 100 })

  // const { mutate } = useMutation({
  //   mutationFn: addNewDoctor,
  //   mutationKey: ['doctors'],
  //   onSuccess: (data) => {
  //     queryClient.invalidateQueries({ queryKey: ['clinics', 'doctors'] })
  //     setChosenDoctor(data.name)
  //     setIsAddDoctor(false)
  //   }
  // })

  const handleSubmit = () => {
    if (inputRef.current.value === '' || chosenClinic === '') {
      setIsError(true)
    } else {
      setIsError(false)
      addDoc({ clinic: chosenClinic, docName: inputRef.current.value })
      setIsAddDoctor(false)
    }
  }

  const inputStyle = `border-2 border-stone-400 rounded-r-lg p-2 text-mainText font-bold outline-0 focus:border-secondaryText`

  return (
    <section className="flex flex-col gap-6">
      <div className="flex gap-5">
        <button
          onClick={isAddDoctor ? () => setIsAddDoctor(false) : () => setIsAddDoctor(true)}
          type="button"
          className={clsx('size-12  rounded-full hover:opacity-55 duration-200', {
            'bg-alert': isAddDoctor,
            'bg-unique': !isAddDoctor
          })}
        >
          {!isAddDoctor ? (
            <AddIcon style={{ fill: 'white' }} />
          ) : (
            <CloseIcon style={{ fill: 'white' }} />
          )}
        </button>
        <DoctorSelectionBox
          doctors={doctors}
          chosenDoctor={chosenDoctor}
          setChosenDoctor={setChosenDoctor}
        />
      </div>
      {isAddDoctor && (
        <section>
          {isError && (
            <h1 className="text-alert font-bold text-sm text-center">الرجاء التأكد من البيانات</h1>
          )}
          <h1 className="text-xs text-mainText font-bold text-end my-1">
            العيادة التي يداوم فيها الدكتور/ة
          </h1>
          <ClinicSelectbox
            clinics={clinics}
            chosenClinic={chosenClinic}
            setChosenClinic={setChosenClinic}
          />
          {clinicsIsError && (
            <div className="flex flex-cold items-center justify-center gap-4">
              <h1 className="text-alert font-bold">حدث خطأ ما</h1>
              <button className="text-white bg-mainBlue p-2 rounded-full" onClick={() => refetch()}>
                أعد التحميل
              </button>
            </div>
          )}
          <div className="flex justify-end my-3">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-secondaryText rounded-l-lg px-2 text-sm font-bold text-white hover:opacity-55 duration-200"
            >
              أضف
            </button>
            <input
              ref={inputRef}
              className={inputStyle}
              type="text"
              dir="rtl"
              placeholder="أكتب إسم الدكتور/ة"
            />
          </div>
        </section>
      )}
    </section>
  )
}

export default DoctorSelectionField
