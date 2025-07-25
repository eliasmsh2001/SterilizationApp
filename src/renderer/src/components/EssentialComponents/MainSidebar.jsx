import clsx from 'clsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sidebarActions } from '../../util/slicers/sidebar.js'
import { useNavigate } from 'react-router'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LogoutIcon from '@mui/icons-material/Logout'
import CancelIcon from '@mui/icons-material/Cancel'
import { dialogActions } from '../../util/slicers/dialogSlicer.js'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import AssessmentIcon from '@mui/icons-material/Assessment'
import EqualizerIcon from '@mui/icons-material/Equalizer'

const MainSidebar = () => {
  const isExtended = useSelector((state) => state.mainSidebar.isExtended)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const { logout } = useLogout()
  const rowStyle = `w-full`
  const btnClass = `w-full h-full hover:bg-mainText/25 text-end py-8 px-2
   text-white font-semibold duration-200 flex items-center justify-end gap-4 `

  const toggleSidebar = () => {
    dispatch(sidebarActions.onToggleSidebar())
  }

  const userAuthority = JSON.parse(localStorage.getItem('user'))?.existingUser?.authority

  return (
    <main
      className={clsx(
        'h-screen relative flex flex-col justify-between right-0 bg-mainBlue shadow-2xl z-10 transition-all duration-300 overflow-hidden ',
        {
          'w-52 duration-200': isExtended,
          'w-14 duration-200': !isExtended
        }
      )}
    >
      <ul className="w-full flex flex-col">
        <li className={rowStyle}>
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
        </li>
        <li className={rowStyle}>
          <button className={btnClass} onClick={() => navigate('home')}>
            <span
              className={clsx('absolute right-14 ', {
                'opacity-0 ': !isExtended,
                'opacity-100  ': isExtended
              })}
            >
              الرئيسية
            </span>
            <HomeIcon style={{ height: 35, width: 35, fill: 'white' }} className="absolute" />
          </button>
        </li>
        {userAuthority === 'admin' && (
          <>
            <li className={rowStyle}>
              <button className={btnClass} onClick={() => navigate('archivedAppointments')}>
                <span
                  className={clsx('absolute right-14 ', {
                    'opacity-0 ': !isExtended,
                    'opacity-100  ': isExtended
                  })}
                >
                  الأرشيف
                </span>
                <Inventory2Icon
                  style={{ height: 35, width: 35, fill: 'white' }}
                  className="absolute"
                />
              </button>
            </li>
            <li className={rowStyle}>
              <button className={btnClass} onClick={() => navigate('statistics')}>
                <span
                  className={clsx('absolute right-14 ', {
                    'opacity-0 ': !isExtended,
                    'opacity-100  ': isExtended
                  })}
                >
                  الاحصائيات
                </span>
                <EqualizerIcon
                  style={{ height: 35, width: 35, fill: 'white' }}
                  className="absolute"
                />
              </button>
            </li>
            <li className={rowStyle}>
              <button className={btnClass} onClick={() => navigate('reports')}>
                <span
                  className={clsx('absolute right-14 ', {
                    'opacity-0 ': !isExtended,
                    'opacity-100  ': isExtended
                  })}
                >
                  التقارير
                </span>
                <AssessmentIcon
                  style={{ height: 35, width: 35, fill: 'white' }}
                  className="absolute"
                />
              </button>
            </li>

            <li className={rowStyle}>
              <button className={btnClass} onClick={() => navigate('settings')}>
                <span
                  className={clsx('absolute right-14 ', {
                    'opacity-0 ': !isExtended,
                    'opacity-100  ': isExtended
                  })}
                >
                  الإعدادات
                </span>
                <SettingsIcon
                  style={{ height: 35, width: 35, fill: 'white' }}
                  className="absolute"
                />
              </button>
            </li>
          </>
        )}
        {/* <li className={rowStyle}>
          <button className={btnClass} onClick={() => navigate('patientDetails')}>
            detes
          </button>
        </li> */}
      </ul>
      <ul className="w-full bg-alert">
        <li className={rowStyle}>
          <button
            className={`${btnClass}  hover:bg-black/15 border-b-2 border-black/25`}
            onClick={() => dispatch(dialogActions.hadleOpenDialog('logout'))}
          >
            <span
              className={clsx('absolute right-14 ', {
                'opacity-0  ': !isExtended,
                'opacity-100  ': isExtended
              })}
            >
              تسجيل خروج
            </span>
            <LogoutIcon
              style={{ height: 35, width: 35, fill: 'white' }}
              className="absolute right-1"
            />
          </button>
        </li>
        <li className={rowStyle}>
          <button
            className={`${btnClass}  hover:bg-black/15`}
            onClick={() => dispatch(dialogActions.hadleOpenDialog('exit'))}
          >
            <span
              className={clsx('absolute right-14', {
                'opacity-0 ': !isExtended,
                'opacity-100  ': isExtended
              })}
            >
              إغلاق البرنامج
            </span>
            <CancelIcon style={{ height: 35, width: 35, fill: 'white' }} className="absolute " />
          </button>
        </li>
      </ul>
    </main>
  )
}

export default MainSidebar
