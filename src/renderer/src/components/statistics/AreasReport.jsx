import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getTotoalAppointmentsByArea } from '../../util/apis/reportsAPI'

import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { BarChart } from '@mui/x-charts/BarChart'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import clsx from 'clsx'

const AreasReport = () => {
  const chartSetting = {
    yAxis: [
      {
        label: 'عدد المترددين',
        width: 60
      }
    ],

    height: 400
  }

  const date = new Date()
  const [year, setYear] = useState(date.getFullYear())
  const [month, setMonth] = useState(date.getMonth() + 1)
  const [areas, setAreas] = useState([])
  const dispacth = useDispatch()

  const { data } = useQuery({
    queryKey: ['report', 'appointments', year, month],
    queryFn: ({ signal }) => getTotoalAppointmentsByArea({ signal, year, month }),
    refetchInterval: 1000
  })
  const contentRef = useRef()

  const reactToPrintFn = useReactToPrint({
    contentRef
  })

  useEffect(() => {
    if (data) {
      let areas = data?.sort((a, b) => b.totalAppointments - a.totalAppointments).slice(0, 20)
      setAreas(areas)
    }
  }, [data])

  const chunkArray = (array, chunkSize) => {
    if (!array) {
      return
    }
    const result = []
    for (let i = 0; i < array?.length; i += chunkSize) {
      result.push(array?.slice(i, i + chunkSize))
    }
    return result
  }
  const dataChunks = chunkArray(areas, 15)

  return (
    <>
      <div className=" h-[38rem] flex flex-col justify-start items-start py-6 ">
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

        {data && data.length > 0 && (
          <>
            <div className="flex flex-col items-end h-full w-full">
              <button
                onClick={() => dispacth(dialogActions.handleAreasReportTable(data))}
                className="bg-mainBlue w-28 py-2 rounded-full font-bold text-white hover:opacity-55 duration-200 mx-10"
              >
                جدول البيانات
              </button>
              <div className="w-[90rem]">
                <BarChart
                  dataset={areas}
                  xAxis={[
                    {
                      dataKey: 'name'
                    }
                  ]}
                  series={[
                    { dataKey: 'ذكر', label: 'ذكر' },
                    { dataKey: 'أنثى', label: 'أنثى' }
                  ]}
                  {...chartSetting}
                />
              </div>
              <div className="w-[90rem] h-full hidden">
                <div ref={contentRef} className=" flex flex-col items-center justify-center pt-10 ">
                  <div className="w-full rotate-90 mt-28">
                    <BarChart
                      dataset={areas}
                      xAxis={[{ dataKey: 'itemId' }]}
                      series={[
                        { dataKey: 'ذكر', label: 'ذكر' },
                        { dataKey: 'أنثى', label: 'أنثى' }
                      ]}
                      width={1100}
                      height={700}
                    />
                  </div>
                  <div className="break-after-page" />
                  <h1 className="text-xl font-bold text-mainText my-12">
                    عدد المترددين الى العيادة المجمعة زاوية الدهماني عام {year} شهر {month}
                  </h1>
                  <div className="flex gap-4 h-full w-full flex-row-reverse flex-wrap justify-center items-center">
                    {dataChunks?.map((chunk, tableIndex) => (
                      <React.Fragment key={`table-${tableIndex}`}>
                        <div className=" border rounded-lg overflow-hidden ">
                          <table className="min-w-full divide-y divide-gray-200 border-4 border-mainBlue break-inside-avoid">
                            <thead className="bg-gray-50">
                              <tr className="bg-mainBlue text-white">
                                <th className="px-4 py-1 text-left">العدد</th>
                                <th className="px-4 py-1 text-left">المنطقة</th>
                                <th className="px-4 py-1 text-left">ر.ت</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 break-inside-avoid-page">
                              {chunk?.map((item, index) => (
                                <React.Fragment key={index}>
                                  <tr
                                    key={`row-${tableIndex}-${index}`}
                                    className={clsx('', {
                                      'bg-stone-200': index % 2 != 0
                                    })}
                                  >
                                    <td className="px-4 py-1 whitespace-nowrap">
                                      {item.totalAppointments}
                                    </td>
                                    <td className="px-4 py-1 whitespace-nowrap">{item.name}</td>
                                    <td className="px-4 py-1 whitespace-nowrap">{item.itemId}</td>
                                  </tr>
                                  <tr
                                    className={clsx('', { 'break-after-page': index === 15 })}
                                  ></tr>
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default AreasReport
