import React from 'react'

const ReportTypeRadioBtns = ({ reportType, setReportType }) => {
  const radioBtns = [
    // {
    //   key: 1,
    //   value: 'يومي'
    // },
    {
      key: 2,
      value: 'شهري'
    },
    {
      key: 3,
      value: 'سنوي'
    }
  ]
  return (
    <section className="flex gap-4 h-full justify-center items-center">
      {radioBtns.map((item) => (
        <div className="flex gap-1 items-center justify-center" key={item.key}>
          <label htmlFor={item.value} className="cursor-pointer text-xs font-bold text-mainText">
            {item.value}
          </label>
          <input
            type="radio"
            id={item.value}
            value={item.value}
            onChange={(event) => setReportType(event.target.value)}
            checked={reportType === item.value}
          />
        </div>
      ))}
    </section>
  )
}

export default ReportTypeRadioBtns
