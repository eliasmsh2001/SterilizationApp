import { Outlet, useLocation, useNavigate } from 'react-router'

const ReportsPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const links = [
    {
      key: 1,
      title: 'تقرير شامل',
      function: () => navigate('/reports'),
      style:
        location.pathname === '/reports'
          ? 'text-white bg-mainBlue rounded-xl min-w-32 py-2'
          : 'text-stone-400 font-extrabold min-w-32 py-2'
    }
  ]
  return (
    <div className="relative ">
      <div className="w-full flex items-center flex-row-reverse absolute -top-10 right-24">
        <h1 className="text-lg font-bold text-mainBlue mx-3">:التقارير</h1>
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

export default ReportsPage
