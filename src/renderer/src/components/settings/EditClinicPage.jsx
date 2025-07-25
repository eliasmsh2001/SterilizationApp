import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import RedoIcon from '@mui/icons-material/Redo'
import {
  getClinicToEdit,
  handleDeleteDoctor,
  handleEditClinicLimit
} from '../../util/apis/clinicsAPIs'
import clsx from 'clsx'
import DeleteIcon from '@mui/icons-material/Delete'
import { queryClient } from '../../util/apis/httpUrl'

const EditClinicPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const [limitValue, setLimitValue] = useState()
  const [limitEditSuccess, setLimitEditSuccess] = useState(false)
  const [limitEditError, setLimitEditError] = useState(false)

  const { data } = useQuery({
    queryKey: ['clinics', params.id],
    queryFn: () => getClinicToEdit({ id: params.id })
  })

  const { mutate } = useMutation({
    mutationFn: handleEditClinicLimit,
    onSuccess: () => {
      setLimitEditSuccess(true)
    },
    onError: () => {
      setLimitEditError(true)
    }
  })

  const { mutate: deleteDoc } = useMutation({
    mutationFn: handleDeleteDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clinics'] })
    }
  })

  const editClinic = (value) => {
    setLimitEditError(false)
    setLimitEditSuccess(false)
    setLimitValue(value)
    mutate({ id: params.id, limit: value })
  }

  useEffect(() => {
    setLimitValue(data?.numberLimit ? data?.numberLimit : 0)
  }, [data])

  return (
    <section className="w-full h-full border-t-2 border-mainText p-2 pt-16 flex flex-col items-center relative">
      <button
        type="button"
        className="bg-alert rounded-full absolute right-5 top-5 size-12"
        onClick={() => navigate('/settings/clinics')}
      >
        <RedoIcon style={{ fill: 'white' }} />
      </button>

      <h1 className="text-center text-xl font-bold text-mainText ">{data?.name}</h1>

      <div className="">
        <input
          id="limit"
          type="number"
          value={limitValue}
          onChange={(event) => editClinic(event.target.value)}
          className="border-2 border-mainText p-1 text-lg font-bold text-mainText w-20 rounded-md outline-0 focus:border-mainBlue"
        />
        <label htmlFor="limit" className="text-xl mx-2 font-bold text-mainText">
          :حدود الأرقام
        </label>
      </div>
      {limitEditSuccess && <h1 className="text-mainBlue font-bold my-1">!!تم التعديل بنجاح</h1>}
      {limitEditError && (
        <h1 className="text-alert font-bold my-1">حدث خطأ ما، أعد المحاولة لاحقا</h1>
      )}
      <h1 className="text-xl font-bold text-mainText my-2 mt-10">الدكاترة</h1>
      <ul className="h-[20rem] overflow-y-scroll ">
        {data?.doctor?.map((item, index) => (
          <li
            key={item?.id}
            className={clsx('flex w-[30rem]', {
              'bg-stone-300': index % 2 === 0,
              'bg-stone-200': index % 2 !== 0
            })}
          >
            <button
              onClick={() => deleteDoc({ id: item.id })}
              className="bg-alert size-12 hover:opacity-45 duration-200"
            >
              <DeleteIcon style={{ fill: 'white' }} />
            </button>
            <h1 className="text-xl text-right w-full p-2">{item?.name}</h1>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default EditClinicPage
