import { useQuery } from '@tanstack/react-query'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import AddIcon from '@mui/icons-material/Add'
import { getAllUsers } from '../../util/apis/UserAPIs'
import Loading from '../EssentialComponents/Loading'

const UsersSettings = () => {
  const cellStyle = `text-sm font-semibold text-mainText border-l-2 border-black/35 px-2 py-1`
  const dispatch = useDispatch()

  const { data, isError, isPending } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers
  })

  return isPending ? (
    <div className="w-full flex justify-center">
      <Loading />
    </div>
  ) : (
    <section className="w-full h-full border-t-2 border-mainText p-2 flex flex-col items-end">
      <button
        onClick={() => dispatch(dialogActions.handleAddNewUser('newUser'))}
        className="bg-mainBlue px-6 py-2 text-white hover:opacity-45 duration-200"
      >
        <AddIcon style={{ fill: 'white' }} />
        مستخدم جديد
      </button>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-mainText text-xl font-bold">المستخدون ({data?.length})</h1>
        <table dir="rtl" className=" rounded-xl border-2 border-mainBlue ">
          <thead>
            <tr className="bg-mainBlue text-white text-sm font-bold">
              <th className="w-10 py-1">ر.ت</th>
              <th className="w-72 py-1">الاسم</th>
              <th className="w-24 py-1">الصلاحية</th>
              <th className="w-32 py-1 text-xs">المواعيد المسجلة هذا الشهر</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.length > 0 &&
              data?.map((item, index) => (
                <tr
                  key={item.id}
                  className={clsx('border-y-2 border-black/35 cursor-pointer', {
                    'bg-mainText/15': index % 2 === 0,
                    'bg-transparent': index % 2 !== 0
                  })}
                >
                  <td className={`${cellStyle} w-10`}>{index + 1}</td>
                  <td className={`${cellStyle} w-72`}>{item?.username}</td>
                  <td className={`${cellStyle} w-24`}>{item?.authority}</td>
                  <td className={`${cellStyle} w-32`}>
                    {
                      item?.archivedAppointments?.filter(
                        (item) =>
                          new Date(item.date).getMonth() === new Date().getMonth() &&
                          new Date(item.date).getFullYear() === new Date().getFullYear()
                      ).length
                    }
                  </td>
                  {item.username !== 'Admin' && (
                    <td className={`${cellStyle} flex py-0 px-0 items-center justify-center`}>
                      <button
                        onClick={() =>
                          dispatch(
                            dialogActions.handleDeleteUser({ userId: item, dialog: 'editUser' })
                          )
                        }
                        className="bg-mainBlue h-full  w-full"
                      >
                        <EditIcon style={{ fill: 'white' }} />
                      </button>
                      <button
                        onClick={() =>
                          dispatch(
                            dialogActions.handleDeleteUser({
                              userId: item.id,
                              dialog: 'deleteUser'
                            })
                          )
                        }
                        className="bg-alert h-full"
                      >
                        <DeleteIcon style={{ fill: 'white' }} />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default UsersSettings
