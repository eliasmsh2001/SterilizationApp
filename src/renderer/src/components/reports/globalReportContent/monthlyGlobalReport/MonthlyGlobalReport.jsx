import React from 'react'
import WeeksReportTable from './WeeksReportTable'
import { PieChart } from '@mui/x-charts/PieChart'
import { BarChart } from '@mui/x-charts/BarChart'
import ClinicsReportTable from './ClinicsReportTable'
import AreasReportTable from './AreasReportTable'

import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'

const MonthlyGlobalReport = ({ month, year, monthlyReportData }) => {
  const contentRef = useRef()
  const reactToPrintFn = useReactToPrint({ contentRef })

  return (
    <>
      <button
        onClick={reactToPrintFn}
        className="bg-unique py-1 px-6 rounded-full text-white font-bold hover:opacity-45 duration-200"
      >
        print
      </button>
      <section className="flex flex-col gap-10 items-center w-full h-[30rem] overflow-scroll">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-extrabold text-mainText ">
            تقرير شامل عن عدد المترددين وأداء العيادات بالعيادة المجمعة زاوية الدهماني
          </h1>
          <h1 className="text-mainText font-semibold">
            تقرير شهر {month} عام {year}
          </h1>
        </div>
        <div className="flex gap-5">
          <PieChart
            series={[
              {
                data: [
                  {
                    id: 0,
                    label: 'الأسبوع الأول',
                    value: monthlyReportData?.reportByWeeks.week1?.total
                  },
                  {
                    id: 1,
                    label: 'الأسبوع الثاني',
                    value: monthlyReportData?.reportByWeeks.week2?.total
                  },
                  {
                    id: 2,
                    label: 'الأسبوع الثالث',
                    value: monthlyReportData?.reportByWeeks.week3?.total
                  },
                  {
                    id: 3,
                    label: 'الأسبوع الأخير',
                    value: monthlyReportData?.reportByWeeks.week4?.total
                  }
                ]
              }
            ]}
            width={200}
            height={200}
          />
          <WeeksReportTable data={monthlyReportData?.reportByWeeks} />
        </div>

        <ClinicsReportTable data={monthlyReportData?.ClinicsReport} />

        <div className="flex flex-col items-center">
          <AreasReportTable data={monthlyReportData?.areasReport} />
          <div className="flex flex-row-reverse text-mainText font-bold text-sm my-2 gap-1">
            <h1>:ملاحظة</h1>
            <h1>تم تسجيل {monthlyReportData?.zeroAge} متردد بعمر قيمته 0 </h1>
          </div>
        </div>
      </section>
      <div className="hidden">
        <section ref={contentRef} className="flex flex-col gap-10 items-center ">
          <div className="flex flex-col items-center py-8">
            <h1 className="text-2xl font-extrabold text-mainText ">
              تقرير شامل عن عدد المترددين وأداء العيادات بالعيادة المجمعة زاوية الدهماني
            </h1>
            <h1 className="text-mainText font-semibold">
              تقرير شهر {month} عام {year}
            </h1>
          </div>

          <div className="scale-90">
            <WeeksReportTable data={monthlyReportData?.reportByWeeks} />
          </div>

          <div className="scale-90">
            <ClinicsReportTable data={monthlyReportData?.ClinicsReport} />
          </div>

          <div className="flex flex-col items-center break-before-page scale-90">
            <AreasReportTable data={monthlyReportData?.areasReport} />
            <div className="flex flex-row-reverse text-mainText font-bold text-sm my-2 gap-1">
              <h1>:ملاحظة</h1>
              <h1>تم تسجيل {monthlyReportData?.zeroAge} متردد بعمر قيمته 0 </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MonthlyGlobalReport
