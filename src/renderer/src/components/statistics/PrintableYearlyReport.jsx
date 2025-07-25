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

const PrintableYearlyReport = ({ id, data, year }) => {
  return (
    <div id={id} className=" h-full flex flex-col justify-center items-center gap-16 pt-16">
      <h1 className="text-xl font-bold text-mainText ">
        عدد المترددين الى العيادة المجمعة زاوية الدهماني عام {year}
      </h1>

      {!data ||
        (!data.length > 0 && (
          <>
            <h1 className="text-alert font-bold text-lg  text-center w-full">
              حدث عطل ما, لم يتم إجياد التقرير
            </h1>
            <p>{error}</p>
          </>
        ))}

      {data && data.length > 0 && (
        <div className="flex flex-row-reverse h-[35rem]">
          <table className="border-4 border-mainBlue overflow-hidden relative">
            <thead className="bg-mainBlue text-white font-bold">
              <tr c>
                <th className="w-24 text-center font-bold -translate-y-2">العدد</th>
                <th className="w-24 text-center font-bold -translate-y-2">الشهر</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => (
                  <tr
                    key={item.month}
                    className={clsx({
                      'bg-stone-100': index % 2 != 0,
                      'bg-mainBlue/25': index % 2 === 0
                    })}
                  >
                    <td className="text-center text-mainText font-bold -translate-y-2">
                      {item.appointments}
                    </td>
                    <td className="text-center text-mainText font-bold -translate-y-2">
                      {item.month}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="w-[60rem]">
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
        </div>
      )}
    </div>
  )
}

export default PrintableYearlyReport
