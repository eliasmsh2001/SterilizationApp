import React, { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import {
  getTotoalAppointmentsByArea,
  getTotoalAppointmentsByClinics
} from '../../util/apis/reportsAPI'
//
import clsx from 'clsx'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'

const ClinicsReport = () => {
  const date = new Date()
  const [year, setYear] = useState(date.getFullYear())
  const [month, setMonth] = useState(date.getMonth() + 1)
  const [clinics, setClinics] = useState(date.getMonth() + 1)
  const contentRef = useRef(null)
  const reactToPrintFn = useReactToPrint({ contentRef })

  const { data, isError, error } = useQuery({
    queryKey: ['report', 'clinicsReport', year, month],
    queryFn: ({ signal }) => getTotoalAppointmentsByClinics({ signal, year, month }),
    refetchInterval: 1000
  })

  useEffect(() => {
    if (data) {
      const filteredClinics = data.map((item) => ({
        ...item,
        itemId: data.indexOf(item)
      }))

      setClinics(filteredClinics)
    }
  }, [data])

  return (
    <div className="h-[38rem] flex flex-col justify-start items-start py-6 ">
      <div className="w-full flex justify-center items-center mb-10 gap-6">
        <button
          onClick={reactToPrintFn}
          className="bg-unique w-28 py-2 rounded-full font-bold text-white hover:opacity-55 duration-200"
        >
          Print
        </button>
        <input
          type="number"
          value={month}
          onChange={(event) => setMonth(event.target.value)}
          autoFocus
          className="border-2 border-mainText p-2 max-w-14 rounded-xl text-center text-xl font-bold outline-0 focus:border-mainBlue "
        />
        <input
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          autoFocus
          className="border-2 border-mainText py-2 max-w-28 rounded-xl text-center text-xl font-bold px-5 outline-0 focus:border-mainBlue"
        />
        <h1 className="text-xl font-bold text-mainText">
          عدد المترددين الى العيادة المجمعة زاوية الدهماني عام
        </h1>
      </div>

      {!data ||
        (!data.length > 0 && (
          <h1 className="text-alert font-bold text-lg  text-center w-full">
            حدث عطل ما, لم يتم إجياد التقرير
          </h1>
        ))}

      {clinics && clinics?.length > 0 && (
        <>
          <div className="flex flex-row-reverse break-after-page items-start h-[30rem]">
            <div className="max-h-[30rem] overflow-y-scroll px-8">
              <table className=" border-4 border-mainBlue">
                <thead className="bg-mainBlue text-white font-bold">
                  <tr>
                    <th className="w-16 border-r-2">عدد </th>
                    <th className="w-64">المنطقة</th>
                    <th className="w-10 border-r-2 border-l-2">الرقم</th>
                  </tr>
                </thead>
                <tbody className="bg-mainBlue/20">
                  {clinics &&
                    clinics?.map((item, index) => (
                      <tr key={index} className={clsx({ 'bg-stone-100': index % 2 != 0 })}>
                        <td className="text-center text-mainText font-bold">
                          {item.totalAppointments}
                        </td>
                        <td className="text-center text-mainText font-bold">{item.name}</td>
                        <td className="text-center text-mainText font-bold">{index}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <BarChart
              dataset={clinics}
              xAxis={[{ dataKey: 'name' }]}
              series={[
                { dataKey: 'ذكر', label: 'ذكر' },
                { dataKey: 'أنثى', label: 'أنثى' }
              ]}
              width={1200}
              height={450}
            />
          </div>
          <div className="w-[80rem] h-full hidden">
            <div ref={contentRef} className=" flex flex-col items-center justify-center pt-20 ">
              <div className="flex gap-4 h-full w-full flex-row-reverse flex-wrap justify-center items-center">
                <h1 className="text-xl font-bold text-mainText ">
                  عدد المترددين الى العيادة المجمعة زاوية الدهماني عام {year} شهر {month}
                </h1>
                <table className=" border-4 border-mainBlue">
                  <thead className="bg-mainBlue text-white font-bold">
                    <tr>
                      <th className="w-16 border-r-2">عدد </th>
                      <th className="w-64">المنطقة</th>
                      <th className="w-10 border-r-2 border-l-2">الرقم</th>
                    </tr>
                  </thead>
                  <tbody className="bg-mainBlue/20">
                    {data &&
                      clinics?.map((item, index) => (
                        <tr key={index} className={clsx({ 'bg-stone-100': index % 2 != 0 })}>
                          <td className="text-center text-mainText font-bold">
                            {item.totalAppointments}
                          </td>
                          <td className="text-center text-mainText font-bold">{item.name}</td>
                          <td className="text-center text-mainText font-bold">{item.itemId}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="break-before-page" />

              <div className="w-[80rem] rotate-90 mt-40">
                <BarChart
                  dataset={clinics}
                  xAxis={[{ dataKey: 'itemId' }]}
                  series={[
                    { dataKey: 'ذكر', label: 'ذكر' },
                    { dataKey: 'أنثى', label: 'أنثى' }
                  ]}
                  width={1100}
                  height={700}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ClinicsReport
