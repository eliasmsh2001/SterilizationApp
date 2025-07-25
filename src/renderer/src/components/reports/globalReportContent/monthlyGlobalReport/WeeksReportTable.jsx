import NavigationIcon from '@mui/icons-material/Navigation'

const WeeksReportTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr className="bg-mainText text-white font-bold h-8">
          <th className="w-24 tect-center">الفرق</th>
          <th className="w-24 tect-center">الشهر السابق</th>
          <th className="w-24 tect-center">الإجمالي</th>
          <th className="w-24 tect-center">أطفال</th>
          <th className="w-24 tect-center">نساء</th>
          <th className="w-24 tect-center">رجال</th>
          <th className="w-48 text-center">الاسبوع</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-mainBlue/30 h-9">
          <th>
            {data?.week1.difference < 0 ? (
              <NavigationIcon style={{ fill: 'red' }} className="rotate-180" />
            ) : (
              <NavigationIcon style={{ fill: 'green' }} />
            )}{' '}
            {Math.abs(Number(data?.week1.difference))}
          </th>
          <th>{data?.week1.previousMonth}</th>
          <th>{data?.week1.total}</th>
          <th>{data?.week1.children}</th>
          <th>{data?.week1.female}</th>
          <th>{data?.week1.male}</th>
          <th>الأسبوع الأول 1 - 7</th>
        </tr>
        <tr className="bg-slate-200 h-9">
          <th>
            {data?.week2.difference < 0 ? (
              <NavigationIcon style={{ fill: 'red' }} className="rotate-180" />
            ) : (
              <NavigationIcon style={{ fill: 'green' }} />
            )}{' '}
            {Math.abs(Number(data?.week2.difference))}
          </th>
          <th>{data?.week2.previousMonth}</th>
          <th>{data?.week2.total}</th>
          <th>{data?.week2.children}</th>
          <th>{data?.week2.female}</th>
          <th>{data?.week2.male}</th>
          <th>الأسبوع الثاني 8 - 14</th>
        </tr>
        <tr className="bg-mainBlue/30 h-9">
          <th>
            {data?.week3.difference < 0 ? (
              <NavigationIcon style={{ fill: 'red' }} className="rotate-180" />
            ) : (
              <NavigationIcon style={{ fill: 'green' }} />
            )}{' '}
            {Math.abs(Number(data?.week3.difference))}
          </th>
          <th>{data?.week3.previousMonth}</th>
          <th>{data?.week3.total}</th>
          <th>{data?.week3.children}</th>
          <th>{data?.week3.female}</th>
          <th>{data?.week3.male}</th>
          <th>الأسبوع الثالث 15 - 21</th>
        </tr>
        <tr className="bg-slate-200 h-9">
          <th>
            {data?.week4.difference < 0 ? (
              <NavigationIcon style={{ fill: 'red' }} className="rotate-180" />
            ) : (
              <NavigationIcon style={{ fill: 'green' }} />
            )}{' '}
            {Math.abs(Number(data?.week4.difference))}
          </th>
          <th>{data?.week4.previousMonth}</th>
          <th>{data?.week4.total}</th>
          <th>{data?.week4.children}</th>
          <th>{data?.week4.female}</th>
          <th>{data?.week4.male}</th>
          <th>الأسبوع الأخير 22 - 31/30</th>
        </tr>
        <tr className="bg-mainText text-white h-9">
          <th>
            {data?.total.difference < 0 ? (
              <NavigationIcon style={{ fill: 'red' }} className="rotate-180" />
            ) : (
              <NavigationIcon style={{ fill: 'green' }} />
            )}
            {Math.abs(Number(data?.total.difference))}
          </th>
          <th>{data?.total.previousMonth}</th>
          <th>{data?.total.total}</th>
          <th>{data?.total.children}</th>
          <th>{data?.total.female}</th>
          <th>{data?.total.male}</th>
          <th>الإجمالي</th>
        </tr>
      </tbody>
    </table>
  )
}

export default WeeksReportTable
