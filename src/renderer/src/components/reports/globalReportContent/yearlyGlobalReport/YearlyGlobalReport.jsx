import React from 'react'
import MonthlyReportTable from './MonthlyReportTable'
import { LineChart } from '@mui/x-charts/LineChart'
import YearlyClinicReportTable from './YearlyClinicReportTable'
import YearlyAreaReport from './YearlyAreaReport'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'

const YearlyGlobalReport = ({ yearlyReportData, year }) => {
  const contentRef = useRef()
  const reactToPrintFn = useReactToPrint({ contentRef })

  const margin = { right: 24 }
  const uData = yearlyReportData?.monthlyReport?.map((item) => item?.total)
  const pData = yearlyReportData?.monthlyReport?.map((item) => item?.previousYear)
  const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  return (
    <>
      <button
        onClick={reactToPrintFn}
        className="bg-unique py-1 px-6 rounded-full text-white font-bold hover:opacity-45 duration-200"
      >
        print
      </button>
      <section
        ref={contentRef}
        className="flex flex-col gap-10 items-center w-full h-[30rem] overflow-scroll"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-extrabold text-mainText ">
            تقرير شامل عن عدد المترددين وأداء العيادات بالعيادة المجمعة زاوية الدهماني لعام {year}
          </h1>
        </div>

        <MonthlyReportTable
          data={yearlyReportData?.monthlyReport}
          grandTotal={yearlyReportData?.monthlyGrandTotal}
        />

        {yearlyReportData?.monthlyReport && yearlyReportData?.monthlyGrandTotal && (
          <LineChart
            height={400}
            width={900}
            series={[
              { data: pData, label: Number(year) - 1 },
              { data: uData, label: year }
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            yAxis={[{ width: 50 }]}
            margin={margin}
          />
        )}

        <YearlyClinicReportTable data={yearlyReportData?.clinicsReport} />

        <YearlyAreaReport data={yearlyReportData?.areasReport} />
        <div className="flex flex-row-reverse text-mainText font-bold text-sm my-2 gap-1">
          <h1>:ملاحظة</h1>
          <h1>تم تسجيل {yearlyReportData?.zeroAge} متردد بعمر قيمته 0 </h1>
        </div>
      </section>

      <div className="hidden">
        <section ref={contentRef} className="flex flex-col gap-10 items-center w-full scale-75">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-extrabold text-mainText ">
              تقرير شامل عن عدد المترددين وأداء العيادات بالعيادة المجمعة زاوية الدهماني لعام {year}
            </h1>
          </div>

          <MonthlyReportTable
            data={yearlyReportData?.monthlyReport}
            grandTotal={yearlyReportData?.monthlyGrandTotal}
          />

          {yearlyReportData?.monthlyReport && yearlyReportData?.monthlyGrandTotal && (
            <LineChart
              height={400}
              width={900}
              series={[
                { data: pData, label: Number(year) - 1 },
                { data: uData, label: year }
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              yAxis={[{ width: 50 }]}
              margin={margin}
            />
          )}

          <div className="break-before-page" />

          <YearlyClinicReportTable data={yearlyReportData?.clinicsReport} />

          <div className="break-before-page" />

          <YearlyAreaReport data={yearlyReportData?.areasReport} />
          <div className="flex flex-row-reverse text-mainText font-bold text-sm my-2 gap-1">
            <h1>:ملاحظة</h1>
            <h1>تم تسجيل {yearlyReportData?.zeroAge} متردد بعمر قيمته 0 </h1>
          </div>
        </section>
      </div>
    </>
  )
}

export default YearlyGlobalReport
