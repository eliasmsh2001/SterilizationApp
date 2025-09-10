import { useNavigate } from 'react-router'
import { getAllDepartments } from '../util/apis/departmentsAPIs'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  deleteSession,
  editSessionData,
  getDevicesData,
  newDeviceSesstion
} from '../util/apis/devicesAPIs'
import { useState } from 'react'
import { queryClient } from '../util/apis/httpUrl'
import DeleteIcon from '@mui/icons-material/Delete'

const HomePage = () => {
  const navigate = useNavigate()
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  const { data: departments } = useQuery({
    queryKey: ['departments'],
    queryFn: getAllDepartments
  })
  const { data: devicesData } = useQuery({
    queryKey: ['devices', date],
    queryFn: () => getDevicesData({ date })
  })

  const { mutate: addSession } = useMutation({
    mutationKey: ['newSession'],
    mutationFn: newDeviceSesstion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['devices'] })
    }
  })

  const { mutate: deleteThisSession } = useMutation({
    mutationKey: ['deleteSession'],
    mutationFn: deleteSession,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['devices'] })
    }
  })
  const { mutate: editSession } = useMutation({
    mutationKey: ['deleteSession'],
    mutationFn: editSessionData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['devices'] })
    }
  })

  return (
    <main className="flex flex-col gap-6 px-8 relative items-center mt-10 justify-start h-[35rem] overflow-y-scroll">
      {/* {appointmentsIsPending && (
          <div className="w-full flex justify-center items-center">
            <Loading />
          </div>
        )} */}

      <div className="flex flex-wrap items-center justify-center gap-6">
        {departments &&
          departments?.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/department?id=${item?.id}`)}
              dir="rtl"
              className="bg-mainBlue/25 text-mainText  p-4 flex flex-col gap-1 items-center justify-center hover:opacity-45 hover:scale-105 duration-200"
            >
              <h1 className="text-xl font-extrabold">{item?.name}</h1>
              <h1 className="text-xs">
                تاريخ أخر قائمة -{' '}
                {item?.carts.sort((a, b) => new Date(b.date) - new Date(a.date))[0]?.date}
              </h1>
            </div>
          ))}
      </div>

      <div className="flex flex-col items-end gap-2">
        <input
          className="p-2 text-mainText border-2 border-mainText rounded-md outline-0 focus:border-mainBlue"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="flex gap-6 justify-center w-full">
          {devicesData &&
            devicesData?.map((item) => (
              <div
                key={item?.id}
                className=" w-[25rem] flex flex-col items-center justify-between border-2 border-mainText rounded-md min-h-44 "
              >
                <div className="w-full flex flex-col">
                  <h1 className="w-full text-center py-2 text-xl text-white font-bold bg-mainText">
                    {item?.name}
                  </h1>
                  <ul>
                    {item.sessions?.map((subItem) => (
                      <li
                        key={subItem.id}
                        className="flex flex-row-reverse justify-evenly items-center border-b-2 border-mainText py-2 gap-2"
                      >
                        <div className="flex flex-col items-center">
                          <label htmlFor="startingTime" className="text-xs font-bold text-mainText">
                            :وقت البدء
                          </label>
                          <input
                            className="border-2 border-mainText outline-0 p-1 focus:border-mainBlue "
                            type="time"
                            name="startingTime"
                            value={subItem?.startingTime}
                            onChange={(e) =>
                              editSession({
                                id: subItem?.id,
                                property: 'startingTime',
                                value: e.target.value
                              })
                            }
                          />
                        </div>
                        <div className="flex flex-col p-1 items-center bg-mainText text-white">
                          <label htmlFor="startingTime" className="text-xs font-bold ">
                            :وقت الإنتهاء
                          </label>
                          <h1>{subItem?.stoppingTime}</h1>
                          {/* <input
                            className="border-2 border-mainText outline-0 p-1 focus:border-mainBlue "
                            type="time"
                            name="startingTime"
                            value={subItem?.stoppingTime}
                            onChange={(e) =>
                              editSession({
                                id: subItem?.id,
                                property: 'stoppingTime',
                                value: e.target.value
                              })
                            }
                          /> */}
                        </div>
                        <div className="flex flex-col items-center">
                          <label htmlFor="quantity" className="text-xs font-bold text-mainText">
                            عدد الأدوات
                          </label>
                          <input
                            className="border-2 border-mainText outline-0 p-1 focus:border-mainBlue w-20"
                            type="number"
                            name="quantity"
                            value={subItem?.itemsQuantity}
                            onChange={(e) =>
                              editSession({
                                id: subItem?.id,
                                property: 'quantity',
                                value: e.target.value
                              })
                            }
                          />
                        </div>
                        <button
                          onClick={() => deleteThisSession({ id: subItem?.id })}
                          className="bg-alert size-10 rounded-full scale-90"
                        >
                          <DeleteIcon style={{ fill: 'white' }} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => addSession({ deviceId: item.id, date })}
                  className="bg-unique w-full py-2 text-white font-bold self-end"
                >
                  أضف
                </button>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}

export default HomePage
