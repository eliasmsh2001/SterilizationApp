import clsx from 'clsx'

export const PrintableMenu = ({ data, thisRef }) => {
  return (
    <div ref={thisRef} className="relative h-screen m-4 px-8 w-[45rem] flex flex-col items-center justify-start">
      <div dir="rtl" className="flex gap-4 items-end justify-start w-full">
        <h1 className="bg-mainText text-white text-2xl font-bold min-w-24 text-center px-4 py-2 rounded-md">
          ID: {data?.id}
        </h1>
        <div className="flex gap-2 px-4 py-2 bg-mainText text-white rounded-md">
          <h1 className="text-xl font-bold ">{data?.day}</h1> -
          <h1 className="text-xl font-bold">{data?.date}</h1>
        </div>
        <h1 className="bg-transparent border-4 border-mainText text-mainText text-2xl font-bold min-w-24 text-center px-4 py-2 rounded-md">
          {data?.department}
        </h1>
      </div>

      <table dir="rtl" className="border-2 border-mainText  mt-8">
        <thead className="bg-mainText text-white">
          <tr className="border-2 border-mainText text-[.6rem]">
            <th className="border-l-2 min-w-6"></th>
            <th className="w-80 border-l-2">اسم الصنف</th>
            <th className="w-16 border-l-2">العدد</th>
            <th className="w-32 border-l-2">التاريخ</th>
            <th className="w-24 border-l-2">وقت التسليم</th>
            <th className="w-40 border-l-2">المستلم قبل التعقيم</th>
            <th className="w-40 border-l-2">المسلم قبل التعقيم</th>
            <th className="w-28">حالة الأداة</th>
          </tr>
        </thead>
        <tbody>
          {data?.items &&
            data.items?.map((item, index) => (
              <tr
                key={item.id}
                className={clsx('border-b-2 border-mainText text-xs  text-mainText font-bold', {
                  ' bg-mainBlue/20': index % 2 === 0
                })}
              >
                <td className="border-l-2 border-mainText text-center">{index + 1}</td>
                <td className="border-l-2 border-mainText pr-2">{item?.name}</td>
                <td className="border-l-2 border-mainText text-center">{item?.quantity}</td>
                <td className="border-l-2 border-mainText text-center">{item?.date}</td>
                <td className="border-l-2 border-mainText text-center">{item?.deliveringTime}</td>
                <td className="border-l-2 border-mainText text-center">
                  {item?.preSterilizationClient}
                </td>
                <td className="border-l-2 border-mainText text-center">
                  {item?.preSterilazationProvidor}
                </td>
                <td className="border-l-2 border-mainText text-center">{item?.toolState}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="flex w-full flex-col gap-10 absolute bottom-24 right-8">
        <div className="flex flex-col gap-2 text-base text-mainText font-bold">
          <h1 dir="rtl">ساعة الدخول الى الجهاز: {data?.machineEnteringTime} </h1>
          <h1 dir="rtl">ساعة الخروج من الجهاز: {data?.machineLeavingTime} </h1>
          <h1 dir="rtl">حالة التعقيم: {data?.sterilazationState} </h1>
        </div>
        <div className="flex flex-col items-end gap-12">
          <div className="flex flex-row-reverse gap-4 text-sm font-bold text-bold items-center">
            <h1 dir="rtl">اسم المستلم /..........................................</h1>
            <h1 dir="rtl">التوقيع /......................</h1>
          </div>
          <div className="flex flex-row-reverse gap-4 text-sm font-bold text-bold items-center">
            <h1 dir="rtl">اسم المسلم /...........................................</h1>
            <h1 dir="rtl">التوقيع /......................</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
