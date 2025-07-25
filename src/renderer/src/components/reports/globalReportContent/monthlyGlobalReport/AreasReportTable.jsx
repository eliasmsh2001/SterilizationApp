import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation'
import clsx from 'clsx'

const AreasReportTable = ({ data }) => {
  return (
    <table className="border-2 border-mainText overflow-hidden ">
      <thead>
        <tr className="bg-mainText text-white font-bold h-8">
          <th className="w-20 text-xs text-center">الفرق</th>
          <th className="w-20 text-xs border-l-2 text-center">الشهر السابق</th>
          <th className="w-16 text-xs border-l-2 text-center">الإجمالي</th>
          <th className="w-16 text-xs border-l-2 text-center"> +61</th>
          <th className="w-16 text-xs border-l-2 text-center"> 60-51</th>
          <th className="w-16 text-xs border-l-2 text-center"> 50-41</th>
          <th className="w-16 text-xs border-l-2 text-center"> 40-31</th>
          <th className="w-16 text-xs border-l-2 text-center"> 30-18</th>
          <th className="w-16 text-xs border-l-2 text-center"> 17-1</th>
          <th className="w-16 text-xs border-l-2 text-center">أنثى</th>
          <th className="w-16 text-xs border-l-2 text-center">ذكر</th>
          <th className="w-32 border-l-2 text-center">المنطقة</th>
          <th className="w-10 border-l-2 text-center">ر.ت</th>
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
              <th className="border-l-2 text-xs border-mainText">{item?.previousMonth}</th>
              <th className="border-l-2 text-xs border-mainText">{item?.total}</th>
              <th className="border-l-2 text-xs border-mainText">{item?.ageDist6}</th>
              <th className="border-l-2 text-xs border-mainText">{item?.ageDist5}</th>
              <th className="border-l-2 text-xs border-mainText">{item?.ageDist4}</th>
              <th className="border-l-2 text-xs border-mainText">{item?.ageDist3}</th>
              <th className="border-l-2 text-xs border-mainText">{item?.ageDist2}</th>
              <th className="border-l-2 text-xs border-mainText">{item?.ageDist1}</th>
              <th className="border-l-2 text-xs border-mainText">{item?.female}</th>
              <th className="border-l-2 text-xs border-mainText">{item?.male}</th>
              <th className="border-l-2 text-xs border-mainText">{item?.name}</th>
              <th className="border-l-2 text-xs border-mainText">{index + 1}</th>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default AreasReportTable
