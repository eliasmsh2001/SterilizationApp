import React from 'react'
import { getAllClinics } from '../../util/apis/clinicsAPIs'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { Outlet, useNavigate } from 'react-router'

const ClinicsSettings = () => {
  const { data } = useQuery({ queryKey: ['clinics'], queryFn: getAllClinics })

  const navigate = useNavigate()

  return (
    <section className="w-full h-full border-t-2 border-mainText p-2 flex flex-col items-end">
      <ul className="h-[35rem] overflow-scroll px-5 w-64 ">
        <li className="text-center text-mainBlue font-bold my-2">انقر على العيادة لتعديلها</li>
        <li className="bg-mainBlue py-2">
          <h1 className="text-center text-white font-bold">العيادة</h1>
        </li>
        {data &&
          data?.length &&
          data.map((item, index) => (
            <React.Fragment key={item.id}>
              <li
                onClick={() => {
                  navigate(`/settings/clinics/${item.id}`)
                }}
                className={clsx(
                  'flex flex-row-reverse gap-10 py-1 border-x-2 border-mainBlue px-2 cursor-pointer',
                  {
                    'bg-stone-200': index % 2 != 0
                  }
                )}
              >
                <h1>{item.name}</h1>
              </li>
            </React.Fragment>
          ))}
      </ul>

      <Outlet />
    </section>
  )
}

export default ClinicsSettings
