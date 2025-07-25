import clsx from 'clsx'
import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation'

const MonthlyReportTable = ({ data, grandTotal }) => {
  return (
    <table className="border-2 border-mainText overflow-hidden  ">
      <thead>
        <tr className="bg-mainText text-white font-bold h-8">
          <th className="w-28 text-center">الفرق</th>
          <th className="w-28 border-l-2 txct-center">السنة السابقة</th>
          <th className="w-28 border-l-2 text-center">الإجمالي</th>
          <th className="w-28 border-l-2 text-center">أطفال</th>
          <th className="w-28 border-l-2 text-center">نساء</th>
          <th className="w-28 border-l-2 text-center">رجال</th>
          <th className="w-48 border-l-2 text-center">الشهر</th>
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
              <th className="border-l-2 border-mainText">{item?.previousYear}</th>
              <th className="border-l-2 border-mainText">{item?.total}</th>
              <th className="border-l-2 border-mainText">{item?.children}</th>
              <th className="border-l-2 border-mainText">{item?.female}</th>
              <th className="border-l-2 border-mainText">{item?.male}</th>
              <th className="border-l-2 border-mainText">{item?.name}</th>
            </tr>
          ))}
        <tr className={clsx(' text-sm  bg-mainText text-white', {})}>
          <th className="border-l-2 border-mainText ">
            {grandTotal?.difference < 0 ? (
              <NavigationIcon style={{ fill: 'red' }} className="rotate-180" />
            ) : (
              <NavigationIcon style={{ fill: 'green' }} />
            )}{' '}
            {Math.abs(Number(grandTotal?.overAllDifference))}
          </th>
          <th className="border-l-2 border-mainText">{grandTotal?.preOverallTotal}</th>
          <th className="border-l-2 border-mainText">{grandTotal?.overallTotal}</th>
          <th className="border-l-2 border-mainText">{grandTotal?.childrenTotal}</th>
          <th className="border-l-2 border-mainText">{grandTotal?.femaleTotal}</th>
          <th className="border-l-2 border-mainText">{grandTotal?.maleTotal}</th>
          <th className="border-l-2 border-mainText">الإجمالي</th>
        </tr>
      </tbody>
    </table>
  )
}

export default MonthlyReportTable
