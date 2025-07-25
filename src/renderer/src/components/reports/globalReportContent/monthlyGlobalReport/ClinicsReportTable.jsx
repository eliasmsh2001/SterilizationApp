import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation'
import clsx from 'clsx'

const ClinicsReportTable = ({ data }) => {
  return (
    <table className="border-2 border-mainText overflow-hidden  ">
      <thead>
        <tr className="bg-mainText text-white font-bold h-8">
          <th className="w-28 text-center">الفرق</th>
          <th className="w-28 border-l-2 txct-center">الشهر السابق</th>
          <th className="w-28 border-l-2 text-center">الإجمالي</th>
          <th className="w-28 border-l-2 text-center">الفترة الليلية</th>
          <th className="w-28 border-l-2 text-center">الفترة المسائية</th>
          <th className="w-28 border-l-2 text-center">الفترة الصباحية</th>
          <th className="w-48 border-l-2 text-center">العيادة</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.length > 0 &&
          data.map((item, index) => (
            <tr
              key={index}
              className={clsx(' text-sm border-y-2 border-mainText', {
                'bg-mainBlue/30': index % 2 === 0,
                'bg-stone-200': index % 2 !== 0
              })}
            >
              <th className="border-l-2 border-mainText">
                {item?.difference < 0 ? (
                  <NavigationIcon style={{ fill: 'red' }} className="rotate-180" />
                ) : (
                  <NavigationIcon style={{ fill: 'green' }} />
                )}{' '}
                {Math.abs(Number(item?.difference))}
              </th>
              <th className="border-l-2 border-mainText">{item?.previousMonth}</th>
              <th className="border-l-2 border-mainText">{item?.total}</th>
              <th className="border-l-2 border-mainText">{item?.nightShift}</th>
              <th className="border-l-2 border-mainText">{item?.noonShift}</th>
              <th className="border-l-2 border-mainText">{item?.morningShift}</th>
              <th className="border-l-2 border-mainText">{item?.name}</th>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default ClinicsReportTable
