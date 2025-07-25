import clsx from 'clsx'
import { Outlet, useLocation, useNavigate } from 'react-router'

const SettingsPage = () => {
  const btnStyle = `text-stone-400 font-bold py-4 hover:bg-mainText/5 duration-200`
  const location = useLocation()
  const navigate = useNavigate()

  const links = [
    {
      key: 1,
      title: 'المستخدمون',
      function: () => navigate('/settings'),
      style: clsx(btnStyle, {
        'bg-mainBlue text-white pointer-events-none': location.pathname === '/settings',
        'pointer-events-auto': location.pathname !== '/settings'
      })
    },
    {
      key: 2,
      title: 'العيادات',
      function: () => navigate('/settings/clinics'),
      style: clsx(btnStyle, {
        'bg-mainBlue text-white pointer-events-none': location.pathname === '/settings/clinics',
        'pointer-events-auto': location.pathname !== '/settings/clinics'
      })
    },
    {
      key: 3,
      title: 'المناطق',
      function: () => navigate('/settings/areas'),
      style: clsx(btnStyle, {
        'bg-mainBlue text-white pointer-events-none': location.pathname === '/settings/areas',
        'pointer-events-auto': location.pathname !== '/settings/areas'
      })
    }
  ]
  return (
    <section className="h-[35rem] flex flex-row-reverse w-full">
      <div className="flex flex-col w-44 border-l-2 border-mainText">
        {links.map((link) => (
          <button className={link.style} key={link.key} onClick={link.function}>
            {link.title}
          </button>
        ))}
      </div>
      <Outlet />
    </section>
  )
}

export default SettingsPage
