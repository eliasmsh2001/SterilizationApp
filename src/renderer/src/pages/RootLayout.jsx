import { Outlet } from 'react-router'
import MainSidebar from '../components/EssentialComponents/MainSidebar'
import logoimg from '../assets/images.jpg'
import UseAuthContext from '../hooks/UseAuthContext'
import LogoutComfirmationDialog from '../components/dialogs/LogoutComfirmationDialog'
import CloseAppConfirmation from '../components/dialogs/CloseAppConfirmation'
import waveImage from '../assets/wave.svg'
import { useEffect, useState } from 'react'
import NewDepartmentDialog from '../components/dialogs/NewDepartmentDialog'
import AddAnItemDialog from '../components/dialogs/AddAnItemDialog'
import CartConfirmation from '../components/dialogs/CartConfirmation'
import CartDetailsDialog from '../components/dialogs/CartDetailsDialog'
import CartEditConfirmation from '../components/dialogs/CartEditConfirmation'

const RootLayout = () => {
  const [time, setTime] = useState(new Date().toTimeString().slice(0, 5))
  const today = new Date().toUTCString().slice(0, 16)
  const { user } = UseAuthContext()
  const [username, setUserName] = useState()
  const hour = new Date().getHours()

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date().toTimeString().slice(0, 5))
    }, 1000)
    setUserName(JSON.parse(localStorage.getItem('user'))?.existingUser?.username)

    // Cleanup the interval on component unmount

    return () => clearInterval(timerID)
  }, [time])

  //
  return (
    <>
      <main className="relative flex  flex-row-reverse ">
        <img src={waveImage} className="fixed -z-10" />
        <MainSidebar />
        <section className=" flex flex-col gap-4 left-5 top-5 w-full">
          <div className="w-full flex gap-4  justify-between px-8 py-4 ">
            <div className="flex items-center gap-4">
              <img src={logoimg} alt="" className=" size-48 rounded-full " />
              <div className="flex flex-col gap-2 items-center  text-white font-bold text-lg">
                <h1>العيادة المجمعة زاوية الدهماني</h1>
                <h1>قسم التعقيم</h1>
              </div>
            </div>
            <div className="text-lg font-bold text-white py-10 flex flex-row-reverse gap-4">
              {username && <h1> {username} مرحباً</h1>}
            </div>
            <div className="text-lg font-bold text-white py-10 flex flex-row-reverse gap-4">
              <h1>{time}</h1>
              <h1>{today}</h1>
            </div>
          </div>
          <Outlet />
        </section>
      </main>
      <LogoutComfirmationDialog />
      <CloseAppConfirmation />
      <NewDepartmentDialog />
      <AddAnItemDialog />
      <CartConfirmation />
      <CartDetailsDialog />
      <CartEditConfirmation />
    </>
  )
}

export default RootLayout
