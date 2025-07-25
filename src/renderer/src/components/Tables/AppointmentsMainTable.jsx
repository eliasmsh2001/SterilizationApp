import clsx from 'clsx'
import React from 'react'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'

const AppointmentsMainTable = ({ data }) => {
  const cellStyle = `text-sm font-semibold text-mainText border-l-2 border-black/35 px-2 py-1`
  const dispatch = useDispatch()

  return (
    <table dir="rtl" className=" rounded-xl border-2 border-mainBlue ">
      <thead>
        <tr className="bg-mainBlue text-white text-sm font-bold">
          <th className="w-12 py-1">الرقم</th>
          <th className="w-72 py-1">اسم الحالة</th>
          <th className="w-44 py-1">العيادة</th>
          <th className="w-52 py-1">الدكتور</th>
          <th className="w-24 py-1">الساعة</th>
          {/* <th className="w-32 py-1">عنوان السكن</th> */}
          {/* <th className="w-36 py-1">الجنس</th> */}
          {/* <th className="w-36 py-1">العمر</th> */}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.length > 0 &&
          data?.map((item, index) => (
            <React.Fragment key={item.id}>
              <tr
                onClick={() => dispatch(dialogActions.handleOpenAppointmentDatails(item))}
                className={clsx('border-y-2 border-black/35 cursor-pointer', {
                  'bg-mainText/15': index % 2 === 0
                })}
              >
                <td className={`${cellStyle} w-12`}>{item?.appointmentNum}</td>
                <td className={`${cellStyle} w-72`}>{item?.name}</td>
                <td className={`${cellStyle} w-44`}>{item?.clinicName}</td>
                <td className={`${cellStyle} w-52`}>{item?.doctorName}</td>
                <td className={`${cellStyle}`}>{item?.time}</td>
                {/* <td className={`${cellStyle}`}>{item?.address}</td> */}
                {/* <td className={`${cellStyle}`}>{item?.gender}</td> */}
                {/* <td className={`${cellStyle}`}>{item?.age}</td> */}
              </tr>
              {(data.indexOf(item) + 1) % 15 === 0 && <tr className="break-before-page" />}
            </React.Fragment>
          ))}
      </tbody>
    </table>
  )
}

export default AppointmentsMainTable
