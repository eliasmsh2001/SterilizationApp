import React from 'react'
import clsx from 'clsx'
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

const PrintableAreasReport = ({ chartRef, contentRef, id, data, year, month }) => {
  const chunkArray = (array, chunkSize) => {
    if (!array) {
      return
    }
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  // Split data into chunks
  const dataChunks = chunkArray(data, 10)
  return (
    <div id={id} className="flex flex-col  justify-center items-center gap-16 pt-16 ">
      <h1 className="text-xl font-bold text-mainText ">
        عدد المترددين الى العيادة المجمعة زاوية الدهماني عام {year} شهر {month}
      </h1>

      {!data ||
        (!data?.length > 0 && (
          <>
            <h1 className="text-alert font-bold text-lg  text-center w-full">
              حدث عطل ما, لم يتم إجياد التقرير
            </h1>
            <p>{error}</p>
          </>
        ))}

      {data && data?.length > 0 && (
        <div className="w-full ">
          <div
            ref={contentRef}
            className="flex gap-4 h-full w-full flex-row-reverse flex-wrap break-inside-avoid-page "
          >
            {dataChunks.map((chunk, tableIndex) => (
              <>
                <div key={`table-${tableIndex}`} className=" border rounded-lg overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-200 border-4 border-mainBlue break-inside-avoid-page">
                    <thead className="bg-gray-50">
                      <tr className="bg-mainBlue text-white">
                        <th className="px-4 py-2 text-left">العدد</th>
                        <th className="px-4 py-2 text-left">المنطقة</th>
                        <th className="px-4 py-2 text-left">الرقم</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 break-inside-avoid-page">
                      {chunk.map((item, index) => (
                        <tr
                          key={`row-${tableIndex}-${index}`}
                          className={clsx('', { 'bg-stone-200 break-after-avoid': index % 2 != 0 })}
                        >
                          <td className="px-4 py-2 whitespace-nowrap">{item.totalAppointments}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{item.name}</td>
                          <td className="px-4 py-2 whitespace-nowrap">{item.itemId}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ))}
          </div>
          <div ref={chartRef} className="w-[200rem] h-[90rem]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={200}
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
                <XAxis dataKey="itemId" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="ذكر" stackId="a" fill="#8884d8" />
                <Bar dataKey="أنثى" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  )
}

export default PrintableAreasReport
