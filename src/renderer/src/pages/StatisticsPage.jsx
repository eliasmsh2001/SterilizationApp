import { Outlet, useLocation, useNavigate } from 'react-router'

const StatisticsPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const links = [
    {
      key: 1,
      title: 'عدد المترددين',
      function: () => navigate('/statistics'),
      style:
        location.pathname === '/statistics'
          ? 'text-white bg-mainBlue rounded-xl min-w-32 py-2'
          : 'text-stone-400 font-extrabold min-w-32 py-2'
    },
    {
      key: 2,
      title: 'المناطق',
      function: () => navigate('/statistics/areas'),
      style:
        location.pathname === '/statistics/areas'
          ? 'text-white bg-mainBlue rounded-xl min-w-32 py-2'
          : 'text-stone-400 font-extrabold min-w-32 py-2'
    },
    {
      key: 3,
      title: 'العيادات',
      function: () => navigate('/statistics/clinics'),
      style:
        location.pathname === '/statistics/clinics'
          ? 'text-white bg-mainBlue rounded-xl min-w-32 py-2'
          : 'text-stone-400 font-extrabold min-w-32 py-2'
    }
  ]
  return (
    <div className="relative ">
      <div className="w-full flex items-center flex-row-reverse absolute -top-10 right-24">
        <h1 className="text-lg font-bold text-mainBlue">:الإحصائيات</h1>
        {links.map((item) => (
          <button key={item.key} onClick={item.function} className={item.style}>
            {item.title}
          </button>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default StatisticsPage
