import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { deleteArea, editArea, getEveryArea } from '../../util/apis/appointmentsApis'
import clsx from 'clsx'
import AreaSelectbox from '../ReuseableComponents/AreaSelectbox'
import { queryClient } from '../../util/apis/httpUrl'

const AreasSettings = () => {
  const [areaToEdit, setAreaToEdit] = useState(null)
  const [chosenArea, setChosenArea] = useState(null)
  const [itemToDelete, setItemToDelete] = useState(null)
  const [itemToSwitchArrea, setItemToSwitchArrea] = useState(null)

  const { data } = useQuery({ queryKey: ['areas'], queryFn: getEveryArea })
  const { mutate: deleteAreaHandler } = useMutation({
    mutationKey: ['areas'],
    mutationFn: deleteArea,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['areas'] })
      setItemToDelete(null)
      setChosenArea(null)
      setAreaToEdit(null)
      setItemToSwitchArrea(null)
    }
  })
  const { mutate: editAppointmentArea } = useMutation({
    mutationKey: ['areas'],
    mutationFn: editArea,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['areas'] })
      setItemToDelete(null)
      setChosenArea(null)
      setAreaToEdit(null)
      setItemToSwitchArrea(null)
    }
  })

  const handleDelete = () => {
    deleteAreaHandler({ id: itemToDelete?.id })
  }
  const handleEdit = () => {
    editAppointmentArea({ oldId: itemToSwitchArrea?.id, chosenArea })
  }

  return (
    <section className="flex flex-row-reverse w-full h-full border-t-2 border-mainText p-2 ">
      <ul className="h-[35rem] overflow-scroll px-5 w-64 ">
        <li className="text-center text-mainBlue font-bold my-2">انقر علو العنوان لتعديله</li>
        <li className="bg-mainBlue py-2">
          <h1 className="text-center text-white font-bold">العنوان</h1>
        </li>
        {data &&
          data?.length &&
          data.map((item, index) => (
            <React.Fragment key={item.id}>
              <li
                onClick={() => {
                  setAreaToEdit(item)
                  setItemToDelete(null)
                  setChosenArea(null)
                  setItemToSwitchArrea(null)
                }}
                className={clsx(
                  'flex flex-row-reverse gap-10 py-1 border-x-2 border-mainBlue px-2 cursor-pointer',
                  {
                    'bg-stone-200': index % 2 != 0
                  }
                )}
              >
                <h1>{item.name}</h1>
              </li>
            </React.Fragment>
          ))}
      </ul>

      {areaToEdit && (
        <section className="w-96 bg-stone-200 rounded-xl flex flex-col items-center p-4">
          <h1 className="text-2xl font-bold">{areaToEdit.name}</h1>
          <h1 className="font-extrabold">
            {areaToEdit.archivedAppointments?.length} عدد المواعيد المسجلة
          </h1>

          <div className="my-10">
            <h1 className="text-mainBlue font-bold text-center ">
              استبدال عنوان جميد المواعيد المسجلة في هذه المنطقة بمنطقة أخرى
            </h1>
            <AreaSelectbox chosenArea={chosenArea} setChosenArea={setChosenArea} editting />
          </div>

          {!itemToDelete && !itemToSwitchArrea && (
            <div className="flex flex-col gap-4 w-full">
              <button
                className="bg-mainBlue rounded-md w-full py-2 text-white"
                onClick={() => setItemToSwitchArrea(areaToEdit)}
              >
                تأكيد
              </button>
              <button
                onClick={() => {
                  setItemToDelete(null)
                  setChosenArea(null)
                  setAreaToEdit(null)
                }}
                className="bg-mainBlue rounded-md w-full py-2 text-white"
              >
                إلغاء
              </button>
              <button
                onClick={() => {
                  setItemToDelete(areaToEdit)
                }}
                className="bg-alert rounded-md w-full py-2 text-white"
              >
                مسح
              </button>
            </div>
          )}

          {itemToDelete && (
            <div>
              <h1 className="text-mainText font-extrabold text-lg text-center">
                هل انت متأكد من المسح؟
              </h1>
              {itemToDelete.archivedAppointments?.length > 0 && (
                <h1 className="text-alert text-sm font-bold">
                  "سيتم تغيير عناوين المواعيد الى "غير معروف
                </h1>
              )}

              <div className="flex gap-5 justify-center my-5">
                <button
                  onClick={handleDelete}
                  className="bg-mainBlue py-2 px-6 rounded-full text-white font-bold"
                >
                  تأكيد
                </button>
                <button
                  className="text-mainBlue text-lg font-extrabold"
                  onClick={() => setItemToDelete(null)}
                >
                  إلغاء
                </button>
              </div>
            </div>
          )}
          {itemToSwitchArrea && (
            <div>
              <h1 className="text-mainText font-extrabold text-lg text-center">
                هل انت متأكد من هذا التعديل؟
              </h1>
              <h1 className="text-alert text-sm font-bold">سيتم مسح هذا العنوان</h1>
              <div className="flex gap-5 justify-center my-5">
                <button
                  onClick={handleEdit}
                  className="bg-mainBlue py-2 px-6 rounded-full text-white font-bold"
                >
                  تأكيد
                </button>
                <button
                  className="text-mainBlue text-lg font-extrabold"
                  onClick={() => setItemToSwitchArrea(null)}
                >
                  إلغاء
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </section>
  )
}

export default AreasSettings
