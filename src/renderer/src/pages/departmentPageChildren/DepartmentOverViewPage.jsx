import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { getDepartmentDetails } from '../../util/apis/departmentsAPIs'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import clsx from 'clsx'

const DepartmentOverViewPage = () => {
  const [searchParams] = useSearchParams()
  const exportSearchParams = () => {
    const params = Object.fromEntries(searchParams.entries())
    return params.id // Exported search parameters
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data } = useQuery({
    queryKey: ['departmentDetails', exportSearchParams()],
    queryFn: () => getDepartmentDetails({ id: exportSearchParams() })
  })
  return data ? (
    <section className="relative flex p-4 gap-24 h-[35rem]  mt-6" dir="rtl">
      <h1 className="absolute right-8 -top-16 bg-mainBlue text-white text-2xl font-bold min-w-32 px-4 py-2 text-center rounded-md">
        {data.name}
      </h1>

      <div className="">
        <button
          onClick={() => navigate(`newMenu?id=${exportSearchParams()}`)}
          className="bg-unique py-2 px-6 font-bold text-white my-4 hover:opacity-75 hover:scale-105 duration-200"
        >
          قائمة جديدة
        </button>
        <table dir="rtl">
          <thead className="bg-mainText text-white">
            <tr className="border-2 border-mainText">
              <th className="min-w-16 border-l-2">ID</th>
              <th className="min-w-24 border-l-2">التاريخ</th>
              <th className="min-w-20 border-l-2">اليوم</th>
              <th className="min-w-44 border-l-2">ساعة الدخول الى الجهاز</th>
              <th className="min-w-44 border-l-2">ساعة الخروج من الجهاز</th>
              <th className="min-w-28 border-l-2">حالة التعقيم</th>
              <th className="px-2">عدد الأصناف</th>
            </tr>
          </thead>
          <tbody>
            {data?.carts &&
              data.carts
                ?.sort((a, b) => b.id - a.id)
                .map((item, index) => (
                  <tr
                    onClick={() =>
                      dispatch(
                        dialogActions.handleOpenDialogDetails({
                          dialog: 'cartDetails',
                          id: item.id
                        })
                      )
                    }
                    className={clsx('border-2 border-mainText text-mainText font-bold', {
                      'bg-mainBlue/25': index % 2 === 0
                    })}
                    key={item.id}
                  >
                    <td>{item.id}</td>
                    <td>{item.date}</td>
                    <td>{item.day}</td>
                    <td>{item.machineEnteringTime}</td>
                    <td>{item.machineLeavingTime}</td>
                    <td>{item.sterilazationState}</td>
                    <td>{item.items?.length}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-y-scroll">
        <button
          onClick={() => dispatch(dialogActions.hadleOpenDialog('newItem'))}
          className="bg-unique py-2 px-6 font-bold text-white my-4 hover:opacity-75 hover:scale-105 duration-200"
        >
          أضف صنف
        </button>
        <table dir="rtl">
          <thead className="bg-mainText text-white">
            <tr className="border-2 border-mainText">
              <th className="min-w-96">اسم الصنف</th>
            </tr>
          </thead>
          <tbody>
            {data.items &&
              data.items.map((item, index) => (
                <tr
                  className={clsx('border-2 border-mainText', {
                    'bg-mainBlue/25': index % 2 === 0
                  })}
                  key={item.id}
                >
                  <td className="px-4 text-mainText font-bold">{item.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  ) : (
    <h1 className="text-alert font-bold text-xl text-center my-10 ">
      حدث خطأ أئناء البحث عن العيادة
    </h1>
  )
}

export default DepartmentOverViewPage
