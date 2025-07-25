import { useState } from 'react'
import ArchivedAppointmentsTable from '../components/Tables/ArchivedAppointmentsTable'
import { useQuery } from '@tanstack/react-query'

import { getAllArchivedAppointments } from '../util/apis/appointmentsApis'
import ClinicSelectbox from '../components/ReuseableComponents/ClinicSelectbox'
import { getAllClinics } from '../util/apis/clinicsAPIs'
import Loading from '../components/EssentialComponents/Loading'
import AreaSelectbox from '../components/ReuseableComponents/AreaSelectbox'
import UserSelectBox from '../components/ReuseableComponents/UserSelectBox'

const ArchivedAppointmentsPage = () => {
  const date = new Date()
  const [year, setYear] = useState(date.getFullYear())
  const [chosenClinic, setChosenClinic] = useState('الكل')
  const [chosenArea, setChosenArea] = useState('الكل')
  const [selectedUser, setSelectedUser] = useState('الكل')
  const [currentPeriod, setCurrentPeriod] = useState('الكل')
  const [month, setMonth] = useState(date.getMonth() + 1)
  const [day, setDay] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const { data, isError, isPending } = useQuery({
    queryKey: [
      'appointments',
      'archivedAppointments',
      year,
      month,
      searchTerm,
      chosenClinic,
      day,
      currentPeriod,
      chosenArea,
      selectedUser
    ],
    queryFn: ({ signal }) =>
      getAllArchivedAppointments({
        signal,
        year,
        month,
        day,
        searchTerm,
        chosenClinic,
        currentPeriod,
        chosenArea,
        selectedUser
      })
  })
  const { data: clinics } = useQuery({
    queryKey: ['clinics'],
    queryFn: getAllClinics
  })
  return (
    <section className="relative flex flex-col items-center justify-center pt-10 gap-4 w-full">
      <section className="pb-2 flex gap-4 flex-row-reverse items-center justify-center w-full">
        <div className="flex flex-col gap-1">
          <div className="flex justify-center flex-row-reverse gap-5 items-end w-full">
            <div className="flex gap-1 items-center justify-center">
              <label htmlFor="all" className="cursor-pointer text-xs font-bold text-mainText">
                الكل
              </label>
              <input
                type="radio"
                value={'الكل'}
                id="all"
                onChange={(event) => setCurrentPeriod(event.target.value)}
                checked={currentPeriod === 'الكل'}
              />
            </div>
            <div className="flex gap-1 items-center justify-center">
              <label htmlFor="morning" className="cursor-pointer text-xs font-bold text-mainText">
                الصباحية
              </label>
              <input
                type="radio"
                value={'الفترة الصباحية'}
                id="morning"
                onChange={(event) => setCurrentPeriod(event.target.value)}
                checked={currentPeriod === 'الفترة الصباحية'}
              />
            </div>
            <div className="flex gap-1 items-center justify-center">
              <label htmlFor="noon" className="cursor-pointer text-xs font-bold text-mainText">
                المسائية
              </label>
              <input
                type="radio"
                value={'الفترة المسائية'}
                id="noon"
                onChange={(event) => setCurrentPeriod(event.target.value)}
                checked={currentPeriod === 'الفترة المسائية'}
              />
            </div>
            <div className="flex gap-1 items-center justify-center">
              <label htmlFor="night" className="cursor-pointer text-xs font-bold text-mainText">
                الليلية
              </label>
              <input
                type="radio"
                value={'الفترة الليلية'}
                id="night"
                onChange={(event) => setCurrentPeriod(event.target.value)}
                checked={currentPeriod === 'الفترة الليلية'}
              />
            </div>
          </div>
          <input
            type="text"
            className="w-72 border-2 border-stone-400 py-2 px-4 outline-0 rounded-lg text-stone-500 font-semibold focus:border-mainBlue h-14"
            dir="rtl"
            placeholder="بحث باسم..."
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col items-end gap-1">
            <label htmlFor="" className="text-xs font-bold text-mainText">
              :اليوم
            </label>
            <input
              type="text"
              value={day}
              onChange={(event) => setDay(event.target.value)}
              autoFocus
              className="border-2 border-stone-400 p-2 max-w-14 rounded-xl text-center text-xl font-bold outline-0 focus:border-mainBlue h-14"
            />
          </div>

          <div className="flex flex-col items-end gap-1">
            <label htmlFor="" className="text-xs font-bold text-mainText">
              :الشهر
            </label>
            <input
              type="text"
              value={month}
              onChange={(event) => setMonth(event.target.value)}
              autoFocus
              className="border-2 border-stone-400 p-2 max-w-14 rounded-xl text-center text-xl font-bold outline-0 focus:border-mainBlue h-14"
            />
          </div>
          <div className="flex flex-col items-end gap-1">
            <label htmlFor="" className="text-xs font-bold text-mainText">
              :السنة
            </label>
            <input
              type="text"
              value={year}
              onChange={(event) => setYear(event.target.value)}
              autoFocus
              className="border-2 border-stone-400 py-2 max-w-28 rounded-xl text-center text-xl font-bold px-5 outline-0 focus:border-mainBlue h-14"
            />
          </div>
        </div>
        <div>
          <h1 className="text-mainText text-sx font-bold text-end">فلتر العيادات</h1>
          <ClinicSelectbox
            clinics={clinics}
            chosenClinic={chosenClinic}
            setChosenClinic={setChosenClinic}
            isArchive
          />
        </div>
        <div>
          <h1 className="text-mainText text-sx font-bold text-end">فلتر المنطقة</h1>
          <AreaSelectbox chosenArea={chosenArea} setChosenArea={setChosenArea} />
        </div>
        <div>
          <h1 className="text-mainText text-sx font-bold text-end">فلتر المستخدم</h1>
          <UserSelectBox selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        </div>
      </section>
      <h1 className="text-mainBlue text-xl font-extrabold w-64 text-center">
        {' '}
        {data ? data?.length : 0} إجمالي المواعيد{' '}
      </h1>
      <h1 className="absolute -top-20 right-20 text-white bg-secondaryText text-2xl font-extrabold py-2 w-44 rounded-lg text-center pointer-events-none">
        الأرشيف
      </h1>
      <div className="max-h-[25rem] overflow-y-scroll px-4">
        {isError && (
          <div className="flex flex-col gap-4">
            {' '}
            <h1 className="text-lg text-alert text-center font-extrabold">حدث خطأ داخلي</h1>
          </div>
        )}
        {data && !isError && data.length > 0 && !isPending && (
          <ArchivedAppointmentsTable data={data} />
        )}

        {!data && !isPending && (
          <h1 className="text-mainBlue font-bold text-xl ">
            لم يتم العثور على مواعيد تحتوي على هذه البيانات
          </h1>
        )}
      </div>
      {isPending && <Loading />}
    </section>
  )
}

export default ArchivedAppointmentsPage
