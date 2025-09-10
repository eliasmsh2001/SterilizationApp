import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarActions } from '../../util/slicers/sidebar.js'
import { useLocation, useNavigate, useSearchParams } from 'react-router'
import HomeIcon from '@mui/icons-material/Home'

import LogoutIcon from '@mui/icons-material/Logout'
import CancelIcon from '@mui/icons-material/Cancel'
import { dialogActions } from '../../util/slicers/dialogSlicer.js'

import { useQuery } from '@tanstack/react-query'
import { getAllDepartments } from '../../util/apis/departmentsAPIs.js'

const MainSidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const locaation = useLocation()
  // const { logout } = useLogout()
  const rowStyle = `w-full`
  const btnClass = `w-full h-full hover:bg-mainText/25 text-end py-4 px-2
    font-semibold duration-200 flex items-center justify-end gap-4 `

  const toggleSidebar = () => {
    dispatch(sidebarActions.onToggleSidebar())
  }

  const [searchParams] = useSearchParams()
  const exportSearchParams = () => {
    const params = Object.fromEntries(searchParams.entries())
    return params.id // Exported search parameters
  }


  const userAuthority = JSON.parse(localStorage.getItem('user'))?.existingUser?.authority

  const { data, isError } = useQuery({
    queryKey: ['departments'],
    queryFn: getAllDepartments
  })
//	const data = []
  return (
    <main
      className={clsx(
        'h-screen relative flex flex-col w-52 justify-between bg-mainBlue shadow-2xl z-10 t overflow-hidden '
      )}
    >
      <ul className="w-full h-[40rem] mt-24 overflow-y-scroll  text-white">
        {/* <li className={rowStyle}>
          <button
            onClick={toggleSidebar}
            className={clsx('py-2 bg-secondaryText w-full flex justify-center', {})}
          >
            {isExtended ? (
              <ArrowForwardIcon style={{ height: 40, fill: 'white' }} className="" />
            ) : (
              <ArrowBackIcon style={{ height: 35, fill: 'white' }} />
            )}
          </button>
        </li> */}
        <li className={rowStyle}>
          <button
            className={clsx(btnClass, {
              'bg-white text-mainText': locaation.pathname === '/'
            })}
            onClick={() => navigate('/')}
          >
            الرئيسية
            <HomeIcon
              style={{
                height: 35,
                width: 35,
                fill: locaation.pathname === '/' ? 'black' : 'white'
              }}
            />
          </button>
        </li>

        {data && !isError &&
          data?.map((item) => (
            <li
              key={item?.id}
              className={clsx(rowStyle, {
                'bg-white text-mainText pointer-events-none': exportSearchParams() === item.id,
                'bg-transparet text-mainText': exportSearchParams() !== item.id
              })}
            >
              <button
                className={clsx(btnClass, {
                  'bg-white text-mainText': exportSearchParams() === item.id,
                  'bg-transparet text-white': exportSearchParams() !== item.id
                })}
                onClick={() => navigate(`department?id=${item?.id}`)}
              >
                {item?.name}
              </button>
            </li>
          ))}

        <li className="flex justify-center items-center w-full">
          <button
            onClick={() => dispatch(dialogActions.hadleOpenDialog('newDepartment'))}
            className="bg-unique p-2 text-white font-bold w-44"
          >
            أضف قسم
          </button>
        </li>
      </ul>
      <ul className="w-full bg-alert">
        {/* <li className={rowStyle}>
          <button
            className={`${btnClass} text-white hover:bg-black/15 border-b-2 border-black/25`}
            onClick={() => dispatch(dialogActions.hadleOpenDialog('logout'))}
          >
            تسجيل خروج
            <LogoutIcon style={{ height: 35, width: 35, fill: 'white' }} />
          </button>
        </li> */}
        <li className={rowStyle}>
          <button
            className={`${btnClass} text-white hover:bg-black/15`}
            onClick={() => dispatch(dialogActions.hadleOpenDialog('exit'))}
          >
            إغلاق البرنامج
            <CancelIcon style={{ height: 35, width: 35, fill: 'white' }} />
          </button>
        </li>
      </ul>
    </main>
  )
}

export default MainSidebar
