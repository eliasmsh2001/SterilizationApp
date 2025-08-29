import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../util/slicers/cartSlicer'

const NewMenuFormMainData = () => {
  const cartData = useSelector((state) => state.cart.cartData)
  const dispach = useDispatch()
  return (
    <section className="flex  flex-row-reverse gap-4 px-72">
      <div className="flex flex-col w-44 ">
        <label className="text-xs font-bold text-mainText text-end" htmlFor="date">
          التاريخ
        </label>
        <input
          value={cartData.date}
          dir="rtl"
          name="date"
          type="date"
          className="border-2 border-stone-400 text-sm font-bold h-8 text-mainText outline-0 focus:border-mainBlue rounded-md"
          onChange={(event) =>
            dispach(cartActions.handleEditCartData({ date: event.target.value }))
          }
        />
      </div>
      <div className="flex flex-col w-44 ">
        <label className="text-xs font-bold text-mainText text-end" htmlFor="date">
          ساعة الدخول الى الجهاز
        </label>
        <input
          value={cartData.machineEnteringTime}
          dir="rtl"
          name="machineEnteringTime"
          placeholder="اكتب..."
          type="time"
          className="border-2 border-stone-400 text-sm font-bold h-8 text-mainText outline-0 focus:border-mainBlue rounded-md"
          onChange={(event) =>
            dispach(cartActions.handleEditCartData({ machineEnteringTime: event.target.value }))
          }
        />
      </div>
      <div className="flex flex-col w-44 ">
        <label className="text-xs font-bold text-mainText text-end" htmlFor="date">
          ساعة الخروج من الجهاز
        </label>
        <input
          value={cartData.machineLeavingTime}
          placeholder="اكتب..."
          dir="rtl"
          name="machineLeavingTime"
          type="time"
          className="border-2 border-stone-400 text-sm font-bold h-8 text-mainText outline-0 focus:border-mainBlue rounded-md"
          onChange={(event) =>
            dispach(cartActions.handleEditCartData({ machineLeavingTime: event.target.value }))
          }
        />
      </div>
      <div className="flex flex-col w-44 ">
        <label className="text-xs font-bold text-mainText text-end" htmlFor="date">
          حالة التعقيم
        </label>
        <input
          value={cartData.sterilazationState}
          placeholder="اكتب..."
          dir="rtl"
          name="sterilazationState"
          type="text"
          className="border-2 border-stone-400 text-sm font-bold h-8 text-mainText outline-0 focus:border-mainBlue rounded-md"
          onChange={(event) =>
            dispach(cartActions.handleEditCartData({ sterilazationState: event.target.value }))
          }
        />
      </div>
    </section>
  )
}

export default NewMenuFormMainData
