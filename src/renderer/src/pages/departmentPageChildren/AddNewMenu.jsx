import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { getDepartmentDetails } from '../../util/apis/departmentsAPIs'
import NewCartTable from '../../components/Tables/NewCartTable'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../util/slicers/cartSlicer'
import { dialogActions } from '../../util/slicers/dialogSlicer'
import NewMenuFormMainData from './NewMenuFormMainData'

const AddNewMenu = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const cartData = useSelector((state) => state.cart.cartData)
  const [error, setError] = useState(null)
  const [searchParams] = useSearchParams()
  const exportSearchParams = () => {
    const params = Object.fromEntries(searchParams.entries())
    return params.id // Exported search parameters
  }
  const navigate = useNavigate()
  const dispach = useDispatch()

  const { data } = useQuery({
    queryKey: ['departmentDetails', exportSearchParams()],
    queryFn: () => getDepartmentDetails({ id: exportSearchParams() })
  })

  return (
    <div className="flex flex-col  relative">
      <h1 className="absolute right-8 -top-16 bg-mainBlue text-white text-2xl font-bold min-w-32 px-4 py-2 text-center rounded-md">
        {data?.name}
      </h1>
      <NewMenuFormMainData />
      <section className=" relative flex gap-4 flex-row-reverse h-[30rem]">
        {data?.items && (
          <section className="w-[15rem] py-5 justify-end flex gap-3 flex-wrap max-h-[35rem] overflow-y-scroll">
            {data.items?.map((item) => (
              <button
                onClick={() => {
                  setError(null)
                  dispach(cartActions.handleAddItem({ name: item.name, id: item.id }))
                }}
                className="bg-mainBlue/25 text-mainBlue min-h-12 font-bold w-full rounded-full text-wrap py-1 px-6 hover:opacity-45  duration-200"
                key={item?.id}
              >
                {item?.name}
              </button>
            ))}
          </section>
        )}

        <div className="h-full w-1 bg-mainText " />

        <div className="h-[30rem] overflow-scroll">
          <NewCartTable />
        </div>
      </section>
      <section className="w-full flex justify-center items-center gap-5 relative mt-5">
        {error && (
          <h1 className="absolute right-[34rem] -top-14 bg-alert/45 px-6 py-2 text-alert  rounded-xl font-bold text-xl">
            {error}
          </h1>
        )}
        <button
          onClick={() => {
            cartItems.length > 0
              ? dispach(dialogActions.hadleOpenDialog('cartConfirmation'))
              : setError('قم باختيار صنف على الأقل!')
          }}
          className="bg-mainBlue min-w-32 py-2 text-wrap px-6 text-white font-bold"
        >
          تأكيد{' '}
        </button>
        <button
          className="bg-alert min-w-32 py-2 px-6 text-white font-bold"
          onClick={() => navigate(`/department?id=${exportSearchParams()}`)}
        >
          إلغاء
        </button>
      </section>
    </div>
  )
}

export default AddNewMenu
