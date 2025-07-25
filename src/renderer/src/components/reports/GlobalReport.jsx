import React from 'react'
import ReportTypeRadioBtns from './globalReportContent/ReportTypeRadioBtns'
import MonthlyGlobalReport from './globalReportContent/monthlyGlobalReport/MonthlyGlobalReport'
import { useQuery } from '@tanstack/react-query'
import { getMonthlyGlobalReport, getYearlyGlobalReport } from '../../util/apis/reportsAPI'

import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import Loading from '../EssentialComponents/Loading'
import YearlyGlobalReport from './globalReportContent/yearlyGlobalReport/YearlyGlobalReport'

const GlobalReport = () => {
  const [year, setYear] = React.useState(new Date().getFullYear())
  const [month, setMonth] = React.useState(new Date().getMonth() + 1)
  const [reportType, setReportType] = React.useState('شهري')

  const {
    data: monthlyReportData,
    isPending: monthlyIsPending,
    isError: monthlyIsError
  } = useQuery({
    queryKey: ['report', 'archivedAppointments', month, year],
    queryFn: () => getMonthlyGlobalReport({ month, year })
  })
  const {
    data: yearlyReportData,
    isPending: yearlyIsPending,
    isError: yearlyIsError
  } = useQuery({
    queryKey: ['report', 'archivedAppointments', year],
    queryFn: () => getYearlyGlobalReport({ year })
  })

  const contentRef = useRef()
  const reactToPrintFn = useReactToPrint({ contentRef })

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-row-reverse items-center justify-center gap-4 px-32 mt-2 mb-12  ">
        <ReportTypeRadioBtns setReportType={setReportType} reportType={reportType} />
        <section className="flex flex-row-reverse gap-4 items-center justify-start ">
          <div className="flex flex-col items-end">
            <label htmlFor="year" className="text-xs text-mainText font-bold">
              السنة
            </label>
            <input
              type="text"
              id="year"
              className="w-14 border-2 border-mainText px-2 font-bold text-mainText outline-0 focus:border-mainBlue"
              value={year}
              onChange={(event) => setYear(event.target.value)}
            />
          </div>
          {reportType === 'شهري' && (
            <div className="flex flex-col items-end">
              <label htmlFor="month" className="text-xs text-mainText font-bold">
                الشهر
              </label>
              <input
                type="text"
                id="month"
                className="w-10 border-2 border-mainText px-2 font-bold text-mainText outline-0 focus:border-mainBlue"
                value={month}
                onChange={(event) => setMonth(event.target.value)}
              />
            </div>
          )}
        </section>
      </div>

      {monthlyIsPending && reportType === 'شهري' && <Loading />}
      {yearlyIsPending && reportType === 'سنوي' && <Loading />}

      {!monthlyIsError && !monthlyIsError && !monthlyIsPending && reportType === 'شهري' && (
        <MonthlyGlobalReport month={month} year={year} monthlyReportData={monthlyReportData} />
      )}

      {monthlyIsError && yearlyIsError && (
        <h1 className="text-alert font-bold text-xl">لا توجد بيانات لهذا التقرير</h1>
      )}

      {!yearlyIsPending && !yearlyIsError && !yearlyIsPending && reportType === 'سنوي' && (
        <YearlyGlobalReport year={year} yearlyReportData={yearlyReportData} />
      )}
    </section>
  )
}

export default GlobalReport
