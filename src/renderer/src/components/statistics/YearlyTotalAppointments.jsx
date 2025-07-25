import React, { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { getYearlyTotoalAppointments } from '../../util/apis/reportsAPI'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import clsx from 'clsx'

import generatePDF, { Resolution, Margin } from 'react-to-pdf'
import PrintableYearlyReport from './PrintableYearlyReport'

const YearlyTotalAppointments = () => {
  const date = new Date()
  const [year, setYear] = useState(date.getFullYear())
  // const { toPDF, targetRef } = usePDF({ filename: `${year} عدد المترددين سنة.pdf` })

  const options = {
    // default is `save`
    method: 'save',

    filename: `${year} عدد المترددين سنة.pdf`,

    resolution: Resolution.HIGH,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      // default is 'A4'
      format: 'A4',
      // default is 'portrait'
      orientation: 'landscape'
    },
    canvas: {
      mimeType: 'image/png',
      qualityRatio: 1
    },

    overrides: {
      pdf: {
        compress: true
      },
      canvas: {
        useCORS: true
      }
    }
  }

  const { data, isError, error } = useQuery({
    queryKey: ['report', 'appointments', year],
    queryFn: ({ signal }) => getYearlyTotoalAppointments({ signal, year })
  })

  const getTargetElement = () => document.getElementById('year-content')

  return (
    <>
      <section className="absolute -top-[100rem] w-screen h-screen flex justify-center items-center p-16">
        <PrintableYearlyReport id="year-content" data={data} year={year} />
      </section>
      <div className=" h-[38rem] flex flex-col justify-start items-start py-6 overflow-y-scroll">
        <div className="w-full flex justify-center items-center mb-10 gap-6">
          <button
            onClick={() => generatePDF(getTargetElement, options)}
            className="bg-unique w-28 py-2 rounded-full font-bold text-white hover:opacity-55 duration-200"
          >
            Print
          </button>
          <input
            onChange={(event) => setYear(event.target.value)}
            type="number"
            autoFocus
            className="border-2 border-mainText py-2 max-w-28 rounded-xl text-center text-xl font-bold px-5"
            value={year}
          />
          <h1 className="text-xl font-bold text-mainText">
            عدد المترددين الى العيادة المجمعة زاوية الدهماني عام
          </h1>
        </div>

        {!data ||
          (!data.length > 0 && (
            <>
              <h1 className="text-alert font-bold text-lg  text-center w-full">
                حدث عطل ما, لم يتم إجياد التقرير
              </h1>
              <p>{error}</p>
            </>
          ))}

        {data && data.length > 0 && !isError && (
          <>
            <div className="flex flex-row-reverse h-[30rem]">
              <table className="mx-10 border-4 border-mainBlue">
                <thead className="bg-mainBlue text-white font-bold">
                  <tr>
                    <th className="w-52 border-r-2">عدد المترددين</th>
                    <th className="w-24">الشهر</th>
                  </tr>
                </thead>
                <tbody className="bg-mainBlue/20">
                  {data &&
                    data.map((item, index) => (
                      <tr key={item.month} className={clsx({ 'bg-stone-100': index % 2 != 0 })}>
                        <td className="text-center text-mainText font-bold">{item.appointments}</td>
                        <td className="text-center text-mainText font-bold">{item.month}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="10 10" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ذكر" stackId="a" fill="#8884d8" />
                  <Bar dataKey="أنثى" stackId="a" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default YearlyTotalAppointments
